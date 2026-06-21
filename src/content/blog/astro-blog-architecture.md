---
title: "Astro 静态博客的前端架构"
pubDate: 2026-06-20
description: "用 Astro Content Collections、Tailwind CSS 与 View Transitions 组织一个可维护的个人博客代码库。"
tags: ["Astro", "Frontend", "Architecture"]
heroImage: "/images/hero-neural-grid.png"
heroAlt: "A futuristic workspace with grids and holographic panels."
---

Astro 的优势在于它默认把页面生成为静态 HTML，同时允许你在需要交互的位置引入客户端脚本。个人博客非常适合这种模型：内容稳定、SEO 重要、交互点明确。

## 目录边界

这个模板把代码分成几层：

- `components`: 可复用 UI 单元。
- `layouts`: 页面骨架与跨页面能力。
- `pages`: 路由入口。
- `content`: Markdown/MDX 内容。
- `styles`: 全局样式和设计系统。

## Content Collections

Content Collections 的价值是把 Markdown frontmatter 变成可校验的数据结构。文章缺少标题、日期、描述或标签时，构建阶段会直接失败。

```ts
const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1),
    pubDate: z.coerce.date(),
    description: z.string().min(20),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
  }),
});
```

## 动效策略

首页使用 GSAP 做入场动画和 Bento 卡片微交互；页面间切换使用 Astro 的 View Transitions。两者职责不同：

- GSAP 负责组件级动效。
- View Transitions 负责路由级过渡。
- CSS 负责基础状态和 reduced motion 兼容。
