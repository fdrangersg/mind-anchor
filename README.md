# Mind Anchor

A personal English blog built with Astro, Tailwind CSS, MDX, and Astro View Transitions.

## Quick Start

```bash
npm install
npm run dev
```

The local preview runs at `http://localhost:4321` by default.

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Type-check and build the static site |
| `npm run preview` | Preview the generated `dist/` site |
| `npm run check` | Run Astro type checks |

## Writing

Posts live in `src/content/blog/`. Create a `.md` or `.mdx` file with frontmatter like this:

```yaml
title: "Post title"
pubDate: 2026-06-22
description: "A short summary with at least twenty characters."
tags: ["Books", "Life"]
heroImage: "/images/post-cover.png"
heroAlt: "Cover image description"
draft: false
```

Use `draft: true` to keep a post out of the published site.

## Media

Static files live in `public/`.

```text
public/images/post-cover.png
public/videos/demo.mp4
public/files/notes.pdf
```

Reference them from posts with root-relative paths:

```md
![Cover image](/images/post-cover.png)

<video controls src="/videos/demo.mp4"></video>

[Download notes](/files/notes.pdf)
```

The production domain is configured as `https://chancezone.net`.
