# HyperMind Admin 后台部署指南

## 功能说明

- ✅ 静态 Resources 文章保持不变（3篇现有文章）
- ✅ 新增 Admin 后台用于自助发帖
- ✅ 新文章图片存储到 Cloudflare R2 (`hypermind/images/`)
- ✅ 文章数据存储到 Cloudflare KV
- ✅ 支持标题、展示图、全文、发帖日期
- ✅ 字体样式与现有文章一致

## Cloudflare Pages 部署步骤

### 1. 安装依赖

```bash
npm install
```

### 2. 配置 Cloudflare Bindings

在 Cloudflare Pages 项目设置中添加：

**KV Namespace:**
- Variable name: `POSTS_KV`
- KV namespace: `deaf6712754247d5bda1e96b62c811dd`

**R2 Bucket:**
- Variable name: `IMAGES_R2`
- R2 bucket: `hypermind`
- S3 API: `https://c7c141ce43d175e60601edc46d904553.r2.cloudflarestorage.com/hypermind`

### 3. 构建配置

在 Cloudflare Pages 项目设置中配置：

- **Build command:** `npm run build && npx @cloudflare/next-on-pages`
- **Build output directory:** `.vercel/output/static`
- **Root directory:** `/`
- **Node version:** `20.x`

**Environment variables:**
- `NODE_VERSION`: `20`
- **Compatibility flags:** 添加 `nodejs_compat`

### 4. 本地开发

```bash
# 开发模式
npm run dev

# Cloudflare Pages 本地开发（需要先构建）
npm run build
npm run pages:build
npm run pages:dev
```

### 5. 部署

提交代码到 GitHub，Cloudflare Pages 会自动部署。

或者手动部署：

```bash
npm run pages:deploy
```

## 使用说明

### 访问 Admin 后台

访问 `https://hypermindai.tech/admin` 进入后台管理页面。

### 发布新文章

1. 点击 "+ 新建文章"
2. 填写文章标题
3. 上传封面图（会自动保存到 R2）
4. 填写摘要（可选，不填则自动从正文截取）
5. 填写全文（支持 HTML 格式）
6. 选择发布时间
7. 点击"发布文章"

### 管理文章

- 查看：点击"查看"按钮在新标签页打开文章
- 删除：点击"删除"按钮删除文章

## 技术架构

- **框架:** Next.js 14
- **部署:** Cloudflare Pages
- **存储:** 
  - Cloudflare KV (文章元数据)
  - Cloudflare R2 (图片文件)
- **样式:** Tailwind CSS
- **Runtime:** Edge Runtime

## 注意事项

1. 现有的 3 篇静态文章不会受到影响
2. 新文章的图片会存储在 R2 的 `hypermind/images/` 路径下
3. 文章按发布时间从新到旧排序
4. 支持预定发布（选择未来的时间）
5. 字体样式会自动与现有文章保持一致

