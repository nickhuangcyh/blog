---
layout: single
title: "深入解析 Google Wallet Smart Tap：未來的支付方式"
date: 2024-07-05 20:00:00 +0800
excerpt: "探索 Google Wallet Smart Tap 的運作原理和它如何改變我們的支付習慣。本文將帶你了解其背後的技術，以及它對未來支付生態系統的影響。"
header:
  overlay_image: /assets/images/mika-baumeister-m7HWPWVjfJ4-unsplash.jpg
  teaser: /assets/images/mika-baumeister-m7HWPWVjfJ4-unsplash.jpg
tags: [Google Wallet, Smart Tap, NFC, Payment Systems]
categories: [Pay, Technology]
---

## 前言

最近因為工作需要，有研究 Google Wallet Smart Tap 相關技術，因此想寫一篇文章記錄，一方面能幫自己複習，另一方便也希望這篇文章能幫助到其他開發者。🙂

## 什麼是 NFC

NFC（近場通訊）是一種短距離無線通訊技術，允許兩個裝置在幾厘米的距離內進行通訊。它廣泛用於各種應用，包括支付、票務、資料交換等。

## Google Wallet Smart Tap 簡介

Smart Tap 是 Google 基於 NFC 技術開發的專有的近場通訊協議，用於在移動設備和 NFC 終端之間傳輸數據。

> 如果你們公司是實作 Terminal 端，必須獲得認證才能使用此協議，這部分我有寫信問 Google 得到如下回覆，需要提供資訊簽署協議，Google 才會提供機密文件讓你實作。
>
> If you are a terminal provider and would like to certify your terminal for use with Google Wallet, please provide more details about your terminal, intended functionality and target country/region. The documentation needed for Smart Tap certification is locked behind an NDA.
>
> Once I have this information, my team and I will review and if the decision is to move forward with your request, we will begin the process of onboarding, starting with an NDA.

## 事前條件

我們需要完成兩個條件才能開始設置 smart tap

1. 創建 pass class 跟 pass object(s)
2. 與支援 Smart Tap 的終端供應商建立合作關係

目前有支援 Smart Tap 的供應商如下

- Advanced Card Systems Ltd.
- Axess AG
- Castles Technology
- Contactless Technologies B. V.
- Dot Origin
- Embed International
- Equinox
- HID
- IDTech
- Infinite Peripherals
- Ingenico
- Intercard Inc.
- Janam
- On Track Innovations
- Pax
- PinvAccess
- Radius Network
- Skidata
- Socket Mobile
- SpringCard
- Techsigno SRL
- UIC Payworld Inc.
- Verifone
- XAC
- Zebra

## Identifiers

在創建 pass class 跟 pass object(s) 之前，我們需要先知道一些 Smart Tap protocol 所使用的 Identifiers

- Redemption Issuer ID (兌換核發機構 ID)
- Collector ID
- Pass class ID

### Issuer ID (核發機構 ID)

Issuer ID 是 Google Wallet 發卡機構唯一識別碼，可以在 [Google Pay & Wallet Console](https://pay.google.com/business/console/home?hl=zh-cn) 中找到

### Redemption Issuer ID (兌換核發機構 ID)

Redemption Issuer ID 是一種特定的 Issuer ID，可以把 Redemption Issuer ID 當成是單一商家，Issuer 是儲存多個商家的 pass class 平台的"集合商家"

Issuer ID 可以代表商家、優惠提供方、商場(e.g. SOGO)、終端機製造商等等...，pass class & object(s) 開發出來後，會與 Redemption Issuer ID 相關聯，Issuer ID 包含了 pass class IDs 跟 object IDs

| ID        | Format                | Notes                                                                                                |
| --------- | --------------------- | ---------------------------------------------------------------------------------------------------- |
| Class ID  | issuerId.classSuffix  | The classSuffix is a unique, developer-defined value for a specific pass class (e.g. a loyalty tier) |
| Object ID | issuerId.objectSuffix | The objectSuffix is a unique, developer-defined value for a specific pass object (such as a user ID) |

### Collector ID (收款方 ID)

- 當商家的終端機支持 Smart Tap, 則 Redemption Issuer 將有一組 Collector ID
- Collector ID 是一個 8 位數字的 ID
- 當 User 將設備觸碰支援 Smart Tap 的終端時，終端會將 Collector ID 發送到 User 的設備。然後設備使用該 Collector ID 的 public key 向終端進行身份驗證(後面等等會提到通訊流程)

> 1. 一個 Issuer ID 只能分配一組 Collector ID
> 2. Collector ID 在所有 Issuer IDs 都是唯一的

### Pass Class ID (票證類 ID)

用於標示特定層級或票證類型。採用以下格式

> issuerId.classSuffix

classSuffix 是由開發者定義此 pass class 獨有的值，透過此 pass class 所建立出來的 object class 可以被保存到 Google Wallet App 中。

> Pass Class ID 為單一的 Issuer 帳號所有，但可以與多個 Redemption Issuer 相關聯

## Communication Flow (通訊流程)

終端會使用 Collector ID 來標示自身，Collector ID 會 mapping 到一個 Redemption Issuer ID，當發生 Smart Tap 時，終端會將自身的 Collector ID 傳輸給 User 的設備。然後 Google Wallet App 會檢查每個儲存在設備中的 pass class ID 及 Collector ID。找到一個或多個匹配的票證，然後 Google Wallet App 會將這些匹配的票證傳輸到終端。

### 範例 1: 一個 Redemption Issuer

![google_wallet_smart_tap_communication_flow_example1]({{ site.baseurl }}/assets/images/google_wallet_smart_tap_communication_flow_example1.png)

上圖有兩個不同的 Issuer

- Issuer `2018` 是 pass 開發者 (Aggregator)
- Issuer `1990` 是商家 fooPizza (Redemption Issuer)

Redemption Issuer - fooPizza 想要為他們的票證啟用 Smart Tap 功能，Aggregator 及 Redemption Issuer 必須完成下面的步驟，才能為商家終端啟用 Smart Tap
| 步驟 | 角色 | 說明 |
|:----:|:------------:|:---------------------------------------------------------------------------------------------------------------------|
| 1 | Aggregator | 創建票證類和對象（在圖中分別為 abc 和 123）。 |
| 2 | Aggregator | 將 Redemption Issuer 的 ID 添加到票證類的 `redemptionIssuers` 屬性中。這會告知 Google 錢包，發卡機構 ID 1990 可以兌換引用此類的票證對象。 |
| 3 | Redemption Issuer | 獲取 Collector ID（在圖中，12345678）。 |
| 4 | Redemption Issuer | 在要使用的每個支持 Smart Tap 的終端上設置 Collector ID 12345678。任何類 ID 為 abc 且 Collector ID 為 12345678 的物件都將傳送給 Reader |

### 範例 2: 多個 Redemption Issuer

一個 pass class 可以有多個 Redemption Issuer，為了能夠兌換特定 pass class，Redemption Issuer ID 必須包含在 pass class 創建時的 `redemptionIssuers` 屬性中，然後每個 Redemption Issuer 都有自己的 Collector ID，此 ID 會在終端上配置

![google_wallet_smart_tap_communication_flow_example2]({{ site.baseurl }}/assets/images/google_wallet_smart_tap_communication_flow_example2.png)

上圖有三個不同的 Issuer

- Issuer `8088` 是 pass 開發者 (Aggregator)
- Issuer `1990` 是商家 fooPizza (Redemption Issuer)
- Issuer `2018` 是商家 yumPie (Redemption Issuer)

Aggregator 跟 Redemption Issuers 必須完成下面的步驟，才能為商家終端啟用 Smart Tap

| 步驟 |       角色        | 說明                                                                                                                                             |
| :--: | :---------------: | :----------------------------------------------------------------------------------------------------------------------------------------------- |
|  1   |    Aggregator     | 建立票證類別和物件 (分別在圖中為 abc 和 123)。                                                                                                   |
|  2   |    Aggregator     | 請在票證類別的 `redemptionIssuers` 屬性中加入 Redemption Issuer ID。這會讓 Google 錢包瞭解 Issuer ID 1990 和 2018 可兌換參照這個類別的票證物件。 |
|  3   | Redemption Issuer | 取得 Collector ID (在圖表中，是 fooPizza 的 12345678，以及 yumPie 的 18802001)。                                                                 |
|  4   | Redemption Issuer | 在支援 Smart Tap 的每個終端機上設定對應的 Collector ID。只要物件具有類別 ID abc 且有相符的 Collector ID，系統就會將該物件傳達給 Reader。         |

### 範例 3: 沒有集合商家 (No Aggregator)

我們也可以使用同一個 Issuer 帳戶開發及核發票證類，沒有 Aggregator 管理多個 Redemption Issuer 的票證類。如果要兌換特定票證類，開發者必須在類別的 `redemptionIssuers` 屬性中加入 Issuer ID。開發人員必須取得 Collector ID，並在 Smart Tap 終端上設定 Collector ID。

![google_wallet_smart_tap_communication_flow_example3]({{ site.baseurl }}/assets/images/google_wallet_smart_tap_communication_flow_example3.png)

票證開發者必須完成下列步驟，為商家終端機啟用 Smart Tap。

| 步驟 |      角色      | 說明                                                                                                                                     |
| :--: | :------------: | :--------------------------------------------------------------------------------------------------------------------------------------- |
|  1   | Pass Developer | 建立票證類別和物件 (分別在圖中為 abc 和 123)。                                                                                           |
|  2   | Pass Developer | 在票證類別的 `redemptionIssuers` 屬性中加入他們的 Issuer ID。這會讓 Google Wallet 瞭解 Issuer ID 2018 已獲準兌換參照這個類別的票證物件。 |
|  3   | Pass Developer | 取得 Collector ID (圖中的 12345678)。                                                                                                    |
|  4   | Pass Developer | 在支援 Smart Tap 的每個終端機上設定對應的 Collector ID。只要物件具有類別 ID abc 且有相符的 Collector ID，系統就會將該物件傳達給 Reader。 |

## User experience and behavior

終端機和 Google 錢包應用程式之間傳輸的內容行為，視使用者和他們當下與 Google 錢包應用程式互動的方式而定。

### 情境 1：使用者開啟特定票證

| 步驟 |   角色   | 說明                                                                                     |
| :--: | :------: | :--------------------------------------------------------------------------------------- |
|  1   |   User   | 在 Google 錢包應用程式中選取特定票證。                                                   |
|  2   |   User   | 輕觸支援 Smart Tap 的感應式刷卡機。                                                      |
|  3   | Terminal | (Collector ID 相符) 票證會傳送至終端機。<br>(Collector ID 不相符) 票證不會傳送至終端機。 |

> 如果票證上的 Collector ID 與終端機的 Collector ID 相符，無論票證是否有效 (例如票證物件已過期)，系統依然會傳送票證。

### 情境 2：Google 錢包首頁分頁或解鎖的螢幕檢視畫面

| 步驟 |   角色   | 說明                                                                                                                                   |
| :--: | :------: | :------------------------------------------------------------------------------------------------------------------------------------- |
|  1   |   User   | 在 Google 錢包應用程式中開啟「首頁」分頁，或解鎖裝置的螢幕。                                                                           |
|  2   |   User   | 輕觸支援 Smart Tap 的感應式刷卡機。                                                                                                    |
|  3   | Terminal | (單一有效的 Collector ID 相符) 票證會傳送至終端機。<br>(多個有效的 Collector ID 相符) 顯示有效票證的輪轉介面，並傳送使用者選取的項目。 |

## Setup

### Enable the Google Wallet API

1. 登入 [Google Cloud console](https://console.cloud.google.com/)
2. 如果你沒有 Google Cloud project, 創建一個新的 (see [Creating and managing projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects) for more information)
3. 為你的專案啟動 [Google Wallet API](https://console.cloud.google.com/apis/library/walletobjects.googleapis.com) (also referred to as Google Pay for Passes API)

### Create a service account and key

要調用 Google Wallet API，需要一個 service account 和一個 service account key。service account 是調用 Google Wallet API 的身份識別。service account key 包含一個 private key，用於將您的應用程式識別為該 service account。這個 key 非常敏感，因此需要妥善保管。

#### Create a service account

1. 在 Google Cloud console 中打開 [Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts/create)
2. 為你的 service account 輸入名稱、ID、描述。
3. 選擇 **CREATE AND CONTINUE**
4. 選擇 **DONE**

#### Create a service account key

1. 選擇你的 service account
2. 選擇 **KEYS** menu
3. 選擇 **ADD KEY**, then **Create new key**
4. 選擇 the **JSON** key type
5. 選擇 **CREATE**

#### Set the GOOGLE_APPLICATION_CREDENTIALS environment variable

GOOGLE_APPLICATION_CREDENTIALS 環境變數被 Google SDK 使用來作為 Service Account 的身份驗證以及訪問 Google Cloud 項目的不同 API。

1. 按照 [Google Cloud Service account 密鑰文件](https://cloud.google.com/docs/authentication/provide-credentials-adc#local-key) 中的指示設置 GOOGLE_APPLICATION_CREDENTIALS 環境變數。

可以在 terminal 輸入下面指令，或直接加到 .bashrc or .zshrc 即可

```bash
export GOOGLE_APPLICATION_CREDENTIALS="/Users/nickhuang/Documents/wallet_serviceaccount_key.json"
```

2. 在 Terminal 輸入下面指令來確定有正確配置

```bash
echo $GOOGLE_APPLICATION_CREDENTIALS
```

#### Authorize the service account

最後，我們還需要授權 service account 來管理 Google Wallet passes。

1. 打開 [Google Pay & Wallet Console](https://pay.google.com/business/console)
2. 選擇 **Users**
3. 選擇 **Invite a user**
4. 輸入 service account 的 email（例如：test-svc@myproject.iam.gserviceaccount.com）
5. 從 **Access level** 下拉菜單中選擇 **Developer** 或 **Admin**
6. 選擇 **Invite**

## Issuer account configuration (核發機構帳戶設定)

### Create a new Issuer account

1. 打開 [Google Pay & Wallet Console](https://pay.google.com/business/console)
2. 按照螢幕上的指示創建一個發行者帳戶
3. 選擇 **Google Wallet API**
4. 確認您已瞭解服務條款和隱私政策
5. 將 Issuer ID 值複製到記事本或其他位置
6. 在 **Manager** 標籤下選擇 **Set up test accounts**
7. 添加您要參加測試的任何 email address

### 為 Issuer account 上傳 public key

> 注意： 如果感應式刷卡機供應商需要您先提供 Collector ID，才會給您 Public Key，您可以使用下方的示範金鑰產生 Public Key。感應式刷卡機供應商向您提供實際的公開金鑰之後，請務必移除這組示範金鑰。

```apacheconf
-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEchyXj869zfmKhRi9xP7f2AK07kEo
4lE7ZlWTN14jh4YBTny+hRGRXcUzevV9zSSPJlPHpqqu5pEwlv1xyFvE1w==
-----END PUBLIC KEY-----
```

🗂️ [add_a_smart_tap_key.js]

```javascript
const { GoogleAuth } = require("google-auth-library");

const keyFilePath =
  process.env.GOOGLE_APPLICATION_CREDENTIALS || "/path/to/key.json";
const baseUrl = "https://walletobjects.googleapis.com/walletobjects/v1";
const credentials = require(keyFilePath);

const httpClient = new GoogleAuth({
  credentials: credentials,
  scopes: "https://www.googleapis.com/auth/wallet_object.issuer",
});

(async () => {
  /**
   * Add a new public key to an Issuer account.
   *
   * @param {string} issuerId The issuer ID being used for this request.
   */
  async function addSmartTapKey(issuerId) {
    // New smart tap key information
    let patchBody = {
      smartTapMerchantData: {
        authenticationKeys: [
          {
            id: 1,
            publicKeyPem:
              "-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEchyXj869zfmKhRi9xP7f2AK07kEo\n4lE7ZlWTN14jh4YBTny+hRGRXcUzevV9zSSPJlPHpqqu5pEwlv1xyFvE1w==\n-----END PUBLIC KEY-----",
          },
        ],
      },
    };

    try {
      let response = await httpClient.request({
        url: `${baseUrl}/issuer/${issuerId}`,
        method: "PATCH",
        data: patchBody,
      });

      console.log("Issuer patch response");
      console.log(response);
    } catch (err) {
      console.error("Error adding Smart Tap key:", err);
    }
  }

  // 使用您要測試的 issuerId 調用 addSmartTapKey 函數
  let issuerId = "Your issuer ID";
  await addSmartTapKey(issuerId);
})();
```

```bash
node add_a_smart_tap_key.js
```

到 Google Pay & Wallet Console 的 Google Wallet API -> 其他功能，就會看到 public key 已成功上傳且產生出 Collector ID

![google_wallet_smart_tap_public_key]({{ site.baseurl }}/assets/images/google_wallet_smart_tap_public_key.png)

### 取得 Collector ID

🗂️ [get_collector_id.js]

```javascript
const { GoogleAuth } = require("google-auth-library");

// TODO: Define issuer ID
let issuerId = "Your issuer ID";
const keyFilePath =
  process.env.GOOGLE_APPLICATION_CREDENTIALS || "/path/to/key.json";

const baseUrl = "https://walletobjects.googleapis.com/walletobjects/v1";

const credentials = require(keyFilePath);

const httpClient = new GoogleAuth({
  credentials: credentials,
  scopes: "https://www.googleapis.com/auth/wallet_object.issuer",
});

async function getCollectorId(issuerId) {
  try {
    let response = await httpClient.request({
      url: `${baseUrl}/issuer/${issuerId}`,
      method: "GET",
    });

    console.log("Issuer response");
    console.log(response);

    return response.data.smartTapMerchantData.smartTapMerchantId;
  } catch (error) {
    console.error("Error fetching collector ID:", error);
    throw error;
  }
}

// Call the function and log the result
getCollectorId(issuerId)
  .then((collectorId) => {
    console.log("Collector ID:", collectorId);
  })
  .catch((error) => {
    console.error("Failed to get Collector ID:", error);
  });
```

```bash
node get_collector_id.js
```

## Merchant configuration (商家設定)

- 特定商家的 Issuer account ID
- 要啟用智慧感應功能的 Redemption Issuer ID
- 已設定 smart tap 的票證類別

### Merchant configuration (商家設定)

下列步驟概述商家設定智慧感應功能的設定：

1. 向感應式刷卡機供應商索取公開金鑰和金鑰版本。終端機供應商可能會先要求收集器 ID。在這種情況下，請完成核發者設定中所述的步驟產生收集器 ID，然後返回這個頁面。
2. 將收集器 ID 提供給感應式刷卡機供應商。
3. 將以下資訊提供給商家：
   - Redemption Issuer ID，以及 Google Pay & Wallet Console 的 Link
   - Collector ID
4. 通知商家應永久儲存 Redemption Issuer ID 和 Collector ID。如果票證開發人員需要啟用類別以進行智慧感應兌換功能，商家就必須提供 Redemption Issuer ID。

### 終端機設定

感應式刷卡機供應商必須負責為商家位置使用的所有終端機設定下列屬性。這些值是由 Redemption Issuer 提供。

- Collector ID
- Key version
- Private key

為感應式刷卡機設定智慧感應功能後，票證開發人員就能讓更多票證類別在商家的感應式刷卡機兌換。如要新增票證類別的支援，您不需要進行額外的終端機設定。

## Pass configuration (票證設定)

### Pass class configuration (票證類別設定)

您必須在票證類別上設定下列屬性：

- `enableSmartTap` 設為 True
- `redemptionIssuers` 設為將透過 Smart Tap 兌換與這個類別相關聯的票證物件

```javascript
const { GoogleAuth } = require("google-auth-library");

// TODO: Define issuer ID
let issuerId = "Your issuer ID";
let classSuffix = "Your classSuffix";
const classId = `${issuerId}.${classSuffix}`;
const keyFilePath =
  process.env.GOOGLE_APPLICATION_CREDENTIALS || "/path/to/key.json";

const baseUrl = "https://walletobjects.googleapis.com/walletobjects/v1";

const credentials = require(keyFilePath);

const httpClient = new GoogleAuth({
  credentials: credentials,
  scopes: "https://www.googleapis.com/auth/wallet_object.issuer",
});

// Create a Loyalty SmartTap pass class
let loyaltyClass = {
  id: `${classId}`,
  issuerName: "Climax technology",
  programName: "Climax Loyalty SmartTap 2 Program Test",
  enableSmartTap: true, // Enable Smart Tap
  redemptionIssuers: [
    // Add any Redemption Issuer IDs
    "Your Redemption issuer ID",
  ],
  reviewStatus: "underReview",
  programLogo: {
    sourceUri: {
      uri: "https://www.sourcesecurity.com/img/companies/300/climax-logo_1560425415.jpg",
    },
    contentDescription: {
      defaultValue: {
        language: "en-US",
        value: "Program Logo",
      },
    },
  },
  textModulesData: [
    {
      header: "Welcome to Your Loyalty SmartTap 2 Program",
      body: "Thank you for joining our loyalty SmartTap 2 program. Enjoy exclusive rewards and benefits.",
      id: "welcome_message",
    },
  ],
  linksModuleData: {
    uris: [
      {
        uri: "https://www.climax.com.tw/",
        description: "Visit our loyalty SmartTap 2 program",
        id: "website",
      },
    ],
  },
  imageModulesData: [
    {
      mainImage: {
        sourceUri: {
          uri: "https://www.sourcesecurity.com/img/companies/300/climax-logo_1560425415.jpg",
        },
        contentDescription: {
          defaultValue: {
            language: "en-US",
            value: "Loyalty SmartTap 2 Program Banner",
          },
        },
      },
      id: "loyalty_banner",
    },
  ],
  messages: [
    {
      header: "Welcome",
      body: "Thanks for joining our loyalty SmartTap 2 program!",
      id: "welcome_message",
    },
  ],
};

// Check if the class exists already
httpClient
  .request({
    url: `${baseUrl}/loyaltyClass/${classId}`,
    method: "GET",
  })
  .then((response) => {
    console.log("Class already exists");
    console.log(response);

    console.log("Class ID");
    console.log(response.data.id);
  })
  .catch((err) => {
    if (err.response && err.response.status === 404) {
      // Class does not exist
      // Create it now
      httpClient
        .request({
          url: `${baseUrl}/loyaltyClass`,
          method: "POST",
          data: loyaltyClass,
        })
        .then((response) => {
          console.log("Class insert response");
          console.log(response);

          console.log("Class ID");
          console.log(response.data.id);
        });
    } else {
      // Something else went wrong
      console.log(err);
    }
  });
```

### Pass object configuration (票證物件設定)

若是傳遞物件，則必須設定 `smartTapRedemptionValue` 。

```javascript
const { GoogleAuth } = require("google-auth-library");
const jwt = require("jsonwebtoken");

// TODO: Define issuer ID
let issuerId = "Your issuer ID";
let classSuffix = "Your classSuffix"; // Use the loyalty class ID
let objectSuffix = "Your objectSuffix";
const objectId = `${issuerId}.${objectSuffix}`;
const keyFilePath =
  process.env.GOOGLE_APPLICATION_CREDENTIALS || "/path/to/key.json";

const baseUrl = "https://walletobjects.googleapis.com/walletobjects/v1";

const credentials = require(keyFilePath);

const httpClient = new GoogleAuth({
  credentials: credentials,
  scopes: "https://www.googleapis.com/auth/wallet_object.issuer",
});

// Create a Loyalty SmartTap pass object with Smart Tap support
let loyaltyObject = {
  id: `${objectId}`,
  classId: `${issuerId}.${classSuffix}`,
  state: "active",
  accountId: "123",
  accountName: "Nick Huang",
  textModulesData: [
    {
      header: "Your Loyalty Points",
      body: "You have 500 points.",
      id: "loyalty_points",
    },
  ],
  locations: [
    {
      latitude: 37.422,
      longitude: -122.084,
    },
  ],
  smartTapRedemptionValue: "500",
  infoModuleData: {
    labelValueRows: [
      {
        columns: [
          {
            label: "Smart Tap ID",
            value: "1234567890",
          },
        ],
      },
    ],
  },
};

// Check if the object exists already
httpClient
  .request({
    url: `${baseUrl}/loyaltyObject/${objectId}`,
    method: "GET",
  })
  .then((response) => {
    console.log("Object already exists");
    console.log(response);

    console.log("Object ID");
    console.log(response.data.id);
  })
  .catch((err) => {
    if (err.response && err.response.status === 404) {
      // Object does not exist
      // Create it now
      httpClient
        .request({
          url: `${baseUrl}/loyaltyObject`,
          method: "POST",
          data: loyaltyObject,
        })
        .then((response) => {
          console.log("Object insert response");
          console.log(response);

          console.log("Object ID");
          console.log(response.data.id);

          // Generate the "Add to Google Wallet" link
          generateAddToWalletLink(objectId);
        });
    } else {
      // Something else went wrong
      console.log(err);
    }
  });

function generateAddToWalletLink(objectId) {
  const payload = {
    iss: credentials.client_email, // `client_email` in service account file.
    aud: "google",
    origins: ["http://localhost:3000"],
    typ: "savetowallet",
    payload: {
      loyaltyObjects: [
        {
          id: objectId,
        },
      ],
    },
  };

  const token = jwt.sign(payload, credentials.private_key, {
    algorithm: "RS256",
  });
  const addToWalletLink = `https://pay.google.com/gp/v/save/${token}`;

  console.log("Add to Google Wallet link:");
  console.log(addToWalletLink);
}
```

執行完成會得到一組 JWT，在網頁上填入 https://pay.google.com/gp/v/save/{JWT} 即可將卡券加入你的 Google account 中

## 展示

下載 [Smart tap sample app](https://github.com/google-wallet/smart-tap-sample-app)，並將 sample code 中的 Collector ID 改為自己的 Collector ID 當成刷卡機．

![google_wallet_smart_tap_result1]({{ site.baseurl }}/assets/images/google_wallet_smart_tap_result1.png)

![google_wallet_smart_tap_result2]({{ site.baseurl }}/assets/images/google_wallet_smart_tap_result2.png)

![google_wallet_smart_tap_result3]({{ site.baseurl }}/assets/images/google_wallet_smart_tap_result3.png)

## 參考

- [Smart Tap overview](https://developers.google.com/wallet/smart-tap/introduction/overview)
- [Smart tap sample app](https://github.com/google-wallet/smart-tap-sample-app)
- [Google Pay & Wallet Console](https://pay.google.com/business/console/home)
- [Create passes on Android using the Google Wallet API](https://codelabs.developers.google.com/add-to-wallet-android#1)
- [Create passes on Web using the Google Wallet API](https://codelabs.developers.google.com/add-to-wallet-web#1)

**Note:** 如果有任何建議、問題或不同想法，歡迎留言或寄信給我，可以一起討論進步成長 🙂
{: .notice--success}
