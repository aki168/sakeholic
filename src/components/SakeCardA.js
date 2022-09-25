import { useState } from 'react'
import * as bs from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import ItemCard from '../components/ItemCard'

const SakeCardA = ({ id, img, furigana, name, maker, area, isLike, tags, chart }) => {

  const [show, setShow] = useState(false);

  const [like, setLike] = useState(isLike)
  const [highlight, setHighlight] = useState(false)
  const AHandler = (e) => {
    e.preventDefault()
    setShow(prev => !prev)
    
  }

  return (
    <>
      <bs.Modal
        size='lg'
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <bs.Modal.Header closeButton>
          <bs.Modal.Title id="example-custom-modal-styling-title">
            No.{id}　{name}
          </bs.Modal.Title>
        </bs.Modal.Header>
        <bs.Modal.Body className='p-0'>
          <ItemCard area={area} chart={chart} id={id} maker={maker} name={name} tags={tags} isLike={isLike}/>
        </bs.Modal.Body>
      </bs.Modal>

      <a href="!#" onClick={AHandler}
        className="rounded shadow-sm bg-opacity">
        <bs.Card className='border-light rounded'>
          <bs.Card.Header className='p-0 border-0'
            style={{
              height: '370px',
              backgroundImage: `url("${process.env.PUBLIC_URL}/media/${img}")`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              position: "relative"
            }}
          >
            <button
              onMouseOver={() => setHighlight(prev => !prev)}
              onClick={() => setLike(prev => !prev)}
              style={{
                position: "absolute",
                right: '0.8em',
                top: '1em',
                background: 'none',
                border: 'none'
              }}>
              {like ? <Icon.HeartFill className={`${setLike || highlight ? 'text-primary' : 'text-dark'}`} size={28} />
                : <Icon.Heart className={`${highlight ? 'text-primary' : 'text-dark'}`} size={28} />
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
            <div className='d-flex justify-content-between'>
              <div className='d-flex align-items-center'>
                <Icon.PencilSquare
                  size={21}
                  className='text-dark me-2'
                />
                <p className='text-secondary fw-bold mb-0'>{maker}</p>
              </div>
              <div className='d-flex align-items-center'>
                <Icon.GeoAlt
                  size={21}
                  className='text-dark me-2'
                />
                <p className='text-secondary fw-bold mb-0'>{area}</p>
              </div>
            </div>
          </bs.Card.Body>
        </bs.Card>
      </a>
    </>

  )
}

export default SakeCardA