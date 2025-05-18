---
layout: single
title: "💡 一台電腦操作多個 GitHub 帳號：最簡單快速的 SSH 設定方法"
date: 2025-05-18 14:00:00 +0800
excerpt: "讓你的電腦同時操作多個 GitHub 帳號，適合有多個身分或工作/個人帳號的開發者使用。"
header:
  overlay_image: /assets/images/github-multi-account.jpg
  teaser: /assets/images/github-multi-account.jpg
tags: [GitHub, SSH, 多帳號, 開發者技巧, Git]
categories: [DevOps, Productivity, GitHub]
---

## 🚀 **為什麼需要多個 GitHub 帳號？**

在工作與個人開發之間，許多開發者會同時擁有兩個以上的 GitHub 帳號。為了避免權限混淆或 push 錯誤，我們可以透過 SSH config 的方式，讓同一台電腦安全切換不同帳號。

---

## 🛠 **最簡單的多帳號操作方法：使用 SSH Config 配對金鑰**

以下是最精簡、有效的操作流程（假設你已有不同帳號的 SSH 金鑰）：

### 1️⃣ 檢查目前已載入的金鑰

```bash
ssh-add -l
```

如果只看到預設金鑰（例如 id_ed25519），代表還沒載入其他帳號的 key。

```bash
256 SHA256:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx nick25932219@gmail.com(ED25519)
```

### 2️⃣ 載入第二組帳號的金鑰

```bash
ssh-add ~/.ssh/id_ed25519_company
```

再次確認：

```bash
ssh-add -l
```

你應該會看到 id_ed25519_company 被成功載入。

```bash
256 SHA256:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx nick25932219@gmail.com
256 SHA256:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx nickhuang@company.com.tw (ED25519)
```

### 3️⃣ 設定 SSH config 區分不同帳號

在 ~/.ssh/config 加入以下設定：

```bash
# GitHub account: company
Host github.com_company
  HostName github.com
  AddKeysToAgent yes
  # macOS 專用，可省略於 Linux
  UseKeychain yes
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/id_ed25519_company
```

如此一來，只要將你的 Git remote 設定為：

```bash
git@github.com_company:nickhuangCompany/repo.git
```

就會自動使用 nickhuangCompany 的帳號。

設定方式如下

```bash
git remote set-url origin git@github.com_company:nickhuangCompany/repo.git
```

## 🔍 驗證 SSH 是否成功指向正確帳號

```bash
ssh -T git@github.com_company
```

如果一切順利，會看到這樣的訊息：

```bash
Hi nickhuangCompany! You've successfully authenticated, but GitHub does not provide shell access.
```

## 📚 延伸閱讀與官方教學

若你尚未建立多組金鑰或不確定如何產生，請參考 GitHub 官方教學：

[GitHub Docs：Connecting to GitHub with SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

## ✅ 結語

無需建立新金鑰，也不必更動全域設定，只需善用 SSH config 搭配 ssh-add，你就能在同一台電腦上輕鬆操作多個 GitHub 帳號。非常適合同時擁有工作與個人帳號的開發者，立即實作試試看吧！
