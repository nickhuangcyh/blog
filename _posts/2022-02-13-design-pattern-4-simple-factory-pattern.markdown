---
layout: single
title: "Design Pattern 系列 (4) - Simple Factory Pattern"
date: 2022-02-13 23:45:00 +0800
excerpt: "將會變動的創建物件程式碼與不會變動的程式碼分開吧，增加程式碼可讀性及維護性"
header:
  overlay_image: /assets/images/vindemia-winery-wGk29doZtpQ-unsplash.jpg
  teaser: /assets/images/vindemia-winery-wGk29doZtpQ-unsplash.jpg
tags: [Simple Factory Pattern]
categories: [Design Pattern]
---

> 您可於此 [design_pattern repo](https://github.com/nickhuangcyh/design_pattern) 下載 Design Pattern 系列程式碼。

今天我們想做一套飲料點餐系統，很快的我們畫出 UML 並寫出了下面的程式碼

![design_pattern_4_simple_factory_pattern_uml_1]({{ site.baseurl }}/assets/images/design_pattern_4_simple_factory_pattern_uml_1.png)

{% tabs simple-factory-pattern-1 %}

{% tab simple-factory-pattern-1 Swift %}
{% gist 524687369cea9156cfa845b0bf002996 %}
{% endtab %}

{% tab simple-factory-pattern-1 Kotlin %}
{% gist 0d007a8b715cdcb55ab7c928c619c712 %}
{% endtab %}

{% endtabs %}

隨著飲料店越來越多新飲品，我們也需要修改 order 方法，但這樣容易影響不會變動的程式碼，於是我們需要找出 **需要變動** 以及 **不需變動** 的程式碼，把它們分隔開來

需要變動的程式碼

{% tabs simple-factory-pattern-2 %}

{% tab simple-factory-pattern-2 Swift %}
{% gist 4286ac98cd3b7065abbdfb977896e5af %}
{% endtab %}

{% tab simple-factory-pattern-2 Kotlin %}
{% gist b6fc75b9612175a1f0b1b02972555fd3 %}
{% endtab %}

{% endtabs %}

不需變動的程式碼

{% tabs simple-factory-pattern-3 %}

{% tab simple-factory-pattern-3 Swift %}
{% gist d4c281f4826ebfe031f13c6b794bab94 %}
{% endtab %}

{% tab simple-factory-pattern-3 Kotlin %}
{% gist 118247f29320ce89ddcbab8e0f68557a %}
{% endtab %}

{% endtabs %}

找出後該如何做呢，這時候需要用到 **簡單工廠模式** 來將其分離

## Simple Factory Pattern 簡單工廠模式

其實就是定義一個工廠類別來專門處理創建物件的邏輯
那就讓我們修改一下上面的 UML 及程式碼吧

![design_pattern_4_simple_factory_pattern_uml_2]({{ site.baseurl }}/assets/images/design_pattern_4_simple_factory_pattern_uml_2.png)

{% tabs simple-factory-pattern-4 %}

{% tab simple-factory-pattern-4 Swift %}
{% gist ae11dfd9eb50874a151dc04b5051bb3d %}
{% endtab %}

{% tab simple-factory-pattern-4 Kotlin %}
{% gist 94ea6cf630fd9b3b92e476d5273a08cb %}
{% endtab %}

{% endtabs %}

透過簡單工廠模式，我們就將 **需要變動** 以及 **不需變動** 的程式碼成功分隔開來，當要修改菜單時，只需修改 **BeverageFactory** 即可，不會影響到其他程式碼。

> 簡單工廠其實不是設計模式，反而比較像是一種編成習慣
>
> 有些開發者的確是把這個編成習慣誤認為 **工廠模式 (Factory Pattern)**
>
> 不要因為簡單工廠不是一個 **真正的** 模式，就忽略了它的用法。
>
> -- Head First Design Pattern Ch.4 P.117

最後來看一下 **簡單工廠模式** 的 UML 圖
![design_pattern_4_simple_factory_pattern_uml_3]({{ site.baseurl }}/assets/images/design_pattern_4_simple_factory_pattern_uml_3.png)

## 總結

簡單工廠雖然不是 23 個設計模式之中的一種，但它非常簡單，且能訓練我們將變動及不會變動的程式碼分離的習慣
來看一下我們在簡單工廠用到了哪些 [Design Principle]({{ site.baseurl }}/design%20pattern/design-pattern-1-design-principle/)

- Encapsulate What Varies
- Single Responsibility Principle

下一篇正式進入 23 個 Design Pattern 的第一個 Factory Method Pattern 工廠方法模式

## 參考

- [Head First Design Patterns](https://www.tenlong.com.tw/products/9789867794529)
- [大話設計模式](https://www.tenlong.com.tw/products/9789866761799)
- [Advanced Design Patterns: Design Principles](https://www.linkedin.com/learning/advanced-design-patterns-design-principles/what-are-design-principles?autoAdvance=true&autoSkip=false&autoplay=true&resume=true)
- [Programming Foundations: Design Patterns](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/trying-interfaces?autoAdvance=true&autoSkip=false&autoplay=true&resume=true)
- [Design Patterns: Creational](https://www.linkedin.com/learning/design-patterns-creational/think-about-how-you-create-objects?autoAdvance=true&autoSkip=false&autoplay=true&resume=true)

**Note:** 如果有任何建議、問題或不同想法，歡迎留言或寄信給我，可以一起討論進步成長🙂
{: .notice--success}