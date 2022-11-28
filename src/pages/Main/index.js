import { useState, useEffect } from 'react'
import { Title } from '../../components/Title'
import ScrollableTabsFeedback from "./FeedbackCard/ScrollableTabsFeedback"
import SakeCardA from "./SakeCardA"
import FeedbackCard from "./FeedbackCard"
import axios from 'axios'

export default function Main() {

  const [data, setData] = useState([])
  const [feedbackData, setFeedbackData] = useState([])

  const aosEffectForCard = ['right', 'left', 'right', 'left',]

  const getDefaultData = async() => {
    await axios.get('https://json-server-vercel-sepia.vercel.app/sakeCardDefault')
    .then(result => {
      if(result?.data){
        setData(result.data)
      }
    }).catch(err => {
      console.error(err)
    })
  }

  const getFeedback = async() => {
    await axios.get('https://json-server-vercel-sepia.vercel.app/feedbackData')
    .then(result => {
      if(result?.data){
        setFeedbackData(result.data)
      }
    }).catch(err =>{
      console.error(err)
    })
  }

  useEffect(()=>{
    getDefaultData()
    getFeedback()
  },[])

  return (
    <main>
      <div className="hero">
        <div className="container">
        </div>
      </div>

      <section className="container py-5">
        <Title cn="日本酒探索" jp="お気に入りが見つかる" />
        <div className="row justify-content-md-around">
          {data.map((item, i) => (
            <div data-aos={`zoom-in-${aosEffectForCard[i]}`} className='col-11 col-md-5 col-lg-4 mx-3 my-4 p-0' >
              <SakeCardA key={i} {...item} />
            </div>)
          )}
        </div>
      </section>

      <section className="px-5 py-3 overflow-auto">
        <Title cn="網友回饋" jp="みんなの声" />
        <div
          className="row mx-0 flex-md-nowrap mb-1 d-md-none">
          { // mobile
            feedbackData.map((item, i) => (
              <FeedbackCard key={i} {...item} />
            ))
          }
        </div>
        {/* PC */}
        <div className="d-none d-md-block mb-2">
          <ScrollableTabsFeedback feedbackData={feedbackData} />
        </div>
      </section>
    </main>
  )
}
