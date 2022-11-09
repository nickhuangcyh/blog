---
layout: single
title: "如何抓取 iOS 的網路封包"
date: 2022-11-09 11:30:00 +0800
excerpt: "利用遠端虛擬介面工具(rvictl)抓包好輕鬆!"
header:
  overlay_image: /assets/images/jordan-harrison-40XgDxBfYXM-unsplash.jpg
  teaser: /assets/images/jordan-harrison-40XgDxBfYXM-unsplash.jpg
tags: [iOS, Network, Packet, Wireshark, rvictl]
categories: [Tools]
---

## 前言

上一篇介紹了 [如何抓取 Android 的網路封包]({{ site.baseurl }}/tools/how-to-capture-network-packet-on-android-using-tcpdump/)，順便也將之前如何抓 iOS 上的網路封包紀錄一下，希望能幫助到其他人．

## 事前準備

1. iOS Device
2. rvictl (通常安裝 XCode 時，會順便安裝附加工具)
3. [Wireshark](https://www.wireshark.org/download.html)

## 查看 Mac 上的網路介面

```bash
ifconfig -l
```
lo0 gif0 stf0 anpi1 anpi0 anpi2 en4 en5 en6 en1 en2 en3 ap1 en0 awdl0 bridge0 utun0 utun1 utun2 en7

## 查詢 iOS 裝置網路介面
1. 將 iOS 裝置連接到 Mac
2. 打開 `XCode` -> `Window` -> `Devices and Simulators` 查看 iOS 裝置的 UUID，如下圖

![ios_uuid]({{ site.baseurl }}/assets/images/ios_uuid.png)

## 創建虛擬網路介面
```bash
rvictl -s 00xxxxxx-xxxxxxxxxxxxxx1E
```

如果出現 
```bash
bootstrap_look_up(): 1102
Starting device 00xxxxxx-xxxxxxxxxxxxxx1E [FAILED]
```
應該是因為 `com.apple.rpmuxd` 沒有啟動，用下面指令查詢
```bash
sudo launchctl list com.apple.rpmuxd
```
如果找不到，可以用下面指令重新載入
```bash
sudo launchctl load -w /Library/Apple/System/Library/LaunchDaemons/com.apple.rpmuxd.plist
```

成功創建後，在查看一次網路介面，會多一個 `rvi0`
```bash
ifconfig -l
```
lo0 gif0 stf0 anpi2 anpi1 anpi0 en4 en5 en6 en1 en2 en3 ap1 en0 bridge0 awdl0 llw0 en7 utun0 utun1 utun2 en9 en10 rvi0

## Wireshark 抓包
開啟 Wireshark 後，選擇 rvi0 介面就可以觀察 iOS 裝置上的封包了，如下圖

![wireshark_rvi0_interface]({{ site.baseurl }}/assets/images/wireshark_rvi0_interface.png)

![wireshark_test_2]({{ site.baseurl }}/assets/images/wireshark_test_2.png)

## 刪除虛擬網路介面
```bash
rvictl -x 00xxxxxx-xxxxxxxxxxxxxx1E
```

## 總結
整體要在 iOS 上觀察封包，非常簡單，只需創建一個虛擬介面即可，Android 在這方便就複雜很多，還需要 root 裝置，有興趣可以參考這篇文章 [如何抓取 Android 的網路封包]({{ site.baseurl }}/tools/how-to-capture-network-packet-on-android-using-tcpdump/)．

觀察封包在物聯網 IoT 領域是非常重要的 Debug 技巧，很多時候都是靠著觀察封包來快速釐清是 App / Server / Firmware 哪一方的問題，畢竟包封是不會騙人的😂

**Note:** 如果有任何建議、問題或不同想法，歡迎留言或寄信給我，可以一起討論進步成長🙂
{: .notice--success}