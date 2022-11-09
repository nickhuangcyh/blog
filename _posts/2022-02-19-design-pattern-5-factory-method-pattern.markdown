---
layout: single
title: "Design Pattern 系列 (5) - Factory Method Pattern"
date: 2022-02-19 17:20:00 +0800
excerpt: "提供一個介面用來創建物件，真正實體化的類別由子類別實作決定。"
header:
  overlay_image: /assets/images/carlos-aranda-QMjCzOGeglA-unsplash.jpg
  teaser: /assets/images/carlos-aranda-QMjCzOGeglA-unsplash.jpg
tags: [Factory Method Pattern]
categories: [Design Pattern]
---

> 您可於此 [design_pattern repo](https://github.com/nickhuangcyh/design_pattern) 下載 Design Pattern 系列程式碼。

上一篇我們利用 [簡單工廠模式](% post_url 2022-02-13-design-pattern-4-simple-factory-pattern %})成功地將 **需要變動** 以及 **不需變動** 的程式碼分離。

飲料點餐系統受到客戶的喜愛，業績非常好，於是客戶在世界各地迅速擴店，但很快的問題出現了。

因為世界各地的人有不同的偏好，分店開始反應，該地區的顧客不喜歡目前正在使用的紅茶綠茶之茶葉，希望替換該區喜愛的茶葉

例如: 美國喜歡錫蘭紅茶、歐洲喜歡伯爵紅茶

(成本考量我們不將所有紅茶種類都加入菜單，只用最符合當地口味的茶葉製作紅茶)

於是我們修改簡單工廠的程式碼，新增 USBeverageFactory 及 EUBeverageFactory 來製作符合美國及歐洲當地口味的飲品

{% tabs data-struct %}

{% tab data-struct Swift %}
{% gist 5c03101f45a1144fffbd5173d906d286 %}
{% endtab %}

{% tab data-struct Kotlin %}
{% gist 47bcb79696354e083cdc99a8d53c22cb %}
{% endtab %}

{% endtabs %}

這樣做雖然可以滿足分店從不同工廠取得該地區的飲品，但每當有新的分店加入，就必須動到 BeverageShop 的程式碼來添加新的分店工廠，違反了 **Open Closed Principle**，如何解決就要介紹今天的主角 **Factory Method Pattern**。

## Factory Method Pattern

提供一個介面用來創建物件，真正實體化的類別由子類別實作決定。
讓我們修改一下上面的 UML 及程式碼吧

![design_pattern_5_factory_method_pattern_uml_1]({{ site.baseurl }}/assets/images/design_pattern_5_factory_method_pattern_uml_1.png)

{% tabs data-struct %}

{% tab data-struct Swift %}
{% gist 2504aa439c085480b77a709e1304b141 %}
{% endtab %}

{% tab data-struct Kotlin %}
{% gist f9d13d1e1bbb7d1736c031e5e3cd2e26 %}
{% endtab %}

{% endtabs %}

透過工廠方法模式，我們透過將工廠抽象化，達到可擴充性，之後如果要拓展其他分店像是日本分店，只需新增一個 JPBeverageFactory ，就能創建能做出符合日本人口味的飲料工廠，而不需修改到其他不需變動的程式碼。

最後來看一下 **工廠方法** 的 UML 圖

![design_pattern_5_factory_method_pattern_uml_2]({{ site.baseurl }}/assets/images/design_pattern_5_factory_method_pattern_uml_2.png)

## 總結

我們來看看工廠方法用到哪些 [Design Principle]({{ site.baseurl }}/design%20pattern/design-pattern-1-design-principle/)

- Encapsulate What Varies
- Loose Coupling
- Program to Interfaces
- Single Responsibility Principle
- Open Closed Principle
- Dependency Inversion Principle

下一篇要介紹最後一個工廠模式 Abstract Factory Pattern 抽象工廠模式

## 參考

- [Head First Design Patterns](https://www.tenlong.com.tw/products/9789867794529)
- [大話設計模式](https://www.tenlong.com.tw/products/9789866761799)
- [Advanced Design Patterns: Design Principles](https://www.linkedin.com/learning/advanced-design-patterns-design-principles/what-are-design-principles?autoAdvance=true&autoSkip=false&autoplay=true&resume=true)
- [Programming Foundations: Design Patterns](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/trying-interfaces?autoAdvance=true&autoSkip=false&autoplay=true&resume=true)
- [Design Patterns: Creational](https://www.linkedin.com/learning/design-patterns-creational/think-about-how-you-create-objects?autoAdvance=true&autoSkip=false&autoplay=true&resume=true)
- [refactoring](https://refactoring.guru/design-patterns/factory-method)

**Note:** 如果有任何建議、問題或不同想法，歡迎留言或寄信給我，可以一起討論進步成長🙂
{: .notice--success}