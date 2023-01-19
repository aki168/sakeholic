import { useEffect, useReducer } from 'react'
import axios from 'axios'
import { Pagination } from '@mui/material'
import ControlledAccordions from '@COM/ControlledAccordions'
import Loading from '@COM/Loading'

const SakeTableArea = ({ clickAreaId }) => {

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'INIT_DATA':
        return { ...state, sakeList: action.data, loading: false }
      case 'SET_INDEX':
        return { ...state, areaIndex: action.data }
      case 'SET_CURRENT_PAGE':
        return { ...state, currentPage: action.page }
      case 'CHANGE_AREA':
        return { ...state, areaId: action.areaId }
      case 'REMOVE_LOADING':
        return { ...state, loading: false }
      case 'ADD_LOADING':
        return { ...state, loading: true }
      default: return state
    }
  }, {
    loading: true,
    areaId: 'ALL',
    areaIndex: [],
    sakeList: [],
    currentPage: 1,
    perPage: 10,
  })
  let { loading, areaId, areaIndex, sakeList, currentPage, perPage } = state

  const sliceEnd = currentPage * perPage;
  const sliceStart = sliceEnd - perPage;
  const currentPost = sakeList.slice(sliceStart, sliceEnd);
  const totalItems = sakeList.length;

  const letNameToId = (idName, idIndexArr) => {
    const filterIt = idIndexArr.find(item => item.dataId === idName);
    return filterIt
  }

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

        let allData = [];
        itemsData.forEach(element => {
          let oneBrewery = breweriesData.filter(item => item.id === element.breweryId)[0]
          let oneArea = AreasData.filter(item => item.id === oneBrewery.areaId)[0];
          let oneTags = tagsData.filter(item => item.brandId === element.id)[0];
          let oneChart = chartData.filter(item => item.brandId === element.id)[0];

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
        })
        if (allData) {
          let data = areaId === 'ALL' ? allData : allData.filter(item => item.areaId === areaId.id)
          dispatch({ type: 'INIT_DATA', data })
        }
      })
  }

  const getDataIndex = async () => {
    await axios.get('https://json-server-vercel-sepia.vercel.app/areaIndex')
      .then(result => {
        dispatch({ type: 'SET_INDEX', data: result.data })
      })
      .catch(err => {
        console.error(err)
      })
  }

  const pageHandler = (event, page) => {
    dispatch({ type: 'SET_CURRENT_PAGE', page })
  }

  useEffect(() => {
    init()
    getDataIndex()
  }, [areaId])

  useEffect(() => {
    if (clickAreaId !== 'ALL') {
      dispatch({ type: 'ADD_LOADING' })
      setTimeout(() => {
        dispatch({ type: 'REMOVE_LOADING' })
      }, 3000)
      let areaId = letNameToId(clickAreaId, areaIndex)
      dispatch({ type: 'CHANGE_AREA', areaId })
    }
  }, [clickAreaId])
  return (
    <main className='mb-5'>
      <div className='mb-4'>
        {loading ? <Loading /> : (
          <>
            <div className='row fw-bold mt-3 my-1 bg-light text-dark py-1'>
              <p className='col-4 text-center my-2'>酒款名稱</p>
              <p className='col-4 text-center my-2'>酒藏名稱</p>
              <p className='col-4 text-center my-2'>地區</p>
            </div>
            <ControlledAccordions currentPost={currentPost} />
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
    </main>
  )
}

export default SakeTableArea