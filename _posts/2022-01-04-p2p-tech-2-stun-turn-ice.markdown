---
layout: single
title: "搞懂 P2P 技術 (2) - STUN x TURN x ICE"
date: 2022-01-04 15:09:00 +0800
excerpt: "STUN x TURN x ICE"
header:
  overlay_image: /assets/images/nasa-1lfI7wkGWZ4-unsplash.jpg
  teaser: /assets/images/nasa-1lfI7wkGWZ4-unsplash.jpg
tags: [iOS, Android, STUN, TURN, ICE]
categories: [P2P]
---

## 前言

上一篇介紹完中心化、去中心化、分佈式網路以及 IPv4、NAT、NAT 類型，但我們依舊還有些問題未解決

- A, B 兩端要如何知道彼此的內部網路 IP 及外部網路 IP (STUN)
- 上篇有提到 NAT 類型如果是對稱型時，會無法打通 P2P，當遇到此情形時該 (TURN)
- 有沒有一種框架整合這整個 P2P 流程 (ICE)

## STUN

STUN（Session Traversal Utilities for NAT，NAT 對談穿越應用程式）是一種網路協定，它允許位於 NAT（或多重 NAT）後的客戶端找出自己的公網位址，查出自己位於哪種類型的 NAT 之後以及 NAT 為某一個本地埠所繫結的 Internet 端埠。這些資訊被用來在兩個同時處於 NAT 路由器之後的主機之間建立 UDP 通信。該協定由 RFC 5389 定義。

> [STUN Wiki](https://zh.wikipedia.org/wiki/STUN)

![p2p_stun]({{ site.baseurl }}/assets/images/p2p_stun.png)

## TURN

TURN（全名 Traversal Using Relay NAT），是一種資料傳輸協定（data-transfer protocol）。允許在 TCP 或 UDP 的連線上跨越 NAT 或防火牆。

TURN 是一個 client-server 協定。TURN 的 NAT 穿透方法與 STUN 類似，都是通過取得應用層中的公有位址達到 NAT 穿透。但實現 TURN client 的終端必須在通訊開始前與 TURN server 進行互動，並要求 TURN server 產生"relay port"，也就是 relayed-transport-address。這時 TURN server 會建立 peer，即遠端端點（remote endpoints），開始進行中繼（relay）的動作，TURN client 利用 relay port 將資料傳送至 peer，再由 peer 轉傳到另一方的 TURN client。

當無法打通 NAT 時，就會需要用 TURN 的方式來解決 NAT 穿透

> [TURN Wiki](https://zh.wikipedia.org/wiki/TURN)

![p2p_turn]({{ site.baseurl }}/assets/images/p2p_turn.png)

## ICE

ICE（Interactive Connectivity Establishment），一種綜合性的 NAT 穿越的技術。

互動式連接建立是由 IETF 的 MMUSIC 工作組開發出來的一種 framework，可整合各種 NAT 穿透技術，如 STUN、TURN（Traversal Using Relay NAT，中繼 NAT 實現的穿透）、RSIP（Realm Specific IP，特定域 IP）等。該 framework 可以讓 SIP 的客戶端利用各種 NAT 穿透方式打穿遠程的防火牆。

> [ICE Wiki](https://zh.wikipedia.org/wiki/%E4%BA%92%E5%8B%95%E5%BC%8F%E9%80%A3%E6%8E%A5%E5%BB%BA%E7%AB%8B)

![p2p_ice]({{ site.baseurl }}/assets/images/p2p_ice.png)

## 總結

簡單來說

- STUN Server 是讓 client 端詢問自身的 Public IP，雙方交換 Public IP 來做 P2P
- TURN Server 是當 NAT 穿透失敗時(通常是 Symmetric NAT)的替代方案，透過 TURN server 做資料的轉傳，也稱為 Relay，走 TURN 時 TURN Server 傳輸流量等等就會需要額外費用
- ICE 是一種框架，結合了 STUN 及 TURN 等等協議，解決單一協議缺陷的問題，列如遇上 Symmetric NAT 但沒有實作 TURN，雙方就會無法通訊．

這篇介紹了 STUN、TURN 及 ICE，下一篇將介紹 Signaling Server, WebRTC 以及 AWS KVS for WebRTC．

## 參考資源

- [STUN](https://zh.wikipedia.org/wiki/STUN)
- [TURN](https://zh.wikipedia.org/wiki/TURN)
- [ICE](https://zh.wikipedia.org/wiki/%E4%BA%92%E5%8B%95%E5%BC%8F%E9%80%A3%E6%8E%A5%E5%BB%BA%E7%AB%8B)
- [《P2P 技术详解》系列文章](http://www.52im.net/thread-50-1-1.html)
- [flaticon](https://www.flaticon.com/)

**Note:** 如果有任何建議、問題或不同想法，歡迎留言或寄信給我，可以一起討論進步成長🙂
{: .notice--success}