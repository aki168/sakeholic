import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack, Chip } from '@mui/material';
import * as Icon from 'react-bootstrap-icons'
import Chart from './Charts';
import tagsIndex from '../data/tagsIndex';
import { useEffect } from 'react';


const ItemCard = ({ area, chart, id, maker, name, tags }) => {

  let pic = 'https://cdn.shopify.com/s/files/1/0569/6389/1253/collections/sakecup-001_900x.png';


  let tagsToText = (numArr, refArr) => {

    if (numArr) {
      return (refArr.filter(item => (
        numArr.indexOf(item.id) > -1
      )))
    }

  }
  console.log(tags);

  return (
    <Card className="bg-light p-3 my-3">
      {/* <CardActionArea> */}
      {/* <CardMedia
        component="img"
        height="140"
        image={`${process.env.PUBLIC_URL}/media/001.jpg`}
        alt="sake"
      /> */}
      <CardContent className='row gx-3'>
        <Typography gutterBottom variant="body1" component="div" className='col col-xl-7 mb-5'>
          <h2 className='fw-bold'>{name}</h2>
          <p>furigana</p>
          <div className='d-flex gap-5'>
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
          <Stack direction="row" spacing={1} className='py-3 flex-wrap gap-1' >
            {tags &&
              // tags.map((tag,index) => (<Chip key={index} label={`# ${tag}`} color="error" size='small'/>))
              tagsToText(tags,tagsIndex).map(oneTag => (<Chip key={oneTag.id} label={`# ${oneTag.tag}`} color="error" size='small' />))
            }
          </Stack>
          <div className='row gap-2'>
            <img src={pic} alt="sake" className="rounded col-md-5" />
            <img src={pic} alt="sake" className="rounded col-md-5" />
          </div>
        </Typography>
        <Typography variant="body2" color="text.secondary" className='col-12 col-xl-5 mb-5'>
          <p className='fw-bolder text-dark'>風味分析</p>
          {chart[0] ?
            <Chart flavorData={chart} className="text-end" />
            : <p className='py-5 px-5 border-info bg-info rounded text-light'>暫無資料...</p>
          }
          <p className='fw-bold'>根據日本網友投稿數據分析呈現的風味表</p>
        </Typography>
        <Typography>
          <p className='fw-bold'>風味相似的酒款</p>
          <div className='py-2 px-4 border rounded'>
            <span className='text-info fw-bold' style={{ fontSize: "12px" }}>
              おいまつ
            </span>
            <p className='pb-3 fw-bold'>
              老松
            </p>
            <div className='d-flex justify-content-between'>
              <div className='d-flex align-items-center'>
                <Icon.PencilSquare
                  size={21}
                  className='text-dark me-2'
                />
                <p className='text-secondary fw-bold mb-0'>
                  玉乃光酒造
                </p>
              </div>
              <div className='d-flex align-items-center'>
                <Icon.GeoAlt
                  size={21}
                  className='text-dark me-2'
                />
                <p className='text-secondary fw-bold mb-0'>
                  兵庫
                </p>
              </div>
            </div>
          </div>
        </Typography>
      </CardContent>
      {/* </CardActionArea> */}
    </Card>
  )
}

export default ItemCard