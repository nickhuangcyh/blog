---
layout: single
title: "Design Pattern (9) - Prototype Pattern (原型模式)"
date: 2024-07-19 23:00:00 +0800
excerpt: "深入原型模式：探索如何透過物件複製技術，有效提升軟體開發中的資源管理與設計模式的靈活性。"
header:
  overlay_image: /assets/images/design_patterns.jpg
  teaser: /assets/images/design_patterns.jpg
tags: [Builder Factory Pattern]
categories: [Design Pattern]
---

> 您可於此 [design_pattern repo](https://github.com/nickhuangcyh/design_pattern) 下載 Design Pattern 系列程式碼。

## 前言

這次的Pattern讓我想到以前做過的一個App，但當時還沒有學習到Pattern，所以沒有用 Pattern 來處理，現在發現這個功能很適合套用 prototype pattern

這是一個用來編輯音樂燈光秀的App，有興趣的讀者可以下載玩玩看🙂
* [Asante TapTap 3](https://apps.apple.com/tw/app/asante-taptap-3/id1581054107?platform=iphone)

![taptap_app_edit]({{ site.baseurl }}/assets/images/taptap_app_edit.png)

## 需求

今天收到了客人的需求，客人反應編輯完一條燈光還要編輯另外六條好浪費時間，能不能新增 Copy & Paste 的功能，加快編輯以節省時間，如下圖

![taptap_app_copy]({{ site.baseurl }}/assets/images/taptap_app_copy.png)

![taptap_app_paste]({{ site.baseurl }}/assets/images/taptap_app_paste.png)

## 物件導向分析 (OOA)

理解需求後，讓我們來快速實作物件導向分析吧!

![design_pattern_prototype_pattern_uml_1]({{ site.baseurl }}/assets/images/design_pattern_prototype_pattern_uml_1.png)

當我們需要複製 `LightShowData` 時，只需要同樣的 jsonObject 資料重新 new 一個 `LightShowData` 即可複製一份

## 察覺 Forces

## 套用 Builder Pattern ( Solution ) 得到新的 Context ( Resulting Context )

## 物件導向程式設計 (OOP)
