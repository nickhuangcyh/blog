---
layout: single
title: "Design Pattern (11) - Adapter Pattern (轉接器模式)"
date: 2024-12-07 23:00:00 +0800
excerpt: "了解如何使用轉接器模式來解決介面不兼容問題，讓不同類別無縫合作，增強程式設計靈活性。"
header:
  overlay_image: /assets/images/design_patterns.jpg
  teaser: /assets/images/design_patterns.jpg
tags: [Adapter Pattern]
categories: [Design Pattern]
---

> 您可於此 [design_pattern repo](https://github.com/nickhuangcyh/design_pattern) 下載 Design Pattern 系列程式碼。

## 需求

我們收到了一個需求：公司現有的 **股票數據系統** 使用 **XML 格式** 存儲與傳遞數據，而新引入的 **第三方股票分析系統** 僅支援 **JSON 格式**。為了整合兩個系統，我們需要設計一個解決方案，使得現有數據可以被第三方分析系統正確接收和處理。

## 物件導向分析 (OOA)

理解需求後，讓我們來快速實作物件導向分析吧!

![adapter_pattern_uml_1]({{ site.baseurl }}/assets/images/design_pattern_adapter_pattern_uml_1.png)

## 察覺 Forces

在未使用設計模式的情況下，上述程式碼可以運行，但存在以下問題：

1. **責任分散**：

   - `Client` 負責數據轉換，這違反了單一職責原則（SRP）。
   - 一旦轉換邏輯變複雜，`Client` 的程式碼將變得難以維護。

2. **重複性高**：

   - 如果其他系統需要同樣的轉換邏輯，程式碼將無法重複使用，導致重複性問題。

3. **耦合性高**：

   - `Client` 必須了解 `XmlStockData` 與 `JsonAnalyzer` 的具體實現細節，導致高耦合性。
   - 未來若資料來源或目標格式改變，`Client` 必須大幅修改。

4. **無法適應變化**：
   - 若引入更多資料格式（如 CSV 或 YAML），每種格式都需要在 `Client` 中實現轉換邏輯，難以擴展。

## 套用 Adapter Pattern ( Solution ) 得到新的 Context ( Resulting Context )

做完 OOA，察覺 Forces，看清楚整個 Context 後，就可以來套用 Adapter Pattern 解決這個問題

先來看一下 Adapter Pattern 的 UML

![adapter_pattern_uml_2]({{ site.baseurl }}/assets/images/design_pattern_adapter_pattern_uml_2.png)

- Target (目標介面)：
  定義客戶端需要的介面。
  本例中是 JsonAnalyzer 的方法 analyzeJsonData，目標是處理 JSON 格式的股票數據。

- Adaptee (被轉接者)：
  定義現有的不相容介面。本例中是 XmlStockData，它提供 XML 格式的股票數據。

- Adapter (轉接器)：
  實現 Target 的介面，並內部持有 Adaptee。負責將 Adaptee 的數據轉換為 Target 所需的格式。本例中是 StockDataAdapter，它將 XML 格式的數據轉換為 JSON。

將 Adapter Pattern 套用到我們的應用吧

![adapter_pattern_uml_3]({{ site.baseurl }}/assets/images/design_pattern_adapter_pattern_uml_3.png)

## 物件導向程式設計 (OOP)

[JsonAnalyzer]

```kotlin
interface JsonAnalyzer {
    fun analyzeJsonData(json: String)
}
```

[XmlStockData]

```kotlin
class XmlStockData {
    fun getXmlData(): String {
        return """
            <stocks>
                <stock>
                    <symbol>TSLA</symbol>
                    <price>675.50</price>
                </stock>
                <stock>
                    <symbol>AMZN</symbol>
                    <price>3201.65</price>
                </stock>
            </stocks>
        """
    }
}
```

[StockDataAdapter]

```kotlin
class StockDataAdapter(private val xmlStockData: XmlStockData) : JsonAnalyzer {
    override fun analyzeJsonData(json: String) {
        println("Analyzing JSON data: $json")
    }

    fun convertAndAnalyze() {
        val xml = xmlStockData.getXmlData()
        val json = XML.toJSONObject(xml).toString(4)
        analyzeJsonData(json)
    }
}
```

[Client]

```kotlin
fun main() {
    val xmlStockData = XmlStockData()
    val adapter = StockDataAdapter(xmlStockData)

    adapter.convertAndAnalyze()
}
```

## 結論

套用 **Adapter Pattern** 後，我們成功將數據轉換的邏輯封裝到轉接器中，並減少了 `Client` 的責任。這樣的設計提高了系統的靈活性和可維護性，同時為未來擴展新格式提供了便利。
