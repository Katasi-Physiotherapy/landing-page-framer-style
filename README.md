# Katasi Physiotherapy Website

A modern, SEO-optimised landing page and blog for Katasi Physiotherapy, a physiotherapy and chiropractic practice in Westlands, Nairobi. Built with Astro for fast, static site generation.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [How the Site Works](#how-the-site-works)
- [Features](#features)
- [How to Post Blogs](#how-to-post-blogs)
- [Admin Panel](#admin-panel)
- [Configuration](#configuration)
- [Deployment](#deployment)

---

## Tech Stack

- **Framework:** [Astro](https://astro.build) v5
- **Styling:** CSS with custom properties (no framework)
- **Content:** Astro Content Collections (Markdown)
- **CMS:** Decap CMS (Netlify CMS) for blog editing via the web
- **SEO:** Sitemap (`@astrojs/sitemap`), meta tags, Open Graph, Twitter Cards, JSON-LD schema

---

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
npm install
```

### Development

Start the dev server with hot reload:

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build

Generate a static site for production:

```bash
npm run build
```

Output is written to `dist/`.

### Preview

Preview the production build locally:

```bash
npm run preview
```

---

## Project Structure

```
landing-framer-style/
├── public/                 # Static assets (images, favicon, robots.txt)
│   ├── favicon.svg
│   ├── admin/             # Decap CMS admin panel
│   │   ├── index.html
│   │   └── config.yml
│   ├── favicon.png
│   ├── logo_extracted_transparent.png
│   ├── hero-og.jpg
│   ├── blog-cover-1.jpg
│   ├── blog-cover-2.jpg
│   └── robots.txt
├── src/
│   ├── components/         # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── HeroSection.astro
│   │   ├── BlogPreviewSection.astro
│   │   ├── WhatsAppButton.astro
│   │   └── ...
│   ├── content/
│   │   ├── config.ts      # Content collection schema
│   │   └── blog/          # Blog posts (Markdown)
│   ├── layouts/
│   │   └── Layout.astro   # Main layout with SEO, favicon, nav
│   ├── pages/             # Routes
│   │   ├── index.astro
│   │   ├── about/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── services/
│   │   └── privacy/
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json
```

---

## How the Site Works

### Routing

Astro uses file-based routing. Each file under `src/pages/` becomes a route:

| File | Route |
|------|-------|
| `src/pages/index.astro` | `/` |
| `src/pages/about/index.astro` | `/about/` |
| `src/pages/blog/index.astro` | `/blog/` |
| `src/pages/blog/[...slug].astro` | `/blog/[slug]/` (dynamic) |
| `src/pages/contact/index.astro` | `/contact/` |
| `src/pages/services/index.astro` | `/services/` |
| `src/pages/privacy/index.astro` | `/privacy/` |

The config uses `trailingSlash: 'always'`, so all URLs end with `/`.

### Content Collections

Blog posts live in `src/content/blog/` as Markdown files. The schema in `src/content/config.ts` defines required and optional frontmatter fields. Astro validates content at build time and exposes it via `getCollection('blog')`.

### Static Generation

The site is fully static. At build time, Astro:

1. Reads all Markdown files in `src/content/blog/`
2. Generates HTML for each page
3. Produces a sitemap at `/sitemap-index.xml`
4. Outputs everything to `dist/`

No server or database is required at runtime.

---

## Features

### Pages

- **Home** – Hero, pain points, services preview, outcomes, testimonials, about preview, approach, social feed, blog preview, location, CTA
- **About** – Practice story and team
- **Services** – Service list, process steps, FAQ, contact info
- **Blog** – Index of posts and individual post pages
- **Contact** – Contact methods and form
- **Privacy** – Privacy policy

### Blog

- Markdown-based posts with frontmatter
- Cover images, descriptions, categories, dates
- Dynamic routes for individual posts
- Blog preview on homepage shows latest 2 posts

### SEO

- Meta title and description per page
- Canonical URLs
- Open Graph (og:title, og:description, og:image, og:site_name, og:locale)
- Twitter Cards (summary_large_image)
- JSON-LD schema (Physiotherapy / LocalBusiness)
- Sitemap for search engines
- `robots.txt` pointing to sitemap

### UX & Accessibility

- Responsive layout
- Mobile navigation
- WhatsApp floating button (fixed bottom-right)
- Semantic HTML and ARIA where needed

### Social Integration

- Facebook Page embed
- Instagram embed
- TikTok creator embed
- Links to LinkedIn, Twitter

### Contact

- Phone, WhatsApp, email, address
- Opening hours
- Map placeholder (can be wired to Google Maps)

---

## How to Post Blogs

### 1. Create a new Markdown file

Add a file in `src/content/blog/` with a URL-friendly name. The filename (without `.md`) becomes the slug.

Example: `src/content/blog/my-new-post.md` → `/blog/my-new-post/`

### 2. Add frontmatter

At the top of the file, add YAML frontmatter between `---`:

```yaml
---
title: "Your Post Title"
description: "A short excerpt for cards and SEO (optional but recommended)"
date: 2024-06-15
category: "Physiotherapy"
coverImage: "/blog-cover-1.jpg"
---
```

**Required fields:**

- `title` – Post title
- `date` – Publication date (YYYY-MM-DD)

**Optional fields:**

- `description` – Used in cards, excerpts, and meta description
- `category` – e.g. "Physiotherapy", "Holistic wellness"
- `coverImage` – Path to image in `public/` (e.g. `/blog-cover-1.jpg`)

### 3. Write content

Below the frontmatter, write in Markdown:

```markdown
Your introduction paragraph here.

## Section Heading

Content with **bold** and *italic*.

- List item 1
- List item 2

[Link text](https://example.com)
```

### 4. Add cover images (optional)

Place images in `public/` and reference them in frontmatter:

```yaml
coverImage: "/my-post-cover.jpg"
```

Recommended size: 1200×630 for social sharing.

### 5. Build and deploy

Run `npm run build` and deploy the `dist/` folder. The new post will appear on `/blog/` and on the homepage blog preview.

**Or use the Admin Panel** – see [Admin Panel](#admin-panel) below to post blogs via a web interface.

---

## Admin Panel

The site includes a **Decap CMS** (formerly Netlify CMS) admin panel at `/admin/`. Use it to create and edit blog posts in the browser without touching Markdown files.

### Accessing the Admin

1. Go to **https://katasiphysiotherapy.co.ke/admin/**
2. Log in with Netlify Identity (see setup below)

### Netlify Setup (one-time)

For the admin to work on Netlify, enable these in your Netlify site:

1. **Identity**
   - Netlify Dashboard → Site → Identity → Enable Identity
   - Under "Registration preferences", choose "Invite only" (recommended) or "Open"

2. **Git Gateway**
   - Identity → Services → Git Gateway → Enable

3. **Invite yourself**
   - Identity → Invite users → Add your email
   - Check your email and set a password

4. **Branch**
   - Ensure your CMS config uses the correct branch (default: `main`). If your repo uses `master`, change `branch: main` to `branch: master` in `public/admin/config.yml`.

### Identity Widget

The Netlify Identity widget is loaded on every page (via the main layout) so invite links work. When you click an invite link, you’ll land on the site with `#invite_token=...` in the URL. The widget detects this and shows the “Set password” form. After setting your password, go to `/admin/` to log in.

If the default invite link doesn’t work, use this URL instead (replace `TOKEN` with the token from the email):

`https://katasiphysiotherapy.co.ke/admin/accept-invite.html#invite_token=TOKEN`

**Troubleshooting:** If the invite form still doesn't appear: (1) Ensure the latest code is deployed. (2) If using Cloudflare, try the Netlify subdomain directly – Cloudflare can block Identity API requests. (3) Check the browser console (F12) for errors.

### How It Works

- The admin commits changes directly to your Git repository
- Each save creates a commit and triggers a new Netlify build
- New or updated posts appear on the site after the build finishes

### Admin Fields

When creating or editing a post:

- **Title** – Post title
- **URL Slug** – URL path (e.g. `my-new-post` → `/blog/my-new-post/`)
- **Description** – Short excerpt for cards and SEO
- **Publish Date** – Publication date
- **Category** – e.g. "Physiotherapy"
- **Cover Image** – Upload or pick from media library
- **Body** – Main content (Markdown)

---

## Configuration

### Site URL

In `astro.config.mjs`:

```js
site: 'https://katasiphysiotherapy.co.ke',
```

Update this for staging or production domains.

### Contact Details

Contact info is defined in components:

- `src/components/WhatsAppButton.astro` – WhatsApp link
- `src/components/LocationContactSection.astro` – Address, phone, email, hours
- `src/pages/contact/index.astro` – Contact page
- `src/pages/services/index.astro` – Services page contact block

### Social Links

In `src/components/SocialFeedSection.astro`:

```js
const socials = {
  facebook: 'https://www.facebook.com/...',
  instagram: 'https://www.instagram.com/...',
  tiktok: 'https://www.tiktok.com/@...',
  linkedin: 'https://ke.linkedin.com/in/...',
};
```

### Admin Panel

The admin lives at `/admin/`. The Astro dev server redirects `/admin` to `/admin/index.html` for convenience.

---

## Deployment

The site is static. Deploy the `dist/` folder to any static host.

### Netlify

1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Enable **Identity** and **Git Gateway** for the admin panel (see [Admin Panel](#admin-panel))

### Other Hosts

- **Vercel:** Build command `npm run build`; output `dist`
- **GitHub Pages:** Publish the `dist` folder
- **Any static host:** Upload contents of `dist/`

Ensure the production URL matches `site` in `astro.config.mjs` for correct canonical URLs and sitemap.
