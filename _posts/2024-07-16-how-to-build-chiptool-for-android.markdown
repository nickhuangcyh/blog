---
layout: single
title: "How to build CHIPTool for Android"
date: 2024-07-16 19:50:00 +0800
excerpt: "本篇文章我將介紹如何按照步驟 Build 出 CHIPTool apk"
header:
  overlay_image: /assets/images/lenny-kuhne-jHZ70nRk7Ns-unsplash.jpg
  teaser: /assets/images/lenny-kuhne-jHZ70nRk7Ns-unsplash.jpg
tags: [Android, CHIP, Matter]
categories: [Tools]
---

## 前言

最近因工作之需，研究了一下如何 Build CHIPTool 的 apk，因為按照官方文件步驟實作會有錯誤，自己一步一步解決最後終於成功，因此想寫一篇文章紀錄，幫助我自己進行複習，也希望能對其他開發者提供幫助。🙂

## 簡介

Matter（前稱為Project CHIP，即Connected Home over IP）是一個統一的開源連接標準，旨在增強智能家居設備之間的互操作性和兼容性。這個標準由連接標準聯盟（CSA）開發，成員包括亞馬遜、蘋果、谷歌和Zigbee聯盟等主要行業參與者。

Matter的目標是簡化製造商的開發過程，確保智能家居產品的安全性、可靠性和易用性。它利用互聯網協議（IP）來實現各種設備、移動應用和雲服務之間的通信，支持Thread和Wi-Fi網絡傳輸。

Matter的目標是創建一個無縫且互操作的智能家居生態系統，使不同製造商的設備能夠順利協同工作。

## 事前準備

因為在個人開發環境 Build 容易破壞環境，會需要修改 ANDROID_HOME & ANDROID_NDK_HOME 等等...，因為 CHIP 有提供 build 環境的 image，所以這邊我選擇用 docker 使用 CHIP 的 image 啟 container 來 build．

* Docker

## Pull Docker Image

這個步驟會需要一點時間，可以去喝杯咖啡

```bash
docker pull ghcr.io/project-chip/chip-build-android:latest
```

## Run container

```bash
docker run -it -v ~/workspace/connectedhomeip:/connectedhomeip ghcr.io/project-chip/chip-build-android:latest
```

上面簡單的兩個步驟，我們就將乾淨可 Build CHIPTool 的環境建構好了．

## 將目錄標示為安全，方便git操作

```bash
git config --global --add safe.directory /connectedhomeip
git config --global --add safe.directory /connectedhomeip/third_party/pigweed/repo
```

## Download source code & sync submodule

這個步驟會超級久，因為資料量非常大，可以先去做其他事或睡一覺😂

```bash
git clone https://github.com/project-chip/connectedhomeip.git
```

```bash
git submodule sync && git submodule update --init
```

## 同意 Android sdk 的 licenses

我們需要先同意 Android sdk licenses，不然等等 build 的時候會出現錯誤(如下)，因為我們沒有同意 licenses

```bash
FAILURE: Build failed with an exception.
2024-07-16 09:31:40 WARNING 
2024-07-16 09:31:40 WARNING * What went wrong:
2024-07-16 09:31:40 WARNING Could not determine the dependencies of task ':app:compileDebugJavaWithJavac'.
2024-07-16 09:31:40 WARNING > Failed to install the following Android SDK packages as some licences have not been accepted.
2024-07-16 09:31:40 WARNING      build-tools;30.0.2 Android SDK Build-Tools 30.0.2
2024-07-16 09:31:40 WARNING      platforms;android-31 Android SDK Platform 31
2024-07-16 09:31:40 WARNING   To build this project, accept the SDK license agreements and install the missing components using the Android Studio SDK Manager.
2024-07-16 09:31:40 WARNING   Alternatively, to transfer the license agreements from one workstation to another, see http://d.android.com/r/studio-ui/export-licenses.html
2024-07-16 09:31:40 WARNING   
2024-07-16 09:31:40 WARNING   Using Android SDK: /opt/android/sdk
2024-07-16 09:31:40 WARNING 
2024-07-16 09:31:40 WARNING * Try:
2024-07-16 09:31:40 WARNING Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.
2024-07-16 09:31:40 WARNING 
2024-07-16 09:31:40 WARNING * Get more help at https://help.gradle.org
2024-07-16 09:31:40 WARNING 
2024-07-16 09:31:40 WARNING BUILD FAILED in 1m 50s
```

為了方便我們先將PATH export，使其能在任何目錄下呼叫

```bash
export PATH=$PATH:/opt/android/sdk/tools/bin
```

同意所有 licenses

```bash
sdkmanager --licenses
```

全部輸入 `y` or `yes`

## 檢查環境變數

用 docker 使用 CHIP 提供的 image 環境好處之一就是我們不用再去下載指定的 sdk 及 ndk 版本，也不需要重新指向環境變數

```bash
root@f39e36c15675:/connectedhomeip# echo $ANDROID_HOME
> /opt/android/sdk

root@f39e36c15675:/connectedhomeip# echo $ANDROID_NDK_HOME
> /opt/android/android-ndk-r23c
```

## Preparing for build

1. 切換到 Matter repositoy 

```bash
cd /connectedhomeip
```

2. Run bootstrap (only required first time) 此步驟也需要一段時間

```bash
source scripts/bootstrap.sh
```

## Android CHIPTool from scripts

1. 執行 script

```bash
./scripts/build/build_examples.py --target android-arm64-chip-tool build
```

但這個步驟跑到最後會出現錯誤說找不到 build.ninja

```bash
ninja: error: loading 'build.ninja': No such file or directory
```

我猜這邊是 CHIP 官方文件沒有寫完整，會無法進行下去，這邊我的解決方式是到 `/out/android-arm64-chip-tool` 目錄下去建立 `build.ninja` ，很簡單如下

```bash
cd /connectedhomeip/out/android-arm64-chip-tool
gn gen .
```

這樣就會產生 `build.ninja` 檔案了

接下來回到 `/connectedhomeip` 目錄下

```bash
cd ../..
```

再執行一次就大功告成了! (Build 的過程會花比較久時間)

```bash
./scripts/build/build_examples.py --target android-arm64-chip-tool build
```

Build 完後可以在下面路徑找到 apk

 `out/android-$TARGET_CPU-chip-tool/outputs/apk/debug/app-debug.apk`

## 參考

* [CHIP Android Building](https://github.com/project-chip/connectedhomeip/blob/master/docs/guides/android_building.md)
* [CHIP Issue #28317](https://github.com/project-chip/connectedhomeip/issues/28317)
* [CHIP Issue #21093](https://github.com/project-chip/connectedhomeip/issues/21093)
* [CHIP Issue #32794](https://github.com/project-chip/connectedhomeip/issues/32795)
* [project-chip/chip-build-android/All versions](https://github.com/project-chip/connectedhomeip/pkgs/container/chip-build-android/versions?filters%5Bversion_type%5D=tagged)
