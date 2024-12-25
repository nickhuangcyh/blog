---
layout: single
title: "Design Pattern (24) - State Pattern (狀態模式)"
date: 2024-12-22 15:00:00 +0800
excerpt: "透過狀態模式，設計一個飲水機的運作機制，根據不同狀態執行加熱、冷卻或待機的行為。"
header:
  overlay_image: /assets/images/design_patterns.jpg
  teaser: /assets/images/design_patterns.jpg
tags: [State Pattern]
categories: [Design Pattern]
---

> 您可於此 [design_pattern repo](https://github.com/nickhuangcyh/design_pattern) 下載 Design Pattern 系列程式碼。

---

## 需求

我們的任務是設計一個 **飲水機**，需求如下：

- 飲水機有三種狀態：
  - **加熱中**：提升水溫至熱水。
  - **冷卻中**：降低水溫至冷水。
  - **待機中**：維持現有水溫。
- 使用者可透過按鈕切換飲水機的狀態。
- 飲水機需要根據當前狀態執行正確的行為，例如加熱狀態時加熱水，但不可冷卻。

---

## 物件導向分析 (OOA)

理解需求後，讓我們來快速實作物件導向分析吧!

![state_pattern_uml_1]({{ site.baseurl }}/assets/images/design_pattern_state_pattern_uml_1.png)

### 察覺 Forces

在未使用設計模式的情況下，我們可能面臨以下挑戰：

1. **高耦合性 (High Coupling)**

   - 狀態邏輯與飲水機核心功能混合在一起，導致程式碼難以維護。

2. **違反單一職責原則 (SRP)**

   - 飲水機類別需要同時處理狀態邏輯與主要功能，責任過於繁重。

3. **難以擴展 (Hard to Extend)**
   - 新增或修改狀態行為需更改飲水機核心邏輯，違反開放關閉原則 (OCP)。

---

## 套用 State Pattern (Solution) 得到新的 Context (Resulting Context)

做完 OOA，察覺 Forces，看清楚整個 Context 後，就可以來套用 State Pattern 解決這個問題

察覺 Forces 後，我們可以套用 **State Pattern**，將狀態邏輯封裝成獨立的類別，達到以下效果：

![state_pattern_uml_2]({{ site.baseurl }}/assets/images/design_pattern_state_pattern_uml_2.png)

狀態模式有三個角色:

1. **State (狀態介面)**  
   定義所有具體狀態需要實現的行為。

2. **ConcreteState (具體狀態)**  
   每個具體狀態類別實現 State 介面，並負責該狀態下的具體行為邏輯。

3. **Context (上下文)**  
   負責維護當前狀態，並提供介面讓外部操作。在執行操作時，將請求委派給當前狀態物件。

- 飲水機類別負責狀態管理，而非具體行為實現，降低耦合度。
- 每個狀態專注於自身行為，符合單一職責原則。
- 新增或修改狀態無需影響飲水機核心邏輯，符合開放關閉原則。

將 State Pattern 套用到我們的應用吧

![state_pattern_uml_3]({{ site.baseurl }}/assets/images/design_pattern_state_pattern_uml_3.png)

---

## 物件導向設計 (OOP)

[State: WaterDispenserState]

```kotlin
interface WaterDispenserState {
    fun handleRequest()
}
```

[ConcreteStates: HeatingState, CoolingState, StandbyState]

```kotlin
class HeatingState : WaterDispenserState {
    override fun handleRequest() {
        println("加熱中：水溫正在提升，請稍候...")
    }
}

class CoolingState : WaterDispenserState {
    override fun handleRequest() {
        println("冷卻中：水溫正在降低，請稍候...")
    }
}

class StandbyState : WaterDispenserState {
    override fun handleRequest() {
        println("待機中：飲水機維持現有水溫，隨時可用。")
    }
}
```

[Context: WaterDispenser]

```kotlin
class WaterDispenser {
    private var currentState: WaterDispenserState = StandbyState()

    fun setState(state: WaterDispenserState) {
        currentState = state
        println("狀態切換：${state::class.simpleName}")
    }

    fun pressButton() {
        currentState.handleRequest()
    }
}
```

[Client]

```kotlin
fun main() {
    val dispenser = WaterDispenser()

    // 初始狀態為待機中
    dispenser.pressButton()

    // 切換到加熱狀態
    dispenser.setState(HeatingState())
    dispenser.pressButton()

    // 切換到冷卻狀態
    dispenser.setState(CoolingState())
    dispenser.pressButton()

    // 回到待機狀態
    dispenser.setState(StandbyState())
    dispenser.pressButton()
}
```

[Output]

```kotlin
待機中：飲水機維持現有水溫，隨時可用。
狀態切換：HeatingState
加熱中：水溫正在提升，請稍候...
狀態切換：CoolingState
冷卻中：水溫正在降低，請稍候...
狀態切換：StandbyState
待機中：飲水機維持現有水溫，隨時可用。
```

## 結論

透過 State Pattern，我們成功將飲水機的狀態邏輯與核心功能分離，實現以下優勢：

1. 降低耦合度

- 飲水機類別專注於狀態切換，具體行為由狀態類別負責。

2. 符合設計原則

- 單一職責原則 (SRP)：每個狀態類別專注於自身行為。
- 開放關閉原則 (OCP)：新增狀態無需修改現有程式碼。

3. 易於擴展

- 新增或修改狀態行為時，不影響其他部分。

此模式特別適合處理複雜的狀態轉換場景，例如：

- ATM 機的插卡、操作、取卡狀態。
- 文檔編輯器的編輯、檢視、列印模式。

狀態模式讓程式結構更具彈性，是開發狀態機制應用的最佳選擇！
