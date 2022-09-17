import React from "react"
import SakeCardA from "../components/SakeCardA"
import FeedbackCard from "../components/FeedbackCard"
import { Title } from '../components/Title'
import feedbackData from '../data/feedbackData'
import Dots from "../components/Dots"
import sakeCardDefault from "../data/sakeCardDefault"

export default function Main() {

  const data = sakeCardDefault;

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
          {data.map((item, i) => <SakeCardA key={i} {...item} />)}
        </div>
      </section>

      <section className="px-5 py-3 overflow-auto">
        <Title cn="網友回饋" jp="みんなの声" />
        <div
          className="row mx-0 flex-md-nowrap 
          mb-1
        ">
          {feedbackData.map((item, i) => (
            <FeedbackCard key={i} {...item} />
          ))}
        </div>
        <Dots />
      </section>
    </main>
  )
}
