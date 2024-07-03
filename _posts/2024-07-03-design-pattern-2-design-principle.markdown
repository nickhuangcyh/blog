---
layout: single
title: "Design Pattern 系列 (1) - 掌握物件導向的核心概念 (Object-Oriented Concepts)"
date: 2024-07-02 19:00:00 +0800
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

## Design Principle

Design Principle 是用來幫助我們改善物件導向設計的建議，幫助我們設計出更好的軟體。

## SOLID 物件導向程式設計基本五大原則

### Single Responsibility Principle (SRP) 單一職責原則

物件應該僅具有一種單一功能，應只會有一個理由去改變此物件

e.g.
我們要做登入頁面功能，我們會這樣寫

{% tabs srp-1 %}

{% tab srp-1 Swift %}
{% gist f07646e50fa8d3bcac3758b214339a9c %}
{% endtab %}

{% tab srp-1 Kotlin %}
{% gist fbfdba6544f6ad8f13a578e0eb118806 %}
{% endtab %}

{% endtabs %}

依照單一職責原則，我們應該要將 API 及 DB 的功能分開，修改如下

{% tabs srp-2 %}

{% tab srp-2 Swift %}
{% gist 05d0878df1f90659159a5416f7078fea %}
{% endtab %}

{% tab srp-2 Kotlin %}
{% gist 8fed9a96831bc8cffeaace60fd474399 %}
{% endtab %}

{% endtabs %}

有些文章會說 save, delete function 也須拆開在不同 class(DeleteDBService, SaveDBService)處理, 因為 save. delete 是不同職責修改項目, 不應動到另一個 class, 但我認為這樣 Over Design 反而不好維護, 拆分職責應適當不過度

### Open Closed Principle (OCP) 開放封閉原則

對於擴充開放，對於修改封閉

e.g.
我們常常會需要檢查使用者登入的帳密等等，我們來做一個檢查器吧

{% tabs ocp-1 %}

{% tab ocp-1 Swift %}
{% gist abada6874d79516946038fab2ca7e395 %}
{% endtab %}

{% tab ocp-1 Kotlin %}
{% gist 66cfe3ac77321120241f1dd5efae8db8 %}
{% endtab %}

{% endtabs %}

但假如今天客戶想要增加 Email、Phone Number、Device Mac 等等的格式檢查，那我們必須修改到 Validator class 的程式碼，這樣會影響到其他程式碼，打破了 Open-Closed Principle，對於擴充開放，對於修改封閉，那我們可以怎麼改進，如下

{% tabs ocp-2 %}

{% tab ocp-2 Swift %}
{% gist 4781d9bdbc57915e0e38e99bdee48dc6 %}
{% endtab %}

{% tab ocp-2 Kotlin %}
{% gist 21cf84cbe4b4c0790e62c9025e37ef9c %}
{% endtab %}

{% endtabs %}

如此要新增 Email、Phone Number、Device Mac 格式檢查，我們只需要新增相對應的檢查器即可 EmailValidator、PhoneNumberValidator 及 DeviceMacValidator，既不會影響其他程式碼(對修改封閉)，也容易擴充新的檢查器(對擴充開放)

### Liskov Substitution Principle (LSP) 里氏替換原則

程式中的物件應該是可以在不改變程式正確性的前提下被它的子類所替換的

e.g. 我們需要計算正方形及長方形的面積

{% tabs lsp-1 %}

{% tab lsp-1 Swift %}
{% gist b4cc5cbc43afc9239a63e568ea7581ed %}
{% endtab %}

{% tab lsp-1 Kotlin %}
{% gist 09845484c41ce34c42edd8f096550089 %}
{% endtab %}

{% endtabs %}

上面的例子我們將正方形繼承長方形，但正方形的 getArea() 卻不符合長方形的結果，這就打破了 LSP。

- 增加程式碼的健全度，在使用不同的子類別的時候，可以大幅度的保證彼此之間的相容性。只要父類別可以使用，基本上子類別也可以使用
- 子類別如果要新增功能，獨立在父類別的功能之外，才不會在搬移到其他子類別的時候發生奇怪的問題，也可以將功能切分乾淨，區分職責

### Interface Segregation Principle (ISP) 介面隔離原則

多個特定客戶端介面要好於一個寬泛用途的介面

e.g.
今天需要設計如何讓使用者操作車子

{% tabs isp-1 %}

{% tab isp-1 Swift %}
{% gist 5be469e13f08dcd903d165f74649c9ce %}
{% endtab %}

{% tab isp-1 Kotlin %}
{% gist 68390dc1d479837df0fe70d2057d8c97 %}
{% endtab %}

{% endtabs %}

工程師可以開啟 DebugMode, 但駕駛使用者不應該可以開啟 DebugMode，因此我們來改變程式碼將 enableDebugMode() 隔離成獨立介面吧!

{% tabs isp-2 %}

{% tab isp-2 Swift %}
{% gist 0a935483e1713954181eb0b8ad4c71ca %}
{% endtab %}

{% tab isp-2 Kotlin %}
{% gist 5e8adc0ccfcde8a411a555fc40f960e9 %}
{% endtab %}

{% endtabs %}

如此就只有工程師能進入 DebugMode

### Dependency Inversion Principle (DIP) 依賴反向原則

高階模組不應該依賴於低階模組，兩者都應該依賴抽象，
抽象不應該依賴細節，細節應該依賴抽象。

e.g. 設計一個能不同房間加入不同 IoT 設備的系統，可以新增刪除房間，例如客廳有智慧音箱、溫度控制器，廚房有煙霧偵測器等...

{% tabs dip-1 %}

{% tab dip-1 Swift %}
{% gist f2ec088e47cf7d24bc89ee7ef9f82fc5 %}
{% endtab %}

{% tab dip-1 Kotlin %}
{% gist ae27a0ba9c9bac8489d15c9f032d620b %}
{% endtab %}

{% endtabs %}

如果今天 SQLite 因某些問題(速度過慢等等...)因素，導致我們必須換成 CoreData 或其他 Database 呢?
你會發現我們無法抽換，但如果依賴於抽象編寫，程式碼就會非常好抽換及測試，下面讓我們修改一下程式碼

{% tabs dip-2 %}

{% tab dip-2 Swift %}
{% gist a6483dc7bb915e331dfdc1bac3f9e4da %}
{% endtab %}

{% tab dip-2 Kotlin %}
{% gist 217e20c99e2528576d13ed36df60a0ab %}
{% endtab %}

{% endtabs %}

抽象 - interface, protocol, abstract class

- 依賴於抽象可以使我們的程式碼更加有彈性, 也更好抽換依賴物件
- 養成多寫一層抽象成能使代碼更好維護、測試
- 抽象層能使我們非常容易的製作假物件快速測試程式邏輯

## Encapsulate What Varies 封裝變化

找出程式中可能需要更動之處，把它們獨立出來，不要和那些不需要更動的程式碼混再一起。

假設今天要設計一間鬆餅店，可以訂購鬆餅

{% tabs encapsulate-what-varies-1 %}

{% tab encapsulate-what-varies-1 Swift %}

{% gist 835acb7a2496ff7b39cda8a47e665c08 %}

{% endtab %}

{% tab encapsulate-what-varies-1 Kotlin %}

{% gist 0f4b98c8be72d377a2b38aa81f5a8dbf %}

{% endtab %}

{% endtabs %}

但老闆今天想增加新口味 `ChocolateChip`，但 cook(), plate(), addButter() 這些程式並不需要修改，所以我們應該將會變化的程式碼抽出來封裝，減少對不需變動的程式碼產生影響。

{% tabs encapsulate-what-varies-2 %}

{% tab encapsulate-what-varies-2 Swift %}

{% gist 07f751fc0716f9194e1aca18b2bc88e4 %}

{% endtab %}

{% tab encapsulate-what-varies-2 Kotlin %}

{% gist 22a42676343d12b474b15c5ffe7cb063 %}

{% endtab %}

{% endtabs %}

如此我們就可以隨時添加新口味且不會影響其他不會變動的程式碼。

## Favor composition over inheritance 多用合成，少用繼承

HAS-A (composition) can be better than IS-A (inheritance)

盡量使用合成來取代繼承，並不是完全不使用繼承，而是多數情況下你應該考慮使用合成而不是繼承

假設今天要設計一間咖啡店，裡面有賣很多咖啡，我們可以這樣設計

![design_pattern_design_principle_favor_composition_over_inheritance_1]({{ site.baseurl }}/assets/images/design_pattern_design_principle_favor_composition_over_inheritance_1.png)

但如果今天客人要加 Butter 及 Milk，我們又要定義一個新的 class CoffeeWithButterAndMilk 繼承 Coffee
我們會發現，隨著調味料種類越多，咖啡的組合也會越來越多，以及牛奶價格上漲，那所有包含牛奶的 Coffee 都必須修改

如果我們用合成取代繼承呢，從牛奶咖啡是(is-A)咖啡，變成咖啡有(has-A)各種調味料

![design_pattern_design_principle_favor_composition_over_inheritance_2]({{ site.baseurl }}/assets/images/design_pattern_design_principle_favor_composition_over_inheritance_2.png)

你會發現使用合成取代繼承有下列好處

1. 可以在 Run time 替換不同的調料物件
2. 新增一種新調料只需新增一個對應的 class
3. 沒有重複的程式碼
4. 避免 class 數量爆炸性增加

> 再次強調不是完全不用繼承，而是"盡量"用合成取代繼承，像圖中例子 Mocha、Butter 及 Milk 也是有使用到繼承去繼承 Condiment

## Loose Coupling 鬆耦合

將每個組件獨立開來，使部件之間的相互影響降低

再來看一個範例，今天要做一個 Weather App，他可以取得溫度並顯示在螢幕上。

![design_pattern_design_principle_loose_coupling_1]({{ site.baseurl }}/assets/images/design_pattern_design_principle_loose_coupling_1.png)

你會發現 WeatherApp 與 LCDScreen 緊密耦合，今天如果老闆想改成在 Widget 或 LED 上來顯示，WeatherApp 的 screen 屬性及 display 方法都要修改，且不能在 Run time 任意替換。

我們改一下 UML 來將兩者之間做解耦

![design_pattern_design_principle_loose_coupling_2]({{ site.baseurl }}/assets/images/design_pattern_design_principle_loose_coupling_2.png)

這樣不管老闆想改成什麼螢幕都能夠很輕易替換，因為 WeatherApp 依賴的是介面，不再是實體，善用抽象介面解耦兩個實體物件吧!

## Program to Interfaces 基於介面編程

寫程式是針對介面而寫，而不是針對實踐方式而寫。

當你針對介面編寫，你會發現任何物件都變得非常好抽換，當你需要注入假資料測試，你可以作假物件實作此介面即可，當你在做 MVC MVP 等架構，只需要實作此介面就能輕易替換組件，當你開始已介面去思考，你會發現程式碼變得非常有彈性、且好擴充測試，Apple 甚至在 WWDC15 中提到 Swift 的 [Protocol-Oriented Programming](https://developer.apple.com/videos/play/wwdc2015/408/)，代表介面(協議)思考的重要性，所以從現在起開始從介面思考吧!

來個例子，今天我們要設計一個基本網站，有一個 WebSystem 及 DB 來存讀資料

![design_pattern_design_principle_program_to_interface_1]({{ site.baseurl }}/assets/images/design_pattern_design_principle_program_to_interface_1.png)

今天我們想在上 Production 前，將 CommercialDB 換成 TestDB
做測試，但目前 KillerWebSystem 的 db 型別為 CommercialDB 無法抽換

讓我們修改一下

![design_pattern_design_principle_program_to_interface_2]({{ site.baseurl }}/assets/images/design_pattern_design_principle_program_to_interface_2.png)

寫一個 AbstractDB 的介面或抽象類別，讓 CommercialDB 及 TestDB 都實作此介面，這樣就能很輕鬆的在測試環境替換 DB

## 總結

在本篇文章中，我們深入探討了設計原則的重要性，並透過實際的例子，如何在不同環境下靈活切換數據庫實例，展示了這些原則在實際開發中的應用。通過引入 AbstractDB 介面，我們看到了如何將具體的數據庫實現（如 CommercialDB 和 TestDB）與系統的其他部分解耦，從而提高了代碼的靈活性和可維護性。

這一過程不僅鞏固了我們對物件導向概念的理解，也為我們進一步探索設計模式鋪平了道路。設計原則是構建健壯、可擴展和靈活系統的基石，而設計模式則提供了一套解決特定設計問題的模板和最佳實踐。

隨著我們即將進入設計模式的探索，期待您能夠將這些原則與即將學習的模式結合起來，進一步提升您的軟件設計和開發能力。下一篇文章將帶您深入設計模式的世界，探索如何通過這些模式解決更加複雜的設計挑戰，敬請期待。

![design_pattern_design_principle_architecture]({{ site.baseurl }}/assets/images/design_pattern_design_principle_architecture.png)

> Object-Oriented Concepts -> Design Principle -> Design Pattern

## 參考

- [Head First Design Patterns](https://www.tenlong.com.tw/products/9789867794529)
- [大話設計模式](https://www.tenlong.com.tw/products/9789866761799)
- [Advanced Design Patterns: Design Principles](https://www.linkedin.com/learning/advanced-design-patterns-design-principles/what-are-design-principles?autoAdvance=true&autoSkip=false&autoplay=true&resume=true)
- [Programming Foundations: Design Patterns](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/trying-interfaces?autoAdvance=true&autoSkip=false&autoplay=true&resume=true)
- [Design Patterns: Creational](https://www.linkedin.com/learning/design-patterns-creational/think-about-how-you-create-objects?autoAdvance=true&autoSkip=false&autoplay=true&resume=true)
- [水球潘 - Design Pattern 之路](https://www.youtube.com/watch?v=yOe-uywb2qs&list=PLicQRHHL75d7EXEI9nWfUYJyrPdI79M70&pp=iAQB)

**Note:** 如果有任何建議、問題或不同想法，歡迎留言或寄信給我，可以一起討論進步成長 🙂
{: .notice--success}
