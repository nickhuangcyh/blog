---
layout: single
title: "3D Graphic Engine Tips - 三角形 x UV mapping x Vertices & Indices"
date: 2022-01-02 10:04:00 +0800
tags: [iOS, Android, 3D, OpenGL, ARKit, ARCore, Sceneform, SceneKit]
categories: [Mobile]
---

## 前言

前陣子在 iOS, Android 上開發 AR 相關的功能，因為本身沒有 3D 繪圖的相關知識，後來仔細研究，終於有一些成果，這篇用來紀錄有關 3D 繪圖的小小知識，希望可以幫助到其他人．

## 3D 圖形世界所有物件都是由小三角形所構成

![3d_mesh](https://www.researchgate.net/profile/Predrag-Novakovic-2/publication/322096576/figure/fig2/AS:631626539229214@1527602910310/3D-mesh-triangles-with-different-resolution-3D-Modelling-for-programmers-Available-at.png)

> <https://www.researchgate.net/figure/3D-mesh-triangles-with-different-resolution-3D-Modelling-for-programmers-Available-at_fig2_322096576>

## UV mapping

> 將 2D 圖像投影到 3D 模型表面進行 Texture 映射的 3D 建模過程

![uv_mapping](https://upload.wikimedia.org/wikipedia/commons/0/04/UVMapping.png)

> <https://en.wikipedia.org/wiki/UV_mapping>

以立方體為例，將各面 Texture 壓平為 2D，在映射到 UV 座標中
UV 座標，U 為橫軸，V 為縱軸，左上為(0,0)，右上為(1,1)

![uv_box_coordinate](https://wiki.povray.org/uploaded/4/48/RefImgBoxmap.gif)

> <https://wiki.povray.org/content/Reference:UV_Mapping>

## Vertices and Indices

![vertices_and_indices](https://www.oreilly.com/library/view/real-time-3d-graphics/9781788629690/assets/1ccc3e64-684e-4098-b910-505346c4b396.png)

> <https://www.oreilly.com/library/view/real-time-3d-graphics/9781788629690/0e5b1b24-f1a7-414d-868b-37df694749ad.xhtml>

順著頂點標示出頂點的 Index，根據要畫出的三角形，以逆時鐘方向依序填入 Index

另一種方式可以用[安培右手定則](https://zh.wikipedia.org/wiki/%E5%AE%89%E5%9F%B9%E5%AE%9A%E5%BE%8B)，旋轉方向為 index 的順序，大拇指指向方向為面朝向的方位

因此在 3D 世界要畫出雙面三角形，code 裡的 index 必須為 `[0, 2, 1, 0, 1, 2]`，`[0, 2, 1]` 為正面，`[0, 1, 2]` 為背面

> <https://www.oreilly.com/library/view/real-time-3d-graphics/9781788629690/0e5b1b24-f1a7-414d-868b-37df694749ad.xhtml>

## 總結

不管是在開發 iOS, Android, Web，只要與 3D 相關，3D 遊戲, AR, VR 等等都會用到，是非常實用的觀念!
