---
layout: single
title: "Design Pattern (26) - Template Method Pattern (模板方法模式)"
date: 2024-12-28 19:30:00 +0800
excerpt: "模板方法模式提供了一個框架，允許子類別重新定義特定步驟的實作，保持核心流程的一致性，實現高復用性與靈活性。"
header:
  overlay_image: /assets/images/design_patterns.jpg
  teaser: /assets/images/design_patterns.jpg
tags: [Template Method Pattern]
categories: [Design Pattern]
---

> 您可於此 [design_pattern repo](https://github.com/nickhuangcyh/design_pattern) 下載 Design Pattern 系列程式碼。

---

## 需求

在設計一個 **資料格式轉換系統** 時，我們需要滿足以下需求：

1. 支援多種格式轉換，例如：
   - **JSON 格式轉換**：將資料轉換為 JSON 格式。
   - **XML 格式轉換**：將資料轉換為 XML 格式。
   - **CSV 格式轉換**：將資料轉換為 CSV 格式。
2. 系統需具備良好的擴展性：
   - 能夠方便地新增新的格式轉換方式。
3. **保持轉換流程核心一致性**，例如：
   - 所有格式轉換都需要：讀取資料、格式化資料、輸出資料。
4. **避免重複程式碼**。

---

## 物件導向分析 (OOA)

理解需求後，讓我們來快速實作物件導向分析吧!

![template_method_pattern_uml_1]({{ site.baseurl }}/assets/images/design_pattern_template_method_pattern_uml_1.png)

### 察覺 Forces

如果未套用設計模式，我們可能會遇到以下問題：

1. **程式碼重複**
   - 每種格式的轉換邏輯中包含相同步驟，但被多次重複實作。
2. **違反開放關閉原則 (OCP)**
   - 新增格式需要修改核心轉換邏輯。
3. **難以維護與擴展**
   - 各格式轉換邏輯分散，難以統一管理與修改。

---

## 套用 Template Method Pattern (Solution) 得到新的 Context (Resulting Context)

做完 OOA，察覺 Forces，看清楚整個 Context 後，就可以來套用 Template Method Pattern 解決這個問題。

先來看一下 Template Method Pattern 的 UML

![template_method_pattern_uml_2]({{ site.baseurl }}/assets/images/design_pattern_template_method_pattern_uml_2.png)

### Template Method Pattern 的組件

模板方法模式的核心組件包括：

1. **AbstractClass (抽象類別)**

   - 定義模板方法 (Template Method)，封裝核心流程。
   - 提供部分步驟的預設實作，或將其標記為抽象，由子類別實現。

2. **ConcreteClass (具體類別)**
   - 繼承抽象類別，實現具體步驟。

以下是 Template Method Pattern 的 UML 圖：

![template_method_pattern_uml_3]({{ site.baseurl }}/assets/images/design_pattern_template_method_pattern_uml_3.png)

---

## 物件導向設計 (OOP)

[AbstractClass: DataFormatter]

```kotlin
abstract class DataFormatter {

    fun convert(data: Map<String, Any>): String {
        val rawData = readData(data)
        val formattedData = formatData(rawData)
        return outputData(formattedData)
    }

    private fun readData(data: Map<String, Any>): String {
        return data.toString()
    }

    // subclass implementation
    protected abstract fun formatData(data: String): String

    protected abstract fun outputData(data: String): String
}
```

[ConcreteClasses: JsonFormatter, XmlFormatter, CsvFormatter]

```kotlin
class JsonFormatter : DataFormatter() {
    override fun formatData(data: String): String {
        return "{\"data\": \"$data\"}" // 模擬 JSON 格式化
    }

    override fun outputData(data: String): String {
        return "JSON Output: $data"
    }
}

class XmlFormatter : DataFormatter() {
    override fun formatData(data: String): String {
        return "<data>$data</data>" // 模擬 XML 格式化
    }

    override fun outputData(data: String): String {
        return "XML Output: $data"
    }
}

class CsvFormatter : DataFormatter() {
    override fun formatData(data: String): String {
        return data.replace(", ", "\n") // 模擬 CSV 格式化
    }

    override fun outputData(data: String): String {
        return "CSV Output: $data"
    }
}
```

[Client]

```kotlin
fun main() {
    val data = mapOf("name" to "John", "age" to 30, "city" to "New York")

    val jsonFormatter = JsonFormatter()
    println(jsonFormatter.convert(data))

    val xmlFormatter = XmlFormatter()
    println(xmlFormatter.convert(data))

    val csvFormatter = CsvFormatter()
    println(csvFormatter.convert(data))
}
```

[Output]

```plaintext
JSON Output: {"data": "{name=John, age=30, city=New York}"}
XML Output: <data>{name=John, age=30, city=New York}</data>
CSV Output: name=John\nage=30\ncity=New York
```

---

## 結論

透過 Template Method Pattern，我們成功將資料格式轉換的通用邏輯與變化邏輯分離，並實現以下優勢：

1. **程式碼復用性高**

   - 通用的轉換流程邏輯在抽象類別中實現，避免重複。

2. **易於擴展**

   - 新增格式只需繼承抽象類別並實現特定步驟。

3. **符合設計原則**
   - 單一職責原則 (SRP)：核心流程與特定邏輯分離。
   - 開放關閉原則 (OCP)：允許新增功能而不修改既有程式碼。

模板方法模式非常適合處理以下場景：

- 不同的資料格式轉換流程。
- 文檔生成流程 (例如：PDF、Excel)。
- 多種資料處理的過程。

模板方法模式確保系統核心流程的一致性，為實現靈活且高效的擴展提供了一個優雅的解決方案。
