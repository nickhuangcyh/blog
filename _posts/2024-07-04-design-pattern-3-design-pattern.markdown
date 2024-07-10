---
layout: single
title: "Design Pattern (3) - Design Patterns (設計模式)"
date: 2024-07-04 23:00:00 +0800
excerpt: "深入探討設計模式的概念及其應用步驟，助你高效解決軟體問題。"
header:
  overlay_image: /assets/images/sigmund-_dJCBtdUu74-unsplash.jpg
  teaser: /assets/images/sigmund-_dJCBtdUu74-unsplash.jpg
tags: [Design Pattern]
categories: [Design Pattern]
---

這一系列文章我會透過工作上的經驗及學習理解整理後，寫成文章分享!

1. [Head First Design Patterns](https://www.tenlong.com.tw/products/9789867794529)
2. [大話設計模式](https://www.tenlong.com.tw/products/9789866761799)
3. [Advanced Design Patterns: Design Principles](https://www.linkedin.com/learning/advanced-design-patterns-design-principles/what-are-design-principles?autoAdvance=true&autoSkip=false&autoplay=true&resume=true)
4. [Programming Foundations: Design Patterns](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/trying-interfaces?autoAdvance=true&autoSkip=false&autoplay=true&resume=true)
5. [Design Patterns: Creational](https://www.linkedin.com/learning/design-patterns-creational/think-about-how-you-create-objects?autoAdvance=true&autoSkip=false&autoplay=true&resume=true)
6. [水球潘 - Design Pattern 之路](https://www.youtube.com/watch?v=yOe-uywb2qs&list=PLicQRHHL75d7EXEI9nWfUYJyrPdI79M70&pp=iAQB)

> 您可於此 [design_pattern repo](https://github.com/nickhuangcyh/design_pattern) 下載 Design Pattern 系列程式碼。

## Design Pattern 是什麼？

Design Pattern 是在軟體工程中，用於常見問題解決的一種標準化方法。它們是經過驗證的解決方案，可以用來解決設計中的特定問題。

## 設計模式的組成要素

### Context

Context是指設計模式應用的具體場景或背景。它描述了模式應用的環境和條件。

### Forces

Forces是指在設計過程中需要考慮的各種因素，包括但不限於性能需求、可擴展性、維護性等。

### Problem

Problem是指在特定Context和Forces下，開發者面臨的具體設計問題。

### Solution

Solution是指設計模式提供的解決方案，它幫助開發者解決Problem，並考慮到了Forces的影響。

## 設計模式的應用步驟

1. **物件導向程式分析（OOA）**：從高層次理解應用的需求和結構。(此步驟需要劃出UML圖)
2. **看清楚Context**：透過UML圖理解模式應用的具體場景。
3. **察覺Forces**：識別影響設計的關鍵因素。
4. **找到Problem**：明確需要解決的設計問題。
5. **套用模式**：根據Problem及Forces選擇合適的設計模式。
6. **得到新的Resulting Context**：應用模式後，獲得改進後的設計方案。(此步驟需要劃出UML圖)
7. **誤記導向程式設計 (OOP)**：透過新的Resulting Context UML圖，開始撰寫程式碼實作。

## Design Patterns Categories

Design Pattern 可以分為三種基本的類型

### Creational 創建型

創建實例化物件有關的 Patterns

* Factory Method Pattern
* Abstract Factory Pattern
* Builder Pattern
* Prototype Pattern
* Singleton Pattern

### Structural 結構型

物件之間如何組成更大結構的 Patterns

* Adapter Pattern
* Bridge Pattern
* Decorator Pattern
* Facade Pattern
* Proxy Pattern
* Flyweight Pattern
* Composite Pattern

### Behavioural 行為型

物件之間行為交互的 Patterns

* Chain of Responsibility Pattern
* Mediator Pattern
* Iterator Pattern
* State Pattern
* Observer Pattern
* Command Pattern
* Strategy Pattern
* Template Pattern
* Interpreter Pattern
* Memento Pattern
* Visitor Pattern

## 總結

在本篇文章中，我們深入探討了設計模式的核心概念，包括Context、Forces、Problem和Solution。我們也學習了如何透過一系列的步驟來應用設計模式，從物件導向程式分析（OOA）開始，到最終透過UML圖來視覺化設計方案的改進。這些步驟不僅幫助我們更清晰地理解設計模式的應用過程，也為我們提供了一個結構化的方法來解決軟體開發中遇到的設計問題。

在接下來的文章中，我們將專注於UML圖的介紹和應用。UML（統一建模語言）是一種標準的圖形語言，用於規劃和視覺化軟體系統的設計。我們將學習如何使用UML圖來表示系統的結構和行為，這將進一步加深我們對設計模式應用的理解。敬請期待！

> 下一篇：深入UML圖 - 設計模式的視覺化工具

![design_pattern_design_principle_architecture]({{ site.baseurl }}/assets/images/design_pattern_design_principle_architecture.png)

> Object-Oriented Concepts -> Design Principle -> Design Pattern

## 參考

* [Head First Design Patterns](https://www.tenlong.com.tw/products/9789867794529)
* [大話設計模式](https://www.tenlong.com.tw/products/9789866761799)
* [Advanced Design Patterns: Design Principles](https://www.linkedin.com/learning/advanced-design-patterns-design-principles/what-are-design-principles?autoAdvance=true&autoSkip=false&autoplay=true&resume=true)
* [Programming Foundations: Design Patterns](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/trying-interfaces?autoAdvance=true&autoSkip=false&autoplay=true&resume=true)
* [Design Patterns: Creational](https://www.linkedin.com/learning/design-patterns-creational/think-about-how-you-create-objects?autoAdvance=true&autoSkip=false&autoplay=true&resume=true)
* [水球潘 - Design Pattern 之路](https://www.youtube.com/watch?v=yOe-uywb2qs&list=PLicQRHHL75d7EXEI9nWfUYJyrPdI79M70&pp=iAQB)

**Note:** 如果有任何建議、問題或不同想法，歡迎留言或寄信給我，可以一起討論進步成長 🙂
{: .notice--success}
