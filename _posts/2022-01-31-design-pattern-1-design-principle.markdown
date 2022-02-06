---
layout: single
title: "Design Pattern 系列 (1) - Design Principle"
date: 2022-01-31 17:30:00 +0800
excerpt: "學習程式設計共通核心技術，這些共通技術能使我們很快學會另一門程式語言及框架技術"
header:
  overlay_image: /assets/images/sigmund-_dJCBtdUu74-unsplash.jpg
  teaser: /assets/images/sigmund-_dJCBtdUu74-unsplash.jpg
tags: [Design Principle, SOLID]
categories: [Design Pattern]
---

這一系列文章我會透過工作上的經驗及研讀 [Head First Design Patterns](https://www.tenlong.com.tw/products/9789867794529)、[大話設計模式](https://www.tenlong.com.tw/products/9789866761799) 兩本書，加上學習 Linkedin Learning 上的兩個課程 [Advanced Design Patterns: Design Principles](https://www.linkedin.com/learning/advanced-design-patterns-design-principles/what-are-design-principles?autoAdvance=true&autoSkip=false&autoplay=true&resume=true)、[Programming Foundations: Design Patterns](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/trying-interfaces?autoAdvance=true&autoSkip=false&autoplay=true&resume=true)、[Design Patterns: Creational](https://www.linkedin.com/learning/design-patterns-creational/think-about-how-you-create-objects?autoAdvance=true&autoSkip=false&autoplay=true&resume=true)，理解整理後，寫成文章分享!

> 您可於此 [design_pattern repo](https://github.com/nickhuang9527/design_pattern) 下載 Design Pattern 系列程式碼。

## Design Pattern

在軟體設計會遇到各種問題，Design Pattern 是軟體設計高手為這些常見的問題所提出的解決方案，解決設計上彈性、擴充不足等等問題...

## Design Pattern 的重要性

設計模式在軟體工程上是非常重要的核心知識，設計模式之於軟體工程師，就像內功心法之於習武之人一樣重要，神鵰俠侶中的楊過精通各式各樣的武功，也是因為內功深厚，後期不論學任何武功都非常快速，而軟體工程師的核心技能就是演算法、資料結構、設計模式、架構等...，只要將這些共通技能學好，在不同的程式語言及領域都能非常快上手。

![design_pattern_design_principle_mind](/blog/assets/images/design_pattern_design_principle_mind.png)

## Design Principle

Design Principle 是用來幫助我們改善物件導向設計的建議，幫助我們設計出更好的軟體。

## Object-Oriented Concepts 物件導向概念

學物件導向設計一定都會知道這四大概念，這邊我就簡單描述帶過

### Encapsulation 封裝

將屬性及方法實作細節隱藏起來在類別當中，只暴露部分方法給使用者，使用者無法任意修改內部屬性及方法實作細節。

### Inheritance 繼承

子類別可以繼承父類別的屬性及方法，達到程式碼重複使用之目的。

### Polymorphism 多型

為不同的類別提供統一介面或抽象類別，以操作不同的實體物件。

### Abstraction 抽象

透過類型子類及抽象方式，隱藏依賴於類型或接口的實作細節。

## Object-Oriented Concepts, Design Principle, Design Pattern 之間關係

三者關係是由下至上的概念，Design Principle 由 Object-Oriented Concepts 概念所衍生，Design Pattern 由 Design Principle 概念所衍生

![design_pattern_design_principle_architecture](/blog/assets/images/design_pattern_design_principle_architecture.png)

有點像鬼滅之刃中呼吸法都源自於日之呼吸的概念

![breathe way](https://i2.wp.com/bokunoheroaccount.com/wp-content/uploads/2020/08/cbf2d5e3fb4f256a702921bbb064c05a-1024x821.png?resize=1024%2C821&ssl=1)

> refer to <https://i2.wp.com/bokunoheroaccount.com/wp-content/uploads/2020/08/cbf2d5e3fb4f256a702921bbb064c05a-1024x821.png?resize=1024%2C821&ssl=1>

## Encapsulate What Varies 封裝變化

找出程式中可能需要更動之處，把它們獨立出來，不要和那些不需要更動的程式碼混再一起。

假設今天要設計一間鬆餅店，可以訂購鬆餅

```swift
func orderPancake(type: String) {
    var pancake: Pancake?

    // Code that is varying
    switch type {
    case "classic":
        pancake = ClassicPancake()
    case "blueberry":
        pancake = BlueberryPancake()
    case "banana":
        pancake = BananaPancake()
//    case "chocolate chip":
//        pancake = ChocolateChipPancake()
    default:
        pancake = ClassicPancake()
    }

    // Important code that does not vary
    pancake?.cook()
    pancake?.plate()
    pancake?.addButter()
}
```

但老闆今天想增加新口味 `ChocolateChip`，但 cook(), plate(), addButter() 這些程式並不需要修改，所以我們應該將會變化的程式碼抽出來封裝，減少對不需變動的程式碼產生影響。

```swift
public class SimplePancakeFactory {
    public class func createPancake(type: String) -> Pancake? {
        var pancake: Pancake?

        // Code that is varying
        switch type {
        case "classic":
            pancake = ClassicPancake()
        case "blueberry":
            pancake = BlueberryPancake()
        case "banana":
            pancake = BananaPancake()
        //    case "chocolate chip":
        //        pancake = ChocolateChipPancake()
        default:
            pancake = ClassicPancake()
        }

        return pancake
    }
}

func orderPancakeWithFactory(type: String) {
    let pancake = SimplePancakeFactory.createPancake(type: type)

    // Important code that does not vary
    pancake?.cook()
    pancake?.plate()
    pancake?.addButter()
}
```

如此我們就可以隨時添加新口味且不會影響其他不會變動的程式碼。

## Favor composition over inheritance 多用合成，少用繼承

HAS-A (composition) can be better than IS-A (inheritance)

盡量使用合成來取代繼承，並不是完全不使用繼承，而是多數情況下你應該考慮使用合成而不是繼承

假設今天要設計一間咖啡店，裡面有賣很多咖啡，我們可以這樣設計

![design_pattern_design_principle_favor_composition_over_inheritance_1](/blog/assets/images/design_pattern_design_principle_favor_composition_over_inheritance_1.png)

但如果今天客人要加 Butter 及 Milk，我們又要定義一個新的 class CoffeeWithButterAndMilk 繼承 Coffee
我們會發現，隨著調味料種類越多，咖啡的組合也會越來越多，以及牛奶價格上漲，那所有包含牛奶的 Coffee 都必須修改

如果我們用合成取代繼承呢，從牛奶咖啡是(is-A)咖啡，變成咖啡有(has-A)各種調味料

![design_pattern_design_principle_favor_composition_over_inheritance_2](/blog/assets/images/design_pattern_design_principle_favor_composition_over_inheritance_2.png)

你會發現使用合成取代繼承有下列好處

1. 可以在 Run time 替換不同的調料物件
2. 新增一種新調料只需新增一個對應的 class
3. 沒有重複的程式碼
4. 避免 class 數量爆炸性增加

> 再次強調不是完全不用繼承，而是"盡量"用合成取代繼承，像圖中例子 Mocha、Butter 及 Milk 也是有使用到繼承去繼承 Condiment

## Loose Coupling 鬆耦合

將每個組件獨立開來，使部件之間的相互影響降低

再來看一個範例，今天要做一個 Weather App，他可以取得溫度並顯示在螢幕上。

![design_pattern_design_principle_loose_coupling_1](/blog/assets/images/design_pattern_design_principle_loose_coupling_1.png)

你會發現 WeatherApp 與 LCDScreen 緊密耦合，今天如果老闆想改成在 Widget 或 LED 上來顯示，WeatherApp 的 screen 屬性及 display 方法都要修改，且不能在 Run time 任意替換。

我們改一下 UML 來將兩者之間做解耦

![design_pattern_design_principle_loose_coupling_2](/blog/assets/images/design_pattern_design_principle_loose_coupling_2.png)

這樣不管老闆想改成什麼螢幕都能夠很輕易替換，因為 WeatherApp 依賴的是介面，不再是實體，善用抽象介面解耦兩個實體物件吧!

## Program to Interfaces 基於介面編程

寫程式是針對介面而寫，而不是針對實踐方式而寫。

當你針對介面編寫，你會發現任何物件都變得非常好抽換，當你需要注入假資料測試，你可以作假物件實作此介面即可，當你在做 MVC MVP 等架構，只需要實作此介面就能輕易替換組件，當你開始已介面去思考，你會發現程式碼變得非常有彈性、且好擴充測試，Apple 甚至在 WWDC15 中提到 Swift 的 [Protocol-Oriented Programming](https://developer.apple.com/videos/play/wwdc2015/408/)，代表介面(協議)思考的重要性，所以從現在起開始從介面思考吧!

來個例子，今天我們要設計一個基本網站，有一個 WebSystem 及 DB 來存讀資料

![design_pattern_design_principle_program_to_interface_1](/blog/assets/images/design_pattern_design_principle_program_to_interface_1.png)

今天我們想在上 Production 前，將 CommercialDB 換成 TestDB
做測試，但目前 KillerWebSystem 的 db 型別為 CommercialDB 無法抽換

讓我們修改一下

![design_pattern_design_principle_program_to_interface_2](/blog/assets/images/design_pattern_design_principle_program_to_interface_2.png)

寫一個 AbstractDB 的介面或抽象類別，讓 CommercialDB 及 TestDB 都實作此介面，這樣就能很輕鬆的在測試環境替換 DB

## SOLID 物件導向程式設計基本五大原則

### Single Responsibility Principle (SRP) 單一職責原則

物件應該僅具有一種單一功能，應只會有一個理由去改變此物件

e.g.
我們要做登入頁面功能，我們會這樣寫

```swift
class LoginViewController {
    func loginToServer(account: String, password: String, callback: Result<String, Error>) {
//        Alamofire... { callback() }
//        Volley... { callback() }
    }

    func saveToDB(account: String, password: String) {
        // sql.save()...
    }

    func deleteFromDB(account: String) {
        // sql.delete()
    }
}
```

依照單一職責原則，我們應該要將 API 及 DB 的功能分開，修改如下

```swift
class ServerApiRequestService {
    func login(account: String, password: String, callback: Result<String, Error>) {
//        Alamofire... { callback() }
//        Volley... { callback() }
    }
}

class DBService {
    func save(account: String, password: String) {
//        sql.save()
    }

    func delete(account: String) {
//        sql.delete()
    }
}

class LoginViewControllerSRP {
    var apiRequestService: ServerApiRequestService? = nil
    var dbService: DBService? = nil

    func loginToServer(account: String, password: String, callback: Result<String, Error>) {
        apiRequestService?.login(account: account, password: password, callback: callback)
    }

    func saveToDB(account: String, password: String) {
        dbService?.save(account: account, password: password)
    }

    func deleteFromDB(account: String) {
        dbService?.delete(account: account)
    }
}
```

有些文章會說 save, delete function 也須拆開在不同 class(DeleteDBService, SaveDBService)處理, 因為 save. delete 是不同職責修改項目, 不應動到另一個 class, 但我認為這樣 Over Design 反而不好維護, 拆分職責應適當不過度

### Open Closed Principle (OCP) 開放封閉原則

對於擴充開放，對於修改封閉

e.g.
我們常常會需要檢查使用者登入的帳密等等，我們來做一個檢查器吧

```swift
enum ValidatorType {
    case username
    case password
}

enum ValidationError: Error, Equatable {
    case isEmpty(errorMessage: String)
    case containsSpecialChar(errorMessage: String)

    static func == (lhs: Self, rhs: Self) -> Bool {
        switch (lhs, rhs) {
        case (.isEmpty(_), .isEmpty(_)):
            return true
        case (.containsSpecialChar(_), .containsSpecialChar(_)):
            return true
        default:
            return false
        }
    }
}

class Validator {
    func validated(_ value: String, validatorType: ValidatorType) throws -> String {
        switch validatorType {
        case .username:
            guard !value.isEmpty else {
                throw ValidationError.isEmpty(errorMessage: "isEmpty")
            }
            guard !value.isContainsSpecialChars() else {
                throw ValidationError.containsSpecialChar(errorMessage: "containsSpecialChar")
            }
        case .password:
            guard !value.isEmpty else {
                throw ValidationError.isEmpty(errorMessage: "isEmpty")
            }
        }
        return value
    }
}
```

但假如今天客戶想要增加 Email、Phone Number、Device Mac 等等的格式檢查，那我們必須修改到 Validator class 的程式碼，這樣會影響到其他程式碼，打破了 Open-Closed Principle，對於擴充開放，對於修改封閉，那我們可以怎麼改進，如下

```swift
protocol ValidatorConvertible {
    func validated(_ value: String) throws -> String
}

class UserNameValidator: ValidatorConvertible {

    func validated(_ value: String) throws -> String {
        guard !value.isEmpty else {
            throw ValidationError.isEmpty(errorMessage: "isEmpty")
        }
        guard !value.isContainsSpecialChars() else {
            throw ValidationError.containsSpecialChar(errorMessage: "containsSpecialChar")
        }
        return value
    }
}

class PasswordValidator: ValidatorConvertible {

    func validated(_ value: String) throws -> String {
        guard !value.isEmpty else {
            throw ValidationError.isEmpty(errorMessage: "isEmpty")
        }
        return value
    }
}
```

如此要新增 Email、Phone Number、Device Mac 格式檢查，我們只需要新增相對應的檢查器即可 EmailValidator、PhoneNumberValidator 及 DeviceMacValidator，既不會影響其他程式碼(對修改封閉)，也容易擴充新的檢查器(對擴充開放)

### Liskov Substitution Principle (LSP) 里氏替換原則

程式中的物件應該是可以在不改變程式正確性的前提下被它的子類所替換的

e.g. 我們需要計算正方形及長方形的面積

```swift
class Rectangle {
    var height: Int
    var width: Int

    init(height: Int, weight: Int) {
        self.height = height
        self.width = weight
    }

    func getArea() -> String {
        return "\(height * width)"
    }
}

class Square: Rectangle {
    override func getArea() -> String {
        if height != width {
            return "長寬需一致"
        } else {
            return super.getArea()
        }
    }
}

let rectangle = Rectangle(height: 2, weight: 3)
print("\(rectangle.getArea())")
let square = Square(height: 2, weight: 3)
print("\(square.getArea())")
```

上面的例子我們將正方形繼承長方形，但正方形的 getArea() 卻不符合長方形的結果，這就打破了 LSP。

- 增加程式碼的健全度，在使用不同的子類別的時候，可以大幅度的保證彼此之間的相容性。只要父類別可以使用，基本上子類別也可以使用
- 子類別如果要新增功能，獨立在父類別的功能之外，才不會在搬移到其他子類別的時候發生奇怪的問題，也可以將功能切分乾淨，區分職責

### Interface Segregation Principle (ISP) 介面隔離原則

多個特定客戶端介面要好於一個寬泛用途的介面

e.g.
今天需要設計如何讓使用者操作車子

```swift
protocol Car {
    func startEngine()
    func stopEngine()
    func enableDebugMode()
}

class Driver: Car {
    func startEngine() {
        print("start engine")
    }

    func stopEngine() {
        print("stop engine")
    }

    func enableDebugMode() {
        print("enable debug mode")
    }
}

class Engineer: Car {
    func startEngine() {
        print("start engine")
    }

    func stopEngine() {
        print("stop engine")
    }

    func enableDebugMode() {
        print("enable debug mode")
    }
}
```

工程師可以開啟 DebugMode, 但駕駛使用者不應該可以開啟 DebugMode，因此我們來改變程式碼將 enableDebugMode() 隔離成獨立介面吧!

```swift
protocol Car1 {
    func startEngine()
    func stopEngine()
}

protocol Debuggable {
    func enableDebugMode()
}

class Driver1: Car1 {
    func startEngine() {
        print("start engine")
    }

    func stopEngine() {
        print("stop engine")
    }
}

class Engineer1: Car1, Debuggable {
    func startEngine() {
        print("start engine")
    }

    func stopEngine() {
        print("stop engine")
    }

    func enableDebugMode() {
        print("enable debug mode")
    }
}
```

如此就只有工程師能進入 DebugMode

### Dependency Inversion Principle (DIP) 依賴反向原則

高階模組不應該依賴於低階模組，兩者都應該依賴抽象，
抽象不應該依賴細節，細節應該依賴抽象。

e.g. 設計一個能不同房間加入不同 IoT 設備的系統，可以新增刪除房間，例如客廳有智慧音箱、溫度控制器，廚房有煙霧偵測器等...

```swift
class Room {
    var no: Int
    var device: [String]

    init(no: Int, device: [String]) {
        self.no = no
        self.device = device
    }
}

class SQLiteService {
    func saveRoom(room: Room) {
        print("SQLiteService save")
    }

    func deleteRoom(no: Int) {
        print("SQLiteService delete")
    }
}

class RoomViewController {
    var sqlDBService: SQLiteService? = nil

    init(sqlDBService: SQLiteService) {
        sqlDBService
    }

    func saveRoomToDB(room: Room) {
        sqlDBService?.saveRoom(room: room)
    }

    func deleteRoomFromDB(no: Int) {
        sqlDBService?.deleteRoom(no: no)
    }
}

let roomVC = RoomViewController(sqlDBService: SQLiteService())
let room = Room(no: 1, device: ["IPCam", "VDP"])
roomVC.saveRoomToDB(room: room)
roomVC.deleteRoomFromDB(no: room.no)
```

如果今天 SQLite 因某些問題(速度過慢等等...)因素，導致我們必須換成 CoreData 或其他 Database 呢?
你會發現我們無法抽換，但如果依賴於抽象編寫，程式碼就會非常好抽換及測試，下面讓我們修改一下程式碼

```swift
protocol DataBaseService {
    func saveRoom(room: Room)
    func deleteRoom(no: Int)
}

class SQLiteDBService: DataBaseService {
    func saveRoom(room: Room) {
        print("SQLiteDBService save")
    }

    func deleteRoom(no: Int) {
        print("SQLiteDBService delete")
    }
}

class CoreDataDBService: DataBaseService {
    func saveRoom(room: Room) {
        print("CoreDataDBService save")
    }

    func deleteRoom(no: Int) {
        print("CoreDataDBService delete")
    }
}

class MySQLDBService: DataBaseService {
    func saveRoom(room: Room) {
        print("MySQLDBService save")
    }

    func deleteRoom(no: Int) {
        print("MySQLDBService delete")
    }
}

class Room2ViewController {
    var databaseService: DataBaseService? = nil

    init(databaseService: DataBaseService) {
        self.databaseService = databaseService
    }

    func saveRoomToDB(room: Room) {
        databaseService?.saveRoom(room: room)
    }

    func deleteRoomFromDB(no: Int) {
        databaseService?.deleteRoom(no: no)
    }
}

let sqliteDB = SQLiteDBService()
let coreDataDB = CoreDataDBService()
let mysqlDB = MySQLDBService()

let room2VC = Room2ViewController(databaseService: sqliteDB)
let room2 = Room(no: 2, device: ["IPCam", "VDP"])

// sql
room2VC.saveRoomToDB(room: room2)
room2VC.deleteRoomFromDB(no: room2.no)

// coredata
room2VC.databaseService = coreDataDB
room2VC.saveRoomToDB(room: room2)
room2VC.deleteRoomFromDB(no: room2.no)

// mysql
room2VC.databaseService = mysqlDB
room2VC.saveRoomToDB(room: room2)
room2VC.deleteRoomFromDB(no: room2.no)
```

抽象 - interface, protocol, abstract class

- 依賴於抽象可以使我們的程式碼更加有彈性, 也更好抽換依賴物件
- 養成多寫一層抽象成能使代碼更好維護、測試
- 抽象層能使我們非常容易的製作假物件快速測試程式邏輯

## 總結

Design Principle 是物件導向程式設計及 Design Pattern 的核心，其實這些核心技術都是通用的，只要學好核心技術，學習其他語言或設計架構都會變得非常快
下一篇要來介紹 Design Pattern 的種類有哪些

今天是 2022 除夕夜，新的一年祝大家都能夠順利達成目標，朝夢想邁進!

## 參考

- [Head First Design Patterns](https://www.tenlong.com.tw/products/9789867794529)
- [大話設計模式](https://www.tenlong.com.tw/products/9789866761799)
- [Advanced Design Patterns: Design Principles](https://www.linkedin.com/learning/advanced-design-patterns-design-principles/what-are-design-principles?autoAdvance=true&autoSkip=false&autoplay=true&resume=true)
- [Programming Foundations: Design Patterns](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/trying-interfaces?autoAdvance=true&autoSkip=false&autoplay=true&resume=true)
- [Design Patterns: Creational](https://www.linkedin.com/learning/design-patterns-creational/think-about-how-you-create-objects?autoAdvance=true&autoSkip=false&autoplay=true&resume=true)
