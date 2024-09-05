---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: Tengg的
  text: 前端导航模板
  tagline: 基于 VitePress 的个人前端导航页面模板
  image:
    src: /logo.png
    alt: 茂茂物语
  actions:
    - text: LOVE
    - text: and
    - text: PEACE
features:
  - icon: 📖
    title: 前端知识点
    details: 整理前端常用知识点<small>（面试八股文）</small><br />如有异议按你的理解为主，不接受反驳
    link: './src/fe/index.md'
    linkText: 前端常用知识
  - icon: 📘
    title: 源码阅读
    details: 了解各种库的实现原理<br />学习其中的小技巧和冷知识
    link: './src/analysis/react.md'
    linkText: 源码阅读
  - icon: 💡
    title: 强健身体
    details: 一些健身和健康的心得<small>（小白）</small><br />仅仅供参考
    link: './src/exercrise/index.md'
    linkText: 强健身体
  - icon: 🧰
    title: 生财有道
    details: 带学习ing
    link: './src/money/index.md'
    linkText: 钱钱钱
  - icon: 🐞
    title: 踩坑记录
    details: 那些年我们踩过的坑<br />总有一些让你意想不到的问题
    link: './src/trash/index.md'
    linkText: 踩坑记录
  - icon: 💯
    title: 吾志所向，一往无前。
    details: '<small class="bottom-small">彩蛋</small>'
    link: './src/surprise.md'
---

<style>
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>