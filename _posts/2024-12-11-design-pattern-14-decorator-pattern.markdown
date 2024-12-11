---
layout: single
title: "Design Pattern (14) - Decorator Pattern (裝飾者模式)"
date: 2024-12-11 23:00:00 +0800
excerpt: "深入了解裝飾者模式如何動態為物件增加功能，同時保持系統的靈活性與開放性。"
header:
  overlay_image: /assets/images/design_patterns.jpg
  teaser: /assets/images/design_patterns.jpg
tags: [Decorator Pattern]
categories: [Design Pattern]
---

> 您可於此 [design_pattern repo](https://github.com/nickhuangcyh/design_pattern) 下載 Design Pattern 系列程式碼。

## 需求

我們收到了一個需求：咖啡店的 POS 系統需要計算不同咖啡及其附加選項（如牛奶、糖漿、奶泡等）的價格。具體需求如下：

* 咖啡種類包括基本款的 Espresso 和 House Blend。
* 每種咖啡都可以加不同的附加項，例如牛奶、巧克力糖漿、奶泡。
* 系統應該支持動態組合不同的附加項，而不需要針對每種組合定義類別。

## 物件導向分析 (OOA)

理解需求後，讓我們來快速實作物件導向分析吧！

![decorator_pattern_uml_1]({{ site.baseurl }}/assets/images/design_pattern_decorator_pattern_uml_1.png)

## 察覺 Forces

在未使用設計模式的情況下，上述需求可能會遇到以下問題：

1. **類別爆炸 (Class Explosion)**：
   - 為每一種咖啡及其附加選項組合創建類別，導致類別數量迅速增長。

2. **高耦合性 (Tight Coupling)**：
   - 咖啡與附加選項緊密耦合，修改某一部分時可能影響整體。

3. **靈活性差 (Lack of Flexibility)**：
   - 系統無法動態地添加或移除附加選項，只能依賴預先定義的組合。

4. **重複代碼 (Code Duplication)**：
   - 每種組合的實作邏輯重複，導致維護困難。

## 套用 Decorator Pattern (Solution) 得到新的 Context (Resulting Context)

做完 OOA，察覺 Forces，看清楚整個 Context 後，就可以來套用 Decorator Pattern 解決這個問題。

先來看一下 Decorator Pattern 的 UML：

![decorator_pattern_uml_2]({{ site.baseurl }}/assets/images/design_pattern_decorator_pattern_uml_2.png)

* **Component (組件介面)**：定義基本的行為或功能。
* **ConcreteComponent (具體組件)**：實作基本功能的具體類別，例如基本咖啡。
* **Decorator (裝飾者介面)**：維護對 Component 的引用，並在此基礎上添加新功能。
* **ConcreteDecorator (具體裝飾者)**：實作新增的功能，例如牛奶、糖漿等附加選項。

## 物件導向程式設計 (OOP)

[Component: Beverage]

```kotlin
abstract class Beverage {
    abstract val description: String
    abstract fun cost(): Double
}
```

[ConcreteComponent: Espresso and HouseBlend]

```kotlin
class Espresso : Beverage() {
    override val description = "Espresso"
    override fun cost() = 1.99
}

class HouseBlend : Beverage() {
    override val description = "House Blend Coffee"
    override fun cost() = 0.89
}
```

[Decorator: CondimentDecorator]

```kotlin
abstract class CondimentDecorator(protected val beverage: Beverage) : Beverage() {
    override abstract val description: String
}
```

[ConcreteDecorator: Milk, Mocha, and Whip]

```kotlin
class Milk(beverage: Beverage) : CondimentDecorator(beverage) {
    override val description = "${beverage.description}, Milk"
    override fun cost() = beverage.cost() + 0.3
}

class ChocolateSyrup(beverage: Beverage) : CondimentDecorator(beverage) {
    override val description = "${beverage.description}, Chocolate Syrup"
    override fun cost() = beverage.cost() + 0.5
}

class WhippedCream(beverage: Beverage) : CondimentDecorator(beverage) {
    override val description = "${beverage.description}, Whipped Cream"
    override fun cost() = beverage.cost() + 0.4
}
```

[Client]

```kotlin
fun main() {
    // 製作一杯基本的 Espresso
    val espresso = Espresso()
    println("${espresso.description}: $${espresso.cost()}")

    // 製作一杯加了 Milk、Chocolate Syrup 和 Whipped Cream 的飲品
    val customBeverage = WhippedCream(
        ChocolateSyrup(
            Milk(Espresso())
        )
    )
    println("${customBeverage.description}: $${customBeverage.cost()}")

    // 製作另一種加配料的飲品，例如加兩層 Whipped Cream 和一層 Milk
    val layeredBeverage = WhippedCream(
        WhippedCream(
            Milk(HouseBlend())
        )
    )
    println("${layeredBeverage.description}: $${layeredBeverage.cost()}")
}
```

[Output]

```bash
Espresso: $1.99
Espresso, Milk, Chocolate Syrup, Whipped Cream: $3.19
House Blend, Milk, Whipped Cream, Whipped Cream: $2.49
```

## 結論

通過套用 **Decorator Pattern**，我們成功動態地為物件添加新功能，並保持類別數量的可控性。此模式不僅提供了靈活的擴展方式，還減少了重複代碼和耦合性，使得系統更易於維護和擴展。透過裝飾者模式，開發者可以更高效地應對需求變更，滿足複雜功能的實現。
