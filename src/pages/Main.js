import React from "react"
import SakeCardA from "../components/SakeCardA"
import Title from '../components/Title'
import * as bs from 'react-bootstrap'
// import * as antd from 'antd';

export default function Main() {
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
        <Title cn="日本酒探索" jp="お気に入りが見つかる"/>
        <div className="row md-row justify-content-md-around">
          <SakeCardA sakeImg='001.jpg'/>
          <SakeCardA sakeImg='002.jpg'/>
          <SakeCardA sakeImg='003.jpg'/>
          <SakeCardA sakeImg='004.jpg'/>
        </div>

      </section>
      
    </main>
    )

}
