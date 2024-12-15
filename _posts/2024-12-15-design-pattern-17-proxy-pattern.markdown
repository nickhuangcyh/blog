---
layout: single
title: "Design Pattern (15) - Proxy Pattern (代理模式)"
date: 2024-12-15 21:30:00 +0800
excerpt: "了解代理模式如何通過控制對物件的訪問來提升系統的安全性、效能及靈活性。"
header:
  overlay_image: /assets/images/design_patterns.jpg
  teaser: /assets/images/design_patterns.jpg
tags: [Proxy Pattern]
categories: [Design Pattern]
---

> 您可於此 [design_pattern repo](https://github.com/nickhuangcyh/design_pattern) 下載 Design Pattern 系列程式碼。

## 需求

我們的任務是建立一個影片播放系統，需求如下：

- 應用能播放多個影片，但避免每次都重複下載相同的影片。
- 影片需要在用戶第一次訪問時下載，之後從快取中取得以節省資源。
- 提供一個透明的介面，無需讓客戶端知道影片是透過代理取得的。

## 物件導向分析 (OOA)

理解需求後，讓我們來快速實作物件導向分析吧！

![proxy_pattern_uml_1]({{ site.baseurl }}/assets/images/design_pattern_proxy_pattern_uml_1.png)

## 察覺 Forces

在未使用設計模式的情況下，我們可能面臨以下挑戰：

1. **高頻寬消耗 (High Bandwidth Usage)**：

   - 如果每次播放影片都重新下載，將導致不必要的頻寬浪費。

2. **延遲時間 (High Latency)**：

   - 每次下載影片會增加播放前的等待時間，影響用戶體驗。

3. **客戶端耦合 (Client Coupling)**：
   - 如果客戶端需要處理影片的下載邏輯，會增加不必要的複雜性。

## 套用 Proxy Pattern (Solution) 得到新的 Context (Resulting Context)

做完 OOA，察覺 Forces，看清楚整個 Context 後，就可以來套用 Proxy Pattern 解決這個問題。

Proxy Pattern 提供了解決方案，通過引入 Proxy 物件來控制對核心物件的訪問，實現快取功能並提升效能。

先來看一下 Proxy Pattern 的 UML：

![proxy_pattern_uml_2]({{ site.baseurl }}/assets/images/design_pattern_proxy_pattern_uml_2.png)

以下是 Proxy Pattern 的主要角色：

- **Subject (主題介面)**：定義核心物件與代理物件的共同介面。
- **RealSubject (具體主題)**：核心物件，負責實際下載與播放影片。
- **Proxy (代理)**：代理物件，控制對核心物件的訪問，實現快取功能。

將 Proxy Pattern 套用到我們的應用吧

![proxy_pattern_uml_3]({{ site.baseurl }}/assets/images/design_pattern_proxy_pattern_uml_3.png)

## 物件導向程式設計 (OOP)

[Subject: VideoPlayer]

```kotlin
interface VideoPlayer {
    fun download(name: String): String
    fun play(data: String)
}
```

[RealSubject: YoutubeVideoPlayer]

```kotlin
class YoutubeVideoPlayer : VideoPlayer {
    override fun download(name: String): String {
        println("Downloading video from YouTube: $name")
        // 模擬下載結果返回的影片資料
        return "VideoData($name)"
    }

    override fun play(data: String) {
        println("Playing video: $data")
    }
}
```

[Proxy: ProxyVideoPlayer]

```kotlin
class ProxyVideoPlayer(
    private val player: YoutubeVideoPlayer
) : VideoPlayer {

    private val cacheVideoList = mutableMapOf<String, String>()

    override fun download(name: String): String {
        return if (cacheVideoList.containsKey(name)) {
            println("Fetching video from cache: $name")
            cacheVideoList[name]!!
        } else {
            println("First time download for: $name")
            val videoData = player.download(name)
            cacheVideoList[name] = videoData
            videoData
        }
    }

    override fun play(data: String) {
        player.play(data)
    }
}
```

[Client: VideoPlayerManager]

```kotlin
class VideoPlayerManager(private val player: VideoPlayer) {
    fun playVideo(name: String) {
        println("Request to play video: $name")
        val videoData = player.download(name)
        player.play(videoData)
    }
}

fun main() {
    // Using ProxyVideoPlayer
    val youtubePlayer = YoutubeVideoPlayer()
    val proxyPlayer = ProxyVideoPlayer(youtubePlayer)
    val manager = VideoPlayerManager(proxyPlayer)

    // Play video
    manager.playVideo("funny_cats.mp4")
    manager.playVideo("funny_cats.mp4") // using cache
    manager.playVideo("epic_fail.mp4")
    manager.playVideo("funny_cats.mp4") // using cache
}
```

[Output]

```bash
Request to play video: funny_cats.mp4
First time download for: funny_cats.mp4
Downloading video from YouTube: funny_cats.mp4
Playing video: VideoData(funny_cats.mp4)

Request to play video: funny_cats.mp4
Fetching video from cache: funny_cats.mp4
Playing video: VideoData(funny_cats.mp4)

Request to play video: epic_fail.mp4
First time download for: epic_fail.mp4
Downloading video from YouTube: epic_fail.mp4
Playing video: VideoData(epic_fail.mp4)

Request to play video: funny_cats.mp4
Fetching video from cache: funny_cats.mp4
Playing video: VideoData(funny_cats.mp4)
```

## 結論

透過 **Proxy Pattern**，我們成功實現了影片快取的功能，解決了頻寬消耗與延遲時間過長的問題。此外，代理物件與核心物件共享相同的介面，對客戶端保持透明性，進一步降低耦合性。此模式特別適用於需要控制對資源訪問的場景，例如遠端代理、安全代理與智慧代理，為系統提供了靈活性與可擴展性。
