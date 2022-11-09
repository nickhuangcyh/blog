---
layout: single
title: "如何使 Octopress website 能被 Google 搜索到 - Google x Search x Blog"
date: 2020-09-10 23:29:22 +0800
excerpt: "Google 大大，你把我的網頁藏哪去了?"
header:
  overlay_image: /assets/images/alfons-morales-YLSwjSy7stw-unsplash.jpg
  teaser: /assets/images/alfons-morales-YLSwjSy7stw-unsplash.jpg
tags: [Octopress]
categories: [Blog]
---

## 在 Google 搜尋不到我的 Blog

當我們在建立完 Jekyll Blog 後，會發現竟然 Google 不到我們的 Blog 網站，別擔心這是因為我們尚未將網站提交加入 Google Search Console 中

## 將網站加入 Google Search Console

進入 [Google Search Console](https://search.google.com/search-console/welcome?hl=zh-CN&utm_source=about-page&pli=1)

這邊使用網址前綴方式添加，加你的 Blog domain 填入並繼續

![google_search_console]({{ site.baseurl }}/assets/images/google_search_console.png)

下載 `googlexxxxxxxxxx.html` 檔案放到 `octopress/source` 目錄下，commit 上傳到 GitHub 上，點擊驗證

```bash
rake gen_deploy
```

![google_search_console_verify]({{ site.baseurl }}/assets/images/google_search_console_verify.png)

驗證成功 👍

![google_search_console_verify]({{ site.baseurl }}/assets/images/google_search_console_verified.png)

**Note:** 如果有任何建議、問題或不同想法，歡迎留言或寄信給我，可以一起討論進步成長🙂
{: .notice--success}