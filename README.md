# Microsite BCG 2027 · beon. worldwide

Static site — no build step.

## Publish on GitHub Pages
1. Upload the contents of this folder to the root of the repository.
2. Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)`.
3. The site will be available at `https://<user>.github.io/<repo>/`.

## Run locally
Must be served over HTTP (not opened as `file://`):

```
npx serve .
# or
python3 -m http.server
```

## Structure
- `index.html` — microsite
- `proposals-data-v4.js` — proposal content (texts, images, moodboard videos)
- `support.js`, `liquid-pond.js`, `zen-audio-v3.js`, `image-slot.js`, `ios-frame.jsx` — runtime and effects
- `assets/` — images, video, audio, logos and the credentials PDF
