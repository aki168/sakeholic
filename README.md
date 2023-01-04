# 小酌圖鑑 🍶
SAKEHOLIC BOOK | 日本酒檢索網站

![Image text](https://github.com/aki168/aki-cheng/raw/main/public/point4z.png)

![Image text](https://github.com/aki168/aki-cheng/raw/main/public/point2.png)


## 專案製作緣由

### 💡 與同好分享的心
>針對喜歡日本酒，但總感到中文資訊匱乏的人為對象  
台灣少有日本酒為主的檢索資訊站（洋酒比較多）  
想做出一個可提查詢日本酒資料的應用站  

### 💡 解決自身的問題
>我是個喜歡日本酒，小酌是我下班後的興趣之一  
遇到沒喝過的日本酒，也時常有搜尋習慣😎  
同為需求方的角度，PUSH 自己進行開發  



## Getting Started

### `npm start`
以開發者模式開啟  
將運行於本地端 http://localhost:3000  
本專案 支援手機/電腦/平板等跨裝置瀏覽  

## Folder Structure
src  
│   
├── components `UI元件`  
│     ├── ItemCard `單酒資訊 相關組件`  
│     ├── ControlledAccordions.js `可控手風琴元件`  
│     ├── Footer.js `頁腳導覽列`  
│     ├── Loading.js `載入狀態動畫`  
│     ├── MyNavbar.js `上排導覽列`  
│     └── Title.js `標題樣式[左右兩款]`  
│   
├── hooks `客製化 Hooks`  
│     ├── useCheckMobileMode.js `偵測用戶裝置(影片放用)`  
│     └── useFetch.js `遠端連線使用`  
│ 
├── pages `個別頁面`  
│     ├── About `關於本站`  
│     ├── AreaSearchPage `依地區搜尋酒品`  
│     ├── FindingPage `探索酒品`  
│     ├── LoginPage `會員登入`  
│     ├── Main `首頁`  
│     ├── RankingPage `酒品排名`  
│     ├── RegisterPage `註冊會員`  
│     ├── SearchPage `關鍵字檢索`  
│     ├── UserPage `會員專區`  
│     └── NotFoundPage.js `404頁面`  
│  
└── package.json `依賴套件等資訊`  
  
## Site Map 
![](https://github.com/aki168/aki-cheng/raw/d42856fc57c1ff0b0acb89a2e9120e170f82a51f/s-sitemap.png)


## Wireframe 
![](https://github.com/aki168/aki-cheng/raw/d42856fc57c1ff0b0acb89a2e9120e170f82a51f/s-wf.png)


## Skills & Tools 
![](https://github.com/aki168/aki-cheng/raw/d42856fc57c1ff0b0acb89a2e9120e170f82a51f/s-skill.png)
### React
React-Router / react-hook-form  
### Axios
### Webpack
### SCSS 
### MUI Design /  Bootstrap


---

※ This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
