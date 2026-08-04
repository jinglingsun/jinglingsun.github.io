# Jingling Sun — Personal Homepage

A restrained, data-driven academic homepage for GitHub Pages, inspired by established academic faculty websites. No build step or framework is required.

## Publish in one upload

1. Open <https://github.com/jinglingsun/jinglingsun.github.io>.
2. Choose **Add file → Upload files**.
3. Drag every file from this folder into the upload area, then commit to `main`.
4. Include `pic.jpg`; the new design uses it as the profile photo.
5. Visit <https://jinglingsun.github.io> after GitHub finishes publishing.

## Add future work

Open `data.js` in GitHub, click the pencil icon, and add one object at the top of the relevant list.

```js
{year: 2027, venue: "ICSE", title: "Paper title", authors: "Author list", pdf: "papers/paper-file.pdf"},
```

Put PDF files in the `papers` folder and point to them with the `pdf` field. Put paper awards in the `awards` list instead of inside publication entries. Use the same pattern for `awards` and `services`. Commit the edit and the live page updates automatically.

## Files

- `index.html` — page structure and content that rarely changes
- `styles.css` — responsive visual design
- `data.js` — publications, awards, and academic services
- `app.js` — filtering and rendering logic
- `.nojekyll` — tells GitHub Pages to serve the site directly
