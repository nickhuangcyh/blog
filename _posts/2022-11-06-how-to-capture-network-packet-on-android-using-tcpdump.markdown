---
layout: single
title: "如何抓取 Android 的網路封包"
date: 2022-11-06 23:30:00 +0800
excerpt: "抓封包利器 - tcpdump"
header:
  overlay_image: /assets/images/jordan-harrison-40XgDxBfYXM-unsplash.jpg
  teaser: /assets/images/jordan-harrison-40XgDxBfYXM-unsplash.jpg
tags: [Android, Network, Packet, Wireshark]
categories: [Tools]
---

## 前言

最近工作上遇到需要抓封包分析才能釐清的問題，以前在開發iOS非常簡單，可以用 `rvictl -s [iOS UUID]` 在 Mac 上創建一個虛擬網卡介面，就可以開 Wireshark 抓 iOS 上的封包了，最近開發 Android 也遇到需要抓封包的情況，上網學習了一下，在這邊紀錄，希望可以幫到其他人🙂

## 事前準備

1. 一台 root 過的 Android Device
2. [tcpdump](https://www.androidtcpdump.com/) tool

> 補充說明: 如果沒有 root 的 Android Device，可以嘗試用 [tPacketCapture](https://play.google.com/store/apps/details?id=jp.co.taosoftware.android.packetcapture&hl=zh_TW&gl=US) 來抓包，它的原理類似開一個類似 VPN 的 app，發送的封包此 app 會抓取，但我個人實測，有時候有些封包會好像沒發出去，影響實際情況，在此不推薦！

## 將 tcpdump 放入 Android 裝置

```bash
adb push tcpdump /data/local/tcpdump
```
如果出現 `can't execute: Permission denied`，請以 root 身份調整 `/data/local` 資料夾權限，如下
```bash
adb shell
su
chmod 777 /data/local
exit
```
調整後再試一次上面的指令
```bash
adb push tcpdump /data/local/tcpdump
```

## 執行 tcpdump 
先到 `/data/local` 目錄下
```bash
adb shell
su
cd /data/local
```
修改 tcpdump 權限為可執行
```bash
chmod a+x tcpdump
```
執行 tcpdump 開始抓封包
```bash
./tcpdump -i any -p -s 0 -w /sdcard/capture.pcap
```
抓完封包後 `control + c` 結束抓包程序

## 導出 Android 封包檔案到電腦上
```bash
adb pull /sdcard/capture.pcap
```
在用 Wireshark 開啟即可
![wireshark_test_1]({{ site.baseurl }}/assets/images/wireshark_test_1.png)

## 總結
抓封包是很重要的 debug 工具，很多時候使用第三方的 `frameworks/libraries` 較難查出是 `server` or `client` 的問題．

也有可能是 `framework/library` 本身沒寫好，需要修改第三方的程式碼

之前在做 iOS FFMpeg 在串 RTSP 時原始碼沒送`GET_PARAMETER` 的 keepalive 封包，導致 1 分鐘後就斷線，之後也是透過 Wireshark 抓包，改 FFMpeg 原始碼才解決

透過觀察封包能夠快速釐清問題，不需要花大量時間去猜測問題，是網路開發中很重要的技巧之一！