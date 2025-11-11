# Transfiguration Ministry Church — Netlify-ready React/Tailwind Site

## Local setup
1. Install Node.js 18+.
2. `npm install`
3. `npm run dev` (visit http://localhost:5173)

## Edit content
- Update contact info, events, ministries, and sermon links in `src/App.jsx`.
- Replace `src/assets/logo.jpg` with your logo (same filename).

## Deploy to Netlify
1. Create a new site on Netlify and connect your Git repo **or** drag-and-drop the `/dist` folder.
2. If using Git:
   - Push this project to GitHub.
   - On Netlify: **New site** → choose repo → Build command: `npm run build` → Publish directory: `dist`.
3. If using drag-and-drop:
   - Run `npm run build` locally. Netlify → **Deploys** → **Deploy site** → upload the `dist` folder.

`netlify.toml` is included with the correct build settings.
