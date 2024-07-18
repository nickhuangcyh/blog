---
layout: single
title: "Design Pattern (7) - Abstract Factory Pattern (抽象工廠模式)"
date: 2024-07-08 23:00:00 +0800
excerpt: "探索如何使用抽象工廠模式創建一系列相關或依賴的物件，提升設計靈活性。"
header:
  overlay_image: /assets/images/design_patterns.jpg
  teaser: /assets/images/design_patterns.jpg
tags: [Abstract Factory Pattern]
categories: [Design Pattern]
---

> 您可於此 [design_pattern repo](https://github.com/nickhuangcyh/design_pattern) 下載 Design Pattern 系列程式碼。

## 引言：全球化的挑戰擴展

想像一下，隨著你的飲料點餐系統在全球範圍內的擴展，你面臨著如何滿足不同地區顧客特定偏好的挑戰。

## 需求：滿足全球化的味蕾

隨著業務的全球化擴展，不同地區的顧客有著不同的偏好。且我們也不能只賣紅茶及綠茶，需要為我們的菜單增加新的飲品，一邊新增菜單一邊擴展店舖。

## 物件導向分析(OOA)

![design_pattern_factory_method_pattern_uml_3]({{ site.baseurl }}/assets/images/design_pattern_factory_method_pattern_uml_3.png)

{% tabs data-struct %}

{% tab data-struct Swift %}
{% gist 4efb9daca505d9a30c28c8c058d75f8b %}
{% endtab %}

{% tab data-struct Kotlin %}
{% gist b04fdc28c516d947869c8e9d789cc1ca %}
{% endtab %}

{% endtabs %}

如何處理多個產品在不同分店的組合，這時就需要用到 **Abstract Factory Pattern**

## 察覺 Forces

當我們每增加一種飲品到菜單中，我們必須要修改所有的 Factory 中的方法，違反了 **Open Closed Principle**

## 套用 Solution

看清楚整個 Context，察覺 Forces 後，就可以套用 Abstract Factory Pattern 來解決這個問題

先來看一下 Abstract Factory Pattern 的 UML

![design_pattern_abstract_factory_pattern_uml_1]({{ site.baseurl }}/assets/images/design_pattern_abstract_factory_pattern_uml_1.png)

透過將工廠抽象，使子類別能創建一系列的實體物件。

抽象工廠有個重要的判斷方式，當你所要創建的產品是一整個系列產品，且不同需求要創建不同系列，這個關係能夠畫成二維關係，這時就非常適合使用抽象工廠來建立產品

如下圖

| Country / Tea | BlackTea       | GreenTea      | MilkTea                   |
| ------------- | -------------- | ------------- | ------------------------- |
| US Flavor     | Ceylon(錫蘭)   | Gyokuro(玉露) | Thai (泰奶)               |
| EU Flavor     | EarlGrey(伯爵) | Sencha(煎茶)  | Masala Chai (印度馬薩拉)) |
| JP Flavor     | Assam(阿薩姆)  | Matcha(抹茶)  | Hokkaido(北海道奶茶)      |

讓我們根據上面的茶家族修改一下 UML 及程式碼吧(這邊只是要表達二維關係的概念，僅先實作紅茶及綠茶的部分)

![design_pattern_abstract_factory_pattern_uml_2]({{ site.baseurl }}/assets/images/design_pattern_abstract_factory_pattern_uml_2.png)

如此我們就得到了一個全新的 Resulting Context

## 物件導向程式設計 (OOP)

再來我們就可以開始進行物件導向程式開發

{% tabs data-struct %}

{% tab data-struct Swift %}
{% gist 49cf3ff30b5ea2766cd540a1146316ae %}
{% endtab %}

{% tab data-struct Kotlin %}
{% gist 2b53e517b1132044ebec95f4057a1a54 %}
{% endtab %}

{% endtabs %}

使用抽象工廠後，分店不需要知道實際是什麼茶，只要知道跟自己地區的飲料工廠取得 紅/綠/奶茶，這邊也運用到了 Dependency Inversion Principle，工廠及產品兩者皆依賴於抽象。

## 補充說明

下面舉幾種二維關係可以使用 Abstract Factory Pattern 的例子

---

做跨平台應用時，會遇到不同平台與各種 UI 元件的組合

| OS / UI Components | Button      | Checkbox      |
| ------------------ | ----------- | ------------- |
| Linux              | LinuxButton | LinuxCheckbox |
| MacOS              | MacButton   | MacCheckbox   |
| Windows            | WinButton   | WinCheckbox   |

做 App 時，會遇到需要支持 Light/Dark Mode 與各種 UI 元件的組合

| Theme / UI Components | Button          | Checkbox          |
| --------------------- | --------------- | ----------------- |
| Light Mode            | LightModeButton | LightModeCheckbox |
| Dark Mode             | DarkModeButton  | DarkModeCheckbox  |

做 IoT 系統時，會遇到 ZWave/Zigbeee 傳輸協議與各種 Iot 裝置的組合

| Protocol / Device | Dimmer   | Hue   | Thermostat   |
| ----------------- | -------- | ----- | ------------ |
| ZWave             | ZWDimmer | ZWHue | ZWThermostat |
| Zigbee            | ZBDimmer | ZBHue | ZBThermostat |

## Factory Method Pattern vs Abstract Factory Pattern

### Factory Method Pattern 工廠方法模式

對每一種產品提供相應的工廠去建立產品，產品擴充性高。

### Abstract Factory Pattern 抽象工廠模式

對一整個系列的產品進行抽象建立，工廠擴充性高，如加入新的系列產品，但產品擴充性低，所有的工廠都必須加入新產品。

## 總結

在本文中，我們探討了工廠方法模式和抽象工廠模式的區別。工廠方法模式專注於單一產品的建立，提供高產品擴充性；而抽象工廠模式則針對一系列產品提供建立機制，提供工廠的高擴充性但產品擴充性較低。

我們來看看工廠方法用到哪些 [Design Principle]({{ site.baseurl }}/design%20pattern/design-pattern-1-design-principle/)

* Encapsulate What Varies
* Loose Coupling
* Program to Interfaces
* Single Responsibility Principle
* Open Closed Principle
* Dependency Inversion Principle

## 參考

* [Head First Design Patterns](https://www.tenlong.com.tw/products/9789867794529)
* [大話設計模式](https://www.tenlong.com.tw/products/9789866761799)
* [Advanced Design Patterns: Design Principles](https://www.linkedin.com/learning/advanced-design-patterns-design-principles/what-are-design-principles?autoAdvance=true&autoSkip=false&autoplay=true&resume=true)
* [Programming Foundations: Design Patterns](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/trying-interfaces?autoAdvance=true&autoSkip=false&autoplay=true&resume=true)
* [Design Patterns: Creational](https://www.linkedin.com/learning/design-patterns-creational/think-about-how-you-create-objects?autoAdvance=true&autoSkip=false&autoplay=true&resume=true)
* [refactoring](https://refactoring.guru/design-patterns/factory-method)

**Note:** 如果有任何建議、問題或不同想法，歡迎留言或寄信給我，可以一起討論進步成長🙂
{: .notice--success}
