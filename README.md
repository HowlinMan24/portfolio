# Hristijan Mijalkov — Portfolio

Personal portfolio / CV website built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Project content

All editable content lives in `data/`:

| File | What to edit |
|------|-------------|
| `data/projects.ts` | Projects list — add/remove/recategorize repos |
| `data/experience.ts` | Work history |
| `data/skills.ts` | Skill groups and items |

Before deploying, drop your CV PDF at `public/CV_HM.pdf`.

## Deploy to Vercel (recommended)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) → Import the repo.
3. Framework preset: **Next.js** — Vercel detects it automatically.
4. Click **Deploy**. Done.

> The `output: "export"` config in `next.config.ts` means the build produces a static `out/` folder, which Vercel serves perfectly.

## Deploy to GitHub Pages (alternative)

```bash
npm run build          # generates the out/ folder
# Push the out/ folder to your gh-pages branch
npx gh-pages -d out
```

Then enable **GitHub Pages → Deploy from branch: gh-pages** in your repo settings.

> **Note:** GitHub Pages serves from a subpath (e.g. `/portfolio/`). Add `basePath: "/portfolio"` to `next.config.ts` if needed.

## Commands

```bash
npm run dev      # development server with HMR
npm run build    # production static export → out/
npm run start    # preview the production build locally (requires build first)
```
