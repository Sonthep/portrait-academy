# Portrait Academy

เว็บเรียนและฝึกถ่ายภาพ Portrait สำหรับ vivo V30 ใช้งานออนไลน์ผ่าน GitHub Pages

## Features
- 12 portrait learning topics
- 12 practice challenges
- Interactive lighting diagram
- Local photo journal notes and JSON backup
- **ChatGPT photo review**: select a photo to preview locally, copy a review prompt, then open ChatGPT and **attach the photo manually** in chat. The website does not upload the photo or call an AI API.

## Website
https://sonthep.github.io/portrait-academy/

## Privacy and storage
No server database, Cloudflare Worker, or AI API. Learning progress and journal notes are stored in the browser localStorage. They are not synced across devices; use JSON backup regularly. When you attach photos in ChatGPT, ChatGPT's applicable data and privacy settings govern their processing.

## Hosting
GitHub Pages: Settings → Pages → Deploy from branch → main / root.
