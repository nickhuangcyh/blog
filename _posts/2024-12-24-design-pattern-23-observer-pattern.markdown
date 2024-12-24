---
layout: single
title: "Design Pattern (23) - Observer Pattern (觀察者模式)"
date: 2024-12-22 14:00:00 +0800
excerpt: "透過觀察者模式，實現安全系統主機的警報通知機制，當警報觸發時，主機自動通知平板、iOS 和 Android 手機。"
header:
  overlay_image: /assets/images/design_patterns.jpg
  teaser: /assets/images/design_patterns.jpg
tags: [Observer Pattern]
categories: [Design Pattern]
---

> 您可於此 [design_pattern repo](https://github.com/nickhuangcyh/design_pattern) 下載 Design Pattern 系列程式碼。

## 需求

我們的任務是設計一個 **安全系統主機 (Panel)**，需求如下：

- 主機負責監控不同的感測器，例如煙霧探測器或門窗感測器。
- 當警報觸發時，主機需要通知所有已註冊的設備，例如平板、iOS 和 Android 手機。
- 設備可以動態地加入或移除通知清單。

## 物件導向分析 (OOA)

理解需求後，讓我們來快速實作物件導向分析吧!

![observer_pattern_uml_1]({{ site.baseurl }}/assets/images/design_pattern_observer_pattern_uml_1.png)

### 察覺 Forces

在未使用設計模式的情況下，我們可能面臨以下挑戰：

1. **高耦合性 (High Coupling)**

   - 如果主機直接與每一個設備互動，程式碼會變得難以維護，每次新增或移除設備都需要修改主機邏輯。

2. **缺乏彈性 (Lack of Flexibility)**

   - 新增設備需要修改現有程式碼，違反開放關閉原則 (OCP)。

3. **通知不一致 (Inconsistent Notifications)**
   - 當警報觸發時，難以確保每個設備都能正確接收到通知。

---

## 套用 Observer Pattern (Solution) 得到新的 Context (Resulting Context)

做完 OOA，察覺 Forces，看清楚整個 Context 後，就可以來套用 Observer Pattern 解決這個問題

先來看一下 Memento Pattern 的 UML

![observer_pattern_uml_2]({{ site.baseurl }}/assets/images/design_pattern_observer_pattern_uml_2.png)

觀察者模式提供了一個一對多的通知機制，當主機的狀態改變時，會自動通知所有已訂閱的設備。

- **Subject (主體)**：安全系統主機，負責管理所有設備並在警報觸發時發送通知。
- **Observer (觀察者)**：設備，例如平板、iOS 和 Android 手機，接收通知並根據警報執行操作。
- **ConcreteSubject (具體主體)**：實際的安全系統主機，包含警報邏輯。
- **ConcreteObserver (具體觀察者)**：具體的設備實現，例如 Android 設備或 iOS 設備。

將 Observer Pattern 套用到我們的應用吧

![observer_pattern_uml_3]({{ site.baseurl }}/assets/images/design_pattern_observer_pattern_uml_3.png)

## 實作

[Subject: AlarmSystem]

```kotlin
interface AlarmSystem {
    fun addObserver(observer: Device)
    fun removeObserver(observer: Device)
    fun notifyObservers(alarmMessage: String)
}
```

[Observer: Device]

```kotlin
interface Device {
    fun onAlarmTriggered(alarmMessage: String)
}
```

[ConcreteSubject: SecurityPanel]

```kotlin
class SecurityPanel : AlarmSystem {
    private val devices = mutableListOf<Device>()

    override fun addObserver(observer: Device) {
        devices.add(observer)
    }

    override fun removeObserver(observer: Device) {
        devices.remove(observer)
    }

    override fun notifyObservers(alarmMessage: String) {
        for (device in devices) {
            device.onAlarmTriggered(alarmMessage)
        }
    }

    fun triggerAlarm(zone: String) {
        val message = "警報觸發於 $zone!"
        println("主機通知: $message")
        notifyObservers(message)
    }
}
```

[ConcreteObserver: Devices]

```kotlin
class Tablet : Device {
    override fun onAlarmTriggered(alarmMessage: String) {
        println("平板收到通知: $alarmMessage")
    }
}

class IOSDevice : Device {
    override fun onAlarmTriggered(alarmMessage: String) {
        println("iOS 設備收到通知: $alarmMessage")
    }
}

class AndroidDevice : Device {
    override fun onAlarmTriggered(alarmMessage: String) {
        println("Android 設備收到通知: $alarmMessage")
    }
}
```

[Client]

```kotlin
fun main() {
    val securityPanel = SecurityPanel()

    val tablet = Tablet()
    val iosDevice = IOSDevice()
    val androidDevice = AndroidDevice()

    // add observers
    securityPanel.addObserver(tablet)
    securityPanel.addObserver(iosDevice)
    securityPanel.addObserver(androidDevice)

    // trigger alarm
    securityPanel.triggerAlarm("客廳")
    securityPanel.triggerAlarm("廚房")

    // remove observer
    securityPanel.removeObserver(androidDevice)
    securityPanel.triggerAlarm("臥室")
}
```

[Output]

```kotlin
主機通知: 警報觸發於 客廳!
平板收到通知: 警報觸發於 客廳!
iOS 設備收到通知: 警報觸發於 客廳!
Android 設備收到通知: 警報觸發於 客廳!

主機通知: 警報觸發於 廚房!
平板收到通知: 警報觸發於 廚房!
iOS 設備收到通知: 警報觸發於 廚房!
Android 設備收到通知: 警報觸發於 廚房!

主機通知: 警報觸發於 臥室!
平板收到通知: 警報觸發於 臥室!
iOS 設備收到通知: 警報觸發於 臥室!
```

## 結論

透過 Observer Pattern，我們構建了一個靈活的安全系統通知機制，設備可以動態地加入或移除，且主機與設備之間的耦合度降低，遵循開放關閉原則 (OCP)。此模式適用於任何需要實現通知機制的場景，例如：

- 即時警報系統
- 訊息推送系統
- 事件分發系統
