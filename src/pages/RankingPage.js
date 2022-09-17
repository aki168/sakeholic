import { useState, useEffect } from 'react'
import axios from 'axios'
import { Title } from '../components/Title'
import ControlledAccordionsRank from '../components/ControlledAccordionsRank'
import { Pagination, CircularProgress } from '@mui/material'


const RankingPage = () => {
  
  const defaultImg = ['w001','w002','w005','w007']
  const random = (len) => Math.floor(Math.random()*len + 1);
  let randomImg = defaultImg[random(defaultImg.length)-1]
  
  const [sakeList, setSakeList] = useState([])
  const [loading, setLoading] = useState(true);
  // 設定：目前要渲染哪一頁
  const [currentPage, setCurrentPage] = useState(1);
  // 設定：每一頁有幾筆
  const [perPage, setPerPage] = useState(10);

  // arr.slice(0,2) =>> 取出arr[0]&arr[1]取2個資料排一個陣列
  // 獲取當前頁面的資料
  const sliceEnd = currentPage * perPage; // 若我在第二頁時=2*10=第20筆
  const sliceStart = sliceEnd - perPage; // 第20筆 - 每頁有幾筆＝第10筆
  // 淺拷貝部分data,取出當前頁面所需資料
  const currentPost = sakeList.slice(sliceStart, sliceEnd);
  const totalItems = sakeList.length;


  const init = () => {
    // execute simultaneous requests -------------------------------------------------------------------------------------
    axios.all([
      axios.get('https://raw.githubusercontent.com/aki168/sakeData/main/brands.json'),
      axios.get('https://raw.githubusercontent.com/aki168/sakeData/main/breweries.json'),
      axios.get('https://raw.githubusercontent.com/aki168/sakeData/main/brand-flavor-tags.json'),
      axios.get('https://raw.githubusercontent.com/aki168/sakeData/main/flavor-charts.json'),
      axios.get('https://raw.githubusercontent.com/aki168/sakeData/main/areas.json'),
      axios.get('https://raw.githubusercontent.com/aki168/sakeData/main/rankings.json')
    ])
      .then(async (responseArr) => {

        // 1 酒名搜尋
        const itemsData = await responseArr[0].data.brands;
        // console.log('oneItem:',oneItem)

        // 2 找酒廠
        const breweriesData = await responseArr[1].data.breweries;
        // 2-1 找地區
        const AreasData = await responseArr[4].data.areas;
        // 1-1 找TAG
        const tagsData = await responseArr[2].data.flavorTags;
        // 1-2 找雷達風味
        const chartData = await responseArr[3].data.flavorCharts;
        // ranking
        const rankData = await responseArr[5].data.overall;

        let allData = [];

        itemsData.forEach(element => {

          let oneBrewery = breweriesData.filter(item => item.id === element.breweryId)[0];
          // console.log('oneBrewery:', oneBrewery)

          let oneArea = AreasData.filter(item => item.id === oneBrewery.areaId)[0];
          // console.log('oneArea:', oneArea)

          let oneTags = tagsData.filter(item => item.brandId === element.id)[0];
          // console.log('oneTags:', oneTags)

          let oneChart = chartData.filter(item => item.brandId === element.id)[0];
          // console.log('oneChart:', oneChart)

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
          // console.log('rankData',rankData)
          allData.push(myItem)
        });
        console.log('allData', allData)
        if (allData) {
          let currentData =
            allData.filter(item => item.rank !== undefined)
              .sort((x, y) => x.rank > y.rank ? 1 : -1)

          console.log('currentData', currentData)
          setSakeList(currentData)
          setLoading(false)
        }
      })
  }
  // console.log('目前', currentPost)
  const pageHandler = (event, page) => {
    setCurrentPage(page)
  }
  useEffect(() => {
    init();
  }, [])


  return (
    <>
      <div className='container'>
        <Title cn="日本酒排名 " jp="日本酒ランキング" />
      </div>
      <div
        style={{
          height: "350px",
          backgroundImage: `url("${process.env.PUBLIC_URL}/media/${randomImg}.jpg")`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      >
      </div>
      <main className='container'>
        <div className='mb-5 mt-3'>
          <p className='text-end'>日本酒ランキング 2022年夏季</p>
          <div className='mb-4'>
            {
              loading ?
                <div className='vh-100'>
                  <CircularProgress
                    size="64px"
                    color="error"
                    className='d-block mx-auto'
                  />
                </div>
                : (
                  <>
                    <div className='row fw-bold mt-3 my-1 bg-light text-dark py-1'>
                      <p className='col-4 text-center my-2'>排名</p>
                      <p className='col-4 text-center my-2'>酒款名稱</p>
                      <p className='col-4 text-center my-2'>評級</p>
                    </div>
                    <ControlledAccordionsRank currentPost={currentPost} />
                  </>
                )
            }
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