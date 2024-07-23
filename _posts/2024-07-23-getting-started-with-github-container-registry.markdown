---
layout: single
title: "Getting Started with GitHub Container Registry"
date: 2024-07-23 18:00:00 +0800
excerpt: "A Guide to Using and Managing Container Images"
header:
  overlay_image: /assets/images/github_container_registry.png
  teaser: /assets/images/github_container_registry.png
tags: [Docker, Container Registry, GitHub Actions, CI/CD, DevOps Tools]
categories: [DevOps]
---

## 為什麼會寫這篇文章

隨著公司專案數量增加，每個專案的環境需求也變得更加多樣化。我們決定將原本使用Docker建置的Android Jenkins Server轉型為更靈活的架構：一個主要的Jenkins Server（Master）搭配多個Android Build Environment（Slave），後者透過Docker創建乾淨的環境。這篇文章旨在記錄此過程，不僅作為個人學習的回顧，也希望能對其他開發者提供幫助。

## 文章簡介

本文將引導初學者及希望深入了解如何將GitHub的新工具融入CI/CD流程的開發者，透過簡明的指南和實用的技巧，學習如何將容器映像推送至GitHub Container Registry。我將一步步展示如何設定GitHub Actions，自動化構建與部署過程，讓你的開發工作變得更加高效。

## 開始之前

在深入主題之前，讓我們先透過 `express` 框架，快速搭建一個運行於Node.js上的簡易應用。

### Create a `node_sample` folder

```bash
mkdir node_sample
cd node_sample
```

### Install node package `express`

```bash
npm init -y
npm install express
```

### Create an `app.js` file

```bash
vim app.js
```

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
```

### Create a `.gitignore` file

> 請至 [gitignore.io](https://gitignore.io/) 產生

### Run `app.js`

```bash
node app.js
```

在 chrome 上打開網址 `localhost:3000` 就會看到如下

![github_container_registry_sample_website]({{ site.baseurl }}/assets/images/github_container_registry_sample_website.png)

## Create a Dockerfile

```bash
vim Dockerfile
```

```dockerfile
FROM node:latest
WORKDIR /usr/src/app
COPY package*.json app.js ./
RUN npm install
EXPOSE 3000
CMD ["node", "app.js"]
```

## 上傳 Docker Image 到 Github Container Registry 

寫完 Dockerfile 後有兩種方式可以將 image 上傳到 Github Container Registry 上
1. 用 Command line 方式手動上傳
2. 用 Github Action 方式，當 repository 有 Commit 時，自動執行 Github Action 上傳

## 用 Command line 方式手動上傳

### 利用 Dockerfile 產生 image

```bash
docker build -t node_sample .
```

![github_container_registry_docker_build_image]({{ site.baseurl }}/assets/images/github_container_registry_docker_build_image.png)

### 查看 Docker images

   

```bash
docker images
```

![github_container_registry_docker_images]({{ site.baseurl }}/assets/images/github_container_registry_docker_images.png)

### 創建 image tag

```bash
docker tag node_sample:latest ghcr.io/{NAMESPACE}/node_sample:latest
```

> 記得將 `NAMESPACE` 取代成你的 Github account name

### Generate `Personal access tokens (classic)`

準備好 image 後，在我們推上 **Github Container Registry** 前，我們需要取得 `GITHUB_TOKEN` 用來登入 **Github Container Registry**

> 打開 Github 網頁 -> 右上角 Profile -> Settings -> Developer settings -> Personal access tokens -> Tokens (classic) -> Generate new token

勾選 `write:packages` , `read:packages` 和 `delete:packages` scopes，如下圖

![github_container_registry_generate_github_token]({{ site.baseurl }}/assets/images/github_container_registry_generate_github_token.png)

點擊 **Generate token**，將 token 複製起來

### 登入 **Github Container Registry**

將剛剛複製的 token 存到環境變數

```bash
export CR_PAT=YOUR_TOKEN
```

登入 Container registry service at ghcr.io

```bash
> echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
Login Succeeded
```

### 上傳 Images

```bash
docker push ghcr.io/{NAMESPACE}/node_sample:latest
```

回到 Github 網頁上點擊 Packages，就能看到上傳成功了

![github_container_registry_github_package]({{ site.baseurl }}/assets/images/github_container_registry_github_package.png)

## 用 Github Action 方式

使用 Github Action 的方式更簡單，在 `node_sample` 目錄下

### Create a `deploy-image.yml`

```bash
mkdir .github
cd .github
mkdir workflows
cd workflows
vim deploy-image.yml
```

```yaml
#
name: Create and publish a Docker image

# Configures this workflow to run every time a change is pushed to the branch called `release`.
on:
  push:
    branches: ["release"]

# Defines two custom environment variables for the workflow. These are used for the Container registry domain, and a name for the Docker image that this workflow builds.
env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

# There is a single job in this workflow. It's configured to run on the latest available version of Ubuntu.
jobs:
  build-and-push-image:
    runs-on: ubuntu-latest
    # Sets the permissions granted to the `GITHUB_TOKEN` for the actions in this job.
    permissions:
      contents: read
      packages: write
      attestations: write
      id-token: write
      #
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      # Uses the `docker/login-action` action to log in to the Container registry registry using the account and password that will publish the packages. Once published, the packages are scoped to the account defined here.
      - name: Log in to the Container registry
        uses: docker/login-action@65b78e6e13532edd9afa3aa52ac7964289d1a9c1
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
      # This step uses [docker/metadata-action](https://github.com/docker/metadata-action#about) to extract tags and labels that will be applied to the specified image. The `id` "meta" allows the output of this step to be referenced in a subsequent step. The `images` value provides the base name for the tags and labels.
      - name: Extract metadata (tags, labels) for Docker
        id: meta
        uses: docker/metadata-action@9ec57ed1fcdbf14dcef7dfbe97b2010124a938b7
        with:
          images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
      # This step uses the `docker/build-push-action` action to build the image, based on your repository's `Dockerfile`. If the build succeeds, it pushes the image to GitHub Packages.
      # It uses the `context` parameter to define the build's context as the set of files located in the specified path. For more information, see "[Usage](https://github.com/docker/build-push-action#usage)" in the README of the `docker/build-push-action` repository.
      # It uses the `tags` and `labels` parameters to tag and label the image with the output from the "meta" step.
      - name: Build and push Docker image
        id: push
        uses: docker/build-push-action@f2a1d5e99d037542a71f64918e516c093c6f3fc4
        with:
          context: .
          push: true
          tags: ${{ steps.meta.outputs.tags }}
          labels: ${{ steps.meta.outputs.labels }}

      # This step generates an artifact attestation for the image, which is an unforgeable statement about where and how it was built. It increases supply chain security for people who consume the image. For more information, see "[AUTOTITLE](/actions/security-guides/using-artifact-attestations-to-establish-provenance-for-builds)."
      - name: Generate artifact attestation
        uses: actions/attest-build-provenance@v1
        with:
          subject-name: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME}}
          subject-digest: ${{ steps.push.outputs.digest }}
          push-to-registry: true

```

### Pushing `node_sample` repository

將 node_sample 的 source code 推到你的 Github 上，如此每次只要 release branch 有 commit 就會觸發 Github Action 去自動 build image 並上傳到 **Github Container Registry**

![github_container_registry_github_package]({{ site.baseurl }}/assets/images/github_container_registry_github_package.png)

## 下載 image

* Install from the command line

```bash
docker pull ghcr.io/nickhuangcyh/node_sample:TAG
```

* Use as base image in Dockerfile:

```dockerfile
FROM ghcr.io/nickhuangcyh/node_sample:TAG
```

![github_container_registry_download_image]({{ site.baseurl }}/assets/images/github_container_registry_download_image.png)

> 您可於此 [node_sample](https://github.com/nickhuangcyh/design_pattern) 下載 `node_sample` 的程式碼。
