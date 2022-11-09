---
layout: single
title: "搞懂 P2P 技術 (3) - WebRTC x AWS x KVS"
date: 2022-01-04 23:13:00 +0800
excerpt: "WebRTC x AWS x KVS"
header:
  overlay_image: /assets/images/nasa-1lfI7wkGWZ4-unsplash.jpg
  teaser: /assets/images/nasa-1lfI7wkGWZ4-unsplash.jpg
tags: [iOS, Android, WebRTC, KVS]
categories: [P2P, AWS]
---

## WebRTC

全名 Web Real-Time Communication，是一個支援網頁瀏覽器進行即時語音對話或影片對話的 API

> [WebRTC Wiki](https://zh.wikipedia.org/wiki/WebRTC)

WebRTC 的底層就是使用 ICE 來進行 P2P 打洞

## Signaling Server

信令伺服器，用來交換雙方的 SDP 及 Ice candidate 來完成 P2P 打洞

### 實作 Signaling Server

WebRTC 沒有明確定義如何實作 Signaling Server，主要原因在於如果雙方一開始就知道對方的資訊，那其實就不需要 Signaling Server 來交換資訊

實作一個 Signaling Server 方式有很多種，可以用 HTTP 協議也可以用 WebSocket 協議，只要能順利將雙方的資訊做交換即可

## SDP (Session Description Protocol)

會話描述協議（Session Description Protocol 或簡寫 SDP）描述的是流媒體的初始化參數。此協議由 IETF 發表為 [RFC 2327](https://datatracker.ietf.org/doc/html/rfc2327)。

### SDP 格式

```bash
v=0
o=mhandley 2890844526 2890842807 IN IP4 126.16.64.4
s=SDP Seminar
i=A Seminar on the session description protocol
u=http://www.cs.ucl.ac.uk/staff/M.Handley/sdp.03.ps
e=mjh@isi.edu (Mark Handley)
c=IN IP4 224.2.17.12/127
t=2873397496 2873404696
a=recvonly
m=audio 49170 RTP/AVP 0
m=video 51372 RTP/AVP 31
m=application 32416 udp wb
a=orient:portrait
```

- v=協議版本
- o=發起者的 Session、Session ID 及 Session 版本
- s=Session 名字
- i=Session 資訊
- u=有關會議資訊的 url
- e=Email
- p=手機號碼
- c=連線資訊
- t = Session 活動時間
- m = 媒體資訊 ((media) (port) (transport) (fmt list))
- a = 媒體屬性

## Ice Candidate

Ice Candidate 描述 WebRTC 能與 遠程設備通訊所需的協議和路由，啟動 WebRTC P2P 後，通常會在連接的每一端提供多個 IceCandidate，直到絕定最佳線路達成為止．

```json
{
  "sdpMLineIndex": 0,
  "sdpMid": "",
  "candidate": "a=candidate:2999745851 1 udp 2113937151 192.168.56.1 51411 typ host generation 0"
}
```

## WebRTC Flow

![p2p_webrtc]({{ site.baseurl }}/assets/images/p2p_webrtc.png)

1. 雙方 Peer 先連上 Signaling Server
2. PeerA 取得自身 SDP 並呼叫 setLocalDescription
3. PeerA 將 SDP 傳給 Signaling Server
4. Signaling Server 將 PeerA 的 SDP 送給 PeerB
5. PeerB 呼叫 setRemoteDescription 將 PeerA 的 SDP 寫入
6. PeerB 取得自身 SDP 並呼叫 setLocalDescription
7. PeerB 將 SDP 傳給 Signaling Server
8. Signaling Server 將 PeerB 的 SDP 送給 PeerA
9. PeerA 呼叫 setRemoteDescription 將 PeerB 的 SDP 寫入
10. PeerA 向 Stun server 詢問 public IP
11. Stun server 回應 public IP
12. PeerA 向 TURN server 詢問 relay 資訊 (relay ip/port)
13. TURN server 回應 relay 資訊
14. PeerA 將 Ice candidates 傳給 Signaling Server
15. Signaling Server 將 PeerA 的 Ice candidates 送給 PeerB
16. PeerB 呼叫 setRemoteIceCandidate 將 PeerA 的 Ice candidates 寫入
17. PeerB 向 Stun server 詢問 public IP
18. Stun server 回應 public IP
19. PeerB 向 TURN server 詢問 relay 資訊 (relay ip/port)
20. TURN server 回應 relay 資訊
21. PeerB 將 Ice candidates 傳給 Signaling Server
22. Signaling Server 將 PeerB 的 Ice candidates 送給 PeerA
23. PeerA 呼叫 setRemoteIceCandidate 將 PeerB 的 Ice candidates 寫入
24. P2P 通道建立完成

## AWS KVS (Amazon Kinesis Video Streams)

Amazon Kinesis Video Streams 以全受管功能提供符合標準的 WebRTC 實作。您可以使用 Amazon Kinesis Video Streams and WebRTC 安全地即時串流媒體，或在任何攝影機 IoT 裝置與符合 WebRTC 標準的行動或 Web 播放器之間，執行雙向音訊或視訊互動。因為是全受管功能，您不需要建置、執行或擴展任何與 WebRTC 相關的雲端基礎設施，例如訊號或媒體轉送伺服器，即可在應用程式和裝置之間安全地串流媒體。

> 簡單來說 KVS 就是幫你把 STUN, TURN, Signaling Server 加密權限驗證等等都實作了，WebRTC 的部分跟 KVS 是完全獨立的，你也可以選擇自己架設 STUN, TURN, Signaling Server 搭配 Google WebRTC 也能成功串流．

KVS 的 Signaling server 是用 WebSocket 去實作的

> 注意: WebSocket 與 Socket.IO 是不是一樣的，Socket.IO 是根據 Websocket 協議去實作，Socket.IO 有自己的通訊格式，請不要拿 Socket.IO 套件去串接 KVS，會失敗，有興趣可以參考這篇 [【筆記】Socket，Websocket，Socket.io 的差異](https://leesonhsu.blogspot.com/2018/07/socketwebsocketsocketio.html)

## 成果

理解這些 P2P 相關的知識，我們就可以很清楚的實作每一步驟，出錯時也能清楚哪一部分出錯，甚至是替換 Stun / TURN / signaling server 都沒問題，下面貼一下成果圖

[![ios_webrtc]({{ site.baseurl }}/assets/images/ios_webrtc.png)]({{ site.baseurl }}/assets/images/ios_webrtc.png)
[![android_webrtc]({{ site.baseurl }}/assets/images/android_webrtc.png)]({{ site.baseurl }}/assets/images/android_webrtc.png)

## 踩雷補充

- 在串接 AWS KVS 時，AWS Android 的 sample code 是使用 tyrus 套件連 signaling server，但此套件在舊版有一些 SSL 問題有機會失敗，所以我把 tyrus 換成 okhttp 去連 signaling server，但一直連不上 403 Forbidden，iOS 用 starscream 連線正常，後來比對兩平台 URL 發現，Android 的會多做一次 url encode，在 tyrus 沒問題，但在 okhttp 上會有問題 (解法請參考 : <https://github.com/awslabs/amazon-kinesis-video-streams-webrtc-sdk-android/issues/74>)

## 總結

P2P 的基本觀念大致就到這邊，如果想要更深入的理解 P2P 的朋友，可以看參考資源欄中的文章，或直接看 RFC ，裡面會說到每個協議的格式細節．

## 參考資源

- [WebRTC API](https://developer.mozilla.org/zh-TW/docs/Web/API/WebRTC_API)
- [WebRTC Wiki](https://zh.wikipedia.org/wiki/WebRTC)
- [SDP Wiki](https://zh.wikipedia.org/wiki/%E4%BC%9A%E8%AF%9D%E6%8F%8F%E8%BF%B0%E5%8D%8F%E8%AE%AE)
- [RTCIceCandidate](https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate)
- [Amazon Kinesis Video Streams for WebRTC](https://docs.aws.amazon.com/zh_tw/kinesisvideostreams-webrtc-dg/latest/devguide/what-is-kvswebrtc.html)
- [《P2P 技术详解》系列文章](http://www.52im.net/thread-50-1-1.html)
- [flaticon](https://www.flaticon.com/)

**Note:** 如果有任何建議、問題或不同想法，歡迎留言或寄信給我，可以一起討論進步成長🙂
{: .notice--success}