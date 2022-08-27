import React from 'react'

const Title = ({cn, jp}) => {
  return (
    <div style={{letterSpacing:"0.15rem", maxWidth:"900px"}} className="py-4 mx-auto" >
      <h2 className='fw-bold d-flex justify-content-between'>
        {cn} <hr style={{width:"70%"}} />
      </h2>
      <h4 className='fw-light'>{jp}</h4>
    </div>
  )
}

export default Title