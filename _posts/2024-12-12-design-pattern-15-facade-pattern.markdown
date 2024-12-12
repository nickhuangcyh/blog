---
layout: single
title: "Design Pattern (15) - Facade Pattern (外觀模式)"
date: 2024-12-12 23:30:00 +0800
excerpt: "探索外觀模式如何簡化系統複雜性，提供一個統一的介面來訪問子系統的功能，提升程式碼的可讀性與維護性。"
header:
  overlay_image: /assets/images/design_patterns.jpg
  teaser: /assets/images/design_patterns.jpg
tags: [Facade Pattern]
categories: [Design Pattern]
---

> 您可於此 [design_pattern repo](https://github.com/nickhuangcyh/design_pattern) 下載 Design Pattern 系列程式碼。

## 需求

假設我們正在開發一個家庭影院系統，該系統包含以下子系統：

- DVD 播放器
- 環繞音響
- 燈光
- 投影機

用戶希望能輕鬆開啟或關閉家庭影院的所有功能，而不需要逐一操作各個設備。

## 物件導向分析 (OOA)

理解需求後，讓我們來快速實作物件導向分析吧！

![facade_pattern_uml_1]({{ site.baseurl }}/assets/images/design_pattern_facade_pattern_uml_1.png)

## 察覺 Forces

在設計階段，我們注意到以下設計難題：

1. 子系統過於複雜：需要多個步驟才能完成操作。

2. 操作繁瑣：用戶需要熟悉每個子系統的細節。

3. 缺乏一致性：不同子系統之間的操作方式可能不同，導致混亂。

這些 Forces 驅使我們採用外觀模式來簡化介面，減少系統的操作複雜度。

## 套用 Facade Pattern (Solution) 得到新的 Context (Resulting Context)

做完 OOA，察覺 Forces，看清楚整個 Context 後，就可以來套用 Facade Pattern 解決這個問題。

先來看一下 Facade Pattern 的 UML：

![facade_pattern_uml_2]({{ site.baseurl }}/assets/images/design_pattern_facade_pattern_uml_2.png)

- **Subsystems (子系統)**：表示系統中的一組類別或模組，它們各自負責不同的功能。例如，在家庭影院系統中，包括 DVDPlayer、SurroundSound、Lights 和 Projector 等子系統。
- **Facade (外觀類別)**：提供一個簡化的介面來封裝子系統的複雜性。它負責協調多個子系統，以完成用戶的一個請求。例如，HomeTheaterFacade 提供 watchMovie() 和 endMovie() 方法來簡化對子系統的操作。

將 Facade Pattern 套用到我們的應用吧

![facade_pattern_uml_3]({{ site.baseurl }}/assets/images/design_pattern_facade_pattern_uml_3.png)

## 物件導向程式設計 (OOP)

[Subsystems]

```kotlin
class DVDPlayer {
    fun on() = println("DVD Player is ON")
    fun play() = println("DVD Player is playing")
    fun off() = println("DVD Player is OFF")
}

class SurroundSound {
    fun on() = println("Surround Sound is ON")
    fun setVolume(level: Int) = println("Surround Sound volume set to $level")
    fun off() = println("Surround Sound is OFF")
}

class Lights {
    fun dim(level: Int) = println("Lights dimmed to $level%")
    fun on() = println("Lights are ON")
}

class Projector {
    fun on() = println("Projector is ON")
    fun setMode(mode: String) = println("Projector set to $mode mode")
    fun off() = println("Projector is OFF")
}
```

[Facade: HomeTheaterFacade]

```kotlin
class HomeTheaterFacade(
    private val dvdPlayer: DVDPlayer,
    private val surroundSound: SurroundSound,
    private val lights: Lights,
    private val projector: Projector
) {
    fun watchMovie() {
        println("Get ready to watch a movie...")
        lights.dim(10)
        projector.on()
        projector.setMode("Cinema")
        surroundSound.on()
        surroundSound.setVolume(5)
        dvdPlayer.on()
        dvdPlayer.play()
    }

    fun endMovie() {
        println("Shutting down the home theater...")
        dvdPlayer.off()
        surroundSound.off()
        projector.off()
        lights.on()
    }
}
```

[Client]

```kotlin
fun main() {
    val dvdPlayer = DVDPlayer()
    val surroundSound = SurroundSound()
    val lights = Lights()
    val projector = Projector()

    val homeTheater = HomeTheaterFacade(dvdPlayer, surroundSound, lights, projector)

    // The Start
    homeTheater.watchMovie()

    println()

    // The End
    homeTheater.endMovie()
}
```

[Output]

```bash
Get ready to watch a movie...
Lights dimmed to 10%
Projector is ON
Projector set to Cinema mode
Surround Sound is ON
Surround Sound volume set to 5
DVD Player is ON
DVD Player is playing

Shutting down the home theater...
DVD Player is OFF
Surround Sound is OFF
Projector is OFF
Lights are ON
```

## 結論

外觀模式通過為複雜系統提供一個簡單的介面，降低了系統的操作成本，提升了用戶體驗。它特別適用於子系統較多且操作繁瑣的情境。藉由使用外觀模式，開發者能夠更專注於系統核心邏輯，同時提升程式碼的可維護性與擴展性。
