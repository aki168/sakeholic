import { useState, useEffect } from 'react'
import axios from 'axios'
import { Pagination, CircularProgress } from '@mui/material'
import ControlledAccordions from './ControlledAccordions'
import areaIndex from '../data/areaIndex'

const SakeTableArea = ({ clickAreaId, setClickArea }) => {

  const [areaId, setAreaId] = useState('ALL')
  // console.log('clickAreaId',clickAreaId)
  // console.log('areaId', areaId)

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

  const letNameToId = (idName, idIndexArr) => {
    const filterIt = idIndexArr.find(item => item.dataId === idName);
    return filterIt
  }

  // let filterRes = letNameToId(clickAreaId, areaIndex);
  // console.log('測試轉換FN', filterRes?.id)

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
        // let oneItem = await itemsData.filter(item => item.id === 1 )[0];
        // console.log('oneItem:',oneItem)

        // 2 找酒廠
        const breweriesData = await responseArr[1].data.breweries;
        // 2-1 找地區
        const AreasData = await responseArr[4].data.areas;
        // 1-1 找TAG
        const tagsData = await responseArr[2].data.flavorTags;
        // 1-2 找雷達風味
        const chartData = await responseArr[3].data.flavorCharts;

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

          const myItem = {
            id: element.id,
            name: element.name,
            maker: oneBrewery.name,
            areaId: oneArea.id,
            area: oneArea.name,
            tags: oneTags?.tagIds,
            chart: [oneChart?.f1, oneChart?.f2, oneChart?.f3, oneChart?.f4, oneChart?.f5, oneChart?.f6]
          }

          allData.push(myItem)
        });
        // console.log('allData',allData)
        if (allData) {
          // setAreaId(clickAreaId)
          if (areaId === 'ALL') {
            setSakeList(allData)
            setLoading(false)
          } else {
            // setClickArea(areaId)
            let filterArea = allData.filter(item => item.areaId == areaId?.id)
            console.log('filterArea', filterArea)
            setSakeList(filterArea)
            setLoading(false)
          }
        }
      })
  }

  // console.log('目前', currentPost)

  const pageHandler = (event, page) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    init();
  }, [areaId])

  useEffect(() => {
    if (clickAreaId !== 'ALL') {
      let filterRes = letNameToId(clickAreaId, areaIndex)
      setAreaId(filterRes)
    }
  }, [clickAreaId])
  return (
    <main className='mb-5'>
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
            : (<>
              <div className='row fw-bold mt-3 my-1 bg-light text-dark py-1'>
                <p className='col-4 text-center my-2'>酒款名稱</p>
                <p className='col-4 text-center my-2'>酒藏名稱</p>
                <p className='col-4 text-center my-2'>地區</p>
              </div>
              <ControlledAccordions currentPost={currentPost} />
            </>)
        }
      </div>
      <Pagination
        size="small"
        className='d-flex justify-content-end'
        count={Math.floor(totalItems / perPage)}
        shape="rounded"
        onChange={pageHandler}
        showLastButton />
    </main>
  )
}

export default SakeTableArea