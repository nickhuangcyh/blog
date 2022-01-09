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

1. 登入[Google search console](https://search.google.com/search-console/welcome)
2. 選擇`網址前置字元`
3. 提交 Blog 的 Domain name`http://[username].github.io/`
4. 下載驗證的 html 檔案
5. 放到`octopress/source`目錄下
6. 建置及部署

   ```bash
   rake gen_deploy
   ```

7. 回到 Google search console，點擊驗證，完成
