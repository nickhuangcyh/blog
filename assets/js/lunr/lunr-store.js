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
        "title": "Design Pattern 系列 (1) - Design Principle",
        "excerpt":"這一系列文章我會透過工作上的經驗及研讀 Head First Design Patterns、大話設計模式 兩本書，加上學習 Linkedin Learning 上的兩個課程 Advanced Design Patterns: Design Principles、Programming Foundations: Design Patterns、Design Patterns: Creational，理解整理後，寫成文章分享! 您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 Design Pattern 在軟體設計會遇到各種問題，Design Pattern 是軟體設計高手為這些常見的問題所提出的解決方案，解決設計上彈性、擴充不足等等問題… Design Pattern 的重要性 設計模式在軟體工程上是非常重要的核心知識，設計模式之於軟體工程師，就像內功心法之於習武之人一樣重要，神鵰俠侶中的楊過精通各式各樣的武功，也是因為內功深厚，後期不論學任何武功都非常快速，而軟體工程師的核心技能就是演算法、資料結構、設計模式、架構等…，只要將這些共通技能學好，在不同的程式語言及領域都能非常快上手。 Design Principle Design Principle 是用來幫助我們改善物件導向設計的建議，幫助我們設計出更好的軟體。 Object-Oriented Concepts 物件導向概念 學物件導向設計一定都會知道這四大概念，這邊我就簡單描述帶過 Encapsulation 封裝 將屬性及方法實作細節隱藏起來在類別當中，只暴露部分方法給使用者，使用者無法任意修改內部屬性及方法實作細節。 像是開車一樣，我們只需知道踩油門會加速，踩煞車會停止，不需要知道馬達、電瓶、發動機等等原理，這些都被專業汽車工程師封裝在引擎蓋中了。 Inheritance 繼承...","categories": ["Design Pattern"],
        "tags": ["Design Principle","SOLID"],
        "url": "/blog/design%20pattern/design-pattern-1-design-principle/",
        "teaser": "/blog/assets/images/sigmund-_dJCBtdUu74-unsplash.jpg"
      },{
        "title": "Design Pattern 系列 (2) - Design Patterns Categories",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 Design Patterns Categories Design Pattern 可以分為三種基本的類型 Creational 創建型 創建實例化物件有關的 Patterns Factory Method Pattern Abstract Factory Pattern Builder Pattern Prototype Pattern Singleton Pattern Structural 結構型 物件之間如何組成更大結構的 Patterns Adapter Pattern Bridge Pattern Decorator Pattern Facade Pattern Proxy Pattern Flyweight Pattern Composite Pattern Behavioural 行為型 物件之間行為交互的...","categories": ["Design Pattern"],
        "tags": ["Creational Patterns","Structural Patterns","Behavioral Patterns"],
        "url": "/blog/design%20pattern/design-pattern-2-design-patterns-categories/",
        "teaser": "/blog/assets/images/v2osk-c9OfrVeD_tQ-unsplash.jpg"
      },{
        "title": "Design Pattern 系列 (3) - UML 詳細解說",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 UML (Unified Modeling Language) UML 是一種用視覺圖形化來規劃建構軟體的方法。 不要急著寫程式，尤其是遇到較複雜的功能，先思考如何設計架構畫出 UML 圖，程式才會具有可讀性、維護性及擴展性。 Class 類別 如圖分為三列依序是 Class 名稱 Attribute 屬性 Operations 方法 Interface 介面 Interface 有兩種表示法 一般表示法 一般型式與 Class 並無太大區別，只要在 Class Name 上方標註 &lt;&lt;interface&gt;&gt; 即可 棒棒糖表示法 用球狀來表示介面 Attribute 屬性 Visibility 可視範圍 Sign Modifiers + Public # Protected...","categories": ["Design Pattern"],
        "tags": ["UML"],
        "url": "/blog/design%20pattern/design-pattern-3-uml/",
        "teaser": "/blog/assets/images/christina-wocintechchat-com-tYVkjjMYFBo-unsplash.jpg"
      },{
        "title": "Design Pattern 系列 (4) - Simple Factory Pattern",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 今天我們想做一套飲料點餐系統，很快的我們畫出 UML 並寫出了下面的程式碼 Swift Kotlin 隨著飲料店越來越多新飲品，我們也需要修改 order 方法，但這樣容易影響不會變動的程式碼，於是我們需要找出 需要變動 以及 不需變動 的程式碼，把它們分隔開來 需要變動的程式碼 Swift Kotlin 不需變動的程式碼 Swift Kotlin 找出後該如何做呢，這時候需要用到 簡單工廠模式 來將其分離 Simple Factory Pattern 簡單工廠模式 其實就是定義一個工廠類別來專門處理創建物件的邏輯 那就讓我們修改一下上面的 UML 及程式碼吧 Swift Kotlin 透過簡單工廠模式，我們就將 需要變動 以及 不需變動 的程式碼成功分隔開來，當要修改菜單時，只需修改 BeverageFactory 即可，不會影響到其他程式碼。 簡單工廠其實不是設計模式，反而比較像是一種編成習慣 有些開發者的確是把這個編成習慣誤認為 工廠模式 (Factory Pattern)...","categories": ["Design Pattern"],
        "tags": ["Simple Factory Pattern"],
        "url": "/blog/design%20pattern/design-pattern-4-simple-factory-pattern/",
        "teaser": "/blog/assets/images/vindemia-winery-wGk29doZtpQ-unsplash.jpg"
      },{
        "title": "Design Pattern 系列 (5) - Factory Method Pattern",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 上一篇我們利用 簡單工廠模式成功地將 需要變動 以及 不需變動 的程式碼分離。 飲料點餐系統受到客戶的喜愛，業績非常好，於是客戶在世界各地迅速擴店，但很快的問題出現了。 因為世界各地的人有不同的偏好，分店開始反應，該地區的顧客不喜歡目前正在使用的紅茶綠茶之茶葉，希望替換該區喜愛的茶葉 例如: 美國喜歡錫蘭紅茶、歐洲喜歡伯爵紅茶 (成本考量我們不將所有紅茶種類都加入菜單，只用最符合當地口味的茶葉製作紅茶) 於是我們修改簡單工廠的程式碼，新增 USBeverageFactory 及 EUBeverageFactory 來製作符合美國及歐洲當地口味的飲品 Swift Kotlin 這樣做雖然可以滿足分店從不同工廠取得該地區的飲品，但每當有新的分店加入，就必須動到 BeverageShop 的程式碼來添加新的分店工廠，違反了 Open Closed Principle，如何解決就要介紹今天的主角 Factory Method Pattern。 Factory Method Pattern 提供一個介面用來創建物件，真正實體化的類別由子類別實作決定。 讓我們修改一下上面的 UML 及程式碼吧 Swift Kotlin 透過工廠方法模式，我們透過將工廠抽象化，達到可擴充性，之後如果要拓展其他分店像是日本分店，只需新增一個 JPBeverageFactory ，就能創建能做出符合日本人口味的飲料工廠，而不需修改到其他不需變動的程式碼。 最後來看一下 工廠方法 的 UML...","categories": ["Design Pattern"],
        "tags": ["Factory Method Pattern"],
        "url": "/blog/design%20pattern/design-pattern-5-factory-method-pattern/",
        "teaser": "/blog/assets/images/carlos-aranda-QMjCzOGeglA-unsplash.jpg"
      },{
        "title": "Design Pattern 系列 (6) - Abstract Factory Pattern",
        "excerpt":"您可於此 design_pattern repo 下載 Design Pattern 系列程式碼。 上一篇我們利用 工廠方法模式 讓分店可以客製化飲品使用的原料，也遵守了 開放封閉原則 使我們可以很輕易地添加其他分店，而不改變已經存在的程式碼。 試想一下假如飲料菜單新增的飲品越來越多，分店也越來越多，大家應該會發現到，各分店的工廠所要增加的品項判斷也會越來越多。 Swift Kotlin 如何處理多個產品在不同分店的組合，這時就需要用到 Abstract Factory Pattern Abstract Factory Pattern 透過將工廠抽象，使子類別能創建一系列的實體物件。 抽象工廠有個重要的判斷方式，當你所要創建的產品是一整個系列產品，且不同需求要創建不同系列，這個關係能夠畫成二維關係，這時就非常適合使用抽象工廠來建立產品 如下圖 Country / Tea BlackTea GreenTea MilkTea US Flavor Ceylon(錫蘭) Gyokuro(玉露) Thai (泰奶) EU Flavor EarlGrey(伯爵) Sencha(煎茶) Masala Chai (印度馬薩拉)) JP Flavor Assam(阿薩姆) Matcha(抹茶) Hokkaido(北海道奶茶) 讓我們根據上面的茶家族修改一下...","categories": ["Design Pattern"],
        "tags": ["Abstract Factory Pattern"],
        "url": "/blog/design%20pattern/design-pattern-6-abstract-factory-pattern/",
        "teaser": "/blog/assets/images/lenny-kuhne-jHZ70nRk7Ns-unsplash.jpg"
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
      }]
