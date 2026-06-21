# Mind Anchor

Chance Wang 的个人静态博客源码，基于 Astro、Tailwind CSS、MDX、GSAP 和 Astro View Transitions。

## Quick Start

```bash
npm install
npm run dev
```

本地预览默认地址是 `http://localhost:4321`。

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | 启动本地开发服务器 |
| `npm run build` | 类型检查并生成静态产物 |
| `npm run preview` | 预览 `dist/` 构建结果 |
| `npm run check` | 运行 Astro 类型检查 |

## Content

文章放在 `src/content/blog/`，frontmatter 由 `src/content/config.ts` 严格校验：

```yaml
title: "文章标题"
pubDate: 2026-06-22
description: "至少 20 个字符的文章摘要"
tags: ["Astro", "Frontend"]
heroImage: "/images/hero-neural-grid.png"
heroAlt: "图片描述"
draft: false
```

站点域名已在 `astro.config.mjs` 设置为 `https://chancezone.net`。
