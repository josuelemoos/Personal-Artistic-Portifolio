# Artistic Portfolio

Static landing page for an artistic portfolio, with a minimalist visual language, cosmic atmosphere, and maintenance through the project document.

## How To Edit

The main maintenance file is `docs/PROJECT.md`.

1. Change the JSON inside the `SITE_DATA` block.
2. Run:

```bash
npm run sync
```

3. Open `index.html` in the browser.

## Structure

- `index.html`: landing page structure.
- `styles.css`: visual identity and responsiveness.
- `scripts/app.js`: section rendering.
- `scripts/content.js`: content generated from the document.
- `scripts/sync-content.js`: synchronizes the document with the site.
- `docs/PROJECT.md`: living project baseline.
- `assets/cosmic-hero.png`: visual asset kept for future use.

## Gallery Preview

Artwork cards open a full-screen preview inside the site. The image uses `object-fit: contain`, so it fits inside the viewport without cropping. The preview can be closed with the close button, by clicking outside the image, or with `Esc`.

## Projects

Each item in `projects` accepts:

- `title`: project name.
- `status`: current status.
- `description`: summary.
- `image`: project photo or cover.
- `links`: list of access buttons, each with `label` and `href`.
- `link` and `linkLabel`: older single-link fields still supported.
