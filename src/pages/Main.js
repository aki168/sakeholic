import React from "react"
import SakeCardA from "../components/SakeCardA"
import FeedbackCard from "../components/FeedbackCard"
import Title from '../components/Title'
import * as bs from 'react-bootstrap'
import feedbackData from '../data/feedbackData'
import Dots from "../components/Dots"

export default function Main() {

  const defaultData = [
    '001.jpg',
    '002.jpg',
    '003.jpg',
    '004.jpg',
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
          {defaultData.map((item, i) => <SakeCardA key={i} sakeImg={item} />)}
        </div>
      </section>

      <section className="py-5">
        <Title cn="網友回饋" jp="みんなの声" />
        
        <div
          className="row mx-0 flex-md-nowrap 
          overflow-auto mb-1
        ">
          {feedbackData.map( (item,i)=> (
            <FeedbackCard key={i} {...item}/>
          ))}
        </div>
        <Dots/>
      </section>



    </main>
  )

}
