---
layout: single
title: "Design Pattern (20) - Iterator Pattern (迭代器模式)"
date: 2024-12-22 14:00:00 +0800
excerpt: "了解迭代器模式如何提供一種順序來訪問集合內元素的方法，而不需要暴露集合的底層表示。"
header:
  overlay_image: /assets/images/design_patterns.jpg
  teaser: /assets/images/design_patterns.jpg
tags: [Iterator Pattern]
categories: [Design Pattern]
---

> 您可於此 [design_pattern repo](https://github.com/nickhuangcyh/design_pattern) 下載 Design Pattern 系列程式碼。

## 需求

我們的任務是設計一個檔案系統搜尋工具，需求如下：

- 使用者可以選擇不同的檔案搜尋方式，例如 **廣度優先搜尋 (BFS)** 或 **深度優先搜尋 (DFS)**。
- 客戶端不需要關心搜尋邏輯的實現細節，只需使用統一的迭代器介面來遍歷搜尋結果。
- 系統需要具備擴展性，方便新增其他搜尋法，例如基於檔案大小排序的搜尋。

## 物件導向分析 (OOA)

理解需求後，讓我們來快速實作物件導向分析吧！

![iterator_pattern_uml_1]({{ site.baseurl }}/assets/images/design_pattern_iterator_pattern_uml_1.png)

## 察覺 Forces

在未使用設計模式的情況下，我們可能面臨以下挑戰：

1. **高耦合性 (High Coupling)**：

   - 客戶端需要直接操作每種搜尋方式的實現細節，導致代碼臃腫且難以維護。

2. **缺乏一致性 (Lack of Consistency)**：

   - 不同搜尋方式的結果訪問方式可能不一致。

3. **違反開放關閉原則 (Violates OCP)**：
   - 若新增搜尋法或更改現有搜尋邏輯，需要修改客戶端程式碼。

## 套用 Iterator Pattern (Solution) 得到新的 Context (Resulting Context)

做完 OOA，察覺 Forces，看清楚整個 Context 後，就可以來套用 Iterator Pattern 解決這個問題。

迭代器模式允許我們對搜尋結果進行順序訪問，而不需要暴露搜尋邏輯的細節。

先來看一下 Iterator Pattern 的 UML：

![iterator_pattern_uml_2]({{ site.baseurl }}/assets/images/design_pattern_iterator_pattern_uml_2.png)

以下是 Iterator Pattern 的主要角色：

- **Iterator (迭代器介面)**：定義訪問搜尋結果的方法，例如 `hasNext()` 和 `next()`。
- **ConcreteIterator (具體迭代器)**：實現不同的搜尋邏輯，如 BFS 或 DFS。
- **Aggregate (聚合介面)**：定義方法來創建迭代器。
- **ConcreteAggregate (具體聚合類別)**：實現聚合介面，提供檔案系統資料的具體實現。

將 Iterator Pattern 套用到我們的應用吧

![iterator_pattern_uml_3]({{ site.baseurl }}/assets/images/design_pattern_iterator_pattern_uml_3.png)

## 物件導向程式設計 (OOP)

[Iterator]

```kotlin
interface Iterator<T> {
    fun hasNext(): Boolean
    fun next(): T
}
```

[Aggregate: FileSystem]

```kotlin
interface FileSystem {
    fun createIterator(): Iterator<File>
}
```

[ConcreteIterator: BFSIterator, DFSIterator]

```kotlin
class BFSIterator(private val root: File) : Iterator<File> {
    private val queue = ArrayDeque<File>()

    init {
        queue.add(root)
    }

    override fun hasNext(): Boolean {
        return queue.isNotEmpty()
    }

    override fun next(): File {
        if (!hasNext()) throw NoSuchElementException()
        val current = queue.removeFirst()
        if (current.isDirectory) {
            queue.addAll(current.listFiles().orEmpty())
        }
        return current
    }
}

class DFSIterator(private val root: File) : Iterator<File> {
    private val stack = ArrayDeque<File>()

    init {
        stack.add(root)
    }

    override fun hasNext(): Boolean {
        return stack.isNotEmpty()
    }

    override fun next(): File {
        if (!hasNext()) throw NoSuchElementException()
        val current = stack.removeLast()
        if (current.isDirectory) {
            stack.addAll(current.listFiles().orEmpty())
        }
        return current
    }
}
```

[ConcreteAggregate: DefaultFileSystem]

```kotlin
class DefaultFileSystem(private val root: File, private val searchMethod: SearchMethod) : FileSystem {
    override fun createIterator(): Iterator<File> {
        return when (searchMethod) {
            SearchMethod.BFS -> BFSIterator(root)
            SearchMethod.DFS -> DFSIterator(root)
        }
    }
}

enum class SearchMethod {
    BFS, DFS
}
```

[File]

```kotlin
data class File(val name: String, val isDirectory: Boolean, val children: List<File> = emptyList()) {
    fun listFiles(): List<File> = if (isDirectory) children else emptyList()
}
```

[Client]

```kotlin
fun main() {
    val fileSystem = DefaultFileSystem(
        root = File(
            name = "root",
            isDirectory = true,
            children = listOf(
                File("file1.txt", false),
                File("folder1", true, listOf(
                    File("file2.txt", false),
                    File("file3.txt", false)
                )),
                File("folder2", true, listOf(
                    File("file4.txt", false)
                ))
            )
        ),
        searchMethod = SearchMethod.BFS
    )

    val iterator = fileSystem.createIterator()
    println("Files:")
    while (iterator.hasNext()) {
        println("- ${iterator.next().name}")
    }
}
```

[Output]

```bash
Files:
- root
- file1.txt
- folder1
- folder2
- file2.txt
- file3.txt
- file4.txt
```

## 結論

透過 Iterator Pattern，我們成功實現了不同搜尋法的整合，讓客戶端能以一致的方式訪問搜尋結果。此模式提升了系統的靈活性與擴展性，特別適合處理多種遍歷邏輯的場景，例如檔案搜尋、樹狀結構遍歷等。
