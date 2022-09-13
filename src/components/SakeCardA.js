import { useState } from 'react'
import * as bs from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'

const SakeCardA = ({ img, furigana, name, brewer, area, isLike }) => {

  const [ like, setLike ] = useState( isLike ) 
  const [ highlight, setHighlight ] = useState( false ) 

  const imgPath = 'https://raw.githubusercontent.com/aki168/sakeholic/main/public/media/';

  return (
    <bs.Card className="col-11 col-md-5 col-lg-4 mx-3 my-4 p-0 shadow-sm border-light">
      <bs.Card.Header className='p-0 border-0'
        style={{
          height: '370px', 
          backgroundImage: `url("${process.env.PUBLIC_URL}/media/${img}")`,
          backgroundPosition: 'center center', 
          backgroundSize: 'cover',
          position:"relative"
        }}
      >
        <button 
        onMouseOver={()=>setHighlight(prev => !prev)}
        onClick={()=>setLike(prev => !prev)}
        style={{
          position:"absolute", 
          right:'0.5em', 
          top:'0.5em', 
          background:'none',
          border:'none'
          }}>        
          { like? <Icon.HeartFill className={`${ setLike||highlight? 'text-primary':'text-dark'}`} size={28} />
          : <Icon.Heart className={`${ highlight? 'text-primary':'text-dark'}`} size={28}/> 
          }
        </button>
      </bs.Card.Header>
      <bs.Card.Body className='px-4'>
        <span className='text-info fw-bold' style={{ fontSize: "12px" }}>
          {furigana}
        </span>
        <bs.Card.Title>
          <p className='pb-3 h1 fw-bold'>{name}</p>
        </bs.Card.Title>
        <bs.Card.Text className='d-flex justify-content-between'>
          <div className='d-flex align-items-center'>
            <Icon.PencilSquare
              size={21}
              className='text-dark me-2'
            />
            <p className='text-secondary fw-bold mb-0'>{brewer}</p>
          </div>
          <div className='d-flex align-items-center'>
            <Icon.GeoAlt
              size={21}
              className='text-dark me-2'
            />
            <p className='text-secondary fw-bold mb-0'>{area}</p>
          </div>
        </bs.Card.Text>
      </bs.Card.Body>
    </bs.Card>

  )
}

export default SakeCardA