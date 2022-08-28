import React from "react"
import SakeCardA from "../components/SakeCardA"
import FeedbackCard from "../components/FeedbackCard"
import Title from '../components/Title'
import * as bs from 'react-bootstrap'
import feedbackData from '../data/feedbackData'
// import * as antd from 'antd';

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

      <section className="vw-100 py-5">
        <Title cn="網友回饋" jp="みんなの声" />
        
        <div
          className="row mx-0 flex-md-nowrap 
          overflow-auto justify-content-md-around
          mb-1
        ">
          {feedbackData.map( (item,i)=> (
            <FeedbackCard key={i} {...item}/>
          ))}
        </div>

        <div className="d-flex justify-content-center py-5">
          <a href="!#" onClick={(e)=>e.preventDefault()}
            style={{ width: "12px", height: "12px" }}
            className="ms-2 border rounded-circle bg-dark border-0">
          </a>
          <a href="!#" onClick={(e)=>e.preventDefault()}
            style={{ width: "12px", height: "12px" }}
            className="mx-2 border rounded-circle bg-white border-dark">
          </a>
          <a href="!#" onClick={(e)=>e.preventDefault()}
            style={{ width: "12px", height: "12px" }}
            className="me-2 border rounded-circle bg-dark border-0">
          </a>
        </div>
      </section>



    </main>
  )

}
