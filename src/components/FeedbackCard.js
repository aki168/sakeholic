import React from 'react'

const FeedbackCard = () => {
  return (
    <div className='col-md-5'
      style={{ position: "relative", minHeight: "360px" }}>
      <div className='rounded-circle'
        style={{
          backgroundImage: 'URL("media/custom1.png")',
          backgroundSize: "cover",
          width: "120px",
          height: "120px",
          position: "absolute",
          top: "0",
          button: "0",
          left: "38%",
          zIndex: "1"
        }}>
      </div>
      <div className='bg-dark text-light text-center rounded'
        style={{
          width: "95%",
          position: "absolute",
          top: "85px",
          button: ""
        }}>
        <h4 className='pt-5 pb-1 pt-4'>NAME</h4>
        <p className='py-1'>40代  軟體工程師</p>
        <p className='pt-1 pb-4 lh-lg'>
          喜歡到日本自助旅遊時<br />
          嘗鮮各種日本酒，雖礙於語言不通<br />
          許多資訊都可以在這查到👍<br />
        </p>
      </div>
    </div>
  )
}

export default FeedbackCard