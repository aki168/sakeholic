import React from 'react'
import { Badge } from 'react-bootstrap'

const SakeSection = ({name, maker, area, tags, chart}) => {

  return (
    <div>
      <ul>
        <h2>酒名 {name}</h2>
        <h3>酒廠 {maker}</h3>
        <h3>產地 {area}</h3>
        <li>
          {tags? tags[0] : ''}<br/>
          {tags? tags[1] : ''}<br/>
          {tags? tags[2] : ''}
        </li>
        <li>
          { chart[0] ? chart.map(item => <p>{item}</p>) : 
            <p className="text-info">暫無風味圖表</p>
          }
        </li>
      </ul>
    </div>
  )
}

export default SakeSection