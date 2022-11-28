import { useState } from 'react'
import { Card } from 'react-bootstrap'
import { HeartFill, Heart, PencilSquare, GeoAlt } from 'react-bootstrap-icons'
import styled from 'styled-components'

const KeepBtn = styled.button`
  position:absolute;
  right:0.8em;
  top:1em; 
  background:none;
  border:none
`;

const SakeCardB = ({ img, furigana, name, brewer, area, isLike }) => {

  const [like, setLike] = useState(isLike)
  const [highlight, setHighlight] = useState(false)

  return (
    <Card className="col-11 col-md-5 col-lg-4 mx-3 my-4 p-0 shadow-sm border-light">
      <Card.Header className='p-0 border-0'
        style={{
          height: '370px',
          backgroundImage: `url("${process.env.PUBLIC_URL}/media/${img}")`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          position: "relative"
        }}
      >
        <KeepBtn onMouseOver={() => setHighlight(prev => !prev)} onClick={() => setLike(prev => !prev)}>
          {like ? <HeartFill className={`${setLike || highlight ? 'text-primary' : 'text-dark'}`} size={28} />
            : <Heart className={`${highlight ? 'text-primary' : 'text-dark'}`} size={28} />
          }
        </KeepBtn>
      </Card.Header>
      <Card.Body className='px-4'>
        <span className='text-info fw-bold' style={{ fontSize: "12px" }}>
          {furigana}
        </span>
        <Card.Title>
          <p className='pb-3 h1 fw-bold'>{name}</p>
        </Card.Title>
        <div className='d-flex justify-content-between'>
          <div className='d-flex align-items-center'>
            <PencilSquare
              size={21}
              className='text-dark me-2'
            />
            <p className='text-secondary fw-bold mb-0'>{brewer}</p>
          </div>
          <div className='d-flex align-items-center'>
            <GeoAlt
              size={21}
              className='text-dark me-2'
            />
            <p className='text-secondary fw-bold mb-0'>{area}</p>
          </div>
        </div>
      </Card.Body>
    </Card>

  )
}

export default SakeCardB