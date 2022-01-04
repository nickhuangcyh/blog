---
layout: single
title: "如何使 Jekyll website 能被 Google 搜索到"
date: 2021-12-31 11:26:00 +0800
header:
  overlay_image: /assets/images/alfons-morales-YLSwjSy7stw-unsplash.jpg
  teaser: /assets/images/alfons-morales-YLSwjSy7stw-unsplash.jpg
tags: [Jekyll, Google]
categories: [Blog]
---

---

## 在 Google 搜尋不到我的 Blog

當我們在建立完 Jekyll Blog 後，會發現竟然 Google 不到我們的 Blog 網站，別擔心這是因為我們尚未將網站提交加入 Google Search Console 中

## 將網站加入 Google Search Console

進入 [Google Search Console](https://search.google.com/search-console/welcome?hl=zh-CN&utm_source=about-page&pli=1)

這邊使用網址前綴方式添加，加你的 Blog domain 填入並繼續

![google_search_console](/blog/assets/images/google_search_console.png)

下載 `googlexxxxxxxxxx.html` 檔案放到 Jekyll 根目錄，commit 上傳到 GitHub 上，點擊驗證

![google_search_console_verify](/blog/assets/images/google_search_console_verify.png)

驗證成功 👍

![google_search_console_verify](/blog/assets/images/google_search_console_verified.png)

## 提交 Sitemap

「Sitemap」是一種用來提供網站資訊的檔案，您可以在其中列出網頁、影片和其他檔案的資訊，並呈現這些內容彼此間的關係。Google 等搜尋引擎都會讀取網站的 Sitemap 檔案，藉此以更有效率的方式檢索網站。

> [瞭解 Sitemap](https://developers.google.com/search/docs/advanced/sitemaps/overview?hl=zh-tw)

打開 `Gemfile` 在 `group :jekyll_plugins` 中加入 `jekyll-sitemap`

```bash
group :jekyll_plugins do
  gem "jekyll-sitemap"
end
```

打開 `_config.yml` 在 `plugins` 加入 `jekyll-sitemap`

```bash
plugins:
  - jekyll-sitemap
```

執行 bundle install 安裝 jekyll-sitemap 並在 local 測試一下，在 `_site/` 資料夾中會出現 `sitemap.xml` 文件，代表 jekyll-sitemap 有順利產生 sitemap

```bash
bundle install
bundle exec jekyll serve
```

將 code commit 推上 GitHub，回到 Google Search Console 提交 sitemap

![google_search_console](/blog/assets/images/google_search_console_sitemap.png)

完成，等待下次 Google Search Engine 下更新檢索就能搜尋到我們 Blog 的內容囉! 🙌
