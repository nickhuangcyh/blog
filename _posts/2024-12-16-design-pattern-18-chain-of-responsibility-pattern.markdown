---
layout: single
title: "Design Pattern (18) - Chain of Responsibility Pattern (責任鏈模式)"
date: 2024-12-16 23:00:00:00 +0800
excerpt: "了解責任鏈模式如何讓請求能被多個對象動態處理，提升系統靈活性與可擴展性。"
header:
  overlay_image: /assets/images/design_patterns.jpg
  teaser: /assets/images/design_patterns.jpg
tags: [Chain of Responsibility Pattern]
categories: [Design Pattern]
---

> 您可於此 [design_pattern repo](https://github.com/nickhuangcyh/design_pattern) 下載 Design Pattern 系列程式碼。

## 需求

我們的任務是建立一個日誌處理系統，需求如下：

- 系統支持多層次日誌處理（如 Console、File、Database 等）。
- 請求可以被多個處理器處理，且處理器的組合應具備動態調整能力。
- 確保每層處理器的責任彼此獨立，並能擴展新處理器而不影響既有邏輯。

## 物件導向分析 (OOA)

理解需求後，讓我們來快速實作物件導向分析吧！

![chain_of_responsibility_pattern_uml_1]({{ site.baseurl }}/assets/images/design_pattern_chain_of_responsibility_pattern_uml_1.png)

## 察覺 Forces

在未使用設計模式的情況下，我們可能面臨以下挑戰：

1. **高耦合性 (High Coupling)**：

   - 如果客戶端需要直接控制每個日誌處理器，將導致代碼過於複雜且難以維護。

2. **缺乏靈活性 (Lack of Flexibility)**：

   - 無法輕鬆地調整處理器的執行順序或新增處理器。

3. **違反開放關閉原則 (Violates OCP)**：
   - 若需支持新的日誌處理方式，必須修改客戶端邏輯，導致系統穩定性下降。

## 套用 Chain of Responsibility Pattern (Solution) 得到新的 Context (Resulting Context)

先來看一下 Chain of Responsibility Pattern 的 UML：

![chain_of_responsibility_pattern_uml_2]({{ site.baseurl }}/assets/images/design_pattern_chain_of_responsibility_pattern_uml_2.png)

責任鏈模式提供了解決方案，通過將處理器鏈接成一條動態的責任鏈，使請求能被多個處理器依次處理，降低耦合性並提升系統的靈活性與可擴展性。

以下是 Chain of Responsibility Pattern 的主要角色：

- **Handler (處理者介面)**：定義處理請求的介面，並包含指向下一個處理者的引用。
- **ConcreteHandler (具體處理者)**：實現處理邏輯，並根據條件決定是否將請求傳遞給下一個處理者。
- **Client (客戶端)**：發送請求，並設定處理者的責任鏈結構。

將 Chain of Responsibility Pattern 套用到我們的應用吧

![chain_of_responsibility_pattern_uml_3]({{ site.baseurl }}/assets/images/design_pattern_chain_of_responsibility_pattern_uml_3.png)

## 物件導向程式設計 (OOP)

[Handler: Logger]

```kotlin
abstract class Logger(private val nextLogger: Logger? = null) {

    abstract fun log(level: LogLevel, message: String)

    protected fun passToNext(level: LogLevel, message: String) {
        nextLogger?.log(level, message)
    }
}
```

[LogLevel Enum]

```kotlin
enum class LogLevel {
    INFO, WARNING, ERROR
}
```

[ConcreteHandler: ConsoleLogger]

```kotlin
class ConsoleLogger(nextLogger: Logger? = null) : Logger(nextLogger) {

    override fun log(level: LogLevel, message: String) {
        if (level == LogLevel.INFO) {
            println("ConsoleLogger: $message")
        }
        passToNext(level, message)
    }
}
```

[ConcreteHandler: FileLogger]

```kotlin
class FileLogger(nextLogger: Logger? = null) : Logger(nextLogger) {

    override fun log(level: LogLevel, message: String) {
        if (level == LogLevel.WARNING) {
            println("FileLogger: $message")
        }
        passToNext(level, message)
    }
}
```

[ConcreteHandler: DatabaseLogger]

```kotlin
class DatabaseLogger(nextLogger: Logger? = null) : Logger(nextLogger) {

    override fun log(level: LogLevel, message: String) {
        if (level == LogLevel.ERROR) {
            println("DatabaseLogger: $message")
        }
        passToNext(level, message)
    }
}
```

[Client]

```kotlin
fun main() {
    val loggerChain = ConsoleLogger(FileLogger(DatabaseLogger()))

    println("Sending INFO log...")
    loggerChain.log(LogLevel.INFO, "This is an informational message.")

    println("\nSending WARNING log...")
    loggerChain.log(LogLevel.WARNING, "This is a warning message.")

    println("\nSending ERROR log...")
    loggerChain.log(LogLevel.ERROR, "This is an error message.")
}
```

[Output]

```bash
Sending INFO log...
ConsoleLogger: This is an informational message.

Sending WARNING log...
FileLogger: This is a warning message.

Sending ERROR log...
DatabaseLogger: This is an error message.
```

## 結論

透過 **Chain of Responsibility Pattern**，我們成功實現了動態的責任鏈結構，讓請求能被多個處理器依次處理。這不僅降低了客戶端與處理器之間的耦合，還提供了高度靈活性與擴展性，使系統更具彈性。此模式特別適合需要多層次處理的場景，例如日誌處理、請求驗證、事件處理等，為系統設計提供了強大的工具。
