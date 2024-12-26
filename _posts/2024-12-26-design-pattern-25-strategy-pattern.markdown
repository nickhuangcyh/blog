---
layout: single
title: "Design Pattern (25) - Strategy Pattern (策略模式)"
date: 2024-12-26 23:50:00 +0800
excerpt: "策略模式提供了一種靈活的解決方案，讓系統能根據需求動態切換不同的行為邏輯，實現高可擴展性與低耦合性。"
header:
  overlay_image: /assets/images/design_patterns.jpg
  teaser: /assets/images/design_patterns.jpg
tags: [Strategy Pattern]
categories: [Design Pattern]
---

> 您可於此 [design_pattern repo](https://github.com/nickhuangcyh/design_pattern) 下載 Design Pattern 系列程式碼。

---

## 需求

在設計一個 **電商運費計算系統** 時，我們需要滿足以下需求：

1. 支援多種運費計算方式，例如：
   - **一般配送**：固定運費。
   - **快速配送**：依重量計費。
   - **國際配送**：根據地區與重量計費。
2. 系統需具備良好的擴展性：
   - 能夠方便地新增新的運費計算方式。
3. **避免使用大量的 if-else 或 switch-case**。
4. 使用者應能輕鬆切換運費計算方式。

---

## 物件導向分析 (OOA)

理解需求後，讓我們來快速實作物件導向分析吧!

![strategy_pattern_uml_1]({{ site.baseurl }}/assets/images/design_pattern_strategy_pattern_uml_1.png)

### 察覺 Forces

如果未套用設計模式，我們可能會遇到以下問題：

1. **難以維護**

   - 運費計算邏輯混雜在主程式內，新增或修改一種計算方式可能會影響其他部分。

2. **違反開放關閉原則 (OCP)**

   - 每次新增運費計算方式都需修改核心業務邏輯。

3. **違反單一職責原則 (SRP)**
   - 主程式同時負責運費計算與核心業務邏輯，責任過於繁重。

---

## 套用 Strategy Pattern (Solution) 得到新的 Context (Resulting Context)

做完 OOA，察覺 Forces，看清楚整個 Context 後，就可以來套用 Strategy Pattern 解決這個問題

先來看一下 Strategy Pattern 的 UML

![strategy_pattern_uml_2]({{ site.baseurl }}/assets/images/design_pattern_strategy_pattern_uml_2.png)

### Strategy Pattern 的組件

策略模式的核心組件包括：

1. **Strategy (策略介面)**  
   定義所有策略需要實現的行為。

2. **ConcreteStrategy (具體策略)**  
   每個具體策略類別實現特定的行為邏輯。

3. **Context (上下文)**  
   維護一個策略物件，並根據當前策略執行對應行為。

將 Strategy Pattern 套用到我們的應用吧

![strategy_pattern_uml_3]({{ site.baseurl }}/assets/images/design_pattern_strategy_pattern_uml_3.png)

---

## 物件導向設計 (OOP)

[Strategy: ShippingStrategy]

```kotlin
interface ShippingStrategy {
    fun calculateShippingCost(weight: Double, region: String): Double
}
```

[ConcreteStrategies: RegularShipping, ExpressShipping, InternationalShipping]

```kotlin
class RegularShipping : ShippingStrategy {
    override fun calculateShippingCost(weight: Double, region: String): Double {
        return 50.0 // 固定運費
    }
}

class ExpressShipping : ShippingStrategy {
    override fun calculateShippingCost(weight: Double, region: String): Double {
        return weight * 10 // 每公斤 10 元
    }
}

class InternationalShipping : ShippingStrategy {
    override fun calculateShippingCost(weight: Double, region: String): Double {
        val regionMultiplier = when (region) {
            "Asia" -> 15
            "Europe" -> 20
            "America" -> 25
            else -> 30
        }
        return weight * regionMultiplier
    }
}
```

[Context: ShippingCalculator]

```kotlin
class ShippingCalculator(private var strategy: ShippingStrategy) {

    fun setStrategy(strategy: ShippingStrategy) {
        this.strategy = strategy
    }

    fun calculateCost(weight: Double, region: String): Double {
        return strategy.calculateShippingCost(weight, region)
    }
}

```

[Client]

```kotlin
fun main() {
    val calculator = ShippingCalculator(RegularShipping())

    println("一般配送運費: ${calculator.calculateCost(5.0, "Asia")} 元") // 固定 50 元

    calculator.setStrategy(ExpressShipping())
    println("快速配送運費: ${calculator.calculateCost(5.0, "Asia")} 元") // 5.0 * 10 = 50 元

    calculator.setStrategy(InternationalShipping())
    println("國際配送運費 (Asia): ${calculator.calculateCost(5.0, "Asia")} 元") // 5.0 * 15 = 75 元
}
```

[Output]

```kotlin
一般配送運費: 50.0 元
快速配送運費: 50.0 元
國際配送運費 (Asia): 75.0 元
```

## 結論

透過 Strategy Pattern，我們成功將運費計算邏輯與核心功能分離，並實現以下優勢：

1. 易於擴展

- 新增運費計算方式只需實作新的策略類別，無需修改現有程式碼。

2. 低耦合性

- 運費計算邏輯與核心業務邏輯分離，各自負責自己的功能。

3. 符合設計原則

- 單一職責原則 (SRP)：每個策略類別專注於特定運費計算邏輯。
- 開放關閉原則 (OCP)：策略模式允許在不修改現有程式碼的情況下，新增新功能。

策略模式非常適合處理需要根據條件執行不同行為的場景，例如：

- 不同的折扣策略 (滿額折扣、季節性優惠)。
- 不同的排序算法 (快速排序、合併排序)。
- 各類繳稅計算方式。

策略模式讓系統更具彈性，為複雜問題提供了一個優雅的解決方案。
