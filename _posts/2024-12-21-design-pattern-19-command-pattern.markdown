---
layout: single
title: "Design Pattern (19) - Command Pattern (命令模式)"
date: 2024-12-21 15:00:00 +0800
excerpt: "了解命令模式如何將操作與執行解耦，讓程式具備更高的靈活性與可擴展性。"
header:
  overlay_image: /assets/images/design_patterns.jpg
  teaser: /assets/images/design_patterns.jpg
tags: [Command Pattern]
categories: [Design Pattern]
---

> 您可於此 [design_pattern repo](https://github.com/nickhuangcyh/design_pattern) 下載 Design Pattern 系列程式碼。

## 需求

我們需要一個音樂播放器控制系統，需求如下：

- 使用者可以透過遙控器控制音樂播放器執行「播放」、「暫停」和「停止」操作。
- 支援撤銷 (Undo) 功能，例如撤銷暫停會恢復播放。
- 按鈕行為應保持靈活，方便未來擴充新功能，例如「下一首」或「重播」。

---

## **物件導向分析 (OOA)**

理解需求後，讓我們來快速實作物件導向分析吧！

![command_pattern_uml_1]({{ site.baseurl }}/assets/images/design_pattern_command_pattern_uml_1.png)

## 察覺 Forces

在未使用設計模式的情況下，我們可能面臨以下挑戰：

1. **高耦合性 (High Coupling)**：

   - 客戶端需要直接操作每個具體設備的功能，導致耦合度過高，不利於系統擴展。

2. **缺乏靈活性 (Lack of Flexibility)**：

   - 如果需要新增設備或操作，客戶端需要修改大量程式碼，增加了維護成本。

3. **撤銷/重做困難 (Undo/Redo Complexity)**：
   - 系統沒有統一的方式處理操作歷史，導致撤銷和重做功能難以實現。

## 套用 Command Pattern (Solution) 得到新的 Context (Resulting Context)

做完 OOA，察覺 Forces，看清楚整個 Context 後，就可以來套用 Command Pattern 解決這個問題。

先來看一下 Command Pattern 的 UML：

![command_pattern_uml_2]({{ site.baseurl }}/assets/images/design_pattern_command_pattern_uml_2.png)

以下是 Command Pattern 的主要角色：

### **角色與職責**

1. **Receiver (接收者)**  
   實際執行音樂播放邏輯的物件，例如播放、暫停和停止操作。

2. **Command (命令介面)**  
   定義命令的共同介面，保證命令的可執行性 (Execute) 與可撤銷性 (Undo)。

3. **ConcreteCommand (具體命令)**  
   將具體的播放控制操作封裝到命令物件中，例如「播放命令」、「暫停命令」和「停止命令」。

4. **Invoker (呼叫者)**  
   遙控器，負責執行命令並追蹤命令歷史，以支援撤銷操作。

5. **Client (客戶端)**  
   負責初始化命令、接收者與遙控器之間的對應關係。

將 Command Pattern 套用到我們的應用吧

![command_pattern_uml_3]({{ site.baseurl }}/assets/images/design_pattern_command_pattern_uml_3.png)

---

## **物件導向程式設計 (OOP)**

### [Receiver: 音樂播放器]

```kotlin
class MusicPlayer {
    fun play() {
        println("Music is playing")
    }

    fun pause() {
        println("Music is paused")
    }

    fun stop() {
        println("Music is stopped")
    }
}
```

### [Command: 命令介面]

```kotlin
interface Command {
    fun execute()
    fun undo()
}
```

### [ConcreteCommand: 具體命令]

```kotlin
class PlayCommand(private val player: MusicPlayer) : Command {
    override fun execute() {
        player.play()
    }

    override fun undo() {
        player.pause() // 撤銷播放則暫停
    }
}

class PauseCommand(private val player: MusicPlayer) : Command {
    override fun execute() {
        player.pause()
    }

    override fun undo() {
        player.play() // 撤銷暫停則播放
    }
}

class StopCommand(private val player: MusicPlayer) : Command {
    override fun execute() {
        player.stop()
    }

    override fun undo() {
        println("Cannot undo stop") // 撤銷停止通常無法恢復
    }
}
```

### [Invoker: 遙控器]

```kotlin
class RemoteControl {
    private val commandHistory = mutableListOf<Command>()

    fun pressButton(command: Command) {
        command.execute()
        commandHistory.add(command)
    }

    fun pressUndo() {
        if (commandHistory.isNotEmpty()) {
            val lastCommand = commandHistory.removeLast()
            lastCommand.undo()
        } else {
            println("No command to undo")
        }
    }
}
```

### [Client: 客戶端]

```kotlin
fun main() {
    val player = MusicPlayer()

    val playCommand = PlayCommand(player)
    val pauseCommand = PauseCommand(player)
    val stopCommand = StopCommand(player)

    val remoteControl = RemoteControl()

    // Play music
    remoteControl.pressButton(playCommand)

    // Pause music
    remoteControl.pressButton(pauseCommand)

    // Undo
    remoteControl.pressUndo()

    // Stop music
    remoteControl.pressButton(stopCommand)

    // Undo
    remoteControl.pressUndo()
}
```

### Output

```bash
Music is playing
Music is paused
Music is playing
Music is stopped
Cannot undo stop
```

## 結論

透過 Command Pattern，我們成功解除了客戶端與具體設備的耦合，讓系統更具靈活性。此外，命令模式還方便了操作的撤銷與重做功能的實現，大大提升了系統的擴展性與維護性。此模式特別適用於需要排程請求、記錄操作歷史或提供撤銷/重做功能的場景。
