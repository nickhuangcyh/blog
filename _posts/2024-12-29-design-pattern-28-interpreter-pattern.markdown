---
layout: single
title: "Design Pattern (XX) - Interpreter Pattern (解譯器模式)"
date: 2024-12-29 16:30:00 +0800
excerpt: "解譯器模式用於構建一個可解讀特定語言或語法的系統，適合於處理複雜的規則判斷或指令語法。"
header:
  overlay_image: /assets/images/design_patterns.jpg
  teaser: /assets/images/design_patterns.jpg
tags: [Interpreter Pattern]
categories: [Design Pattern]
---

> 您可於此 [design_pattern repo](https://github.com/nickhuangcyh/design_pattern) 下載 Design Pattern 系列程式碼。

---

## 需求

我們需要設計一個布林運算解譯系統，具備以下功能：

1. 能解譯包含布林值、AND 運算與 OR 運算的表達式。
2. 符合開放關閉原則，能夠方便地新增其他運算（如 NOT）。
3. 系統結構清晰，易於維護與擴展。

---

## 物件導向分析 (OOA)

理解需求後，讓我們來快速實作物件導向分析吧！

![interpreter_pattern_uml_1]({{ site.baseurl }}/assets/images/design_pattern_interpreter_pattern_uml_1.png)

### 察覺 Forces

1. **複雜性增加**

   - 隨著運算符類型增加，手動解析邏輯會變得難以維護。

2. **重複代碼**

   - 不同運算符的處理可能導致類似功能重複實現。

3. **難以擴展**
   - 新增運算符需要修改大量代碼，違反開放關閉原則 (OCP)。

---

## 套用 Interpreter Pattern (Solution) 得到新的 Context (Resulting Context)

做完 OOA，察覺 Forces，看清楚整個 Context 後，就可以來套用 Interpreter Pattern 解決這個問題。

先來看一下 Interpreter Pattern 的 UML

![interpreter_pattern_uml_2]({{ site.baseurl }}/assets/images/design_pattern_interpreter_pattern_uml_2.png)

### Interrepter Pattern 的組件

1. **建立抽象表達式 (Expression)**

   - 定義所有表達式的通用介面，確保不同類型的表達式可以被統一處理。

2. **設計終端表達式 (Terminal Expression)**

   - 負責處理語法中的基本單位（如布林值 `true` 和 `false`）。

3. **設計非終端表達式 (Non-Terminal Expression)**
   - 表示複雜運算的組合（如 `AND` 和 `OR`），遞迴處理子表達式。

為了解決上述問題，我們採用解譯器模式來建構布林運算系統。核心思想是將每個運算符與操作數作為一個 "表達式"，並使用遞迴的方式進行解譯。

透過這種方式，我們可以將複雜的布林運算拆解為多個小型且可組合的單元，並保持系統結構的靈活性。

將 Interpreter Pattern 套用到我們的應用吧

![interpreter_pattern_uml_3]({{ site.baseurl }}/assets/images/design_pattern_interpreter_pattern_uml_3.png)

---

## 物件導向程式設計 (OOP)

[抽象表達式: Expression]

```kotlin
interface Expression {
    fun interpret(): Boolean
}
```

[終端表達式: BooleanValue]

```kotlin
class BooleanValue(private val value: Boolean) : Expression {
    override fun interpret(): Boolean = value
}
```

[非終端表達式: AndExpression, OrExpression]

```kotlin
class AndExpression(private val left: Expression, private val right: Expression) : Expression {
    override fun interpret(): Boolean = left.interpret() && right.interpret()
}

class OrExpression(private val left: Expression, private val right: Expression) : Expression {
    override fun interpret(): Boolean = left.interpret() || right.interpret()
}
```

[客戶端代碼: Client]

```kotlin
fun main() {
    // 定義布林表達式：true AND false OR true
    val expression = OrExpression(
        AndExpression(
            BooleanValue(true),
            BooleanValue(false)
        ),
        BooleanValue(true)
    )

    // 計算結果
    val result = expression.interpret()
    println("Result of the expression is: $result")
}
```

[Output]

```kotlin
Result of the expression is: true
```

---

## 結論

透過解譯器模式，我們成功解決了布林運算系統的設計挑戰，並實現以下優勢：

1. **結構清晰**

   - 將每個運算符和操作數封裝成表達式類別，便於組合與管理。

2. **易於擴展**

   - 新增運算符只需實現新的表達式類別，符合開放關閉原則 (OCP)。

3. **靈活性高**
   - 支持動態構建與解譯複雜表達式，適用於多種運算場景。

需要注意的是，解譯器模式更適合處理結構簡單的語法。如果語法過於複雜，可能導致類別數量激增，這時可以考慮結合其他模式（如組合模式或訪問者模式）進行優化。
