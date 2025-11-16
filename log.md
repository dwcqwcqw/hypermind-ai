2025-11-13T14:32:53.246676Z	Cloning repository...
2025-11-13T14:32:54.107368Z	From https://github.com/dwcqwcqw/hypermind-ai
2025-11-13T14:32:54.107833Z	 * branch            0a0f77ff0975c736d2ccac518b6c620beb454c36 -> FETCH_HEAD
2025-11-13T14:32:54.108153Z	
2025-11-13T14:32:54.174266Z	HEAD is now at 0a0f77f Convert Resources page to SSR for better SEO
2025-11-13T14:32:54.17511Z	
2025-11-13T14:32:54.249959Z	
2025-11-13T14:32:54.250692Z	Using v2 root directory strategy
2025-11-13T14:32:54.274689Z	Success: Finished cloning repository files
2025-11-13T14:32:56.220378Z	Checking for configuration in a Wrangler configuration file (BETA)
2025-11-13T14:32:56.221134Z	
2025-11-13T14:32:56.222685Z	Found wrangler.toml file. Reading build configuration...
2025-11-13T14:32:57.322693Z	A wrangler.toml file was found but it does not appear to be valid. Did you mean to use wrangler.toml to configure Pages? If so, then make sure the file is valid and contains the `pages_build_output_dir` property. Skipping file and continuing.
2025-11-13T14:32:57.387731Z	Detected the following tools from environment: npm@10.9.2, nodejs@22.16.0
2025-11-13T14:32:57.388319Z	Installing project dependencies: npm clean-install --progress=false
2025-11-13T14:32:59.725549Z	npm warn deprecated rollup-plugin-inject@3.0.2: This package has been deprecated and is no longer maintained. Please use @rollup/plugin-inject.
2025-11-13T14:32:59.90281Z	npm warn deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
2025-11-13T14:32:59.934575Z	npm warn deprecated path-match@1.2.4: This package is archived and no longer maintained. For support, visit https://github.com/expressjs/express/discussions
2025-11-13T14:33:02.016267Z	npm warn deprecated @cloudflare/next-on-pages@1.13.16: Please use the OpenNext adapter instead: https://opennext.js.org/cloudflare
2025-11-13T14:33:10.669374Z	
2025-11-13T14:33:10.669679Z	added 396 packages, and audited 397 packages in 13s
2025-11-13T14:33:10.669827Z	
2025-11-13T14:33:10.669974Z	59 packages are looking for funding
2025-11-13T14:33:10.670107Z	  run `npm fund` for details
2025-11-13T14:33:10.719107Z	
2025-11-13T14:33:10.71934Z	13 vulnerabilities (1 low, 8 moderate, 4 high)
2025-11-13T14:33:10.719592Z	
2025-11-13T14:33:10.719803Z	To address issues that do not require attention, run:
2025-11-13T14:33:10.719892Z	  npm audit fix
2025-11-13T14:33:10.720083Z	
2025-11-13T14:33:10.720232Z	To address all issues possible (including breaking changes), run:
2025-11-13T14:33:10.720405Z	  npm audit fix --force
2025-11-13T14:33:10.720504Z	
2025-11-13T14:33:10.720588Z	Some issues need review, and may require choosing
2025-11-13T14:33:10.720999Z	a different dependency.
2025-11-13T14:33:10.721167Z	
2025-11-13T14:33:10.72126Z	Run `npm audit` for details.
2025-11-13T14:33:10.750022Z	Executing user command: npm run build && npx @cloudflare/next-on-pages
2025-11-13T14:33:11.131782Z	
2025-11-13T14:33:11.132061Z	> hypermind-website@0.1.0 build
2025-11-13T14:33:11.132312Z	> next build
2025-11-13T14:33:11.132438Z	
2025-11-13T14:33:11.844795Z	⚠ No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/docs/messages/no-cache
2025-11-13T14:33:11.848883Z	Attention: Next.js now collects completely anonymous telemetry regarding usage.
2025-11-13T14:33:11.849107Z	This information is used to shape Next.js' roadmap and prioritize features.
2025-11-13T14:33:11.84924Z	You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
2025-11-13T14:33:11.849366Z	https://nextjs.org/telemetry
2025-11-13T14:33:11.849498Z	
2025-11-13T14:33:11.904885Z	   ▲ Next.js 15.5.2
2025-11-13T14:33:11.905559Z	
2025-11-13T14:33:12.027801Z	   Creating an optimized production build ...
2025-11-13T14:33:23.904728Z	
2025-11-13T14:33:23.904972Z	
2025-11-13T14:33:23.905477Z	Retrying 1/3...
2025-11-13T14:33:25.850111Z	 ✓ Compiled successfully in 10.8s
2025-11-13T14:33:25.982943Z	   Linting and checking validity of types ...
2025-11-13T14:33:28.754872Z	   Collecting page data ...
2025-11-13T14:33:29.792223Z	 ⚠ Using edge runtime on a page currently disables static generation for that page
2025-11-13T14:33:30.837757Z	   Generating static pages (0/7) ...
2025-11-13T14:33:31.616034Z	   Generating static pages (1/7) 
2025-11-13T14:33:31.617369Z	   Generating static pages (3/7) 
2025-11-13T14:33:31.617515Z	   Generating static pages (5/7) 
2025-11-13T14:33:31.617627Z	 ✓ Generating static pages (7/7)
2025-11-13T14:33:32.063398Z	   Finalizing page optimization ...
2025-11-13T14:33:32.063824Z	   Collecting build traces ...
2025-11-13T14:33:38.291015Z	
2025-11-13T14:33:38.294032Z	Route (app)                                 Size  First Load JS
2025-11-13T14:33:38.294233Z	┌ ○ /                                    6.91 kB         117 kB
2025-11-13T14:33:38.294372Z	├ ○ /_not-found                            993 B         103 kB
2025-11-13T14:33:38.294493Z	├ ○ /admin                               2.91 kB         105 kB
2025-11-13T14:33:38.294597Z	├ ƒ /api/posts                             140 B         102 kB
2025-11-13T14:33:38.294717Z	├ ƒ /api/posts/[id]                        140 B         102 kB
2025-11-13T14:33:38.294824Z	├ ƒ /api/r2/[...path]                      140 B         102 kB
2025-11-13T14:33:38.295089Z	├ ƒ /api/upload                            140 B         102 kB
2025-11-13T14:33:38.295213Z	├ ƒ /resources                            1.1 kB         111 kB
2025-11-13T14:33:38.295328Z	├ ƒ /resources/[slug]                    2.05 kB         112 kB
2025-11-13T14:33:38.295442Z	├ ○ /robots.txt                            140 B         102 kB
2025-11-13T14:33:38.295561Z	└ ƒ /sitemap.xml                           140 B         102 kB
2025-11-13T14:33:38.29569Z	+ First Load JS shared by all             102 kB
2025-11-13T14:33:38.295812Z	  ├ chunks/255-aad41205a3563def.js       45.8 kB
2025-11-13T14:33:38.295931Z	  ├ chunks/4bd1b696-c023c6e3521b1417.js  54.2 kB
2025-11-13T14:33:38.296039Z	  └ other shared chunks (total)          1.95 kB
2025-11-13T14:33:38.296138Z	
2025-11-13T14:33:38.296243Z	
2025-11-13T14:33:38.296339Z	○  (Static)   prerendered as static content
2025-11-13T14:33:38.296439Z	ƒ  (Dynamic)  server-rendered on demand
2025-11-13T14:33:38.296555Z	
2025-11-13T14:33:39.144516Z	⚡️ @cloudflare/next-on-pages CLI v.1.13.16
2025-11-13T14:33:39.312031Z	⚡️ Detected Package Manager: npm (10.9.2)
2025-11-13T14:33:39.312355Z	⚡️ Preparing project...
2025-11-13T14:33:39.315119Z	⚡️ Project is ready
2025-11-13T14:33:39.315593Z	⚡️ Building project...
2025-11-13T14:33:40.130516Z	▲  Vercel CLI 47.0.4
2025-11-13T14:33:40.134804Z	▲  > NOTE: The Vercel CLI now collects telemetry regarding usage of the CLI.
2025-11-13T14:33:40.135014Z	▲  > This information is used to shape the CLI roadmap and prioritize features.
2025-11-13T14:33:40.135153Z	▲  > You can learn more, including how to opt-out if you'd not like to participate in this program, by visiting the following URL:
2025-11-13T14:33:40.135246Z	▲  > https://vercel.com/docs/cli/about-telemetry
2025-11-13T14:33:40.240065Z	▲  WARN! Build not running on Vercel. System environment variables will not be available.
2025-11-13T14:33:40.404411Z	▲  WARNING: You should not upload the `.next` directory.
2025-11-13T14:33:40.411114Z	▲  Installing dependencies...
2025-11-13T14:33:41.2041Z	▲  up to date in 670ms
2025-11-13T14:33:41.204415Z	▲  59 packages are looking for funding
2025-11-13T14:33:41.204591Z	▲  run `npm fund` for details
2025-11-13T14:33:41.214529Z	▲  Detected Next.js version: 15.5.2
2025-11-13T14:33:41.218715Z	▲  Running "npm run build"
2025-11-13T14:33:41.398143Z	▲  > hypermind-website@0.1.0 build
2025-11-13T14:33:41.398386Z	▲  > next build
2025-11-13T14:33:42.132529Z	▲  ▲ Next.js 15.5.2
2025-11-13T14:33:42.132835Z	▲  
2025-11-13T14:33:42.252861Z	▲  Creating an optimized production build ...
2025-11-13T14:33:48.890721Z	▲  ✓ Compiled successfully in 3.7s
2025-11-13T14:33:48.895762Z	▲  Linting and checking validity of types ...
2025-11-13T14:33:51.546695Z	▲  Collecting page data ...
2025-11-13T14:33:52.575519Z	▲  ⚠ Using edge runtime on a page currently disables static generation for that page
2025-11-13T14:33:53.586095Z	▲  Generating static pages (0/7) ...
2025-11-13T14:33:54.341646Z	▲  Generating static pages (1/7)
2025-11-13T14:33:54.341933Z	▲  Generating static pages (3/7) 
2025-11-13T14:33:54.342601Z	▲    Generating static pages (5/7) 
2025-11-13T14:33:54.34278Z	▲  ✓ Generating static pages (7/7)
2025-11-13T14:33:54.798124Z	▲  Finalizing page optimization ...
2025-11-13T14:33:54.798515Z	▲  Collecting build traces ...
2025-11-13T14:34:00.617868Z	▲  
2025-11-13T14:34:00.620753Z	▲  Route (app)                                 Size  First Load JS
2025-11-13T14:34:00.620936Z	▲  ┌ ○ /                                    6.91 kB         117 kB
2025-11-13T14:34:00.621051Z	▲  ├ ○ /_not-found                            993 B         103 kB
2025-11-13T14:34:00.621163Z	▲  ├ ○ /admin                               2.91 kB         105 kB
2025-11-13T14:34:00.621771Z	▲  ├ ƒ /api/posts                             140 B         102 kB
2025-11-13T14:34:00.62209Z	▲  ├ ƒ /api/posts/[id]                        140 B         102 kB
2025-11-13T14:34:00.622177Z	▲  ├ ƒ /api/r2/[...path]                      140 B         102 kB
2025-11-13T14:34:00.622537Z	▲  ├ ƒ /api/upload                            140 B         102 kB
2025-11-13T14:34:00.622625Z	▲  ├ ƒ /resources                            1.1 kB         111 kB
2025-11-13T14:34:00.622692Z	▲  ├ ƒ /resources/[slug]                    2.05 kB         112 kB
2025-11-13T14:34:00.622819Z	▲  ├ ○ /robots.txt                            140 B         102 kB
2025-11-13T14:34:00.622927Z	▲  └ ƒ /sitemap.xml                           140 B         102 kB
2025-11-13T14:34:00.62325Z	▲  + First Load JS shared by all             102 kB
2025-11-13T14:34:00.623512Z	▲  ├ chunks/255-aad41205a3563def.js       45.8 kB
2025-11-13T14:34:00.623627Z	▲  ├ chunks/4bd1b696-c023c6e3521b1417.js  54.2 kB
2025-11-13T14:34:00.623717Z	▲  └ other shared chunks (total)          1.95 kB
2025-11-13T14:34:00.623806Z	▲  ○  (Static)   prerendered as static content
2025-11-13T14:34:00.623916Z	▲  ƒ  (Dynamic)  server-rendered on demand
2025-11-13T14:34:00.974662Z	▲  Traced Next.js server files in: 285.778ms
2025-11-13T14:34:01.064218Z	▲  Created all serverless functions in: 89.392ms
2025-11-13T14:34:01.360327Z	▲  Collected static files (public/, static/, .next/static): 7.129ms
2025-11-13T14:34:01.431177Z	▲  Build Completed in .vercel/output [21s]
2025-11-13T14:34:01.558789Z	⚡️ Completed `npx vercel build`.
2025-11-13T14:34:02.32231Z	
2025-11-13T14:34:02.322612Z	⚡️ ERROR: Failed to produce a Cloudflare Pages build from the project.
2025-11-13T14:34:02.322859Z	⚡️ 
2025-11-13T14:34:02.323014Z	⚡️ 	The following routes were not configured to run with the Edge Runtime:
2025-11-13T14:34:02.323132Z	⚡️ 	  - /resources
2025-11-13T14:34:02.323252Z	⚡️ 
2025-11-13T14:34:02.323356Z	⚡️ 	Please make sure that all your non-static routes export the following edge runtime route segment config:
2025-11-13T14:34:02.323468Z	⚡️ 	  export const runtime = 'edge';
2025-11-13T14:34:02.323564Z	⚡️ 
2025-11-13T14:34:02.323671Z	⚡️ 	You can read more about the Edge Runtime on the Next.js documentation:
2025-11-13T14:34:02.32378Z	⚡️ 	  https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes
2025-11-13T14:34:02.323884Z	
2025-11-13T14:34:02.342936Z	Failed: Error while executing user command. Exited with error code: 1
2025-11-13T14:34:02.354503Z	Failed: build command exited with code: 1
2025-11-13T14:34:03.823169Z	Failed: error occurred while running build command