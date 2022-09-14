import React from 'react'
import ItemCard from '../components/ItemCard'

const FindingPage = () => {

  return (
    <div className='text-primary container mx-auto py-5'>
      <h24>FindingPage</h24>
      <ItemCard
        area="石川県"
        chart={[
          0.1447826842114479,
          0.29744317790581054,
          0.5354924452227263,
          0.26952852928196774,
          0.6425701632224223,
          0.34390598805286143,
        ]}
        id="486"
        maker="菊姫"
        name="先一杯"
        tags={[
          166,]}
      />
    </div>
  )
}

export default FindingPage