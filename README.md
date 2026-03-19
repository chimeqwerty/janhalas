# Jan Halas — One-page resume

Minimal Scandinavian-style one-pager for resume and contact, built for **GitHub Pages**.

## Edit the content

All copy and links live in **`src/data/content.js`** — except the **Resume** section, which is loaded from a Markdown file (see below). Edit `content.js` to change:

- **Intro**: name, tagline, bio, and photo path
- **About**: title and paragraphs
- **Contact**: text and links (email, LinkedIn, GitHub, etc.)

### Resume from a Markdown file

The Experience/Resume block is driven by **`src/content/resume.md`**, which uses YAML frontmatter. Edit that file to change jobs; the site uses it at build time.

**Using a resume .md from another folder:** symlink it into the project so the build can read it:

```bash
ln -sf /path/to/your/resume.md src/content/resume.md
```

Example `content/resume.md` structure:

```yaml
---
title: Experience
jobs:
  - role: Senior Software Engineer
    company: Company A
    period: 2022 – Present
    description: Led frontend architecture...
    logo: /logos/company-a.svg
  - role: Software Engineer
    company: Company B
    period: 2019 – 2022
    description: Built and maintained...
    logo: /logos/company-b.svg
---
```

If `content/resume.md` has no valid `jobs` list, the site falls back to the resume data in `src/data/content.js`.

### Assets

- **Photo**: Put your photo in `public/` (e.g. `public/photo.jpg`) and set `intro.photo: '/photo.jpg'` in `content.js`. If you leave the path empty or remove it, the photo block is hidden.
- **Company logos**: Put logo images (SVG or PNG) in `public/logos/` and set each job’s `logo` in `src/content/resume.md` (or in `content.js` if you’re using the fallback). Logos are shown grayed out by default.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (e.g. **http://localhost:5173/** or **http://localhost:5174/**). Use this address in the browser; do not open `dist/index.html` via `file://` or the page will stay blank.

## Deploy to GitHub Pages

1. Create a GitHub repo and push this project.
2. In **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. Push to **`main`** or **`master`**. The workflow in `.github/workflows/deploy.yml` will build with Vite and publish the `dist` folder to Pages.

**Using the deploy script (alternative):**

```bash
npm run deploy
```

This builds the site and pushes `dist` to the `gh-pages` branch. The site will be at:

`https://<your-username>.github.io/portfolio_experiment_cursor/`

If your repo name is different, update `base` in `vite.config.js` and the `homepage` field in `package.json` to match.
