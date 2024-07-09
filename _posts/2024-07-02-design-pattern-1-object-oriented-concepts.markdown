---
layout: single
title: "Design Pattern 系列 (1) - 掌握物件導向的核心概念 (Object-Oriented Concepts)"
date: 2024-07-02 23:00:00 +0800
excerpt: "深入物件導向編程的基礎，探索封裝、繼承、多態性和抽象的力量，為理解複雜設計模式奠定基礎。"
header:
  overlay_image: /assets/images/sigmund-_dJCBtdUu74-unsplash.jpg
  teaser: /assets/images/sigmund-_dJCBtdUu74-unsplash.jpg
tags: [Object-Oriented Concepts]
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

## Object-Oriented Concepts 物件導向概念

學物件導向設計一定都會知道這四大概念，這邊我就簡單描述帶過

### Encapsulation 封裝

將屬性及方法實作細節隱藏起來在類別當中，只暴露部分方法給使用者，使用者無法任意修改內部屬性及方法實作細節。

> 像是開車一樣，我們只需知道踩油門會加速，踩煞車會停止，不需要知道馬達、電瓶、發動機等等原理，這些都被專業汽車工程師封裝在引擎蓋中了。

### Inheritance 繼承

子類別可以繼承父類別的屬性及方法，達到程式碼重複使用之目的。

> 自然界中，狗與貓都是動物能呼吸行動，花草及樹木都是植物能行光合作用，這就是繼承。

### Polymorphism 多型

為不同的類別提供統一介面或抽象類別，以操作不同的實體物件。

> 以前 iPhone 6S 年代還不像現在全是台積電代工，有一部分 i6S 是給三星代工，但無論是台積電或三星代工的晶圓，都能被 i6S 使用，使用者拿到的 i6S 無論是台積電或三星代工，手機的功能都一樣都是 i6S，這就是多型。

### Abstraction 抽象

透過類型子類及抽象方式，隱藏依賴於類型或接口的實作細節。

> 我們會在手機上裝很多 App，App 就是對各種不同 Application 的一個抽象名稱，我們會說去市場買水果，可能是蘋果也可能是香蕉，水果也是一種抽象名稱，其他像是肉、蔬菜等等也是，這就是抽象。

## 總結

在理解了物件導向的核心概念後，我們將看到這些概念如何自然地引導我們進入設計原則的世界。物件導向概念為我們提供了創建模塊化、可重用和易於維護代碼的基礎，而設計原則則教我們如何有效地應用這些概念來解決更複雜的設計問題。接下來，我們將探討這些原則，並了解它們如何幫助我們實現高質量的軟體設計。

![design_pattern_design_principle_architecture]({{ site.baseurl }}/assets/images/design_pattern_design_principle_architecture.png)

> Object-Oriented Concepts -> Design Principle -> Design Pattern

## 參考

* [Head First Design Patterns](https://www.tenlong.com.tw/products/9789867794529)
* [大話設計模式](https://www.tenlong.com.tw/products/9789866761799)
* [Advanced Design Patterns: Design Principles](https://www.linkedin.com/learning/advanced-design-patterns-design-principles/what-are-design-principles?autoAdvance=true&autoSkip=false&autoplay=true&resume=true)
* [Programming Foundations: Design Patterns](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/trying-interfaces?autoAdvance=true&autoSkip=false&autoplay=true&resume=true)
* [Design Patterns: Creational](https://www.linkedin.com/learning/design-patterns-creational/think-about-how-you-create-objects?autoAdvance=true&autoSkip=false&autoplay=true&resume=true)
* [水球潘 - Design Pattern 之路](https://www.youtube.com/watch?v=yOe-uywb2qs&list=PLicQRHHL75d7EXEI9nWfUYJyrPdI79M70&pp=iAQB)

**Note:** 如果有任何建議、問題或不同想法，歡迎留言或寄信給我，可以一起討論進步成長🙂
{: .notice--success}
