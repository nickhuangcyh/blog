var store = [{
        "title": "使用 Octopress 架設靜態 Blog - Octopress x GitHub pages x Blog",
        "excerpt":"為什麼要寫 Blog? 工作中受到了很多教學網站及博客文章(簡書, CSDN, Medium…)非常多的幫助，因此想寫部落格將自己學到的技術記錄下來，一方面讓自己複習，一方面也希望能幫助到有需要的人。 為什麼用 Octopress? 其實有很多現成免費的部落格平台像是 Medium, Blogger 等…，但最後我還是決定用 Octopress 來建立自己的部落格，它吸引我的原因如下: 使用 Git 做版本控管，託管於 Github 使用 Markdown 寫文章 可以學到東西 免費 Git 對軟體工程師再熟悉不過了，且託管於工程師最愛充滿開源專案的 Github 平台，用 Markdown 寫文章，也能訓練自己寫 README 語法的熟練程度，又可以學到東西，因此選擇 Octopress。 事前準備 申請Github帳號 安裝Git brew install git 安裝Ruby brew install ruby 確認版本 ruby --version 建置 Octopress git clone git://github.com/imathis/octopress.git octopress...","categories": ["Blog"],
        "tags": ["Octopress"],
        "url": "/blog/blog/octopress-setup/",
        "teaser": "/blog/assets/images/alfons-morales-YLSwjSy7stw-unsplash.jpg"
      },{
        "title": "如何使 Octopress website 能被 Google 搜索到 - Google x Search x Blog",
        "excerpt":"在 Google 搜尋不到我的 Blog   當我們在建立完 Jekyll Blog 後，會發現竟然 Google 不到我們的 Blog 網站，別擔心這是因為我們尚未將網站提交加入 Google Search Console 中   將網站加入 Google Search Console   進入 Google Search Console   這邊使用網址前綴方式添加，加你的 Blog domain 填入並繼續      下載 googlexxxxxxxxxx.html 檔案放到 octopress/source 目錄下，commit 上傳到 GitHub 上，點擊驗證   rake gen_deploy      驗證成功 👍      Note: 如果有任何建議、問題或不同想法，歡迎留言或寄信給我，可以一起討論進步成長🙂  ","categories": ["Blog"],
        "tags": ["Octopress"],
        "url": "/blog/blog/how-to-add-your-octopress-blog-website-to-google-search-console/",
        "teaser": "/blog/assets/images/alfons-morales-YLSwjSy7stw-unsplash.jpg"
      },{
        "title": "使用 Jekyll + minimal-mistakes 在 Github pages 上架設自己的部落格 - Jekyll x Minimal-Mistakes x GitHub pages",
        "excerpt":"為什麼寫 Blog 文章 工作上受到了很多教學網站及 Blog 文章非常多的幫助，因此想架設一個自己的 Blog，將工作及生活學到的技術知識記錄下來，幫助自己複習，也希望能幫助到有需要的人。 為什麼選用 Jekyll + minimal-mistakes 選用 Jekyll 的原因 可用 Markdown 語法寫文章，Jekyll 會將 markdown 轉成 html 檔案 有非常豐富的主題 可客製化 選用 Minimal-mistakes 主題的原因 較多人使用，Github 上 star 有 9k 支援 Dark skin 可以放大圖，跟 Medium 類似 其實原本我是用 Octopress ，後來因為 Octopress 已不再維護，且主題沒有 Jekyll 來得豐富，最後決定使用 Jekyll 重新架一個 Blog Octopress 廢話不多說，現在讓我們一起用...","categories": ["Blog"],
        "tags": ["Jekyll","Minimal-Mistakes","Theme"],
        "url": "/blog/blog/creating_a_github_pages_with_jekyll_and_minimal_mistakes/",
        "teaser": "/blog/assets/images/alfons-morales-YLSwjSy7stw-unsplash.jpg"
      },{
        "title": "如何使 Jekyll website 能被 Google 搜索到 - Google x Search x Blog",
        "excerpt":"在 Google 搜尋不到我的 Blog 當我們在建立完 Jekyll Blog 後，會發現竟然 Google 不到我們的 Blog 網站，別擔心這是因為我們尚未將網站提交加入 Google Search Console 中 將網站加入 Google Search Console 進入 Google Search Console 這邊使用網址前綴方式添加，加你的 Blog domain 填入並繼續 下載 googlexxxxxxxxxx.html 檔案放到 Jekyll 根目錄，commit 上傳到 GitHub 上，點擊驗證 驗證成功 👍 提交 Sitemap 「Sitemap」是一種用來提供網站資訊的檔案，您可以在其中列出網頁、影片和其他檔案的資訊，並呈現這些內容彼此間的關係。Google 等搜尋引擎都會讀取網站的 Sitemap 檔案，藉此以更有效率的方式檢索網站。 瞭解 Sitemap 打開 Gemfile 在 group...","categories": ["Blog"],
        "tags": ["Jekyll","Google"],
        "url": "/blog/blog/how-to-add-your-jekyll-blog-website-to-google-search-console/",
        "teaser": "/blog/assets/images/alfons-morales-YLSwjSy7stw-unsplash.jpg"
      },{
        "title": "3D Graphic Engine Tips - 三角形 x UV mapping x Vertices & Indices",
        "excerpt":"前言 前陣子在 iOS, Android 上開發 AR 相關的功能，因為本身沒有 3D 繪圖的相關知識，後來仔細研究，終於有一些成果，這篇用來紀錄有關 3D 繪圖的小小知識，希望可以幫助到其他人． 3D 圖形世界所有物件都是由小三角形所構成 https://www.researchgate.net/figure/3D-mesh-triangles-with-different-resolution-3D-Modelling-for-programmers-Available-at_fig2_322096576 UV mapping 將 2D 圖像投影到 3D 模型表面進行 Texture 映射的 3D 建模過程 https://en.wikipedia.org/wiki/UV_mapping 以立方體為例，將各面 Texture 壓平為 2D，在映射到 UV 座標中 UV 座標，U 為橫軸，V 為縱軸，左上為(0,0)，右上為(1,1) https://wiki.povray.org/content/Reference:UV_Mapping Vertices and Indices https://www.oreilly.com/library/view/real-time-3d-graphics/9781788629690/0e5b1b24-f1a7-414d-868b-37df694749ad.xhtml 順著頂點標示出頂點的 Index，根據要畫出的三角形，以逆時鐘方向依序填入 Index 另一種方式可以用安培右手定則，旋轉方向為 index 的順序，大拇指指向方向為面朝向的方位 因此在 3D 世界要畫出雙面三角形，code...","categories": ["Mobile"],
        "tags": ["iOS","Android","3D","OpenGL","ARKit","ARCore","Sceneform","SceneKit"],
        "url": "/blog/mobile/3d_graphic_tips/",
        "teaser": "/blog/assets/images/nick-brunner-k4xDXNskVsQ-unsplash.jpg"
      },{
        "title": "搞懂 P2P 技術 (1) - P2P x IPv4 x NAT",
        "excerpt":"前言 之前工作上遇到需要將自家 IPCam 與 iOS/Android 手機做 P2P 串流影音，研究了許多有關 P2P 的技術，因此想寫一系列有關 P2P 技術的文章． P2P 為什麼會需要 P2P 在了解一門技術前，我們先來看看為什麼會需要這門技術，這門技術是為了解決什麼問題 Centralized vs Decentralized vs Distributed 中心化網路 (Centralized) 所有 client 都連接到同一台 Server，Server 擁有所有 client 的數據訊息 可以想成是國家央行發行貨幣，所有人的錢都來自國家央行 優點 部署簡單好維護 集中管理數據 缺點 安全及隱私風險 (中心 server 遭破解串改，全部都會受影響) 離 Server 較遠的 client 拿資料的時間會更長 server 一但故障，其他 client 都不可使用 去中心化網路 (Decentralized)...","categories": ["P2P"],
        "tags": ["iOS","Android","IPv4","NAT"],
        "url": "/blog/p2p/p2p-tech-1-ipv4-nat/",
        "teaser": "/blog/assets/images/nasa-1lfI7wkGWZ4-unsplash.jpg"
      },{
        "title": "搞懂 P2P 技術 (2) - STUN x TURN x ICE",
        "excerpt":"前言 上一篇介紹完中心化、去中心化、分佈式網路以及 IPv4、NAT、NAT 類型，但我們依舊還有些問題未解決 A, B 兩端要如何知道彼此的內部網路 IP 及外部網路 IP (STUN) 上篇有提到 NAT 類型如果是對稱型時，會無法打通 P2P，當遇到此情形時該 (TURN) 有沒有一種框架整合這整個 P2P 流程 (ICE) STUN STUN（Session Traversal Utilities for NAT，NAT 對談穿越應用程式）是一種網路協定，它允許位於 NAT（或多重 NAT）後的客戶端找出自己的公網位址，查出自己位於哪種類型的 NAT 之後以及 NAT 為某一個本地埠所繫結的 Internet 端埠。這些資訊被用來在兩個同時處於 NAT 路由器之後的主機之間建立 UDP 通信。該協定由 RFC 5389 定義。 STUN Wiki TURN TURN（全名 Traversal Using Relay NAT），是一種資料傳輸協定（data-transfer...","categories": ["P2P"],
        "tags": ["iOS","Android","STUN","TURN","ICE"],
        "url": "/blog/p2p/p2p-tech-2-stun-turn-ice/",
        "teaser": "/blog/assets/images/nasa-1lfI7wkGWZ4-unsplash.jpg"
      },{
        "title": "搞懂 P2P 技術 (3) - WebRTC x AWS x KVS",
        "excerpt":"WebRTC 全名 Web Real-Time Communication，是一個支援網頁瀏覽器進行即時語音對話或影片對話的 API WebRTC Wiki WebRTC 的底層就是使用 ICE 來進行 P2P 打洞 Signaling Server 信令伺服器，用來交換雙方的 SDP 及 Ice candidate 來完成 P2P 打洞 實作 Signaling Server WebRTC 沒有明確定義如何實作 Signaling Server，主要原因在於如果雙方一開始就知道對方的資訊，那其實就不需要 Signaling Server 來交換資訊 實作一個 Signaling Server 方式有很多種，可以用 HTTP 協議也可以用 WebSocket 協議，只要能順利將雙方的資訊做交換即可 SDP (Session Description Protocol) 會話描述協議（Session Description Protocol 或簡寫...","categories": ["P2P","AWS"],
        "tags": ["iOS","Android","WebRTC","KVS"],
        "url": "/blog/p2p/aws/p2p-tech-3-webrtc-kvs/",
        "teaser": "/blog/assets/images/nasa-1lfI7wkGWZ4-unsplash.jpg"
      },{
        "title": "如何抓取 Android 的網路封包",
        "excerpt":"前言 最近工作上遇到需要抓封包分析才能釐清的問題 以前在開發 iOS 非常簡單，可以用 rvictl -s [iOS UUID] 在 Mac 上創建一個虛擬網卡介面，就可以開 Wireshark 抓 iOS 上的封包了 最近開發 Android 也遇到需要抓封包的情況，上網學習了一下，在這邊紀錄，希望可以幫到其他人🙂 事前準備 一台 root 過的 Android Device tcpdump tool Wireshark 補充說明: 如果沒有 root 的 Android Device，可以嘗試用 tPacketCapture 來抓包，它的原理類似開一個類似 VPN 的 app，發送的封包此 app 會抓取，但我個人實測，有時候有些封包會好像沒發出去，影響實際情況，在此不推薦！ 將 tcpdump 放入 Android 裝置 adb push tcpdump /data/local/tcpdump...","categories": ["Tools"],
        "tags": ["Android","Network","Packet","Wireshark"],
        "url": "/blog/tools/how-to-capture-network-packet-on-android-using-tcpdump/",
        "teaser": "/blog/assets/images/jordan-harrison-40XgDxBfYXM-unsplash.jpg"
      },{
        "title": "如何抓取 iOS 的網路封包",
        "excerpt":"前言 上一篇介紹了 如何抓取 Android 的網路封包，順便也將之前如何抓 iOS 上的網路封包紀錄一下，希望能幫助到其他人． 事前準備 iOS Device rvictl (通常安裝 XCode 時，會順便安裝附加工具) Wireshark 查看 Mac 上的網路介面 ifconfig -l lo0 gif0 stf0 anpi1 anpi0 anpi2 en4 en5 en6 en1 en2 en3 ap1 en0 awdl0 bridge0 utun0 utun1 utun2 en7 查詢 iOS 裝置網路介面 將 iOS 裝置連接到 Mac 打開 XCode -&gt;...","categories": ["Tools"],
        "tags": ["iOS","Network","Packet","Wireshark","rvictl"],
        "url": "/blog/tools/how-to-capture-network-packet-on-ios/",
        "teaser": "/blog/assets/images/jordan-harrison-40XgDxBfYXM-unsplash.jpg"
      },{
        "title": "Design Pattern (1) - Object-Oriented Concepts (物件導向概念)",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 Object-Oriented Concepts 物件導向概念 物件導向設計的四大核心概念，為設計模式的理解奠定基礎。讓我們一同簡單探索這些概念。 Encapsulation 封裝 封裝是將屬性及方法的實作細節隱藏在類別中，只暴露必要的方法給使用者，保護內部屬性和方法不被隨意修改。 就像開車時，我們只需知道踩油門會加速，踩煞車會停止，而不必了解馬達、電瓶、發動機等原理。這些細節都被封裝在引擎蓋下。 Inheritance 繼承 繼承使子類別可以繼承父類別的屬性和方法，達到程式碼重複使用的目的。 在自然界中，狗與貓都是動物，都能呼吸和行動；花草和樹木都是植物，都能進行光合作用。這就是繼承的概念。 Polymorphism 多型 多型為不同的類別提供統一的介面或抽象類別，以操作不同的實體物件。 以 iPhone 6S 為例，不論是由台積電還是三星代工的晶片，使用者拿到的 iPhone 6S 功能都一樣。這就是多型。 Abstraction 抽象 抽象通過類型或接口隱藏實作細節，只提供必要的功能給使用者。 我們在手機上安裝的 App 是對各種應用程式的抽象名稱；去市場買水果，不論是蘋果還是香蕉，水果也是一種抽象名稱。這就是抽象。 總結 理解了物件導向的核心概念後，我們將進一步探討這些概念如何引導我們進入設計原則的世界。物件導向概念為我們提供了創建模塊化、可重用和易於維護程式碼的基礎，而設計原則則教我們如何有效地應用這些概念來解決更複雜的設計問題。接下來，我們將探討這些原則，並了解它們如何幫助我們實現高質量的軟體設計。 Object-Oriented Concepts -&gt; Design Principle -&gt; Design Pattern 參考 Head First Design Patterns...","categories": ["Design Pattern"],
        "tags": ["Object-Oriented Concepts"],
        "url": "/blog/design%20pattern/design-pattern-1-object-oriented-concepts/",
        "teaser": "/blog/assets/images/design_patterns.jpg"
      },{
        "title": "Design Pattern (2) - Design Principles (設計原則)",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 Design Principle Design Principle 是用來幫助我們改善物件導向設計的建議，幫助我們設計出更好的軟體。 SOLID 物件導向程式設計基本五大原則 Single Responsibility Principle (SRP) 單一職責原則 物件應該僅具有一種單一功能，應只會有一個理由去改變此物件 e.g. 我們要做登入頁面功能，我們會這樣寫 Swift Kotlin 依照單一職責原則，我們應該要將 API 及 DB 的功能分開，修改如下 Swift Kotlin 400: Invalid request 400: Invalid request 有些文章會說 save, delete function 也須拆開在不同 class(DeleteDBService, SaveDBService)處理, 因為 save. delete 是不同職責修改項目, 不應動到另一個 class,...","categories": ["Design Pattern"],
        "tags": ["Design Principle"],
        "url": "/blog/design%20pattern/design-pattern-2-design-principle/",
        "teaser": "/blog/assets/images/design_patterns.jpg"
      },{
        "title": "Design Pattern (3) - Design Patterns (設計模式)",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 Design Pattern 是什麼？ Design Pattern 是在軟體工程中，用於常見問題解決的一種標準化方法。它們是經過驗證的解決方案，可以用來解決設計中的特定問題。 設計模式的組成要素 Context Context是指設計模式應用的具體場景或背景。它描述了模式應用的環境和條件。 Forces Forces是指在設計過程中需要考慮的各種因素，包括但不限於性能需求、可擴展性、維護性等。 Problem Problem是指在特定Context和Forces下，開發者面臨的具體設計問題。 Solution Solution是指設計模式提供的解決方案，它幫助開發者解決Problem，並考慮到了Forces的影響。 設計模式的應用步驟 物件導向程式分析（OOA）：從高層次理解應用的需求和結構。(此步驟需要劃出UML圖) 看清楚Context：透過UML圖理解模式應用的具體場景。 察覺Forces：識別影響設計的關鍵因素。 找到Problem：明確需要解決的設計問題。 套用模式：根據Problem及Forces選擇合適的設計模式。 得到新的Resulting Context：應用模式後，獲得改進後的設計方案。(此步驟需要劃出UML圖) 誤記導向程式設計 (OOP)：透過新的Resulting Context UML圖，開始撰寫程式碼實作。 Design Patterns Categories Design Pattern 可以分為三種基本的類型 Creational 創建型 創建實例化物件有關的 Patterns Factory Method Pattern Abstract Factory Pattern...","categories": ["Design Pattern"],
        "tags": ["Design Pattern"],
        "url": "/blog/design%20pattern/design-pattern-3-design-pattern/",
        "teaser": "/blog/assets/images/design_patterns.jpg"
      },{
        "title": "深入解析 Google Wallet Smart Tap：未來的支付方式",
        "excerpt":"前言 最近因工作之需，深入研究了 Google Wallet Smart Tap 相關技術，因此想撰寫這篇文章來記錄所學。這不僅能幫助我自己進行複習，也希望能對其他開發者提供幫助。🙂 什麼是 NFC NFC（Near Field Communication，近場通訊）是一種使兩個裝置在幾厘米距離內進行通訊的短距離無線通訊技術。它被廣泛應用於支付、票務、資料交換等領域。 Google Wallet Smart Tap 簡介 Smart Tap 是 Google 利用 NFC 技術開發的一種專有通訊協議。它允許用戶通過移動裝置在支持的終端機上進行快速且安全的交易和資料交換。 如果你們公司是實作 Terminal 端，必須獲得認證才能使用此協議，這部分我有寫信問 Google 得到如下回覆，需要提供資訊簽署協議，Google 才會提供機密文件讓你實作。 If you are a terminal provider and would like to certify your terminal for use with Google Wallet, please provide...","categories": ["Pay","Technology"],
        "tags": ["Google Wallet","Smart Tap","NFC","Payment Systems"],
        "url": "/blog/pay/technology/google-wallet-smart-tap-exploring/",
        "teaser": "/blog/assets/images/mika-baumeister-m7HWPWVjfJ4-unsplash.jpg"
      },{
        "title": "Design Pattern (4) - UML (統一建模語言)",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 UML (Unified Modeling Language) UML 是一種用視覺圖形化來規劃建構軟體的方法。 不要急著寫程式，尤其是遇到較複雜的功能，先思考如何設計架構畫出 UML 圖，程式才會具有可讀性、維護性及擴展性。 Class 類別 如圖分為三列依序是 Class 名稱 Attribute 屬性 Operations 方法 Interface 介面 Interface 有兩種表示法 一般表示法 一般型式與 Class 並無太大區別，只要在 Class Name 上方標註 &lt;&lt;interface&gt;&gt; 即可 棒棒糖表示法 用球狀來表示介面 Attribute 屬性 Visibility 可視範圍 Sign Modifiers + Public # Protected...","categories": ["Design Pattern"],
        "tags": ["UML"],
        "url": "/blog/design%20pattern/design-pattern-4-uml/",
        "teaser": "/blog/assets/images/design_patterns.jpg"
      },{
        "title": "Design Pattern (5) - Simple Factory Pattern (簡單工廠模式)",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 需求 我們的目標是創建一套能夠根據用戶選擇動態生成飲料對象的點餐系統。首先，讓我們通過UML來分析系統的基本結構。 物件導向分析 (OOA) Swift Kotlin 400: Invalid request 察覺 Forces 隨著飲料店越來越多新飲品，我們也需要修改 order 方法，但這樣容易影響不會變動的程式碼，於是我們需要找出 需要變動 以及 不需變動 的程式碼，把它們分隔開來 需要變動的程式碼 Swift Kotlin 400: Invalid request 不需變動的程式碼 Swift Kotlin 400: Invalid request 400: Invalid request 找出後該如何做呢，這時候需要用到 簡單工廠模式 來將其分離 套用 Solution 套用 Simple Factory Pattern 得到新的...","categories": ["Design Pattern"],
        "tags": ["Simple Factory Pattern"],
        "url": "/blog/design%20pattern/design-pattern-5-simple-factory-pattern/",
        "teaser": "/blog/assets/images/design_patterns.jpg"
      },{
        "title": "Design Pattern (6) - Factory Method Pattern (工廠方法模式)",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 引言：一個全球化的挑戰 想像一下，你的飲料點餐系統在全球範圍內大受歡迎。隨著業務的擴展，你面臨著一個挑戰：如何滿足不同地區顧客的特定偏好？ 上一篇我們利用簡單工廠模式模式成功地將需要變動 以及 不需變動 的程式碼分離。今天，我們將探討如何進一步提升我們系統的靈活性和擴展性。 需求：滿足全球化的味蕾 飲料點餐系統受到客戶的喜愛，業績非常好，於是客戶在世界各地迅速擴店。但很快的問題出現了——不同地區的顧客有著不同的偏好。 案例分析: 美國喜歡錫蘭紅茶 歐洲喜歡伯爵紅茶 我們的目標是，不增加過多成本的同時，滿足這些多樣化的需求。 (成本考量我們不將所有紅茶種類都加入菜單，只用最符合當地口味的茶葉製作紅茶) 物件導向分析(OOA) 於是我們修改簡單工廠的程式碼，新增 USBeverageFactory 及 EUBeverageFactory 來製作符合美國及歐洲當地口味的飲品 Swift Kotlin 400: Invalid request 400: Invalid request 察覺 Forces 這樣做雖然可以滿足分店從不同工廠取得該地區的飲品，但每當有新的分店加入，就必須動到 BeverageShop 的程式碼來添加新的分店工廠，違反了 Open Closed Principle 套用 Solution 看清楚整個 Context，察覺 Forces 後，就可以套用 Factory Method...","categories": ["Design Pattern"],
        "tags": ["Factory Method Pattern"],
        "url": "/blog/design%20pattern/design-pattern-6-factory-method-pattern/",
        "teaser": "/blog/assets/images/design_patterns.jpg"
      },{
        "title": "Design Pattern (7) - Abstract Factory Pattern (抽象工廠模式)",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 引言：全球化的挑戰擴展 想像一下，隨著你的飲料點餐系統在全球範圍內的擴展，你面臨著如何滿足不同地區顧客特定偏好的挑戰。 需求：滿足全球化的味蕾 隨著業務的全球化擴展，不同地區的顧客有著不同的偏好。且我們也不能只賣紅茶及綠茶，需要為我們的菜單增加新的飲品，一邊新增菜單一邊擴展店舖。 物件導向分析(OOA) Swift Kotlin 如何處理多個產品在不同分店的組合，這時就需要用到 Abstract Factory Pattern 察覺 Forces 當我們每增加一種飲品到菜單中，我們必須要修改所有的 Factory 中的方法，違反了 Open Closed Principle 套用 Solution 看清楚整個 Context，察覺 Forces 後，就可以套用 Abstract Factory Pattern 來解決這個問題 先來看一下 Abstract Factory Pattern 的 UML 透過將工廠抽象，使子類別能創建一系列的實體物件。 抽象工廠有個重要的判斷方式，當你所要創建的產品是一整個系列產品，且不同需求要創建不同系列，這個關係能夠畫成二維關係，這時就非常適合使用抽象工廠來建立產品 如下圖 Country / Tea BlackTea GreenTea...","categories": ["Design Pattern"],
        "tags": ["Abstract Factory Pattern"],
        "url": "/blog/design%20pattern/design-pattern-7-abstract-factory-pattern/",
        "teaser": "/blog/assets/images/design_patterns.jpg"
      },{
        "title": "Design Pattern (8) - Builder Pattern (建造者模式)",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 需求 今天我們要設計一個能自動做出手搖飲的機器，但如果手搖飲店只賣紅茶、綠茶，肯定滿足不了廣大的客群需求，因此我們要能夠讓手搖飲加入各種配料，來吸引顧客。 珍珠 (Pearls) 椰果 (Coconut Jelly) 紅豆 (Red Beans) 仙草凍 (Grass Jelly) 布丁 (Pudding) 物件導向分析 (OOA) 理解需求後，讓我們來快速實作物件導向分析吧! 但這麼做會有一個問題，假如我們今天只要加入紅豆以及布丁，就必須在其他用不到的參數傳入 false or null，參數越多越難以維護且可讀性也不高。 因此聰明的你可能想到了，可以利用寫多個不同的 constructor 來解決，如此就不需傳入不需要的參數。 察覺 Forces 這邊我們會發現當參數越多, 所需寫的 constructor 就越多，這樣既不好維護，也使得類別的實例化過程錯綜複雜，這個現象可以稱為 telescoping constructor Telescoping constructor 是當一個類別有多個構造器，每個構造器參數數量不同，導致類別難以維護和使用的問題。 套用 Builder Pattern ( Solution ) 得到新的...","categories": ["Design Pattern"],
        "tags": ["Builder Pattern"],
        "url": "/blog/design%20pattern/design-pattern-8-builder-pattern/",
        "teaser": "/blog/assets/images/design_patterns.jpg"
      },{
        "title": "How to build CHIPTool for Android",
        "excerpt":"前言 最近因工作之需，研究了一下如何 Build CHIPTool 的 apk，因為按照官方文件步驟實作會有錯誤，自己一步一步解決最後終於成功，因此想寫一篇文章紀錄，幫助我自己進行複習，也希望能對其他開發者提供幫助。🙂 簡介 Matter（前稱為Project CHIP，即Connected Home over IP）是一個統一的開源連接標準，旨在增強智能家居設備之間的互操作性和兼容性。這個標準由連接標準聯盟（CSA）開發，成員包括亞馬遜、蘋果、谷歌和Zigbee聯盟等主要行業參與者。 Matter的目標是簡化製造商的開發過程，確保智能家居產品的安全性、可靠性和易用性。它利用互聯網協議（IP）來實現各種設備、移動應用和雲服務之間的通信，支持Thread和Wi-Fi網絡傳輸。 Matter的目標是創建一個無縫且互操作的智能家居生態系統，使不同製造商的設備能夠順利協同工作。 事前準備 因為在個人開發環境 Build 容易破壞環境，會需要修改 ANDROID_HOME &amp; ANDROID_NDK_HOME 等等…，因為 CHIP 有提供 build 環境的 image，所以這邊我選擇用 docker 使用 CHIP 的 image 啟 container 來 build． Docker Pull Docker Image 這個步驟會需要一點時間，可以去喝杯咖啡 docker pull ghcr.io/project-chip/chip-build-android:latest Run container docker run -it -v...","categories": ["Tools"],
        "tags": ["Android","CHIP","Matter"],
        "url": "/blog/tools/how-to-build-chiptool-for-android/",
        "teaser": "/blog/assets/images/matter.jpg"
      },{
        "title": "Design Pattern (9) - Prototype Pattern (原型模式)",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 前言 這次的 Pattern 讓我想到以前做過的一個 App，但當時還沒有學習到 Pattern，所以沒有用 Pattern 來處理，現在發現這個功能很適合套用 prototype pattern 這是一個用來編輯音樂燈光秀的 App，有興趣的讀者可以下載玩玩看 🙂 Asante TapTap 3 需求 今天收到了客人的需求，客人反應編輯完一條燈光還要編輯另外六條好浪費時間，能不能新增 Copy &amp; Paste 的功能，加快編輯以節省時間，如下圖 物件導向分析 (OOA) 理解需求後，讓我們來快速實作物件導向分析吧! 當我們需要複製 LightShowData 時，只需要同樣的 jsonObject 資料重新 new 一個 LightShowData 即可複製一份 察覺 Forces 來看看上面這樣的設計會有哪些問題 如果我們的 constructor 很複雜，參數非常多，那麼重新 new 一個實體會需要知道很多細節。 如果...","categories": ["Design Pattern"],
        "tags": ["Prototype Pattern"],
        "url": "/blog/design%20pattern/design-pattern-9-prototype-pattern/",
        "teaser": "/blog/assets/images/design_patterns.jpg"
      },{
        "title": "Getting Started with GitHub Container Registry",
        "excerpt":"為什麼會寫這篇文章 隨著公司專案數量增加，每個專案的環境需求也變得更加多樣化。我們決定將原本使用Docker建置的Android Jenkins Server轉型為更靈活的架構：一個主要的Jenkins Server（Master）搭配多個Android Build Environment（Slave），後者透過Docker創建乾淨的環境。這篇文章旨在記錄此過程，不僅作為個人學習的回顧，也希望能對其他開發者提供幫助。 文章簡介 本文將引導初學者及希望深入了解如何將GitHub的新工具融入CI/CD流程的開發者，透過簡明的指南和實用的技巧，學習如何將容器映像推送至GitHub Container Registry。我將一步步展示如何設定GitHub Actions，自動化構建與部署過程，讓你的開發工作變得更加高效。 開始之前 在深入主題之前，讓我們先透過 express 框架，快速搭建一個運行於Node.js上的簡易應用。 Create a node_sample folder mkdir node_sample cd node_sample Install node package express npm init -y npm install express Create an app.js file vim app.js const express = require('express'); const app = express(); const port...","categories": ["DevOps"],
        "tags": ["Docker","Container Registry","GitHub Actions","CI/CD","DevOps Tools"],
        "url": "/blog/devops/getting-started-with-github-container-registry/",
        "teaser": "/blog/assets/images/github_container_registry.png"
      },{
        "title": "How to Enable RSA Encryption Algorithm Key in OpenSSH 8.8",
        "excerpt":"前言 最近在修改公司的 jenkins CI/CD 架構，Dockerize 我們的 Android Building Environment。 在我啟動 Debian 12 container 來建構我的環境時，配置 RSA Key 到公司的 GitLab server，卻無法抓取 source code，故有了這篇文章希望未來有遇到可以拿出來快速解決問題，也希望幫助到遇到一樣問題的人。 經過分析後才發現，原來 Debian 12 預設使用 OpenSSH 8.8，而 OpenSSH 8.8 預設將 RSA 加密算法關閉，因為安全是以及過時的問題 但公司 GitLab server 較舊，目前只支援較舊的 ssh Key 演算法 RSA，因此需要找方法使其支援。 準備作業 如果你已經有環境，可以跳過此段落 首先我先用 Docker 啟一台 Debian 12 的 container 如下...","categories": ["Cryptography","OpenSSH","Security"],
        "tags": ["RSA Encryption","OpenSSH 8.8","Encryption Support"],
        "url": "/blog/cryptography/openssh/security/how-to-enable-rsa-encryption-algorithm-key-in-openssh-8.8/",
        "teaser": "/blog/assets/images/rsa-algorithm.jpg"
      },{
        "title": "Design Pattern (10) - Singleton Pattern (單例模式)",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 需求 我們收到了一個需求：開發一個應用程式，該應用程式需要與資料庫進行頻繁的交互。為了確保資料庫連接的效率和資源的合理使用，我們需要設計一個系統來管理資料庫連接。 物件導向分析 (OOA) 理解需求後，讓我們來快速實作物件導向分析吧! 我們有 CRUD 四個 function 以及 constructor 用來建立 DatabaseClient 察覺 Forces 來看看上面這樣的設計會有哪些問題 資源管理：多個資料庫連接會消耗大量資源，導致性能下降。 一致性：需要確保所有資料庫操作使用相同的連接，以避免數據不一致。 效率：頻繁創建和銷毀資料庫連接會降低系統效率。 套用 Singleton Pattern ( Solution ) 得到新的 Context ( Resulting Context ) 做完 OOA，察覺 Forces，看清楚整個 Context 後，就可以來套用 Singleton Pattern 解決這個問題 先來看一下 Singleton Pattern 的...","categories": ["Design Pattern"],
        "tags": ["Singleton Pattern"],
        "url": "/blog/design%20pattern/design-pattern-10-singleton-pattern/",
        "teaser": "/blog/assets/images/design_patterns.jpg"
      },{
        "title": "Jenkins (1) - 什麼是 Jenkins",
        "excerpt":"什麼是 Jenkins Jenkins 是一個開源的自動化伺服器，主要用於實現持續整合（CI）和持續交付（CD）。它能夠自動化各種任務，包括建置、測試和部署軟體，從而幫助開發團隊提升效率和品質。 為什麼選擇 Jenkins 開源且免費：Jenkins 是一個開源專案，任何人都可以免費使用和修改。 豐富的插件生態系統：Jenkins 擁有超過 1,500 個插件，能夠擴展其功能以滿足不同的需求。 社群支持：Jenkins 擁有一個活躍的社群，提供豐富的資源和支援。 易於整合：Jenkins 可以與多種工具和平台整合，如 Git、Docker、Kubernetes 等。 Jenkins 的核心概念 Pipeline：Jenkins Pipeline 是一套插件，支持實現和集成持續交付流水線。Pipeline 用程式碼來定義整個建置過程，包括建置、測試和部署。 Node：Node 是 Jenkins 執行工作的機器，可以是 Jenkins 主伺服器或其他代理伺服器。 Job：Job 是 Jenkins 中的基本建置單位，定義了具體的建置、測試和部署任務。 Executor：Executor 是 Jenkins 用來執行 Job 的工作單元，每個 Node 可以有多個 Executor。 總結 Jenkins 是一個功能強大且靈活的自動化伺服器，能夠幫助開發團隊實現持續整合和持續交付。通過使用 Jenkins，團隊可以顯著提高開發效率和軟體品質。如果你還沒有使用 Jenkins，現在就是開始的好時機！ 想了解更多關於 Jenkins...","categories": ["DevOps"],
        "tags": ["Jenkins","CI/CD","DevOps"],
        "url": "/blog/devops/jenkins-1-what-is-jenkins/",
        "teaser": "/blog/assets/images/jenkins.jpg"
      },{
        "title": "Jenkins (2) - 如何架設 Jenkins 伺服器",
        "excerpt":"如何架設 Jenkins 伺服器 在這篇文章中，我們將介紹如何使用 Docker 映像檔來架設 Jenkins 伺服器。這種方法不僅簡單快捷，還能確保環境的一致性。 步驟一：拉取 Docker 映像檔 首先，我們需要從 GitHub Container Registry 拉取 Jenkins 的 Docker 映像檔。打開終端機並執行以下指令： docker pull jenkins/jenkins:lts-jdk17 # 單純 jenkins 環境 or docker pull ghcr.io/nickhuangcyh/docker-jenkins-and-android-env:v1.0.0-jdk17 # jenkins 環境 + Android 建構環境 步驟二：運行 Jenkins 容器 接下來，我們將運行 Jenkins 容器。請確保替換 ${volume path} 為你希望 Jenkins 資料儲存的本地路徑。執行以下指令： docker run...","categories": ["DevOps"],
        "tags": ["Jenkins","CI/CD","DevOps","Docker"],
        "url": "/blog/devops/jenkins-2-how-to-setup-jenkins-server/",
        "teaser": "/blog/assets/images/jenkins.jpg"
      },{
        "title": "Jenkins (3) - 如何配置 Credentials 以透過 SSH 從 git 上拉取程式碼",
        "excerpt":"如何配置 Credentials 以透過 SSH 從 git 上拉取程式碼 在這篇文章中，我們將介紹如何在 Jenkins 中配置憑證（Credentials），以便 Jenkins 能夠透過 SSH 安全地從版本控制系統（如 GitHub 或 GitLab）拉取程式碼。 步驟一：生成 SSH 金鑰 首先，我們需要生成一對 SSH 金鑰。打開終端機並執行以下指令： ssh-keygen -t rsa -b 4096 -C \"your_email@example.com\" 按照提示完成金鑰生成過程，並記下生成的公鑰和私鑰的路徑。 步驟二：將公鑰添加到版本控制系統 將生成的公鑰內容複製並添加到你的版本控制系統中。例如，在 GitHub 中，你可以按照以下步驟操作： 登入 GitHub，進入「Settings」。 在左側菜單中選擇「SSH and GPG keys」。 點擊「New SSH key」，並將公鑰內容貼上，然後點擊「Add SSH key」。 步驟三：在 Jenkins 中添加憑證 打開...","categories": ["DevOps"],
        "tags": ["Jenkins","CI/CD","DevOps","Credentials","SSH"],
        "url": "/blog/devops/jenkins-3-configure-credentials-ssh/",
        "teaser": "/blog/assets/images/jenkins.jpg"
      },{
        "title": "Google AdSense",
        "excerpt":"前言 我平時喜歡研究各種不同的技術，最近在想如何一邊分享技術幫助他人，一邊又能獲得一些收益用來再投入其他 Side Project 上，我還是想把我的內容免費提供給需要幫助的開發者，所以想採用置入一些廣告在網頁上的方式我想比較合適 什麼是 Google AdSense？ Google AdSense 是一個廣告推送平台，讓網站擁有者可以在自己的網站上展示與內容相關的廣告，並透過點擊或展示量賺取收益。這是一種被動收入的好方式，適合部落客、內容創作者或網站管理員。 為什麼選擇 Google AdSense？ 免費使用：註冊與使用 AdSense 完全免費。 自動化廣告投放：系統會自動根據您的網站內容匹配相關廣告。 多樣化廣告形式：可選擇文字、圖片、影片等多種形式的廣告。 透明收益報告：提供詳細的報表分析，幫助您了解廣告效益。 開始使用 Google AdSense 的步驟 1. 註冊 AdSense 帳戶 前往 Google AdSense 官方網站。 使用您的 Google 帳號登入並申請 AdSense 帳戶。 進入 AdSense 主頁面 2. 輸入資訊 點擊”輸入資訊”提供資訊 填寫你的網站 domain、國家以及接受協議 3. 選擇廣告呈現樣式 點擊”探索”廣告在網站上的呈現模樣，並選擇 4. 將...","categories": ["Google"],
        "tags": ["AdSense"],
        "url": "/blog/google/google-adsense/",
        "teaser": "/blog/assets/images/google_adsense.jpg"
      },{
        "title": "Design Pattern (11) - Adapter Pattern (轉接器模式)",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 需求 我們收到了一個需求：公司現有的 股票數據系統 使用 XML 格式 存儲與傳遞數據，而新引入的 第三方股票分析系統 僅支援 JSON 格式。為了整合兩個系統，我們需要設計一個解決方案，使得現有數據可以被第三方分析系統正確接收和處理。 物件導向分析 (OOA) 理解需求後，讓我們來快速實作物件導向分析吧! 察覺 Forces 在未使用設計模式的情況下，上述程式碼可以運行，但存在以下問題： 責任分散： Client 負責數據轉換，這違反了單一職責原則（SRP）。 一旦轉換邏輯變複雜，Client 的程式碼將變得難以維護。 重複性高： 如果其他系統需要同樣的轉換邏輯，程式碼將無法重複使用，導致重複性問題。 耦合性高： Client 必須了解 XmlStockData 與 JsonAnalyzer 的具體實現細節，導致高耦合性。 未來若資料來源或目標格式改變，Client 必須大幅修改。 無法適應變化： 若引入更多資料格式（如 CSV 或 YAML），每種格式都需要在 Client 中實現轉換邏輯，難以擴展。 套用 Adapter Pattern...","categories": ["Design Pattern"],
        "tags": ["Adapter Pattern"],
        "url": "/blog/design%20pattern/design-pattern-11-adapter-pattern/",
        "teaser": "/blog/assets/images/design_patterns.jpg"
      },{
        "title": "Design Pattern (12) - Bridge Pattern (橋接模式)",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 需求 我們收到了一個需求：公司現有的 保全系統，在偵測到不同類型的事件（如火警、竊盜警鈴）時，需要以多種通知方式向用戶發送警報訊息。支援的通知方式包括： APNS (Apple iOS Push) FCM (Google Android Push) Email SMS 警報事件則可能包括： Fire (火警) Burglar (竊盜警鈴) 物件導向分析 (OOA) 理解需求後，讓我們來快速實作物件導向分析吧! 察覺 Forces 在未使用設計模式的情況下，上述程式碼可以運行，但存在以下問題： 高耦合性 (Tight Coupling)： 警報類型 和 通知方式 被緊密地耦合在一起，這使得每次新增警報類型或通知方式時，都必須在多個類別中進行修改。 系統的維護成本較高，每個新需求都可能導致代碼的重構。 難以擴展 (Difficulty in Extending)： 每增加一種新的警報類型或通知方式，都需要在每個組合中創建新的類別，導致代碼增長迅速。 如果需求變更（例如新增一種新的通知方式或警報類型），則需要修改大量的程式碼。 重複代碼 (Code Duplication)： 由於每一種通知方式與警報事件的組合都需要實現一個具體的類別，導致了大量重複代碼，增加了程式碼維護的困難。 靈活性差...","categories": ["Design Pattern"],
        "tags": ["Bridge Pattern"],
        "url": "/blog/design%20pattern/design-pattern-12-bridge-pattern/",
        "teaser": "/blog/assets/images/design_patterns.jpg"
      },{
        "title": "Jenkins (3) - 如何配置 Credentials 以透過 SSH 從 git 上拉取程式碼",
        "excerpt":"如何配置 Credentials 以透過 SSH 從 git 上拉取程式碼 在這篇文章中，我們將介紹如何在 Jenkins 中配置憑證（Credentials），以便 Jenkins 能夠透過 SSH 安全地從版本控制系統（如 GitHub 或 GitLab）拉取程式碼。 步驟一：生成 SSH 金鑰 首先，我們需要生成一對 SSH 金鑰。打開終端機並執行以下指令： ssh-keygen -t rsa -b 4096 -C \"your_email@example.com\" 按照提示完成金鑰生成過程，並記下生成的公鑰和私鑰的路徑。 步驟二：將公鑰添加到版本控制系統 將生成的公鑰內容複製並添加到你的版本控制系統中。例如，在 GitHub 中，你可以按照以下步驟操作： 登入 GitHub，進入「Settings」。 在左側菜單中選擇「SSH and GPG keys」。 點擊「New SSH key」，並將公鑰內容貼上，然後點擊「Add SSH key」。 步驟三：在 Jenkins 中添加憑證 打開...","categories": ["DevOps"],
        "tags": ["Jenkins","CI/CD","DevOps","Credentials","SSH"],
        "url": "/blog/devops/jenkins-3-configure-credentials-ssh/",
        "teaser": "/blog/assets/images/jenkins.jpg"
      },{
        "title": "Design Pattern (13) - Composite Pattern (組合模式)",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 需求 我們收到了一個需求：實作一個檔案系統，其目錄可以包含檔案或子目錄，並且需要提供統一的操作介面來列出目錄內容。此系統應支援以下功能： 支援樹狀結構的表示。 可操作單一檔案和目錄。 新增檔案或目錄時無需大幅修改現有程式碼。 物件導向分析 (OOA) 理解需求後，讓我們來快速實作物件導向分析吧! 察覺 Forces 在未使用設計模式的情況下，上述需求可能會遇到以下問題： 高耦合性 (Tight Coupling)： 單一檔案和目錄集合的操作邏輯分散在多個類別中，導致系統維護困難。 重複代碼 (Code Duplication)： 每次操作目錄內容時，需分別處理檔案與子目錄，導致相似邏輯多處重複。 難以擴展 (Difficulty in Extending)： 新增檔案或目錄類型時，需大幅修改程式碼，影響系統穩定性。 靈活性差 (Lack of Flexibility)： 操作層需清楚區分單一檔案與目錄集合，增加程式碼複雜度。 套用 Composite Pattern ( Solution ) 得到新的 Context ( Resulting Context ) 做完 OOA，察覺...","categories": ["Design Pattern"],
        "tags": ["Composite Pattern"],
        "url": "/blog/design%20pattern/design-pattern-13-composite-pattern/",
        "teaser": "/blog/assets/images/design_patterns.jpg"
      },{
        "title": "Design Pattern (14) - Decorator Pattern (裝飾者模式)",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 需求 我們收到了一個需求：咖啡店的 POS 系統需要計算不同咖啡及其附加選項（如牛奶、糖漿、奶泡等）的價格。具體需求如下： 咖啡種類包括基本款的 Espresso 和 House Blend。 每種咖啡都可以加不同的附加項，例如牛奶、巧克力糖漿、奶泡。 系統應該支持動態組合不同的附加項，而不需要針對每種組合定義類別。 物件導向分析 (OOA) 理解需求後，讓我們來快速實作物件導向分析吧！ 察覺 Forces 在未使用設計模式的情況下，上述需求可能會遇到以下問題： 類別爆炸 (Class Explosion)： 為每一種咖啡及其附加選項組合創建類別，導致類別數量迅速增長。 高耦合性 (Tight Coupling)： 咖啡與附加選項緊密耦合，修改某一部分時可能影響整體。 靈活性差 (Lack of Flexibility)： 系統無法動態地添加或移除附加選項，只能依賴預先定義的組合。 重複代碼 (Code Duplication)： 每種組合的實作邏輯重複，導致維護困難。 套用 Decorator Pattern (Solution) 得到新的 Context (Resulting Context) 做完...","categories": ["Design Pattern"],
        "tags": ["Decorator Pattern"],
        "url": "/blog/design%20pattern/design-pattern-14-decorator-pattern/",
        "teaser": "/blog/assets/images/design_patterns.jpg"
      },{
        "title": "Design Pattern (15) - Facade Pattern (外觀模式)",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 需求 假設我們正在開發一個家庭影院系統，該系統包含以下子系統： DVD 播放器 環繞音響 燈光 投影機 用戶希望能輕鬆開啟或關閉家庭影院的所有功能，而不需要逐一操作各個設備。 物件導向分析 (OOA) 理解需求後，讓我們來快速實作物件導向分析吧！ 察覺 Forces 在設計階段，我們注意到以下設計難題： 子系統過於複雜：需要多個步驟才能完成操作。 操作繁瑣：用戶需要熟悉每個子系統的細節。 缺乏一致性：不同子系統之間的操作方式可能不同，導致混亂。 這些 Forces 驅使我們採用外觀模式來簡化介面，減少系統的操作複雜度。 套用 Facade Pattern (Solution) 得到新的 Context (Resulting Context) 做完 OOA，察覺 Forces，看清楚整個 Context 後，就可以來套用 Facade Pattern 解決這個問題。 先來看一下 Facade Pattern 的 UML： Subsystems (子系統)：表示系統中的一組類別或模組，它們各自負責不同的功能。例如，在家庭影院系統中，包括...","categories": ["Design Pattern"],
        "tags": ["Facade Pattern"],
        "url": "/blog/design%20pattern/design-pattern-15-facade-pattern/",
        "teaser": "/blog/assets/images/design_patterns.jpg"
      },{
        "title": "Design Pattern (16) - Flyweight Pattern (享元模式)",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 需求 假設我們正在開發一個森林場景的渲染系統，該系統需要顯示數百棵甚至數千棵樹木。 每棵樹包含兩類資料： 內部狀態 (Intrinsic State)：不隨環境改變的資料，例如樹的種類、顏色、紋理等。 外部狀態 (Extrinsic State)：因環境而異的資料，例如樹的座標 (x, y)。 如果為每棵樹都建立完整的物件，將導致記憶體消耗過大。因此，我們需要一種共享內部狀態的方式來優化記 物件導向分析 (OOA) 理解需求後，讓我們來快速實作物件導向分析吧！ 察覺 Forces 在設計階段，我們注意到以下設計難題： 大量重複資料：每棵樹都包含相同的種類、顏色和紋理資料。 性能問題：對於數千棵樹的場景渲染，過多的物件會導致記憶體不足或性能瓶頸。 共享與獨立的平衡：如何在共享資料的同時，保留每棵樹的獨立外部狀態。 為解決這些問題，我們採用了享元模式。 套用 Flyweight Pattern (Solution) 得到新的 Context (Resulting Context) 做完 OOA，察覺 Forces，看清楚整個 Context 後，就可以來套用 Flyweight Pattern 解決這個問題。 先來看一下 flyweight Pattern 的 UML：...","categories": ["Design Pattern"],
        "tags": ["Flyweight Pattern"],
        "url": "/blog/design%20pattern/design-pattern-16-flyweight-pattern/",
        "teaser": "/blog/assets/images/design_patterns.jpg"
      },{
        "title": "Design Pattern (17) - Proxy Pattern (代理模式)",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 需求 我們的任務是建立一個影片播放系統，需求如下： 應用能播放多個影片，但避免每次都重複下載相同的影片。 影片需要在用戶第一次訪問時下載，之後從快取中取得以節省資源。 提供一個透明的介面，無需讓客戶端知道影片是透過代理取得的。 物件導向分析 (OOA) 理解需求後，讓我們來快速實作物件導向分析吧！ 察覺 Forces 在未使用設計模式的情況下，我們可能面臨以下挑戰： 高頻寬消耗 (High Bandwidth Usage)： 如果每次播放影片都重新下載，將導致不必要的頻寬浪費。 延遲時間 (High Latency)： 每次下載影片會增加播放前的等待時間，影響用戶體驗。 客戶端耦合 (Client Coupling)： 如果客戶端需要處理影片的下載邏輯，會增加不必要的複雜性。 套用 Proxy Pattern (Solution) 得到新的 Context (Resulting Context) 做完 OOA，察覺 Forces，看清楚整個 Context 後，就可以來套用 Proxy Pattern 解決這個問題。 Proxy Pattern 提供了解決方案，通過引入...","categories": ["Design Pattern"],
        "tags": ["Proxy Pattern"],
        "url": "/blog/design%20pattern/design-pattern-17-proxy-pattern/",
        "teaser": "/blog/assets/images/design_patterns.jpg"
      },{
        "title": "Design Pattern (18) - Chain of Responsibility Pattern (責任鏈模式)",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 需求 我們的任務是建立一個日誌處理系統，需求如下： 系統支持多層次日誌處理（如 Console、File、Database 等）。 請求可以被多個處理器處理，且處理器的組合應具備動態調整能力。 確保每層處理器的責任彼此獨立，並能擴展新處理器而不影響既有邏輯。 物件導向分析 (OOA) 理解需求後，讓我們來快速實作物件導向分析吧！ 察覺 Forces 在未使用設計模式的情況下，我們可能面臨以下挑戰： 高耦合性 (High Coupling)： 如果客戶端需要直接控制每個日誌處理器，將導致代碼過於複雜且難以維護。 缺乏靈活性 (Lack of Flexibility)： 無法輕鬆地調整處理器的執行順序或新增處理器。 違反開放關閉原則 (Violates OCP)： 若需支持新的日誌處理方式，必須修改客戶端邏輯，導致系統穩定性下降。 套用 Chain of Responsibility Pattern (Solution) 得到新的 Context (Resulting Context) 先來看一下 Chain of Responsibility Pattern 的 UML：...","categories": ["Design Pattern"],
        "tags": ["Chain of Responsibility Pattern"],
        "url": "/blog/design%20pattern/design-pattern-18-chain-of-responsibility-pattern/",
        "teaser": "/blog/assets/images/design_patterns.jpg"
      },{
        "title": "Design Pattern (19) - Command Pattern (命令模式)",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 需求 我們需要一個音樂播放器控制系統，需求如下： 使用者可以透過遙控器控制音樂播放器執行「播放」、「暫停」和「停止」操作。 支援撤銷 (Undo) 功能，例如撤銷暫停會恢復播放。 按鈕行為應保持靈活，方便未來擴充新功能，例如「下一首」或「重播」。 物件導向分析 (OOA) 理解需求後，讓我們來快速實作物件導向分析吧！ 察覺 Forces 在未使用設計模式的情況下，我們可能面臨以下挑戰： 高耦合性 (High Coupling)： 客戶端需要直接操作每個具體設備的功能，導致耦合度過高，不利於系統擴展。 缺乏靈活性 (Lack of Flexibility)： 如果需要新增設備或操作，客戶端需要修改大量程式碼，增加了維護成本。 撤銷/重做困難 (Undo/Redo Complexity)： 系統沒有統一的方式處理操作歷史，導致撤銷和重做功能難以實現。 套用 Command Pattern (Solution) 得到新的 Context (Resulting Context) 做完 OOA，察覺 Forces，看清楚整個 Context 後，就可以來套用 Command Pattern 解決這個問題。 先來看一下...","categories": ["Design Pattern"],
        "tags": ["Command Pattern"],
        "url": "/blog/design%20pattern/design-pattern-19-command-pattern/",
        "teaser": "/blog/assets/images/design_patterns.jpg"
      },{
        "title": "Design Pattern (20) - Iterator Pattern (迭代器模式)",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 需求 我們的任務是設計一個檔案系統搜尋工具，需求如下： 使用者可以選擇不同的檔案搜尋方式，例如 廣度優先搜尋 (BFS) 或 深度優先搜尋 (DFS)。 客戶端不需要關心搜尋邏輯的實現細節，只需使用統一的迭代器介面來遍歷搜尋結果。 系統需要具備擴展性，方便新增其他搜尋法，例如基於檔案大小排序的搜尋。 物件導向分析 (OOA) 理解需求後，讓我們來快速實作物件導向分析吧！ 察覺 Forces 在未使用設計模式的情況下，我們可能面臨以下挑戰： 高耦合性 (High Coupling)： 客戶端需要直接操作每種搜尋方式的實現細節，導致代碼臃腫且難以維護。 缺乏一致性 (Lack of Consistency)： 不同搜尋方式的結果訪問方式可能不一致。 違反開放關閉原則 (Violates OCP)： 若新增搜尋法或更改現有搜尋邏輯，需要修改客戶端程式碼。 套用 Iterator Pattern (Solution) 得到新的 Context (Resulting Context) 做完 OOA，察覺 Forces，看清楚整個 Context 後，就可以來套用 Iterator...","categories": ["Design Pattern"],
        "tags": ["Iterator Pattern"],
        "url": "/blog/design%20pattern/design-pattern-20-iterator-pattern/",
        "teaser": "/blog/assets/images/design_patterns.jpg"
      },{
        "title": "Design Pattern (21) - Mediator Pattern (中介者模式)",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 需求 我們的任務是設計一個 聊天室應用程式，需求如下： 使用者可以透過聊天室傳遞訊息。 每個使用者都不需要直接管理其他使用者的資訊。 新增或移除使用者不應影響其他使用者的運作。 物件導向分析 (OOA) 理解需求後，我們來快速分析： 若使用者彼此直接通信，會導致複雜的相依關係，增加維護成本。 我們需要一個集中管理的角色，來協調使用者之間的訊息傳遞。 察覺 Forces 在未使用設計模式的情況下，我們可能面臨以下挑戰： 高耦合性 (High Coupling)： 使用者彼此之間直接通信，導致新增或移除使用者時需修改多處程式碼。 難以擴展 (Hard to Extend)： 若要增加新功能（如訊息過濾或廣播機制），需要修改多個使用者的邏輯。 複雜度上升 (Increased Complexity)： 使用者之間的關聯數量隨著使用者數量增長呈指數級增加。 套用 Mediator Pattern (Solution) 得到新的 Context (Resulting Context) 做完 OOA，察覺 Forces，看清楚整個 Context 後，就可以來套用 Mediator Pattern 解決這個問題。...","categories": ["Design Pattern"],
        "tags": ["Mediator Pattern"],
        "url": "/blog/design%20pattern/design-pattern-21-mediator-pattern/",
        "teaser": "/blog/assets/images/design_patterns.jpg"
      },{
        "title": "Design Pattern (22) - Memento Pattern (備忘錄模式)",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 需求 我們的任務是設計一個文字編輯器，需求如下： 使用者可以輸入文字，並隨時按下 Ctrl+Z 回復上一步。 系統需要保存歷史狀態以供回復。 客戶端不需要了解狀態保存的實現細節，只需使用一個簡單的回復操作即可。 物件導向分析 (OOA) 理解需求後，讓我們來快速實作物件導向分析吧! 察覺 Forces 在未使用設計模式的情況下，我們可能面臨以下挑戰： 資料喪失風險 (Data Loss Risk)： 如果我們僅保留當前狀態，將無法回復到之前的狀態。 高耦合性 (High Coupling)： 客戶端需要直接操作狀態管理邏輯，導致複雜性增加。 難以擴展 (Hard to Extend)： 新增功能或改變狀態保存方式時，可能需要修改大量程式碼。 套用 Memento Pattern (Solution) 得到新的 Context (Resulting Context) 做完 OOA，察覺 Forces，看清楚整個 Context 後，就可以來套用 Memento Pattern 解決這個問題...","categories": ["Design Pattern"],
        "tags": ["Memento Pattern"],
        "url": "/blog/design%20pattern/design-pattern-22-memento-pattern/",
        "teaser": "/blog/assets/images/design_patterns.jpg"
      },{
        "title": "Design Pattern (23) - Observer Pattern (觀察者模式)",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 需求 我們的任務是設計一個 安全系統主機 (Panel)，需求如下： 主機負責監控不同的感測器，例如煙霧探測器或門窗感測器。 當警報觸發時，主機需要通知所有已註冊的設備，例如平板、iOS 和 Android 手機。 設備可以動態地加入或移除通知清單。 物件導向分析 (OOA) 理解需求後，讓我們來快速實作物件導向分析吧! 察覺 Forces 在未使用設計模式的情況下，我們可能面臨以下挑戰： 高耦合性 (High Coupling) 如果主機直接與每一個設備互動，程式碼會變得難以維護，每次新增或移除設備都需要修改主機邏輯。 缺乏彈性 (Lack of Flexibility) 新增設備需要修改現有程式碼，違反開放關閉原則 (OCP)。 通知不一致 (Inconsistent Notifications) 當警報觸發時，難以確保每個設備都能正確接收到通知。 套用 Observer Pattern (Solution) 得到新的 Context (Resulting Context) 做完 OOA，察覺 Forces，看清楚整個 Context 後，就可以來套用...","categories": ["Design Pattern"],
        "tags": ["Observer Pattern"],
        "url": "/blog/design%20pattern/design-pattern-23-observer-pattern/",
        "teaser": "/blog/assets/images/design_patterns.jpg"
      },{
        "title": "Design Pattern (24) - State Pattern (狀態模式)",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 需求 我們的任務是設計一個 飲水機，需求如下： 飲水機有三種狀態： 加熱中：提升水溫至熱水。 冷卻中：降低水溫至冷水。 待機中：維持現有水溫。 使用者可透過按鈕切換飲水機的狀態。 飲水機需要根據當前狀態執行正確的行為，例如加熱狀態時加熱水，但不可冷卻。 物件導向分析 (OOA) 理解需求後，讓我們來快速實作物件導向分析吧! 察覺 Forces 在未使用設計模式的情況下，我們可能面臨以下挑戰： 高耦合性 (High Coupling) 狀態邏輯與飲水機核心功能混合在一起，導致程式碼難以維護。 違反單一職責原則 (SRP) 飲水機類別需要同時處理狀態邏輯與主要功能，責任過於繁重。 難以擴展 (Hard to Extend) 新增或修改狀態行為需更改飲水機核心邏輯，違反開放關閉原則 (OCP)。 套用 State Pattern (Solution) 得到新的 Context (Resulting Context) 做完 OOA，察覺 Forces，看清楚整個 Context 後，就可以來套用 State Pattern...","categories": ["Design Pattern"],
        "tags": ["State Pattern"],
        "url": "/blog/design%20pattern/design-pattern-24-state-pattern/",
        "teaser": "/blog/assets/images/design_patterns.jpg"
      },{
        "title": "Design Pattern (25) - Strategy Pattern (策略模式)",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 需求 在設計一個 電商運費計算系統 時，我們需要滿足以下需求： 支援多種運費計算方式，例如： 一般配送：固定運費。 快速配送：依重量計費。 國際配送：根據地區與重量計費。 系統需具備良好的擴展性： 能夠方便地新增新的運費計算方式。 避免使用大量的 if-else 或 switch-case。 使用者應能輕鬆切換運費計算方式。 物件導向分析 (OOA) 理解需求後，讓我們來快速實作物件導向分析吧! 察覺 Forces 如果未套用設計模式，我們可能會遇到以下問題： 難以維護 運費計算邏輯混雜在主程式內，新增或修改一種計算方式可能會影響其他部分。 違反開放關閉原則 (OCP) 每次新增運費計算方式都需修改核心業務邏輯。 違反單一職責原則 (SRP) 主程式同時負責運費計算與核心業務邏輯，責任過於繁重。 套用 Strategy Pattern (Solution) 得到新的 Context (Resulting Context) 做完 OOA，察覺 Forces，看清楚整個 Context 後，就可以來套用 Strategy...","categories": ["Design Pattern"],
        "tags": ["Strategy Pattern"],
        "url": "/blog/design%20pattern/design-pattern-25-strategy-pattern/",
        "teaser": "/blog/assets/images/design_patterns.jpg"
      },{
        "title": "Design Pattern (26) - Template Method Pattern (模板方法模式)",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 需求 在設計一個 資料格式轉換系統 時，我們需要滿足以下需求： 支援多種格式轉換，例如： JSON 格式轉換：將資料轉換為 JSON 格式。 XML 格式轉換：將資料轉換為 XML 格式。 CSV 格式轉換：將資料轉換為 CSV 格式。 系統需具備良好的擴展性： 能夠方便地新增新的格式轉換方式。 保持轉換流程核心一致性，例如： 所有格式轉換都需要：讀取資料、格式化資料、輸出資料。 避免重複程式碼。 物件導向分析 (OOA) 理解需求後，讓我們來快速實作物件導向分析吧! 察覺 Forces 如果未套用設計模式，我們可能會遇到以下問題： 程式碼重複 每種格式的轉換邏輯中包含相同步驟，但被多次重複實作。 違反開放關閉原則 (OCP) 新增格式需要修改核心轉換邏輯。 難以維護與擴展 各格式轉換邏輯分散，難以統一管理與修改。 套用 Template Method Pattern (Solution) 得到新的 Context (Resulting...","categories": ["Design Pattern"],
        "tags": ["Template Method Pattern"],
        "url": "/blog/design%20pattern/design-pattern-26-template-method-pattern/",
        "teaser": "/blog/assets/images/design_patterns.jpg"
      },{
        "title": "Design Pattern (27) - Visitor Pattern (訪問者模式)",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 需求 在設計一個 IoT App 整合多品牌 IPCam 的功能 時，我們需要滿足以下需求： 支援多種 IPCam 品牌，這些品牌的 IPCam 提供不同的串流與截圖方式： HIKVISION 提供 RTSP 協定，可以用通用方式播放串流與截圖。 DAHUA 提供自家 SDK，需要依賴 SDK 提供的方法進行操作。 App 的程式碼結構不應依賴 IPCam 品牌的實現細節，應保持開放擴展性，方便後續新增新的 IPCam 品牌。 避免修改 IPCam 的核心結構，因為這些品牌的實現通常由廠商提供，無法直接修改。 物件導向分析 (OOA) 理解需求後，讓我們來快速實作物件導向分析吧！ 察覺 Forces 如果未套用設計模式，我們可能會遇到以下問題： 難以擴展新品牌 每新增一個品牌的 IPCam，就需要修改 App 的核心邏輯。 違反開放關閉原則...","categories": ["Design Pattern"],
        "tags": ["Visitor Pattern"],
        "url": "/blog/design%20pattern/design-pattern-27-visitor-pattern/",
        "teaser": "/blog/assets/images/design_patterns.jpg"
      },{
        "title": "Design Pattern (28) - Interpreter Pattern (解譯器模式)",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 需求 我們需要設計一個布林運算解譯系統，具備以下功能： 能解譯包含布林值、AND 運算與 OR 運算的表達式。 符合開放關閉原則，能夠方便地新增其他運算（如 NOT）。 系統結構清晰，易於維護與擴展。 物件導向分析 (OOA) 理解需求後，讓我們來快速實作物件導向分析吧！ 察覺 Forces 複雜性增加 隨著運算符類型增加，手動解析邏輯會變得難以維護。 重複代碼 不同運算符的處理可能導致類似功能重複實現。 難以擴展 新增運算符需要修改大量代碼，違反開放關閉原則 (OCP)。 套用 Interpreter Pattern (Solution) 得到新的 Context (Resulting Context) 做完 OOA，察覺 Forces，看清楚整個 Context 後，就可以來套用 Interpreter Pattern 解決這個問題。 先來看一下 Interpreter Pattern 的 UML Interrepter...","categories": ["Design Pattern"],
        "tags": ["Interpreter Pattern"],
        "url": "/blog/design%20pattern/design-pattern-28-interpreter-pattern/",
        "teaser": "/blog/assets/images/design_patterns.jpg"
      },{
        "title": "Setup Development Environment on a New macOS",
        "excerpt":"Setup Development Environment on a New macOS Install Homebrew /bin/bash -c \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\" Common Issue Warning: /opt/homebrew/bin is not in your PATH To resolve this, add Homebrew’s bin directory to your PATH: vim ~/.zshrc export PATH=/opt/homebrew/bin:$PATH :wq source ~/.zshrc Refer to this StackOverflow thread for more details. Install Git...","categories": ["Setup Guide"],
        "tags": ["macOS","Development","Mobile Development"],
        "url": "/blog/setup%20guide/setup-development-environment-on-a-new-macos/",
        "teaser": "/blog/assets/images/raul-per-e-K2w9VegUIb0-unsplash.jpg"
      },{
        "title": "🚀 如何使用 Excalidraw AI 快速生成專業級圖表，提升工作效率！",
        "excerpt":"📢 前言 在現代工作中，無論是 工程師、設計師、商業分析師還是教育工作者，都需要製作圖表來視覺化資訊。然而，傳統的繪圖工具通常需要手動拖拉元件、調整線條，既耗時又繁瑣。 現在，透過 Excalidraw AI，我們可以透過簡單的文字描述，自動生成 流程圖、心智圖、技術架構圖、商業流程圖 等，大幅提高工作效率！ 本文將介紹 Excalidraw AI 的強大功能，並透過一個 MQTT 通訊協定流程圖，展示如何快速生成專業級圖表。 🎯 為什麼選擇 Excalidraw AI？ Excalidraw 是一款開源的 手繪風格繪圖工具，而 Excalidraw AI 則加入了 AI 自動繪圖功能，只需輸入簡單的文字描述，它就能智能識別內容並自動生成圖表。 ✅ Excalidraw AI 的主要優勢 🚀 快速生成圖表：無需手動繪製，只需輸入描述，即可獲得完整圖表。 📊 支援多種圖表類型：流程圖、心智圖、技術架構圖、商業圖表等應有盡有。 ✏️ 可編輯與自訂：生成後的圖表仍然可以手動調整，符合個人需求。 🆓 開源且免費：可直接在線使用，無需安裝額外軟體。 🛠 如何使用 Excalidraw AI 生成專業級圖表？ 1️⃣ 進入 Excalidraw AI 首先，打開 Excalidraw...","categories": ["AI Tools","Visualization","Productivity"],
        "tags": ["Excalidraw","AI Drawing","Diagram Tool","Flowchart","Mind Map"],
        "url": "/blog/ai%20tools/visualization/productivity/ai-tools-excalidraw-chart-guide/",
        "teaser": "/blog/assets/images/kelly-sikkema-lFtttcsx5Vk-unsplash.jpg"
      },{
        "title": "💡 一台電腦操作多個 GitHub 帳號：最簡單快速的 SSH 設定方法",
        "excerpt":"🚀 為什麼需要多個 GitHub 帳號？ 在工作與個人開發之間，許多開發者會同時擁有兩個以上的 GitHub 帳號。為了避免權限混淆或 push 錯誤，我們可以透過 SSH config 的方式，讓同一台電腦安全切換不同帳號。 🛠 最簡單的多帳號操作方法：使用 SSH Config 配對金鑰 以下是最精簡、有效的操作流程（假設你已有不同帳號的 SSH 金鑰）： 1️⃣ 檢查目前已載入的金鑰 ssh-add -l 如果只看到預設金鑰（例如 id_ed25519），代表還沒載入其他帳號的 key。 256 SHA256:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx nick25932219@gmail.com(ED25519) 2️⃣ 載入第二組帳號的金鑰 ssh-add ~/.ssh/id_ed25519_company 再次確認： ssh-add -l 你應該會看到 id_ed25519_company 被成功載入。 256 SHA256:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx nick25932219@gmail.com 256 SHA256:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx nickhuang@company.com.tw (ED25519) 3️⃣ 設定 SSH...","categories": ["DevOps","Productivity","GitHub"],
        "tags": ["GitHub","SSH","Git"],
        "url": "/blog/devops/productivity/github/how-to-use-multiple-github-accounts-using-ssh/",
        "teaser": "/blog/assets/images/github.jpg"
      }]
