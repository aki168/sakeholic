import React from 'react'

const FeedbackCard = ({icon,name,info,text}) => {
  return (
    <div className='col-md-5 mb-5'
      style={{ position: "relative", minHeight: "360px" }}>
      <div className='rounded-circle'
        style={{
          backgroundImage: `URL("media/${icon}")`,
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
          top: "85px"
        }}>
        <h4 className='pt-5 pb-3' style={{letterSpacing:"0.15rem"}}>{name}</h4>
        <p className='py-1'>{info}</p>
        <p className='pt-1 pb-2'>
          {text.map(item => <p>{item}</p> )}
        </p>
      </div>
    </div>
  )
}

export default FeedbackCard