---
layout: single
title: "使用 Octopress 架設靜態 Blog - Octopress x GitHub pages x Blog"
date: 2020-09-10 23:18:16 +0800
excerpt: "原來架設 Blog 也能如此輕鬆簡單"
header:
  overlay_image: /assets/images/alfons-morales-YLSwjSy7stw-unsplash.jpg
  teaser: /assets/images/alfons-morales-YLSwjSy7stw-unsplash.jpg
tags: [Octopress]
categories: [Blog]
---

## 為什麼要寫 Blog?

工作中受到了很多教學網站及博客文章(簡書, CSDN, Medium...)非常多的幫助，因此想寫部落格將自己學到的技術記錄下來，一方面讓自己複習，一方面也希望能幫助到有需要的人。

## 為什麼用 Octopress?

其實有很多現成免費的部落格平台像是 Medium, Blogger 等...，但最後我還是決定用 Octopress 來建立自己的部落格，它吸引我的原因如下:

1. 使用 Git 做版本控管，託管於 Github
2. 使用 Markdown 寫文章
3. 可以學到東西
4. 免費

Git 對軟體工程師再熟悉不過了，且託管於工程師最愛充滿開源專案的 Github 平台，用 Markdown 寫文章，也能訓練自己寫 README 語法的熟練程度，又可以學到東西，因此選擇 Octopress。

## 事前準備

- 申請[Github](https://github.com)帳號
- 安裝[Git](https://git-scm.com)

```bash
brew install git
```

- 安裝[Ruby](https://www.ruby-lang.org/zh_tw/documentation/installation/)

```bash
brew install ruby
```

確認版本

```bash
ruby --version
```

## 建置 Octopress

```bash
git clone git://github.com/imathis/octopress.git octopress
cd octopress
```

安裝依賴

```bash
gem install bundler
rbenv rehash    # If you use rbenv, rehash to be able to run the bundle command
bundle install
```

安裝 Octopress 預設主題

```bash
rake install
```

## Github page

[Github page](https://pages.github.com)提供我們免費架設靜態網站，雖然有些限制(Ex: 沒有 DB, Server 配置等...)，但非常簡易就能部署，非常適合用來做個人部落格。

1. 到[Github](https://github.com)申請一個帳號
2. 建立一個 repository，命名為[username].github.io，[username]為你 Github 的用戶名，請務必要用此格式命名，不然後面會無法部署。

完成後會看到一個 ssh URL

```bash
git@github.com:username/username.github.io.git
```

，這就是你的遠端 repository 位置

## 部署到 Github page

- 設置 Github page repo 位置

```bash
rake setup_github_pages
```

此時會要你輸入 github page 的位置，還記得上面建立完成後所產生的 ssh URL，複製並輸入

```bash
git@github.com:username/username.github.io.git
```

- 產生及部署部落格

```bash
rake generate
rake deploy
```

上面指令會產生出你的部落格，並把產生的檔案複製到`_deploy/`資料匣中，並把它們加入 git 中，commit 及 push 到 master branch。

到這裡你可以先在 Browser 打開 <http://username.github.io/>，就可以看到你的部落格囉!

最後別忘記將 source commit 並 push 到遠端的 repo

```bash
git add .
git commit -m 'your message'
git push origin source
```

## 發布文章

所有的文章必須放在`source/_posts`目錄下

- 創建新文章

```bash
rake new_post["title"]
```

此時在`source/_posts`目錄下會產生一個`YYYY-MM-DD-post-title.markdown`的檔案，我們就可以打開檔案開始寫部落格了

```bash
cd source/_posts/
vim YYYY-MM-DD-post-title.markdown
```

也可用其他編輯器開啟寫文章，像是: [MacDown](https://macdown.uranusjr.com)等...

寫完文章後再執行前面提到的**_產生及部署部落格_**

```bash
rake generate
rake deploy
```

or

```bash
rake gen_deploy
```

最後再將剛所寫的文章加入 commit，並 push 到遠端的 repo

```bash
git add .
git commit -m 'your message'
git push origin source
```

![octopress_github_pages]({{ site.baseurl }}/assets/images/octopress_github_pages.png)

## 總結

Octopress 基礎建置就到這邊，未來如果有時間會再深入研究更多 Octopress 的新功能，寫成文章分享給大家!

**Note:** 如果有任何建議、問題或不同想法，歡迎留言或寄信給我，可以一起討論進步成長🙂
{: .notice--success}