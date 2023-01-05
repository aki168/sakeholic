
const Title = ({cn, jp}) => {
  return (
    <div style={{letterSpacing:"0.15rem", maxWidth:"900px"}} className="py-4 px-2 mx-auto" >
      <h2 className='fw-bold d-flex justify-content-between'>
        {cn} <hr style={{width:"50%"}} />
      </h2>
      <h4 className='fw-light'>{jp}</h4>
    </div>
  )
}

const TitleReverse = ({cn, jp}) => {
  return (
    <div style={{letterSpacing:"0.15rem", maxWidth:"900px"}} className="py-4 px-2 mx-auto" >
      <h2 className='fw-bold d-flex justify-content-between'>
        <hr style={{width:"50%"}} />　{cn} 
      </h2>
      <h4 className='fw-light text-end'>{jp}</h4>
    </div>
  )
}

export { Title, TitleReverse }