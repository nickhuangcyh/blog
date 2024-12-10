---
layout: single
title: "Jenkins (3) - 如何配置 Credentials 以透過 SSH 從 git 上拉取程式碼"
date: 2024-08-16 17:00:00 +0800
excerpt: "學習如何在 Jenkins 中配置憑證（Credentials），以便透過 SSH 安全地拉取程式碼。"
header:
  overlay_image: /assets/images/jenkins.jpg
  teaser: /assets/images/jenkins.jpg
tags: [Jenkins, CI/CD, DevOps, Credentials, SSH]
categories: [DevOps]
---

## 如何配置 Credentials 以透過 SSH 從 git 上拉取程式碼

在這篇文章中，我們將介紹如何在 Jenkins 中配置憑證（Credentials），以便 Jenkins 能夠透過 SSH 安全地從版本控制系統（如 GitHub 或 GitLab）拉取程式碼。

### 步驟一：生成 SSH 金鑰

首先，我們需要生成一對 SSH 金鑰。打開終端機並執行以下指令：

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

按照提示完成金鑰生成過程，並記下生成的公鑰和私鑰的路徑。

### 步驟二：將公鑰添加到版本控制系統

將生成的公鑰內容複製並添加到你的版本控制系統中。例如，在 GitHub 中，你可以按照以下步驟操作：

1. 登入 GitHub，進入「Settings」。
2. 在左側菜單中選擇「SSH and GPG keys」。
3. 點擊「New SSH key」，並將公鑰內容貼上，然後點擊「Add SSH key」。

### 步驟三：在 Jenkins 中添加憑證

1. 打開 Jenkins 管理介面：在瀏覽器中打開 http://localhost:8080，並使用管理員帳戶登入。
2. 進入憑證管理：點擊左側菜單中的「Credentials」，然後選擇「System」。
3. 創建新的 Domain：點擊「Domains」旁邊的「Add domain」，並填寫 Domain 名稱（例如 GitHub 或 GitLab），然後點擊「OK」。
4. 新增憑證：選擇剛剛創建的 Domain，然後點擊「Add Credentials」。
5. 填寫憑證資訊：
* Kind：選擇「SSH Username with private key」。
* Scope：選擇「Global」。
* ID：為這個憑證設定一個唯一的 ID（可選）。
* Description：為這個憑證添加描述，方便日後管理。
* Username：填寫你的 SSH 使用者名稱（通常是 git）。
* Private Key：選擇「Enter directly」，並將生成的私鑰內容貼上。
6. 保存憑證：點擊「OK」保存憑證。

### 步驟四：配置 Jenkins Job 使用憑證

1. 創建或編輯 Jenkins Job：進入 Jenkins 主頁，創建一個新的 Job 或編輯現有的 Job。
2. 配置版本控制系統：在「Source Code Management」部分，選擇「Git」。
3. 填寫 Repository URL：填寫你的 Git Repository 的 SSH URL，例如 git@github.com:username/repository.git。
4. 選擇憑證：在「Credentials」下拉選單中，選擇剛剛添加的 SSH 憑證。
5. 保存配置：點擊「Save」保存 Job 配置。

## 總結

通過以上步驟，我們成功地在 Jenkins 中配置了憑證，使其能夠透過 SSH 安全地拉取程式碼。這樣可以確保你的程式碼在傳輸過程中的安全性，並且簡化了 Jenkins 的自動化流程。如果你還沒有使用 Jenkins，現在就是開始的好時機！

想了解更多關於 Jenkins 的資訊，請參考 [Jenkins 官方文件](https://jenkins.io/doc/)。
