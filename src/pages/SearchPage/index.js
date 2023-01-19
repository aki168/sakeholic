import { useReducer, useEffect } from 'react'
import axios from 'axios'
import numeral from 'numeral'
import { InputGroup, Form, Button, Badge, Card } from 'react-bootstrap'
import { ArrowRightShort } from 'react-bootstrap-icons'
import { Title } from '@COM/Title'
import SakeTable from './SakeTable'
import Loading from '@COM/Loading'

const SearchPage = () => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'INIT_DATA':
        return { ...state, sakeList: action.data, loading: false }
      case 'SET_CURRENT_PAGE':
        return { ...state, currentPage: action.page }
      case 'SET_INPUT_VAL':
        return { ...state, inputValue: action.value }
      case 'SUBMIT_SEARCH':
        return { ...state, inputValue: '', submitValue: state.inputValue, currentPage: 1 }
      default: return state
    }
  }, {
    inputValue: '',
    submitValue: '',
    sakeList: [],
    loading: true,
    currentpage: 1,
    perPage: 10,
  })
  let { inputValue, submitValue, sakeList, loading, currentPage, perPage } = state

  const sliceEnd = currentPage * perPage
  const sliceStart = sliceEnd - perPage
  const currentPost = sakeList.slice(sliceStart, sliceEnd)
  const totalItems = sakeList.length

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
        const itemsData = await responseArr[0].data.brands
        const breweriesData = await responseArr[1].data.breweries
        const AreasData = await responseArr[4].data.areas
        const tagsData = await responseArr[2].data.flavorTags
        const chartData = await responseArr[3].data.flavorCharts

        let allData = []
        itemsData.forEach(element => {
          let oneBrewery = breweriesData.filter(item => item.id === element.breweryId)[0]
          let oneArea = AreasData.filter(item => item.id === oneBrewery.areaId)[0]
          let oneTags = tagsData.filter(item => item.brandId === element.id)[0]
          let oneChart = chartData.filter(item => item.brandId === element.id)[0]
          const myItem = {
            id: element.id,
            name: element.name,
            maker: oneBrewery.name,
            area: oneArea.name,
            tags: oneTags?.tagIds,
            chart: [oneChart?.f1, oneChart?.f2, oneChart?.f3, oneChart?.f4, oneChart?.f5, oneChart?.f6]
          }
          if (submitValue) {
            let isMatch = myItem.name.search(submitValue) !== -1 ||
              myItem.maker.search(submitValue) !== -1 ||
              myItem.area.search(submitValue) !== -1;
            if (isMatch) {
              allData.push(myItem)
            }
          } else {
            allData.push(myItem)
          }
        })
        if (allData) {
          dispatch({ type: 'INIT_DATA', data: allData })
        }
      })
  }

  const pageHandler = (event, page) => {
    dispatch({ type: 'SET_CURRENT_PAGE', page })
  }

  const recommendTags = ['純米', '赤武', '獺祭', '久保田', '新潟', '吟醸', '月桂冠', '白鶴']

  useEffect(() => {
    init()
  }, [submitValue])

  return (
    <div className='container px-3 px-md-5 pb-3 my-2 min-vh-100'>
      <Title cn="酒品總覽 " jp="日本酒を探す" />
      <h3 className='text-primary text-end'>
        共 {numeral(totalItems).format('0,0')} 款日本酒
      </h3>
      <Form.Text>請以 酒名 / 酒廠 / 產地 進行搜尋</Form.Text>
      <InputGroup size="lg" className='py-3 border-primary'>
        <Form.Control
          className='border-primary'
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder='請輸入檢索關鍵字'
          value={inputValue}
          onChange={(e) => dispatch({ type: 'SET_INPUT_VAL', value: e.target.value })}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              dispatch({ type: 'SUBMIT_SEARCH' })
            }
          }}
        />
        <Button
          variant="outline-primary"
          id="button-addon1"
          className='d-flex align-items-center'
          onClick={() => {
            dispatch({ type: 'SUBMIT_SEARCH' })
          }}
        >
          搜尋
          <ArrowRightShort size={24} />
        </Button>
      </InputGroup>
      <Form.Text>熱門關鍵字.... </Form.Text>
      {recommendTags.map((item, i) => (
        <Badge key={i} as="button" className='border-0 mx-1'
          onClick={() => dispatch({ type: 'SET_INPUT_VAL', value: item })}
        >
          # {item}
        </Badge>
      ))}

      {loading ? <Loading /> : (
        sakeList.length > 0 ?
          <SakeTable
            currentPost={currentPost}
            totalItems={totalItems}
            perPage={perPage}
            pageHandler={pageHandler}
            currentpage={currentPage}
          /> : (
            <Card className='mt-4 py-5 bg-light border-0'>
              <Card.Text className='text-info text-center'>
                查無資料，請再次輸入關鍵字
              </Card.Text>
            </Card>
          ))}
    </div>

  )
}

export default SearchPage