---
layout: single
title: "Design Pattern (21) - Mediator Pattern (中介者模式)"
date: 2024-12-22 14:00:00 +0800
excerpt: "了解中介者模式如何協調物件之間的交互，減少物件之間的耦合性並促進系統的可擴展性。"
header:
  overlay_image: /assets/images/design_patterns.jpg
  teaser: /assets/images/design_patterns.jpg
tags: [Mediator Pattern]
categories: [Design Pattern]
---

> 您可於此 [design_pattern repo](https://github.com/nickhuangcyh/design_pattern) 下載 Design Pattern 系列程式碼。

## 需求

我們的任務是設計一個 **聊天室應用程式**，需求如下：

- 使用者可以透過聊天室傳遞訊息。
- 每個使用者都不需要直接管理其他使用者的資訊。
- 新增或移除使用者不應影響其他使用者的運作。

## 物件導向分析 (OOA)

理解需求後，我們來快速分析：

- 若使用者彼此直接通信，會導致複雜的相依關係，增加維護成本。
- 我們需要一個集中管理的角色，來協調使用者之間的訊息傳遞。

![mediator_pattern_uml_1]({{ site.baseurl }}/assets/images/design_pattern_mediator_pattern_uml_1.png)

## 察覺 Forces

在未使用設計模式的情況下，我們可能面臨以下挑戰：

1. **高耦合性 (High Coupling)**：

   - 使用者彼此之間直接通信，導致新增或移除使用者時需修改多處程式碼。

2. **難以擴展 (Hard to Extend)**：

   - 若要增加新功能（如訊息過濾或廣播機制），需要修改多個使用者的邏輯。

3. **複雜度上升 (Increased Complexity)**：

   - 使用者之間的關聯數量隨著使用者數量增長呈指數級增加。

## 套用 Mediator Pattern (Solution) 得到新的 Context (Resulting Context)

做完 OOA，察覺 Forces，看清楚整個 Context 後，就可以來套用 Mediator Pattern 解決這個問題。

中介者模式引入了一個中介者來負責協調使用者之間的交互。使用者只需與中介者通信，從而降低相互之間的耦合性。

以下是 Mediator Pattern 的 UML 圖：

![mediator_pattern_uml_2]({{ site.baseurl }}/assets/images/design_pattern_mediator_pattern_uml_2.png)

Mediator Pattern 的主要角色：

- **Mediator (中介者介面)**：定義協調參與者的方法，例如傳遞訊息。
- **ConcreteMediator (具體中介者)**：實現中介者的行為，處理使用者之間的訊息傳遞。
- **Colleague (同事類別)**：表示參與者，所有訊息均通過中介者進行傳遞。
- **ConcreteColleague (具體同事類別)**：實現具體參與者的行為，並依賴中介者進行通信。

讓我們將 Mediator Pattern 套用到聊天室應用程式中。

![mediator_pattern_uml_3]({{ site.baseurl }}/assets/images/design_pattern_mediator_pattern_uml_3.png)

## 物件導向程式設計 (OOP)

[Mediator]

```kotlin
interface ChatMediator {
    fun sendMessage(message: String, user: User)
    fun addUser(user: User)
}
```

[ConcreteMediator]

```kotlin
class ChatRoomMediator : ChatMediator {
    private val users = mutableListOf<User>()

    override fun sendMessage(message: String, user: User) {
        users.filter { it != user }.forEach { it.receive(message) }
    }

    override fun addUser(user: User) {
        users.add(user)
    }
}
```

[Colleague]

```kotlin
abstract class User(protected val mediator: ChatMediator, val name: String) {
    abstract fun send(message: String)
    abstract fun receive(message: String)
}
```

[ConcreteColleague]

```kotlin
class ChatUser(mediator: ChatMediator, name: String) : User(mediator, name) {
    override fun send(message: String) {
        println("$name 發送訊息：$message")
        mediator.sendMessage(message, this)
    }

    override fun receive(message: String) {
        println("$name 收到訊息：$message")
    }
}
```

[Client]

```kotlin
fun main() {
    val chatMediator = ChatRoomMediator()

    val user1 = ChatUser(chatMediator, "Alice")
    val user2 = ChatUser(chatMediator, "Bob")
    val user3 = ChatUser(chatMediator, "Charlie")

    chatMediator.addUser(user1)
    chatMediator.addUser(user2)
    chatMediator.addUser(user3)

    user1.send("Hello, everyone!")
    user2.send("Hi, Alice!")
}
```

[Output]

```kotlin
Alice 發送訊息：Hello, everyone!
Bob 收到訊息：Hello, everyone!
Charlie 收到訊息：Hello, everyone!
Bob 發送訊息：Hi, Alice!
Alice 收到訊息：Hi, Alice!
Charlie 收到訊息：Hi, Alice!
```

## 結論

透過中介者模式，我們成功降低了使用者之間的耦合性，並實現了靈活的訊息傳遞機制。此模式非常適合處理多物件之間的交互，例如聊天室、事件系統或 GUI 組件通信等場景。
