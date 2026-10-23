# Set up AI Photo Coach (no database)

The website is public. Images are sent only when the user presses **วิเคราะห์ภาพ**. The Worker forwards images to OpenAI and returns text; it does not store photos or results. The OpenAI provider may process requests under its API data policies. Browser progress and notes remain local to that browser.

## Deployment
1. In Cloudflare Dashboard, go to Workers & Pages → Create Worker.
2. Replace the Worker source with `worker/portrait-ai-worker.js` from this repository, and deploy.
3. Under Worker Settings → Variables and Secrets, add secret `OPENAI_API_KEY` (your own OpenAI API key). Never put it in GitHub or browser code.
4. Add plain-text variable `ALLOWED_ORIGIN` = `https://sonthep.github.io`.
5. Open Portrait Academy, press **AI Photo Coach**, and paste `https://YOUR-WORKER.workers.dev/analyze` into the API URL field. Choose a photo and press **วิเคราะห์ภาพ**.

## Security and operating cost
- The Worker does not require a database or Vercel.
- The public website and public Worker endpoint are **not authenticated**. Origin/CORS checks are not authentication and can be spoofed by non-browser clients. Anyone who knows the Worker URL may generate API costs. Before sharing broadly, add Cloudflare Turnstile, rate limiting, spend limits, or authentication. Do not assume this is cost-safe for an unrestricted public launch.
- Set OpenAI API usage budgets/alerts. Do not upload photos without permission of people depicted.
- API model `gpt-4.1-mini` may be changed based on your OpenAI account access.
- Worker only accepts base64 JPG, PNG, or WEBP, with approximate 5MB file limit enforced in the browser. Cloudflare Worker request limits and provider limits also apply.

## GitHub Pages
Enable Pages from the `main` branch root in repository Settings → Pages. The expected URL is https://sonthep.github.io/portrait-academy/ (not verified live).
