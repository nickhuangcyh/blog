---
layout: single
title: "Design Pattern 系列 (6) - Abstract Factory Pattern"
date: 2022-02-22 01:00:00 +0800
excerpt: "透過將工廠抽象，使子類別能創建一系列的實體物件。"
header:
  overlay_image: /assets/images/lenny-kuhne-jHZ70nRk7Ns-unsplash.jpg
  teaser: /assets/images/lenny-kuhne-jHZ70nRk7Ns-unsplash.jpg
tags: [Abstract Factory Pattern]
categories: [Design Pattern]
---

> 您可於此 [design_pattern repo](https://github.com/nickhuangcyh/design_pattern) 下載 Design Pattern 系列程式碼。

上一篇我們利用 [工廠方法模式](% post_url 2022-02-19-design-pattern-5-factory-method-pattern %}) 讓分店可以客製化飲品使用的原料，也遵守了 **開放封閉原則** 使我們可以很輕易地添加其他分店，而不改變已經存在的程式碼。

試想一下假如飲料菜單新增的飲品越來越多，分店也越來越多，大家應該會發現到，各分店的工廠所要增加的品項判斷也會越來越多。

{% tabs data-struct %}

{% tab data-struct Swift %}
{% gist 4efb9daca505d9a30c28c8c058d75f8b %}
{% endtab %}

{% tab data-struct Kotlin %}
{% gist b04fdc28c516d947869c8e9d789cc1ca %}
{% endtab %}

{% endtabs %}

如何處理多個產品在不同分店的組合，這時就需要用到 **Abstract Factory Pattern**

## Abstract Factory Pattern

透過將工廠抽象，使子類別能創建一系列的實體物件。

抽象工廠有個重要的判斷方式，當你所要創建的產品是一整個系列產品，且不同需求要創建不同系列，這個關係能夠畫成二維關係，這時就非常適合使用抽象工廠來建立產品

如下圖

| Country / Tea | BlackTea       | GreenTea      | MilkTea                   |
| ------------- | -------------- | ------------- | ------------------------- |
| US Flavor     | Ceylon(錫蘭)   | Gyokuro(玉露) | Thai (泰奶)               |
| EU Flavor     | EarlGrey(伯爵) | Sencha(煎茶)  | Masala Chai (印度馬薩拉)) |
| JP Flavor     | Assam(阿薩姆)  | Matcha(抹茶)  | Hokkaido(北海道奶茶)      |

讓我們根據上面的茶家族修改一下 UML 及程式碼吧(這邊只是要表達二維關係的概念，僅先實作紅茶及綠茶的部分)

![design_pattern_6_abstract_factory_pattern_uml_1]({{ site.baseurl }}/assets/images/design_pattern_6_abstract_factory_pattern_uml_1.png)

{% tabs data-struct %}

{% tab data-struct Swift %}
{% gist 49cf3ff30b5ea2766cd540a1146316ae %}
{% endtab %}

{% tab data-struct Kotlin %}
{% gist 2b53e517b1132044ebec95f4057a1a54 %}
{% endtab %}

{% endtabs %}

使用抽象工廠後，分店不需要知道實際是什麼茶，只要知道跟自己地區的飲料工廠取得 紅/綠/奶茶，這邊也運用到了 Dependency Inversion Principle，工廠及產品兩者皆依賴於抽象。

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

## UML

![design_pattern_6_abstract_factory_pattern_uml_2]({{ site.baseurl }}/assets/images/design_pattern_6_abstract_factory_pattern_uml_2.png)

## Factory Method Pattern vs Abstract Factory Pattern

### Factory Method Pattern 工廠方法模式

對每一種產品提供相應的工廠去建立產品，產品擴充性高。

### Abstract Factory Pattern 抽象工廠模式

對一整個系列的產品進行抽象建立，工廠擴充性高，如加入新的系列產品，但產品擴充性低，所有的工廠都必須加入新產品。

## 總結

我們來看看工廠方法用到哪些 [Design Principle]({{ site.baseurl }}/design%20pattern/design-pattern-1-design-principle/)

- Encapsulate What Varies
- Loose Coupling
- Program to Interfaces
- Single Responsibility Principle
- Open Closed Principle
- Dependency Inversion Principle

## 參考

- [Head First Design Patterns](https://www.tenlong.com.tw/products/9789867794529)
- [大話設計模式](https://www.tenlong.com.tw/products/9789866761799)
- [Advanced Design Patterns: Design Principles](https://www.linkedin.com/learning/advanced-design-patterns-design-principles/what-are-design-principles?autoAdvance=true&autoSkip=false&autoplay=true&resume=true)
- [Programming Foundations: Design Patterns](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/trying-interfaces?autoAdvance=true&autoSkip=false&autoplay=true&resume=true)
- [Design Patterns: Creational](https://www.linkedin.com/learning/design-patterns-creational/think-about-how-you-create-objects?autoAdvance=true&autoSkip=false&autoplay=true&resume=true)
- [refactoring](https://refactoring.guru/design-patterns/factory-method)
