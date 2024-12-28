---
layout: single
title: "Design Pattern (27) - Visitor Pattern (訪問者模式)"
date: 2024-12-28 21:30:00 +0800
excerpt: "訪問者模式提供了一種方式，讓我們能在不修改物件結構的前提下，為其增加新的操作邏輯，實現高擴展性。"
header:
  overlay_image: /assets/images/design_patterns.jpg
  teaser: /assets/images/design_patterns.jpg
tags: [Visitor Pattern]
categories: [Design Pattern]
---

> 您可於此 [design_pattern repo](https://github.com/nickhuangcyh/design_pattern) 下載 Design Pattern 系列程式碼。

---

## 需求

在設計一個 **IoT App 整合多品牌 IPCam 的功能** 時，我們需要滿足以下需求：

1. 支援多種 IPCam 品牌，這些品牌的 IPCam 提供不同的串流與截圖方式：
   - **HIKVISION** 提供 RTSP 協定，可以用通用方式播放串流與截圖。
   - **DAHUA** 提供自家 SDK，需要依賴 SDK 提供的方法進行操作。
2. **App 的程式碼結構不應依賴 IPCam 品牌的實現細節**，應保持開放擴展性，方便後續新增新的 IPCam 品牌。
3. **避免修改 IPCam 的核心結構**，因為這些品牌的實現通常由廠商提供，無法直接修改。

---

## 物件導向分析 (OOA)

理解需求後，讓我們來快速實作物件導向分析吧！

![visitor_pattern_uml_1]({{ site.baseurl }}/assets/images/design_pattern_visitor_pattern_uml_1.png)

### 察覺 Forces

如果未套用設計模式，我們可能會遇到以下問題：

1. **難以擴展新品牌**
   - 每新增一個品牌的 IPCam，就需要修改 App 的核心邏輯。
2. **違反開放關閉原則 (OCP)**
   - 核心邏輯與品牌實現細節耦合，新增功能需要修改核心程式碼。
3. **無法統一處理不同品牌的操作**
   - 每個品牌的串流與截圖方式不同，導致程式碼混亂，難以維護。

---

## 套用 Visitor Pattern (Solution) 得到新的 Context (Resulting Context)

做完 OOA，察覺 Forces，看清楚整個 Context 後，就可以來套用 Visitor Pattern 解決這個問題。

先來看一下 Visitor Pattern 的 UML

![visitor_pattern_uml_2]({{ site.baseurl }}/assets/images/design_pattern_visitor_pattern_uml_2.png)

### Visitor Pattern 的組件

訪問者模式的核心組件包括：

1. **Visitor (訪問者介面)**

   - 定義對每種類型物件的操作方法。

2. **ConcreteVisitor (具體訪問者)**

   - 實現特定操作邏輯。

3. **Element (元素介面)**

   - 定義接受訪問者的方法 (`accept`)，並將訪問者傳遞給自己。

4. **ConcreteElement (具體元素)**
   - 實現接受訪問者的方法，讓訪問者能夠訪問並操作具體元素。

將 Visitor Pattern 套用到我們的應用吧

![visitor_pattern_uml_3]({{ site.baseurl }}/assets/images/design_pattern_visitor_pattern_uml_3.png)

---

## 物件導向設計 (OOP)

[Element: IPCam]

```kotlin
interface IPCam {
    fun accept(visitor: IPCamVisitor)
}
```

[ConcreteElements: HikvisionIPCam, DahuaIPCam]

```kotlin
class HikvisionIPCam : IPCam {
    override fun accept(visitor: IPCamVisitor) {
        visitor.visitHikvision(this)
    }

    fun getRTSPStream(): String {
        return "rtsp://hikvision/stream"
    }

    fun captureSnapshot(): String {
        return "Hikvision Snapshot"
    }
}

class DahuaIPCam : IPCam {
    override fun accept(visitor: IPCamVisitor) {
        visitor.visitDahua(this)
    }

    fun startSDKStream(): String {
        return "Dahua SDK Stream"
    }

    fun takeSDKSnapshot(): String {
        return "Dahua Snapshot"
    }
}
```

[Visitor: IPCamVisitor]

```kotlin
interface IPCamVisitor {
    fun visitHikvision(ipCam: HikvisionIPCam)
    fun visitDahua(ipCam: DahuaIPCam)
}
```

[ConcreteVisitors: IPCamStreamingVisitor, IPCamSnapshotVisitor]

```kotlin
class IPCamStreamingVisitor : IPCamVisitor {
    override fun visitHikvision(ipCam: HikvisionIPCam) {
        println("Streaming: ${ipCam.getRTSPStream()}")
    }

    override fun visitDahua(ipCam: DahuaIPCam) {
        println("Streaming: ${ipCam.startSDKStream()}")
    }
}

class IPCamSnapshotVisitor : IPCamVisitor {
    override fun visitHikvision(ipCam: HikvisionIPCam) {
        println("Snapshot: ${ipCam.captureSnapshot()}")
    }

    override fun visitDahua(ipCam: DahuaIPCam) {
        println("Snapshot: ${ipCam.takeSDKSnapshot()}")
    }
}
```

[Client]

```kotlin
fun main() {
    val ipCams: List<IPCam> = listOf(HikvisionIPCam(), DahuaIPCam())
    val streamingVisitor = IPCamStreamingVisitor()
    val snapshotVisitor = IPCamSnapshotVisitor()

    for (ipCam in ipCams) {
        ipCam.accept(streamingVisitor)
        ipCam.accept(snapshotVisitor)
    }
}
```

[Output]

```plaintext
Streaming: rtsp://hikvision/stream
Snapshot: Hikvision Snapshot
Streaming: Dahua SDK Stream
Snapshot: Dahua Snapshot
```

---

## 結論

透過 Visitor Pattern，我們成功將不同品牌 IPCam 的操作邏輯與物件結構分離，並實現以下優勢：

1. **易於擴展新品牌**

   - 新增品牌只需實作新的 `ConcreteElement` 類別，並在訪問者中新增相應的操作方法。

2. **操作邏輯集中**

   - 不同品牌的操作邏輯集中於訪問者中，便於維護與管理。

3. **符合設計原則**
   - 單一職責原則 (SRP)：操作邏輯與物件結構分離。
   - 開放關閉原則 (OCP)：允許新增功能而不修改既有程式碼。

訪問者模式非常適合處理以下場景：

- 多種類型物件需要執行不同操作。
- 物件結構穩定，但操作邏輯經常變化。

訪問者模式為多變操作提供了一個優雅的解決方案，確保系統具有高擴展性與靈活性。
