---
layout: single
title: "Design Pattern (12) - Bridge Pattern (橋接模式)"
date: 2024-12-08 20:00:00 +0800
excerpt: "深入了解橋接模式如何解耦抽象與實現，打造更靈活且易於擴展的系統設計，滿足複雜需求的同時降低維護成本。"
header:
overlay_image: /assets/images/design_patterns.jpg
teaser: /assets/images/design_patterns.jpg
tags: [Bridge Pattern]
categories: [Design Pattern]
---

> 您可於此 [design_pattern repo](https://github.com/nickhuangcyh/design_pattern) 下載 Design Pattern 系列程式碼。

## 需求

我們收到了一個需求：公司現有的 保全系統，在偵測到不同類型的事件（如火警、竊盜警鈴）時，需要以多種通知方式向用戶發送警報訊息。支援的通知方式包括：

- APNS (Apple iOS Push)
- FCM (Google Android Push)
- Email
- SMS

警報事件則可能包括：

- Fire (火警)
- Burglar (竊盜警鈴)

## 物件導向分析 (OOA)

理解需求後，讓我們來快速實作物件導向分析吧!

![bridge_pattern_uml_1]({{ site.baseurl }}/assets/images/design_pattern_bridge_pattern_uml_1.png)

## 察覺 Forces

在未使用設計模式的情況下，上述程式碼可以運行，但存在以下問題：

1. 高耦合性 (Tight Coupling)：

- 警報類型 和 通知方式 被緊密地耦合在一起，這使得每次新增警報類型或通知方式時，都必須在多個類別中進行修改。
- 系統的維護成本較高，每個新需求都可能導致代碼的重構。

2. 難以擴展 (Difficulty in Extending)：

- 每增加一種新的警報類型或通知方式，都需要在每個組合中創建新的類別，導致代碼增長迅速。
- 如果需求變更（例如新增一種新的通知方式或警報類型），則需要修改大量的程式碼。

3. 重複代碼 (Code Duplication)：

- 由於每一種通知方式與警報事件的組合都需要實現一個具體的類別，導致了大量重複代碼，增加了程式碼維護的困難。

4. 靈活性差 (Lack of Flexibility)：

- 當某一層次（例如警報事件類型或通知方式）需要進行修改時，必須修改多個相關類別，這樣的設計使得系統的變動成本高。

## 套用 Bridge Pattern ( Solution ) 得到新的 Context ( Resulting Context )

做完 OOA，察覺 Forces，看清楚整個 Context 後，就可以來套用 Bridge Pattern 解決這個問題

先來看一下 Bridge Pattern 的 UML

![bridge_pattern_uml_2]({{ site.baseurl }}/assets/images/design_pattern_bridge_pattern_uml_2.png)

- Abstraction (抽象層)：定義通知功能，負責使用具體的消息發送方式來發送通知。
- RefinedAbstraction (具體化的抽象層)：擴展抽象層，實現不同類型的警報通知，例如火警通知或竊盜警鈴通知。
- Implementor (實作層)：定義消息發送的接口，負責處理具體的消息發送邏輯。
- ConcreteImplementor (具體的實作層)：提供具體的消息發送實作，例如 APNS、FCM、Email、SMS。

將 Bridge Pattern 套用到我們的應用吧

![bridge_pattern_uml_3]({{ site.baseurl }}/assets/images/design_pattern_bridge_pattern_uml_3.png)

## 物件導向程式設計 (OOP)

[Abstraction: AlarmNotification]

```kotlin
abstract class AlarmNotification(sender: MessageSender) {
    protected var sender: MessageSender

    init {
        this.sender = sender
    }

    abstract fun notifyUser(details: String?)
}
```

[RefinedAbstraction: FireAlarmNotification and BurglarAlarmNotification]

```kotlin
class FireAlarmNotification(sender: MessageSender) : AlarmNotification(sender) {
    override fun notifyUser(details: String?) {
        sender.sendMessage("Fire Alarm: $details")
    }
}

class BurglarAlarmNotification(sender: MessageSender) : AlarmNotification(sender) {
    override fun notifyUser(details: String?) {
        sender.sendMessage("Theft Alarm: $details")
    }
}
```

[Implementor: MessageSender]

```kotlin
interface MessageSender {
    fun sendMessage(message: String?)
}
```

[ConcreteImplementor: APNSSender, FCMSender, EmailSender, and SMSSender]

```kotlin
class APNSSender : MessageSender {
    override fun sendMessage(message: String?) {
        println("Sending APNS Notification: $message")
    }
}

class FCMSender : MessageSender {
    override fun sendMessage(message: String?) {
        println("Sending FCM Notification: $message")
    }
}

class EmailSender : MessageSender {
    override fun sendMessage(message: String?) {
        println("Sending Email: $message")
    }
}

class SMSSender : MessageSender {
    override fun sendMessage(message: String?) {
        println("Sending SMS: $message")
    }
}
```

[Client]

```kotlin
fun main() {
    // Sending Fire Alarm via APNS
    val fireAPNS: AlarmNotification = FireAlarmNotification(APNSSender())
    fireAPNS.notifyUser("Smoke detected in Zone 1.")

    // Sending Burglar Alarm via FCM
    val burglarFCM: AlarmNotification = BurglarAlarmNotification(FCMSender())
    burglarFCM.notifyUser("Unauthorized access detected at Main Door.")

    // Sending Fire Alarm via Email
    val fireEmail: AlarmNotification = FireAlarmNotification(EmailSender())
    fireEmail.notifyUser("Temperature exceeds threshold in Zone 3.")

    // Sending Burglar Alarm via SMS
    val burglarSMS: AlarmNotification = BurglarAlarmNotification(SMSSender())
    burglarSMS.notifyUser("Motion detected in Warehouse.")
}
```

## 結論

通過套用 **Bridge Pattern**，我們成功將通知的抽象層與實際的消息發送方式進行了分離，這樣一來，每種警報通知類型和發送方式可以獨立演進，並且能夠輕鬆地新增新型的通知方式或警報類型。這不僅提高了程式的靈活性，還減少了維護的難度，當需求變更時，也能夠更輕鬆地應對擴展需求。
