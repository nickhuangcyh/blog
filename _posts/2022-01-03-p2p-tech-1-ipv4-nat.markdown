---
layout: single
title: "搞懂 P2P 技術 (1) - P2P、IPv4、NAT"
date: 2022-01-03 23:45:03 +0800
tags: [iOS, Android, IPv4, NAT]
categories: [P2P]
---

## 前言

之前工作上遇到需要將自家 IPCam 與 iOS/Android 手機做 P2P 串流影音，研究了許多有關 P2P 的技術，因此想寫一系列有關 P2P 技術的文章．

## P2P

### 為什麼會需要 P2P

在了解一門技術前，我們先來看看為什麼會需要這門技術，這門技術是為了解決什麼問題

## Centralized vs Decentralized vs Distributed

### 中心化網路 (Centralized)

![p2p_centralized](/blog/assets/images/p2p_centralized.png)

所有 client 都連接到同一台 Server，Server 擁有所有 client 的數據訊息

> 可以想成是國家央行發行貨幣，所有人的錢都來自國家央行

- 優點
  - 部署簡單好維護
  - 集中管理數據
- 缺點
  - 安全及隱私風險 (中心 server 遭破解串改，全部都會受影響)
  - 離 Server 較遠的 client 拿資料的時間會更長
  - server 一但故障，其他 client 都不可使用

### 去中心化網路 (Decentralized)

![p2p_decentralized](/blog/assets/images/p2p_decentralized.png)

顧名思義就是不只有一台 server，會有多台 server ，所以當一台或多台 server 故障時，client 還是可以繼續從其他 server 存取數據

> 可以想成是很多銀行可以存錢領錢，有美銀、高盛、摩根、富國等等銀行，且每家都能互相轉錢

- 優點
  - 比`中心化網路`有較高的容錯率 (因為有多個 server)
  - 更好的性能 (在一些用戶多的地區新增節點)
- 缺點
  - 安全及隱私風險 (與中心化一樣)
  - 較高維護成本 (系統設計較複雜多變)
  - 較難部署

### 分佈式網路 (Distributed)

![p2p_distributed](/blog/assets/images/p2p_distributed.png)

類似 Decentralized ， 沒有唯一的中心 server，用戶間可以共享資料所有權，消除了中心 server 的概念，如此可以避免中心 server 故障導致所有 user 無法使用的問題，internet 就是一個分佈式網路，p2p 也屬於此類

> 可以想成是目前的區塊鏈比特幣，並沒有像央銀銀行的角色，貨幣是由鏈上的所有主機幫你做驗證交易紀錄等等，必須要串改超過 51% 以上的主機才能成功串改資訊，較安全

- 優點
  - 極高的容錯率
  - 資料透明安全，不易遭串改
  - 資源共享
- 缺點
  - 較高維護成本 (系統設計較複雜多變)
  - 較難部署

> 三種網路方式皆有各自優點，可以依照遇到的情況去設計．

在 IoT 應用中，假如你要控制家中的 IPCam，就會有以下兩種做法

- 中心化方式為透過 Server 轉發 command 給 IPCam
  - ![p2p_centralized_connect](/blog/assets/images/p2p_centralized_connect.png)
  - 這種作法的優點在於好部署修改，有新增功能時只要 Server 改完部署，其他設備就可更新支援此功能，缺點就是 Server 只要故障就完全不能控制 IoT 裝置，且 Server 的硬體效能要很好才足以應對龐大的 client，需要每月一筆租 Server 機器及流量的費用
- 分佈式方式為不透過 Server 直接向 IPCam 下達指令
  - ![p2p_distributed_connect](/blog/assets/images/p2p_distributed_connect.png)
  - 這種作法的優點在於不需要每月一筆租 server 機器及流量的費用，不會有 Server 故障導致無法操作 IoT 裝置的問題，硬體效能也不需要很好，缺點就是部署程式變得複雜，因為不是每個人都會定期更新手機 app 及 IoT Firmware，還有程式碼會變得複雜，需要處理 p2p tunnel 斷線重新 p2p 流程，也叫容易發生斷線重連，e.g. 手機由 4G/5G 環境走到有 Wifi 環境，網卡自動切換成 Wifi 就會導致斷線需重新 p2p．

> 疑問 : 分佈式方式在複雜的 Internet 下，如何讓手機與 IoT 裝置溝通，就是接下來我們要講解 P2P 技術的部分

## 什麼是 P2P (Peer to Peer)

P2P 是一種無中心化的技術，每一個 client 既是 client 也是 server，在每台主機皆存在共享的數據，以此降低資料遺失安全性等等的風險．

## IPv4

Internet 能夠如此成功進入人類的生活中，IP 的設計可以說是非常重要的一個基礎，可以把 IP 想成你在 Internet 世界裡的地址，任何人要寄信給你都需要知道你的地址才能與你通信，IPv4 的設計就是希望可以容納大家上網，IPv4 總共有 4 \* 8(bits) = 32 bits，大約為 43 億，在當時認為已經非常足夠使用，但如今在 Internet 高速發展下，IPv4 已經不夠用了，所以網路專家一方面尋找 IPv4 替代方案(也就是 IPv6)，一方面研究如何減緩 IPv4 耗盡的問題，於是 NAT 誕生了．

## NAT (Network Address Translation)

就如同字面上的意思，他會在私有網域及公有網域之間做將封包的 IP 做轉換，根據 [RFC1918](https://datatracker.ietf.org/doc/rfc1918/) 保留了三段 IP 地址給內部網路做使用，10.0.0.0-10.255.255.255；172.16.0.0-172.31.255.255；192.168.0.0-192.168.255.255，這些地址在公有網路上是沒有意義的，且不需像 IANA 做申請，如此就大大增加了 IPv4 環境可以容納的上網裝置，因為一個組織只需要一個公有 IP 即可讓所有內部裝置連上 Internet．

![p2p_nat_1](/blog/assets/images/p2p_nat_1.png)

但是 NAT 這樣的設計是有缺點的，外部網路主機無法直接與在 NAT 路由器內的內網主機進行連線

一般沒有 NAT 情況下，Internet 上的兩台主機只要知道彼此 IP 就能進行通訊

![p2p_nat_2](/blog/assets/images/p2p_nat_2.png)

在有一方於 NAT 情況下，外部網路主機 B 要與內部網路主機 A 通訊，就會遇到 NAT 不知道要將來自 B 的封包轉給哪一台內部主機

![p2p_nat_3](/blog/assets/images/p2p_nat_3.png)

除非 A 已經先訪問過 B 主機的情況下，NAT 會將 A 的轉址紀錄在 mapping table 中，之後由 B 發給 A 的封包，NAT 就會透過 mapping table 轉址將封包正確轉發給 A

![p2p_nat_4](/blog/assets/images/p2p_nat_4.png)

但如果兩台主機皆在 NAT 下，此時不管是由 A 或 B 發起 (A → B 或 B → A)，都無法連接到對方，因為兩邊的 mapping table 都是空的沒有紀錄

![p2p_nat_5](/blog/assets/images/p2p_nat_5.png)

此時就必須要由任一方先發起封包，假設由 A 發起 (1)，此時 A 的 NAT mapping table 會留下 A 的轉換 IP (2)，但封包到了 B 的 NAT 時，因 B 的 NAT mapping table 為空，所以會先失敗 (3)，再來由 B 發起封包給 A (4)，會在 B NAT mapping table 留下 B 的轉換 IP (5)，封包到了 A NAT 後 (6)，因 A 的 NAT mapping table 存在 A 的 IP，所以封包可以順利到達 A (7)，A 在發送封包到 B (8)，此時雙方的 NAT mapping table 皆有紀錄(9, 10)，在 NAT 裡的 Client 就能順利相互通訊，此時 P2P 就成功了，反之亦然

![p2p_nat_6](/blog/assets/images/p2p_nat_6.png)

## NAT 類型

### Full-cone NAT (完全錐型 NAT)

- 一旦內部位址（iAddr:iPort）對映到外部位址（eAddr:ePort），所有發自 iAddr:iPort 的封包都經由 eAddr:ePort 向外傳送。
- 任意外部主機都能經由發送封包給 eAddr:ePort 到達 iAddr:iPort。

![p2p_full_cone_nat](/blog/assets/images/p2p_full_cone_nat.png)

### Restricted cone NAT (受限錐型 NAT)

- 一旦內部位址（iAddr:iPort）對映到外部位址（eAddr:ePort），所有發自 iAddr:iPort 的封包都經由 eAddr:ePort 向外傳送。
- 唯 iAddr:iPort 曾經發送封包到外部主機（nAddr:any），外部主機才能經由發送封包給 eAddr:ePort 到達 iAddr:iPort。（註：any 指外部主機源埠不受限制。）

![p2p_full_cone_nat](/blog/assets/images/p2p_restricted_cone_nat.png)

### Port-Restricted cone NAT (端口受限錐型 NAT)

類似受限制錐形 NAT（Restricted cone NAT），但是還有埠限制。

- 一旦內部位址（iAddr:iPort）對映到外部位址（eAddr:ePort），所有發自 iAddr:iPort 的封包都經由 eAddr:ePort 向外傳送。
- 在受限圓錐型 NAT 基礎上增加了外部主機源埠必須是固定的。

![p2p_full_cone_nat](/blog/assets/images/p2p_port_restricted_cone_nat.png)

### Symmetric NAT (對稱型 NAT)

- 每一個來自相同內部 IP 與埠，到一個特定目的地 IP 和埠的請求，都對映到一個獨特的外部 IP 和埠。
  同一內部 IP 與埠發到不同的目的地和埠的資訊包，都使用不同的對映
- 只有曾經收到過內部主機資料的外部主機，才能夠把封包發回

![p2p_full_cone_nat](/blog/assets/images/p2p_symmetric_nat.png)

> Symmetric NAT 無法實現 P2P ，原因就在於對稱型每次的請求都會對應到不同的外部 IP 和 Port

### 結論

有關 P2P、IPv4、NAT 就先介紹到此，下一篇會介紹實現 P2P 需要哪些協定工具，STUN、TURN、ICE 是什麼

## 參考資源

- [Centralized vs Decentralized vs Distributed Systems](https://medium.com/berty-tech/berty-tech-centralized-vs-decentralized-vs-distributed-systems-2e9efd856c2)
- [《P2P 技术详解》系列文章](http://www.52im.net/thread-50-1-1.html)
- [對等網路](https://zh.wikipedia.org/wiki/%E5%B0%8D%E7%AD%89%E7%B6%B2%E8%B7%AF)
- [網路位址轉換](https://zh.wikipedia.org/wiki/%E7%BD%91%E7%BB%9C%E5%9C%B0%E5%9D%80%E8%BD%AC%E6%8D%A2)
- [flaticon](https://www.flaticon.com/)
