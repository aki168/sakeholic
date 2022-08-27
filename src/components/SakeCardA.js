import React from 'react'
import * as bs from 'react-bootstrap'

const SakeCardA = ({sakeImg}) => {

  const imgPath = 'https://raw.githubusercontent.com/aki168/sakeholic/main/public/media/';

  return (
    <bs.Card className="col-12 col-md-4 mx-3 my-4 p-0">
      <bs.Card.Header className='p-0' 
      style={{height:'370px', backgroundImage:`url("${imgPath}${sakeImg}")`,
              backgroundPosition:'center center', backgroundSize:'cover'}} 
      />
      <bs.Card.Body>
        <bs.Card.Title>Card Title</bs.Card.Title>
        <bs.Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </bs.Card.Text>
        <bs.Button variant="primary">Go somewhere</bs.Button>
      </bs.Card.Body>
    </bs.Card>

  )
}

export default SakeCardA