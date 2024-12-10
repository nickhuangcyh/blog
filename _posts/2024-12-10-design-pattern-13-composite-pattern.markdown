---
layout: single
title: "Design Pattern (13) - Composite Pattern (組合模式)"
date: 2024-12-10 23:00:00 +0800
excerpt: "深入了解組合模式如何以一致的方式操作單個物件與物件集合，實現對樹狀結構的靈活管理。"
header:
  overlay_image: /assets/images/design_patterns.jpg
  teaser: /assets/images/design_patterns.jpg
tags: [Composite Pattern]
categories: [Design Pattern]
---

> 您可於此 [design_pattern repo](https://github.com/nickhuangcyh/design_pattern) 下載 Design Pattern 系列程式碼。

## 需求

我們收到了一個需求：實作一個檔案系統，其目錄可以包含檔案或子目錄，並且需要提供統一的操作介面來列出目錄內容。此系統應支援以下功能：

* 支援樹狀結構的表示。
* 可操作單一檔案和目錄。
* 新增檔案或目錄時無需大幅修改現有程式碼。

## 物件導向分析 (OOA)

理解需求後，讓我們來快速實作物件導向分析吧!

![composite_pattern_uml_1]({{ site.baseurl }}/assets/images/design_pattern_composite_pattern_uml_1.png)

## 察覺 Forces

在未使用設計模式的情況下，上述需求可能會遇到以下問題：

1. **高耦合性 (Tight Coupling)**：
   - 單一檔案和目錄集合的操作邏輯分散在多個類別中，導致系統維護困難。
   
2. **重複代碼 (Code Duplication)**：
   - 每次操作目錄內容時，需分別處理檔案與子目錄，導致相似邏輯多處重複。

3. **難以擴展 (Difficulty in Extending)**：
   - 新增檔案或目錄類型時，需大幅修改程式碼，影響系統穩定性。

4. **靈活性差 (Lack of Flexibility)**：
   - 操作層需清楚區分單一檔案與目錄集合，增加程式碼複雜度。
  

## 套用 Composite Pattern ( Solution ) 得到新的 Context ( Resulting Context )

做完 OOA，察覺 Forces，看清楚整個 Context 後，就可以來套用 Composite Pattern 解決這個問題。

先來看一下 Composite Pattern 的 UML：

![composite_pattern_uml_2]({{ site.baseurl }}/assets/images/design_pattern_composite_pattern_uml_2.png)

* **Component (組件介面)**：定義統一的操作介面，單一檔案與目錄都需實作此介面。
* **Leaf (葉子節點)**：表示檔案，不能再包含子節點。
* **Composite (組合節點)**：表示目錄，可包含子節點（檔案或子目錄），並實作遞迴操作的邏輯。

## 物件導向程式設計 (OOP)

[Component: FileSystemComponent]

```kotlin
abstract class FileSystemComponent(val name: String) {
    open fun display(indent: String = "") {
        println("$indent$name")
    }

    open fun add(component: FileSystemComponent) {
        throw UnsupportedOperationException("Cannot add component to a leaf.")
    }

    open fun remove(component: FileSystemComponent) {
        throw UnsupportedOperationException("Cannot remove component from a leaf.")
    }
}
```

[Leaf: File]

```kotlin
class File(name: String) : FileSystemComponent(name) {
    override fun display(indent: String) {
        println("$indent- File: $name")
    }
}
```

[Composite: Directory]

```kotlin
class Directory(name: String) : FileSystemComponent(name) {
    private val children = mutableListOf<FileSystemComponent>()

    override fun add(component: FileSystemComponent) {
        children.add(component)
    }

    override fun remove(component: FileSystemComponent) {
        children.remove(component)
    }

    override fun display(indent: String) {
        println("$indent+ Directory: $name")
        children.forEach { it.display("$indent  ") }
    }
}
```

[Client]

```kotlin
fun main() {
    // Build Directories and files
    val root = Directory("Root")
    val folder1 = Directory("Folder1")
    val folder2 = Directory("Folder2")

    val file1 = File("File1.txt")
    val file2 = File("File2.txt")
    val file3 = File("File3.txt")

    // Add files & directories into directories
    root.add(folder1)
    root.add(file1)

    folder1.add(folder2)
    folder1.add(file2)

    folder2.add(file3)

    // display file structure
    root.display()
}
```

[Output]

```bash
+ Directory: Root
  + Directory: Folder1
    + Directory: Folder2
      - File: File3.txt
    - File: File2.txt
  - File: File1.txt
```

## 結論

通過套用 Composite Pattern，我們成功實現了單一檔案與目錄集合的統一操作。有效降低了系統的耦合性，並且提供了高效的擴展性，當需要新增新的檔案類型或目錄結構時，無需大幅修改現有程式碼。透過此模式，開發者能夠以簡潔且一致的方式處理樹狀結構的邏輯，提升了程式的靈活性與可維護性。
