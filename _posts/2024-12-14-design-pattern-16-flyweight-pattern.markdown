---
layout: single
title: "Design Pattern (16) - Flyweight Pattern (享元模式)"
date: 2024-12-14 15:00:00 +0800
excerpt: "探索享元模式如何透過共享技術有效減少記憶體使用，提升應用效能。"
header:
  overlay_image: /assets/images/design_patterns.jpg
  teaser: /assets/images/design_patterns.jpg
tags: [Flyweight Pattern]
categories: [Design Pattern]
---

> 您可於此 [design_pattern repo](https://github.com/nickhuangcyh/design_pattern) 下載 Design Pattern 系列程式碼。

## 需求

假設我們正在開發一個森林場景的渲染系統，該系統需要顯示數百棵甚至數千棵樹木。

每棵樹包含兩類資料：

1. 內部狀態 (Intrinsic State)：不隨環境改變的資料，例如樹的種類、顏色、紋理等。
2. 外部狀態 (Extrinsic State)：因環境而異的資料，例如樹的座標 (x, y)。

如果為每棵樹都建立完整的物件，將導致記憶體消耗過大。因此，我們需要一種共享內部狀態的方式來優化記

## 物件導向分析 (OOA)

理解需求後，讓我們來快速實作物件導向分析吧！

![flyweight_pattern_uml_1]({{ site.baseurl }}/assets/images/design_pattern_flyweight_pattern_uml_1.png)

## 察覺 Forces

在設計階段，我們注意到以下設計難題：

1. 大量重複資料：每棵樹都包含相同的種類、顏色和紋理資料。
2. 性能問題：對於數千棵樹的場景渲染，過多的物件會導致記憶體不足或性能瓶頸。
3. 共享與獨立的平衡：如何在共享資料的同時，保留每棵樹的獨立外部狀態。

為解決這些問題，我們採用了享元模式。

## 套用 Flyweight Pattern (Solution) 得到新的 Context (Resulting Context)

做完 OOA，察覺 Forces，看清楚整個 Context 後，就可以來套用 Flyweight Pattern 解決這個問題。

先來看一下 flyweight Pattern 的 UML：

![flyweight_pattern_uml_2]({{ site.baseurl }}/assets/images/design_pattern_flyweight_pattern_uml_2.png)

- **Flyweight (享元介面)**：定義共享物件的操作。
- **ConcreteFlyweight (具體享元類別)**：實作共享物件的功能，儲存可以共享的狀態。
- **FlyweightFactory (享元工廠)**：用於創建和管理共享物件，確保相同的物件只創建一次。
- **Client (客戶端)**：使用享元物件，並管理不能共享的狀態。

將 flyweight Pattern 套用到我們的應用吧

![flyweight_pattern_uml_3]({{ site.baseurl }}/assets/images/design_pattern_flyweight_pattern_uml_3.png)

## 物件導向程式設計 (OOP)

[FFlyweight: Tree & TreeType (樹類別)]

```kotlin
class Tree(
    private val x: Int,
    private val y: Int,
    private val type: TreeType
) {
    fun draw() {
        type.draw(x, y)
    }
}

class TreeType(
    val name: String,
    val color: String,
    val texture: String
) {
    fun draw(x: Int, y: Int) {
        println("Drawing tree: $name, color: $color, texture: $texture at ($x, $y)")
    }
}
```

[FlyweightFactory: TreeFactory (樹工廠類別)]

```kotlin
object TreeFactory {
    private val treeTypes = mutableMapOf<String, TreeType>()

    fun getTreeType(name: String, color: String, texture: String): TreeType {
        return treeTypes.computeIfAbsent(name) {
            println("Creating new TreeType: $name")
            TreeType(name, color, texture)
        }
    }
}
```

[Client: Forest (森林類別)]

```kotlin
class Forest {
    private val trees = mutableListOf<Tree>()

    fun plantTree(x: Int, y: Int, name: String, color: String, texture: String) {
        val treeType = TreeFactory.getTreeType(name, color, texture)
        val tree = Tree(x, y, treeType)
        trees.add(tree)
    }

    fun draw() {
        for (tree in trees) {
            tree.draw()
        }
    }
}
```

[Main Function]

```kotlin
fun main() {
    val forest = Forest()

    // Planting trees in the forest
    forest.plantTree(10, 20, "Oak", "Green", "Rough")
    forest.plantTree(15, 25, "Pine", "Dark Green", "Smooth")
    forest.plantTree(10, 20, "Oak", "Green", "Rough") // Reuses the same TreeType as the first Oak

    // Draw all trees
    forest.draw()
}
```

[Output]

```bash
Creating new TreeType: Oak
Creating new TreeType: Pine
Drawing tree: Oak, color: Green, texture: Rough at (10, 20)
Drawing tree: Pine, color: Dark Green, texture: Smooth at (15, 25)
Drawing tree: Oak, color: Green, texture: Rough at (10, 20)
```

## 結論

享元模式通過共享技術，有效降低了系統的記憶體使用量，提升了效能。它特別適用於需要大量重複物件的情境，例如文字編輯器、遊戲開發等場景。然而，在使用時需要小心區分內部與外部狀態，以確保系統設計的正確性與靈活性。
