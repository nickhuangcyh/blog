---
layout: single
title: "使用 Jekyll + minimal-mistakes 在 Github pages 上架設自己的部落格"
date: 2021-12-29 15:45:03 +0800
header:
  overlay_image: /assets/images/alfons-morales-YLSwjSy7stw-unsplash.jpg
  teaser: /assets/images/alfons-morales-YLSwjSy7stw-unsplash.jpg
tags: [Jekyll, Minimal-Mistakes, Theme]
categories: [Blog]
---

---

## 為什麼寫 Blog 文章

工作上受到了很多教學網站及 Blog 文章非常多的幫助，因此想架設一個自己的 Blog，將工作及生活學到的技術知識記錄下來，幫助自己複習，也希望能幫助到有需要的人。

## 為什麼選用 Jekyll + minimal-mistakes

選用 Jekyll 的原因

1. 可用 Markdown 語法寫文章，Jekyll 會將 markdown 轉成 html 檔案
2. 有非常豐富的主題
3. 可客製化

選用 Minimal-mistakes 主題的原因

1. 較多人使用，Github 上 star 有 9k
2. 支援 Dark skin
3. 可以放大圖，跟 Medium 類似

其實原本我是用 Octopress ，後來因為 Octopress 已不再維護，且主題沒有 Jekyll 來得豐富，最後決定使用 Jekyll 重新架一個 Blog

> [Octopress](http://octopress.org/)

廢話不多說，現在讓我們一起用 Jekyll 在 Github pages 上架設一個專屬 Blog 吧!

## 為什麼選 GitHub Pages

因為`免費`不用花錢租一台機器，也不需買 domain 跟 SSL，GitHub Pages 通通幫你搞定，當然之後要換自己買的 domain 跟 SSL 也是做得到

## 事前準備

### 申請 [Github](https://github.com) 帳號

### 安裝 [Git](https://git-scm.com)

> 做版本控管

```bash
brew install git
git --version       #檢查版本
```

### 安裝 [rbenv](<[https://](https://github.com/rbenv/rbenv)>)

> 管理 ruby 版本

```bash
brew install rbenv
rbenv init
# 依照你使用的 Shell，如果是 bash 請替換為 ~/.bashrc
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(rbenv init -)"' >> ~/.zshrc
rbenv -v        #檢查版本
```

### 安裝 [ruby](https://www.ruby-lang.org/)

```bash
rbenv install 3.0.0
rbenv global 3.0.0
rbenv rehash        # Rehash rbenv shims (run this after installing executables)
```

用 `rbenv -v` 檢查版本

### 檢查 [RubyGems](https://rubygems.org/)

> Gem 套件管理服務，讓你能立即地發佈及安裝你的 Gem 套件，裝 ruby 時會一起安裝

```bash
gem update --system
gem -v
```

### 檢查 [GCC](https://gcc.gnu.org/install/) / [Make](https://www.gnu.org/software/make/)

```bash
gcc -v
g++ -v
make -v
```

## 建立 Jekyll Blog 網站

> 這邊我是參考 GitHub 官網教學，如果英文可以的朋友可以直接參考 GitHub 的教學 [Creating a GitHub Pages site with Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll)

打開終端機，cd 到要建立 Blog 的目錄

```bash
cd PARENT-FOLDER
```

創建一個 Git repo 目錄，REPOSITORY-NAME 替換為你 GitHub repo 想取的名字 `(e.g. blog)`

```bash
git init REPOSITORY-NAME
```

cd 到 repo 目錄

```bash
cd REPOSITORY-NAME
```

決定你 GitHub Pages 網站發佈抓取 source 的方式 [Publishing sources for GitHub Pages sites](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#publishing-sources-for-github-pages-sites)

1. 用 gh-pages branch 當發佈 source
2. 用任何分支上的 /docs folder 作為發佈 source

這邊我選擇使用`1. 用 gh-pages branch 當發佈 source`

創建 gh-pages branch

```bash
git checkout --orphan gh-pages
# Creates a new branch, with no history or contents, called gh-pages and switches to the gh-pages branch
```

創建一個新的 Jekyll site

```bash
jekyll new --skip-bundle .      # --skip-bundle : jekyll 創建時先不執行 `bundle install` 安裝 gem 套件
```

打開 `Gemfile`，在 gem "jekyll" 前面加上 "#"，不安裝 jekyll
加入 `github-pages` gem

```bash
gem "github-pages", "~> GITHUB-PAGES-VERSION", group: :jekyll_plugins

```

> 請將 GITHUB-PAGES-VERSION 替換成 `github-pages` 最後支援版本，請參考 [Dependency versions](https://pages.github.com/versions/)

存檔 Gemfile，執行 `bundle install`

> 安裝 Gemfile 中的 gem 套件

```bash
bundle install
```

修改 `_config.yml`

```bash
domain: my-site.github.io       # if you want to force HTTPS, specify the domain without the http at the start, e.g. example.com
url: https://my-site.github.io  # the base hostname and protocol for your site, e.g. http://example.com
baseurl: /REPOSITORY-NAME/      # place folder name if the site is served in a subfolder
```

加入 webrick gem

```bash
bundle add webrick
```

Fix [favicon.ico not found issue](https://github.com/jekyll/jekyll/issues/7329)

```bash
touch favicon.ico
```

## 在 local 測試 Jekyll Blog 網站

打開終端機執行

```bash
bundle install
bundle exec jekyll serve
```

點擊 Server address: `http://localhost:4000` 預覽你的網站

![create_a_new_repo_on_github](/blog/assets/images/jekyll_local_test.png)

恭喜，你已經完成了你的第一個 Jekyll 網站 🎉🎉🎉🎉🎉
但我們只能在 local 欣賞，不能分享給朋友同事看，接上來我們將他推上去 GitHub，讓 GitHub Pages 幫我們建置 Blog 吧!

## 上傳 GitHub 讓 GitHub Pages 自動建置 Blog

首先要到 GitHub 網站創建一個 repository，請使用 Public 專案，名字隨便你取 `(e.g. blog)`

![create_a_new_repo_on_github](/blog/assets/images/create_a_new_repo_on_github.png)

複製 repo 的 URL 等等會用到

先回到終端機將我們的測試過的 code commit

```bash
git add .
git commit -m "[feature] Initial GitHub pages site with Jekyll"
```

將剛剛複製的 repo URL 加入 git remote URL

```bash
git remote add origin https://github.com/USER/REPOSITORY.git
```

將 code 推上 GitHub

```bash
git push -u origin BRANCH   # 因為上面是用 gh-pages 作為 source，這邊就直接將 BRANCH 換為 gh-pages 推上 GitHub 即可
```

回到 GitHub 網頁 -> Settings -> Pages 點擊上面的網址 `https://USERNAME.github.io/`

![jekyll_github_pages](/blog/assets/images/jekyll_github_pages.png)

恭喜，你已經成功將 Jekyll 網站推上 GitHub Pages，現在全世界都看得到你的 Blog 了 🎉🎉🎉🎉🎉

但我們的 Blog 目前還非常的陽春，讓我們為 Blog 套上主題美化吧!

## 加入 Minimal-mistakes 主題

> 這邊我是參考 minimal-mistakes 官網教學，如果英文可以的朋友可以直接參考 minimal-mistakes 的教學 [Quick-Start Guide](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/)

這邊 minimal-mistakes 作者提供了三種方式來安裝主題

1. Gem-based method
2. Remote theme method
3. Fork

GitHub Pages 很適合第 2 種方式，所以這邊我們選擇第二種安裝方式
打開 `Gemfile` 並加入下面的 code

```bash
source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins
gem "jekyll-include-cache", group: :jekyll_plugins
```

打開 \_config.yml 找到 `plugins` 並加入 `jekyll-include-cache` plugin

抓取及更新 bundle 的 gems 套件

```bash
bundle
```

打開 `_config.yml` 加入 `remote_theme: "mmistakes/minimal-mistakes@4.24.0"`，並移除其他 `theme:` 及 `remote_theme`

編輯 \_config.yml，這邊我是複製 [Minimal Mistakes/index.html](https://github.com/mmistakes/minimal-mistakes/blob/master/_config.yml)，並保留之前修改過的 domain, url, baseurl

- 將 index.md 內容替換成 [Minimal Mistakes/index.md](https://github.com/mmistakes/minimal-mistakes/blob/master/index.html)
- 打開`_posts/0000-00-00-welcome-to-jekyll.markdown`，將`layout: post`改成`layout: single`
- 刪除 `about.md`

好了，在測試一下結果如何

```bash
bundle install
bundle exec jekyll serve
```

![jekyll_with_minimal_mistakes_theme_local_test](/blog/assets/images/jekyll_with_minimal_mistakes_theme_local_test.png)

恭喜，你已經成功套用 `Minimal-mistakes` 主題進你的 Jekyll Blog 了 🎉🎉🎉🎉🎉

最後我們將 code commit 推上 GitHub

```bash
git add .
git commit -m "[feature] Add Minimal-mistakes theme to Jekyll"
git push origin gh-pages
```

![jekyll_with_minimal_mistakes_theme_github_pages](/blog/assets/images/jekyll_with_minimal_mistakes_theme_github_pages.png)

Done! 🎉🎉🎉🎉🎉
