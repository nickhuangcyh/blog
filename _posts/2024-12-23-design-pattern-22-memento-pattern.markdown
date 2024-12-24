---
layout: single
title: "Design Pattern (22) - Memento Pattern (備忘錄模式)"
date: 2024-12-22 14:00:00 +0800
excerpt: "了解備忘錄模式如何幫助我們實現狀態恢復，像是常見的 Ctrl+Z 功能，讓我們回到之前的操作狀態。"
header:
  overlay_image: /assets/images/design_patterns.jpg
  teaser: /assets/images/design_patterns.jpg
tags: [Memento Pattern]
categories: [Design Pattern]
---

> 您可於此 [design_pattern repo](https://github.com/nickhuangcyh/design_pattern) 下載 Design Pattern 系列程式碼。

## 需求

我們的任務是設計一個文字編輯器，需求如下：

- 使用者可以輸入文字，並隨時按下 `Ctrl+Z` 回復上一步。
- 系統需要保存歷史狀態以供回復。
- 客戶端不需要了解狀態保存的實現細節，只需使用一個簡單的回復操作即可。

## 物件導向分析 (OOA)

理解需求後，讓我們來快速實作物件導向分析吧!

![memento_pattern_uml_1]({{ site.baseurl }}/assets/images/design_pattern_memento_pattern_uml_1.png)

### 察覺 Forces

在未使用設計模式的情況下，我們可能面臨以下挑戰：

1. **資料喪失風險 (Data Loss Risk)**：

   - 如果我們僅保留當前狀態，將無法回復到之前的狀態。

2. **高耦合性 (High Coupling)**：

   - 客戶端需要直接操作狀態管理邏輯，導致複雜性增加。

3. **難以擴展 (Hard to Extend)**：

   - 新增功能或改變狀態保存方式時，可能需要修改大量程式碼。

## 套用 Memento Pattern (Solution) 得到新的 Context (Resulting Context)

做完 OOA，察覺 Forces，看清楚整個 Context 後，就可以來套用 Memento Pattern 解決這個問題

先來看一下 Memento Pattern 的 UML

![memento_pattern_uml_2]({{ site.baseurl }}/assets/images/design_pattern_memento_pattern_uml_2.png)

備忘錄模式引入了三個角色：

1. **Originator (發起者)**：保存當前狀態到備忘錄，或從備忘錄中恢復狀態。
2. **Memento (備忘錄)**：存儲 Originator 的內部狀態。
3. **Caretaker (管理者)**：負責保存和恢復備忘錄，但不直接操作其內容。

將 Memento Pattern 套用到我們的應用吧

![memento_pattern_uml_3]({{ site.baseurl }}/assets/images/design_pattern_memento_pattern_uml_3.png)

## 物件導向程式設計 (OOP)

### Originator

```kotlin
class TextEditor {
    private var text: String = ""

    fun type(newText: String) {
        text += newText
    }

    fun getText(): String = text

    fun save(): Memento = Memento(text)

    fun restore(memento: Memento) {
        text = memento.getText()
    }

    data class Memento(private val state: String) {
        fun getText(): String = state
    }
}
```

### Caretaker

```kotlin
class History {
    private val mementos = mutableListOf<TextEditor.Memento>()

    fun save(memento: TextEditor.Memento) {
        mementos.add(memento)
    }

    fun undo(): TextEditor.Memento? {
        if (mementos.isNotEmpty()) {
            return mementos.removeAt(mementos.size - 1)
        }
        return null
    }
}
```

### Client

```kotlin
fun main() {
    val textEditor = TextEditor()
    val history = History()

    // Typing string
    textEditor.type("Hello")
    history.save(textEditor.save())

    textEditor.type(", World")
    history.save(textEditor.save())

    textEditor.type("! This is Memento Pattern.")
    println("Current Text：${textEditor.getText()}") // Output: Hello, World! This is Memento Pattern.

    // Pressed Ctrl+Z
    textEditor.restore(history.undo()!!)
    println("Excute undo Text：${textEditor.getText()}") // Output: Hello, World!

    // Pressed Ctrl+Z again
    textEditor.restore(history.undo()!!)
    println("Excute undo Text：${textEditor.getText()}") // Output: Hello
}
```

### Output

```bash
Current Text： Hello, World! This is Memento Pattern.
Excute undo Text： Hello, World!
Excute undo Text： Hello
```

## 結論

透過備忘錄模式，我們成功實現了文字編輯器的狀態恢復功能，讓使用者能夠輕鬆地回復到之前的操作狀態。這種模式廣泛應用於文字處理器、遊戲保存系統以及其他需要狀態恢復的場景。
