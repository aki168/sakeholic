import React from "react"
import SakeCardA from "../components/SakeCardA"
import FeedbackCard from "../components/FeedbackCard"
import Title from '../components/Title'
import * as bs from 'react-bootstrap'
// import * as antd from 'antd';

export default function Main() {

  const defaultData = [
    '001.jpg',
    '002.jpg',
    '003.jpg',
    '004.jpg',
  ]

  const feedbackData = [
    {
      icon: "custom2.png",
      name: "NIPPON SUKI",
      info: "20代  運動員",
      text:[
        "平常備賽時期沒辦法喝酒",
        "結束慶功才會破例開喝",
        "看到喜歡的，我都會追蹤起來。"
      ]
    },
    {
      icon: "custom3.png",
      name: "Ruby Cheng",
      info: "30代  廣告公關",
      text: [
        "推薦給喜歡日本清酒的酒友",
        "收藏功能真的太方便了",
        "也可以探索許多沒喝過的日本酒！"
      ]
    },
    {
      icon: "custom1.png",
      name: "RAMEN",
      info: "40代  軟體工程師",
      text: [
        "喜歡到日本自助旅遊時",
        "嘗鮮各種日本酒，雖礙於語言不通",
        "許多資訊都可以在這查到👍"
      ]
    }


  ]


  return (
    <main>
      <div className="hero">
        <div className="container">
          {/* <bs.Button variant="outline-dark"
          className="">
            立即搜尋
          </bs.Button> */}
        </div>
      </div>

      <section className="container py-5">
        <Title cn="日本酒探索" jp="お気に入りが見つかる" />
        <div className="row justify-content-md-around">
          {defaultData.map((item,i) => <SakeCardA key={i} sakeImg={item} />)}
        </div>
      </section>

      <section className="vw-100 py-5">
        <Title cn="網友回饋" jp="みんなの声" />
        <div className="row gap-5 flex-md-nowrap overflow-auto justify-content-md-around">
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
        </div>
      </section>



    </main>
  )

}
