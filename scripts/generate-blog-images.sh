#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'USAGE'
Usage:
  scripts/generate-blog-images.sh --prompt "<prompt>" --output <output-path> [--size 1200x630]

Environment:
  CODEX_GPT_IMAGE_CMD        Preferred Codex-provided image command, if exposed.
  GPT_IMAGE_CMD              Optional custom gpt-image invocation command.
  Command example:
    gpt-image --size "1200x630" --prompt "..." --output "..."
    # Optional placeholders in custom command: %PROMPT% %OUTPUT% %SIZE%

  OPENAI_API_KEY             Optional OpenAI API key for Images API fallback.
  OPENAI_IMAGE_MODEL         Optional OpenAI image model. Public API default: gpt-image-1.5.
  OPENAI_IMAGE_API_SIZE      Optional native API generation size. Default: 1536x1024.
  OPENAI_IMAGE_QUALITY       Optional image quality. Default: medium.
                             If Codex exposes a gpt-image 2.0 CLI, use CODEX_GPT_IMAGE_CMD/GPT_IMAGE_CMD.

  DASHSCOPE_API_KEY          Optional Aliyun DashScope API key.
  ALIYUN_BAILIAN_API_KEY     Alternative env name for key.
  ALIYUN_BAILIAN_KEY         Another alias used by some runners.
  HYPERMIND_BAILIAN_KEY      Project-level alias used in this repo.
  DASHSCOPE_REGION           Optional region: beijing|singapore (default: beijing)
  DASHSCOPE_MODEL            Optional text-to-image model (default: wanx2.1-t2i-flash)

Constants:
  Generation order: Codex/GPT image command, OpenAI Images API, then Aliyun DashScope.
USAGE
}

PROMPT=""
OUTPUT=""
SIZE="1200x630"

while [[ $# -gt 0 ]]; do
  case "$1" in
    -p|--prompt)
      PROMPT="$2"
      shift 2
      ;;
    -o|--output)
      OUTPUT="$2"
      shift 2
      ;;
    -s|--size)
      SIZE="$2"
      shift 2
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown parameter: $1"
      usage
      exit 1
      ;;
  esac
done

if [[ -z "$PROMPT" || -z "$OUTPUT" ]]; then
  echo "Missing required parameters."
  usage
  exit 1
fi

DEFAULT_OPENAI_IMAGE_MODEL="gpt-image-1.5"
DEFAULT_OPENAI_IMAGE_API_SIZE="1536x1024"
DEFAULT_BAILIAN_API_KEY=""
DEFAULT_DASHSCOPE_MODEL="wanx2.1-t2i-flash"

mkdir -p "$(dirname "$OUTPUT")"

# Normalize size separators to Alibaba's API format: 1200x630 -> 1200*630
ALIYUN_SIZE="${SIZE//x/*}"

# Prefer explicit Codex/GPT image commands first, then auto-detect gpt-image.
generate_with_gpt_image() {
  local prompt="$1"
  local out="$2"
  local size="$3"

  local image_cmd="${CODEX_GPT_IMAGE_CMD:-${GPT_IMAGE_CMD:-}}"
  if [[ -n "$image_cmd" ]]; then
    local custom_cmd="${image_cmd//%PROMPT%/$prompt}"
    custom_cmd="${custom_cmd//%OUTPUT%/$out}"
    custom_cmd="${custom_cmd//%SIZE%/$size}"
    if bash -lc "$custom_cmd" >/dev/null 2>&1; then
      return 0
    fi
  fi

  if ! command -v gpt-image >/dev/null 2>&1; then
    return 1
  fi

  # Best-effort call for environments where a standard CLI exists.
  gpt-image --prompt "$prompt" --size "$size" --output "$out" && return 0

  # Fallback CLI signature variants.
  gpt-image "$prompt" --size "$size" --output "$out" && return 0
  gpt-image "$prompt" "$out" "$size" && return 0

  return 1
}

generate_with_openai_images_api() {
  local prompt="$1"
  local out="$2"
  local size="$3"

  if [[ -z "${OPENAI_API_KEY:-}" ]]; then
    return 1
  fi

  local model="${OPENAI_IMAGE_MODEL:-$DEFAULT_OPENAI_IMAGE_MODEL}"
  local api_size="${OPENAI_IMAGE_API_SIZE:-$DEFAULT_OPENAI_IMAGE_API_SIZE}"
  local raw_out="$out"
  if [[ "$api_size" != "$size" ]]; then
    raw_out="${out%.*}.openai-raw.${out##*.}"
  fi

  python3 - "$prompt" "$raw_out" "$api_size" "$model" <<'PY'
import base64
import os
import sys

from openai import OpenAI

prompt, out, size, model = sys.argv[1:5]
client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])
result = client.images.generate(
    model=model,
    prompt=prompt,
    size=size,
    quality=os.environ.get("OPENAI_IMAGE_QUALITY", "medium"),
)
image_b64 = result.data[0].b64_json
with open(out, "wb") as f:
    f.write(base64.b64decode(image_b64))
PY

  if [[ "$raw_out" == "$out" ]]; then
    return 0
  fi

  local api_w="${api_size%x*}"
  local api_h="${api_size#*x}"
  local target_w="${size%x*}"
  local target_h="${size#*x}"
  local crop_w="$api_w"
  local crop_h="$api_h"

  if (( api_w * target_h > api_h * target_w )); then
    crop_w=$(( api_h * target_w / target_h ))
  else
    crop_h=$(( api_w * target_h / target_w ))
  fi

  local crop_out="${out%.*}.openai-crop.${out##*.}"
  sips --cropToHeightWidth "$crop_h" "$crop_w" "$raw_out" --out "$crop_out" >/dev/null
  sips --resampleHeightWidth "$target_h" "$target_w" "$crop_out" --out "$out" >/dev/null
  rm -f "$raw_out" "$crop_out"
}

generate_with_dashscope() {
  local prompt="$1"
  local out="$2"
  local size="$3"

  local key="${DASHSCOPE_API_KEY:-${ALIYUN_BAILIAN_API_KEY:-${ALIYUN_BAILIAN_KEY:-${BAILIAN_API_KEY:-${BALIAN_API_KEY:-${HYPERMIND_BAILIAN_KEY:-$DEFAULT_BAILIAN_API_KEY}}}}}}"
  if [[ -z "$key" ]]; then
    echo "Missing Aliyun DashScope API key (set DASHSCOPE_API_KEY, ALIYUN_BAILIAN_API_KEY, BAILIAN_API_KEY, BALIAN_API_KEY, or HYPERMIND_BAILIAN_KEY)"
    return 1
  fi

  local region="${DASHSCOPE_REGION:-beijing}"
  local base_url="https://dashscope.aliyuncs.com"
  if [[ "$region" == "singapore" ]]; then
    base_url="https://dashscope-intl.aliyuncs.com"
  fi

  local model="${DASHSCOPE_MODEL:-$DEFAULT_DASHSCOPE_MODEL}"
  local request_payload
  request_payload=$(python3 - "$prompt" "$size" "$model" <<'PY'
import json
import sys

prompt, size, model = sys.argv[1:4]
print(
    json.dumps(
        {
            "model": model,
            "input": {"prompt": prompt},
            "parameters": {"size": size, "n": 1, "watermark": False},
        },
        ensure_ascii=False,
    )
)
PY
)

  # 1) Create task (old protocol for text2image API)
  local create_response
  create_response=$(python3 - "$key" "$base_url" "$request_payload" <<'PY'
import json
import sys
import urllib.request
import urllib.error

key, base_url, payload = sys.argv[1:4]
url = f"{base_url}/api/v1/services/aigc/text2image/image-synthesis"
req = urllib.request.Request(
    url,
    data=payload.encode('utf-8'),
    method='POST',
    headers={
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {key}',
        'X-DashScope-Async': 'enable',
    },
)
try:
    with urllib.request.urlopen(req, timeout=120) as response:
        text = response.read().decode('utf-8')
except urllib.error.HTTPError as e:
    print(json.dumps({'__error__': True, 'status': e.code, 'body': e.read().decode('utf-8')}))
    sys.exit(1)
print(text)
PY
)

  if [[ -z "$create_response" || "${create_response}" == *"\"__error__\"*"* ]]; then
    echo "Create task failed: $create_response"
    return 1
  fi

  local task_id
  task_id=$(python3 - "$create_response" <<'PY'
import json
import sys
r = json.loads(sys.argv[1])
print((r.get('output') or {}).get('task_id', ''))
PY
)

  if [[ -z "$task_id" || "$task_id" == "None" ]]; then
    local image_url
    image_url=$(python3 - "$create_response" <<'PY'
import json
import sys
r = json.loads(sys.argv[1])
out = r.get('output') or {}
url = ''
if 'results' in out and isinstance(out['results'], list):
    for item in out['results']:
        if isinstance(item, dict) and item.get('url'):
            url = item['url']
            break
if not url and 'choices' in out and isinstance(out['choices'], list):
    for choice in out['choices']:
        msg = choice.get('message', {}) if isinstance(choice, dict) else {}
        for c in msg.get('content', []) if isinstance(msg, dict) else []:
            if isinstance(c, dict) and c.get('type') == 'image' and c.get('image'):
                url = c['image']
                break
        if url:
            break
print(url)
PY
)

    if [[ -n "$image_url" ]]; then
      curl -fsSL "$image_url" -o "$out"
      return 0
    fi

    echo "No immediate image URL and no task_id, cannot continue."
    return 1
  fi

  # 2) Poll result by task id
  local status=''
  local attempt=0
  local max_attempt=40
  while [[ $attempt -lt $max_attempt ]]; do
    sleep 6
    attempt=$((attempt + 1))
    local poll_response
    poll_response=$(python3 - "$key" "$base_url" "$task_id" <<'PY'
import json
import urllib.request
import urllib.error
import sys

key, base_url, task_id = sys.argv[1:4]
url = f"{base_url}/api/v1/tasks/{task_id}"
req = urllib.request.Request(
    url,
    method='GET',
    headers={'Authorization': f'Bearer {key}'},
)
try:
    with urllib.request.urlopen(req, timeout=120) as response:
        text = response.read().decode('utf-8')
except urllib.error.HTTPError as e:
    print(json.dumps({'__error__': True, 'status': e.code, 'body': e.read().decode('utf-8')}))
    sys.exit(1)
print(text)
PY
)

    status=$(python3 - "$poll_response" <<'PY'
import json
import sys
r = json.loads(sys.argv[1])
out = r.get('output') or {}
print((out.get('task_status') or '').upper())
PY
)

    if [[ "$status" == "SUCCEEDED" ]]; then
      local image_url
      image_url=$(python3 - "$poll_response" <<'PY'
import json
import sys
r = json.loads(sys.argv[1])
out = r.get('output') or {}
url = ''
for item in out.get('results', []) or []:
    if isinstance(item, dict) and item.get('url'):
        url = item['url']
        break
if not url:
    for choice in out.get('choices', []) or []:
        msg = choice.get('message', {}) if isinstance(choice, dict) else {}
        for c in msg.get('content', []) if isinstance(msg, dict) else []:
            if isinstance(c, dict) and c.get('type') == 'image' and c.get('image'):
                url = c['image']
                break
        if url:
            break
print(url)
PY
)
      if [[ -z "$image_url" ]]; then
        echo "Task succeeded but no image URL returned."
        return 1
      fi
      curl -fsSL "$image_url" -o "$out"
      return 0
    elif [[ "$status" == "FAILED" || "$status" == "CANCELED" ]]; then
      echo "Aliyun task failed: $poll_response"
      return 1
    fi

    # pending/running/unknown -> continue polling
  done

  echo "Aliyun task timeout after polling."
  return 1
}

if generate_with_gpt_image "$PROMPT" "$OUTPUT" "$SIZE"; then
  echo "Image generated by gpt-image: $OUTPUT"
  exit 0
fi

if generate_with_openai_images_api "$PROMPT" "$OUTPUT" "$SIZE"; then
  echo "Image generated by OpenAI Images API (${OPENAI_IMAGE_MODEL:-$DEFAULT_OPENAI_IMAGE_MODEL}): $OUTPUT"
  exit 0
fi

if generate_with_dashscope "$PROMPT" "$OUTPUT" "$ALIYUN_SIZE"; then
  echo "Image generated by Aliyun fallback: $OUTPUT"
  exit 0
fi

echo "Both GPT image and Aliyun fallback failed."
exit 1
