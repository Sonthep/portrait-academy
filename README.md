# Portrait Academy

Mobile-first Thai Portrait Photography learning web app, initially tailored for vivo V30.

## Live website
After enabling GitHub Pages (Settings → Pages → Deploy from branch → main / root): https://sonthep.github.io/portrait-academy/

## Features
- 12-topic learning roadmap
- 12 practice challenges with local progress tracking
- Interactive lighting direction diagram
- Night portrait camera setup guide
- Photo journal notes and JSON backup

## Running
Open index.html in a browser, or serve the repository through GitHub Pages. Data is stored in browser localStorage, not synced across devices. Do not treat it as a permanent backup.

## Future architecture
Next.js, Supabase Auth, Postgres with Row Level Security, private object storage for user photos, and optional AI feedback. Add consent and deletion controls before allowing multi-user photo uploads.

## Note
This is a lightweight GitHub Pages version. The earlier standalone prototype may have additional functionality.