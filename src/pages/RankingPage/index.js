import { useReducer, useEffect } from 'react'
import axios from 'axios'
import ControlledAccordionsRank from './ControlledAccordionsRank'
import { Pagination } from '@mui/material'
import { Title } from '@COM/Title'
import Loading from '@COM/Loading'

const RankingPage = () => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'INIT_DATA':
        return { ...state, sakeList: action.data, loading: false }
      case 'SET_CURRENT_PAGE':
        return { ...state, currentpage: action.page }
      case 'SET_SEASON':
        return { ...state, season: action.value }
      case 'SET_BANNER':
        return { ...state, banner: action.randomImg }
      case 'REMOVE_LOADING':
        return { ...state, loading: false }
      case 'ADD_LOADING':
        return { ...state, loading: true }
      default: return state
    }
  }, {
    banner: 'w001',
    season: [2023, '春季'],
    sakeList: [],
    loading: true,
    currentpage: 1,
    perPage: 10
  })

  let { banner, season, sakeList, loading, currentpage, perPage } = state


  const sliceEnd = currentpage * perPage;
  const sliceStart = sliceEnd - perPage;
  const currentPost = sakeList.slice(sliceStart, sliceEnd);
  const totalItems = sakeList.length;

  const init = () => {
    axios.all([
      axios.get('https://raw.githubusercontent.com/aki168/sakeData/main/brands.json'),
      axios.get('https://raw.githubusercontent.com/aki168/sakeData/main/breweries.json'),
      axios.get('https://raw.githubusercontent.com/aki168/sakeData/main/brand-flavor-tags.json'),
      axios.get('https://raw.githubusercontent.com/aki168/sakeData/main/flavor-charts.json'),
      axios.get('https://raw.githubusercontent.com/aki168/sakeData/main/areas.json'),
      axios.get('https://raw.githubusercontent.com/aki168/sakeData/main/rankings.json')
    ])
      .then(async (responseArr) => {
        const itemsData = await responseArr[0].data.brands;
        const breweriesData = await responseArr[1].data.breweries;
        const AreasData = await responseArr[4].data.areas;
        const tagsData = await responseArr[2].data.flavorTags;
        const chartData = await responseArr[3].data.flavorCharts;
        const rankData = await responseArr[5].data.overall;
        const seasonRank = await responseArr[5].data.yearMonth;
        let seasonYear = seasonRank.slice(0, 4)
        let seasonParse = Math.ceil(Number(seasonRank.slice(4,)) / 3) - 1
        const seasonIndex = ['春季', '夏季', '秋季', '冬季']
        dispatch({ type: 'SET_SEASON', value: [seasonYear, seasonIndex[seasonParse]] })

        let allData = [];
        itemsData.forEach(element => {
          let oneBrewery = breweriesData.filter(item => item.id === element.breweryId)[0];
          let oneArea = AreasData.filter(item => item.id === oneBrewery.areaId)[0];
          let oneTags = tagsData.filter(item => item.brandId === element.id)[0];
          let oneChart = chartData.filter(item => item.brandId === element.id)[0];
          let oneRank = rankData.filter(item => item.brandId === element.id)[0];
          const myItem = {
            id: element.id,
            name: element.name,
            maker: oneBrewery.name,
            area: oneArea.name,
            tags: oneTags?.tagIds,
            chart: [oneChart?.f1, oneChart?.f2, oneChart?.f3, oneChart?.f4, oneChart?.f5, oneChart?.f6],
            rank: oneRank?.rank,
            score: oneRank?.score
          }
          allData.push(myItem)
        })
        if (allData) {
          let currentData =
            allData.filter(item => item.rank !== undefined)
              .sort((x, y) => x.rank > y.rank ? 1 : -1)
          dispatch({ type: 'INIT_DATA', data: currentData })
        }
      })
  }
  const pageHandler = (event, page) => {
    dispatch({ type: 'SET_CURRENT_PAGE', page })
  }

  useEffect(() => {
    init()
    const defaultImg = ['w001', 'w002', 'w005', 'w007']
    const random = (len) => Math.floor(Math.random() * len + 1);
    let randomImg = defaultImg[random(defaultImg.length) - 1]
    dispatch({type: 'SET_BANNER', randomImg})
  }, [])
  return (
    <>
      <div className='container'>
        <Title cn="日本酒排名 " jp="日本酒ランキング" />
      </div>
      <div
        style={{
          height: "350px",
          backgroundImage: `url("${process.env.PUBLIC_URL}/media/${banner}.jpg")`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      >
      </div>
      <main className='container'>
        <div className='mb-5 mt-3'>
          <p className='text-end'>日本酒ランキング {season[0]}年{season[1]}</p>
          <div className='mb-4'>
            {loading ? <Loading /> : (
              <>
                <div className='row fw-bold mt-3 my-1 bg-light text-dark py-1'>
                  <p className='col-4 text-center my-2'>排名</p>
                  <p className='col-4 text-center my-2'>酒款名稱</p>
                  <p className='col-4 text-center my-2'>評級</p>
                </div>
                <ControlledAccordionsRank currentPost={currentPost} />
              </>
            )}
          </div>
          <Pagination
            size="small"
            className='d-flex justify-content-end'
            count={Math.floor(totalItems / perPage)}
            shape="rounded"
            onChange={pageHandler}
            showLastButton />
        </div>
      </main>
    </>
  )
}

export default RankingPage