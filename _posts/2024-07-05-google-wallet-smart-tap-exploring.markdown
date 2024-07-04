---
layout: single
title: "深入解析 Google Wallet Smart Tap：未來的支付方式"
date: 2024-07-05 19:00:00 +0800
excerpt: "探索 Google Wallet Smart Tap 的運作原理和它如何改變我們的支付習慣。本文將帶你了解其背後的技術，以及它對未來支付生態系統的影響。"
header:
  overlay_image: /assets/images/sigmund-_dJCBtdUu74-unsplash.jpg
  teaser: /assets/images/sigmund-_dJCBtdUu74-unsplash.jpg
tags: [Google Wallet, Smart Tap, NFC, Payment Systems]
categories: [Pay, Technology]
---

## 前言

最近因為工作需要，有研究 Google Wallet Smart Tap 相關技術，因此想寫一篇文章記錄，一方面能幫自己複習，另一方便也希望這篇文章能幫助到其他開發者。🙂

## 什麼是 NFC

NFC（近場通訊）是一種短距離無線通訊技術，允許兩個裝置在幾厘米的距離內進行通訊。它廣泛用於各種應用，包括支付、票務、資料交換等。

## Google Wallet Smart Tap 簡介

Smart Tap 是 Google 基於 NFC 技術開發的專有的近場通訊協議，用於在移動設備和 NFC 終端之間傳輸數據。

> 如果你們公司是實作 Terminal 端，必須獲得認證才能使用此協議，這部分我有寫信問 Google 得到如下回覆，需要提供資訊簽署協議，Google 才會提供機密文件讓你實作。
>  
> If you are a terminal provider and would like to certify your terminal for use with Google Wallet, please provide more details about your terminal, intended functionality and target country/region. The documentation needed for Smart Tap certification is locked behind an NDA.
>  
> Once I have this information, my team and I will review and if the decision is to move forward with your request, we will begin the process of onboarding, starting with an NDA.

## 事前條件

我們需要完成兩個條件才能開始設置 smart tap
1. 創建 pass class 跟 pass object(s)
2. 與支援 Smart Tap 的終端供應商建立合作關係

目前有支援 Smart Tap 的供應商如下
* Advanced Card Systems Ltd.
* Axess AG
* Castles Technology
* Contactless Technologies B. V.
* Dot Origin
* Embed International
* Equinox
* HID
* IDTech
* Infinite Peripherals
* Ingenico
* Intercard Inc.
* Janam
* On Track Innovations
* Pax
* PinvAccess
* Radius Network
* Skidata
* Socket Mobile
* SpringCard
* Techsigno SRL
* UIC Payworld Inc.
* Verifone
* XAC
* Zebra

## Identifiers

在創建 pass class 跟 pass object(s) 之前，我們需要先知道一些 Smart Tap protocol 所使用的 Identifiers
* Redemption Issuer ID (兌換發卡機構 ID)
* Collector ID
* Pass class ID

### Issuer ID (發卡機構 ID)

Issuer ID 是 Google Wallet 發卡機構唯一識別碼，可以在 [Google Pay & Wallet Console](https://pay.google.com/business/console/home?hl=zh-cn) 中找到

### Redemption Issuer ID (兌換發卡機構 ID)

Redemption Issuer ID 是一種特定的 Issuer ID，可以把 Redemption Issuer ID 當成是單一商家，Issuer 是儲存多個商家的 pass class 平台的"集合商家"

Issuer ID 可以代表商家、優惠提供方、商場(e.g. SOGO)、終端機製造商等等...，pass class & object(s) 開發出來後，會與 Redemption Issuer ID 相關聯，Issuer ID 包含了 pass class IDs 跟 object IDs

| ID        | Format                | Notes                                                                                       |
|-----------|-----------------------|---------------------------------------------------------------------------------------------|
| Class ID  | issuerId.classSuffix  | The classSuffix is a unique, developer-defined value for a specific pass class (e.g. a loyalty tier) |
| Object ID | issuerId.objectSuffix | The objectSuffix is a unique, developer-defined value for a specific pass object (such as a user ID) |

## Collector ID (收款方 ID)

## 總結

## 參考

* [Smart Tap overview](https://developers.google.com/wallet/smart-tap/introduction/overview)
* [Smart tap sample app](https://github.com/google-wallet/smart-tap-sample-app)
* [Google Pay & Wallet Console](https://pay.google.com/business/console/home)
* [Create passes on Android using the Google Wallet API](https://codelabs.developers.google.com/add-to-wallet-android#1)
* [Create passes on Web using the Google Wallet API](https://codelabs.developers.google.com/add-to-wallet-web#1)

**Note:** 如果有任何建議、問題或不同想法，歡迎留言或寄信給我，可以一起討論進步成長🙂
{: .notice--success}
