import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { HeartFill, Heart, PencilSquare, GeoAlt } from 'react-bootstrap-icons'
import ScrollableTabsButtonVisible from './ScrollableTabsButtonVisible';
import Chart from './Charts';

const KeepBtn = styled.button`
  position:absolute;
  right:0.8em;
  top:1em; 
  background:none;
  border:none
`;

const ItemCard = ({ area, chart, id, maker, name, tags, isLike }) => {

  const AHandler = (e) => {
    e.preventDefault()
  }
  const [like, setLike] = useState(isLike)
  const [tagsIndex, setTagsIndex] = useState([])
  const [mainPics, setMainPics] = useState(['',''])

  let tagsToText = (numArr, refArr) => {
    if (numArr) {
      return (refArr.filter(item => (
        numArr.indexOf(item.id) > -1
      )))
    }
  }

  useEffect(() => {
    const getTagsIndex = async () => {
      await axios.get('https://json-server-vercel-sepia.vercel.app/tagsIndex')
        .then(result => {
          if (result?.data) {
            setTagsIndex(result.data)
          }
        }).catch(err => {
          console.error(err)
        })
    }
    getTagsIndex();
  }, [])

  useEffect(()=>{
    const getPic = () => {
      const defaultImgA = ['005', '006', '007', '008', '009', '010']
      const defaultImgB = ['find1', 'find2', 'find3', 'find4', 'find5', 'find6', 'find7', 'find8', 'find9']
      const random = (len) => Math.floor(Math.random() * len + 1)
      let randomImgA = defaultImgA[random(defaultImgA.length) - 1]
      let randomImgB = defaultImgB[random(defaultImgB.length) - 1]
      setMainPics([randomImgA, randomImgB])
    }
    getPic();
  },[])
  return (
    <Card className="bg-light p-3" style={{ position: "relative" }}>
      <KeepBtn
        onClick={() => setLike(prev => !prev)}
      >
        {like ? <HeartFill className={'text-primary'} size={28} />
          : <Heart className={'text-dark'} size={28} />
        }
      </KeepBtn>
      <CardContent className='row gx-3 p-0 py-2 p-md-4'>
        <div className='col col-xl-7 mb-5'>
          <p>No. {id}</p>
          <h2 className='fw-bold'>{name}</h2>
          <div className='d-flex gap-5'>
            <div className='d-flex align-items-center'>
              <PencilSquare
                size={21}
                className='text-dark me-2'
              />
              <p className='text-secondary fw-bold mb-0'>{maker ? maker : <small className='text-info fw-light'> -- </small>}</p>
            </div>
            <div className='d-flex align-items-center'>
              <GeoAlt
                size={21}
                className='text-dark me-2'
              />
              <p className='text-secondary fw-bold mb-0'>{area}</p>
            </div>
          </div>
          {tags &&
            <ScrollableTabsButtonVisible currentData={tagsToText(tags, tagsIndex)} />
          }
          <div className='flex my-2 justify-content-between'>
            <img src={`${process.env.PUBLIC_URL}/media/${mainPics[0]}.jpg`}
              alt="sake"
              className="rounded w-50 p-1 img-fluid"
            />
            <img src={`${process.env.PUBLIC_URL}/media/${mainPics[1]}.jpg`}
              alt="sake"
              className="rounded w-50 p-1 img-fluid"
            />
          </div>
        </div>
        <div className='col-12 col-xl-5 mb-5 my-auto'>
          <p className='fw-bolder text-dark py-auto'>風味分析</p>
          {chart[0] ?
            <Chart flavorData={chart} />
            : <div className='px-auto py-5 border-info bg-info rounded text-light text-center' style={{ verticalAlign: "center" }}>暫無資料...</div>
          }
          <p className='fw-bold'>根據日本網友投稿數據分析呈現的風味表</p>
        </div>
        <p className='fw-bold'>你可能會喜歡...</p>
        <a onClick={AHandler}
          href="!#"
          className='py-2 px-4 border rounded'
        >
          <span className='text-info fw-bold' style={{ fontSize: "12px" }}>
            おいまつ
          </span>
          <p className='pb-3 fw-bold'>
            老松
          </p>
          <div className='d-flex justify-content-between'>
            <div className='d-flex align-items-center'>
              <PencilSquare
                size={21}
                className='text-dark me-2'
              />
              <p className='text-secondary fw-bold mb-0'>
                玉乃光酒造
              </p>
            </div>
            <div className='d-flex align-items-center'>
              <GeoAlt
                size={21}
                className='text-dark me-2'
              />
              <p className='text-secondary fw-bold mb-0'>
                兵庫
              </p>
            </div>
          </div>
        </a>
      </CardContent>
    </Card>
  )
}

export default ItemCard