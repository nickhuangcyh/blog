---
layout: single
title: "Design Pattern (10) - Singleton Pattern (單例模式)"
date: 2024-08-10 15:00:00 +0800
excerpt: "深入單例模式：如何確保一個類別只有一個實體，提供一個全域"
header:
  overlay_image: /assets/images/design_patterns.jpg
  teaser: /assets/images/design_patterns.jpg
tags: [Singleton Pattern]
categories: [Design Pattern]
---

> 您可於此 [design_pattern repo](https://github.com/nickhuangcyh/design_pattern) 下載 Design Pattern 系列程式碼。

## 需求

我們收到了一個需求：開發一個應用程式，該應用程式需要與資料庫進行頻繁的交互。為了確保資料庫連接的效率和資源的合理使用，我們需要設計一個系統來管理資料庫連接。

## 物件導向分析 (OOA)

理解需求後，讓我們來快速實作物件導向分析吧!

![design_pattern_singleton_pattern_uml_1]({{ site.baseurl }}/assets/images/design_pattern_singleton_pattern_uml_1.png)

我們有 CRUD 四個 function 以及 constructor 用來建立 DatabaseClient

## 察覺 Forces

來看看上面這樣的設計會有哪些問題

1. 資源管理：多個資料庫連接會消耗大量資源，導致性能下降。
2. 一致性：需要確保所有資料庫操作使用相同的連接，以避免數據不一致。
3. 效率：頻繁創建和銷毀資料庫連接會降低系統效率。

## 套用 Singleton Pattern ( Solution ) 得到新的 Context ( Resulting Context )

做完 OOA，察覺 Forces，看清楚整個 Context 後，就可以來套用 Singleton Pattern 解決這個問題

先來看一下 Singleton Pattern 的 UML

![design_pattern_singleton_pattern_uml_2]({{ site.baseurl }}/assets/images/design_pattern_singleton_pattern_uml_2.png)

我們可以發現，單例模式其實就是透過 getInstance() 方法去取得實體，而每次取的時都會去判斷內部 property instance 是否為 null，如果是 null 就創建一個新的，如果不是就回傳 instance property 的值，如此就能保證此 class 的實體只會有一個。

我們來將 DatabaseClient 套用 Singleton Pattern

![design_pattern_singleton_pattern_uml_3]({{ site.baseurl }}/assets/images/design_pattern_singleton_pattern_uml_3.png)

如此我們就得到了一個全新的 `Resulting Context`

## 物件導向程式設計 (OOP)

再來我們就可以開始進行物件導向程式開發

[DatabaseClient]

```kotlin
class DatabaseClient {

    fun create(tableName:String, data: Map<String, Any>): Int {
        return 0
    }

    fun read(tableName:String, conditions: Map<String, Any>): Int {
        return 0
    }

    fun update(tableName:String, data: Map<String, Any>, conditions: Map<String, Any>): Int {
        return 0
    }

    fun delete(tableName:String, conditions: Map<String, Any>): Int {
        return 0
    }

    companion object {
        var mInstance: DatabaseClient? = null
        fun getInstance(): DatabaseClient {
            if (mInstance == null) {
                mInstance = DatabaseClient()
            }
            return mInstance!!
        }
    }
}
```

[Client]

```kotlin
fun main() {
    val db = DatabaseClient.getInstance()
    db.create("test", mapOf(Pair("test", "123")))
}
```

這樣就完成了，這邊稍微提一下，其實 kotlin 語言有提供 `object` 來讓我們輕鬆實作 Singleton Pattern，如下

[DatabaseClient]

```kotlin
object DatabaseClient {

    fun create(tableName:String, data: Map<String, Any>): Int {
        return 0
    }

    fun read(tableName:String, conditions: Map<String, Any>): Int {
        return 0
    }

    fun update(tableName:String, data: Map<String, Any>, conditions: Map<String, Any>): Int {
        return 0
    }

    fun delete(tableName:String, conditions: Map<String, Any>): Int {
        return 0
    }
}
```

[Client]

```kotlin
fun main() {
    val db = DatabaseClient
    db.create("test", mapOf(Pair("test", "123")))
}
```

如此就能更簡單的操作 Singleton 的單例類別了!
