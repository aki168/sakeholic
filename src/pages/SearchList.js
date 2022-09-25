import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { InputGroup, Form, Button, Badge } from 'react-bootstrap'
import SakeTable from '../components/SakeTable'
import * as Icon from 'react-bootstrap-icons'
import { Title } from '../components/Title'

const SearchList = () => {


  const [inputValue, setInputValue] = useState('')
  const [submitValue, setSubmitValue] = useState('')


  const [sakeList, setSakeList] = useState([]) //fetch data
  const [loading, setLoading] = useState(true)
  // 設定：目前要渲染哪一頁
  const [currentPage, setCurrentPage] = useState(1)
  // 設定：每一頁有幾筆
  const [perPage, setPerPage] = useState(10)

  // arr.slice(0,2) =>> 取出arr[0]&arr[1]取2個資料排一個陣列
  // 獲取當前頁面的資料
  const sliceEnd = currentPage * perPage // 若我在第二頁時=2*10=第20筆
  const sliceStart = sliceEnd - perPage // 第20筆 - 每頁有幾筆＝第10筆
  // 淺拷貝部分data,取出當前頁面所需資料
  const currentPost = sakeList.slice(sliceStart, sliceEnd)
  const totalItems = sakeList.length

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
        const itemsData = await responseArr[0].data.brands
        // let oneItem = await itemsData.filter(item => item.id === 1 )[0]
        // console.log('oneItem:',oneItem)

        // 2 找酒廠
        const breweriesData = await responseArr[1].data.breweries
        // 2-1 找地區
        const AreasData = await responseArr[4].data.areas
        // 1-1 找TAG
        const tagsData = await responseArr[2].data.flavorTags
        // 1-2 找雷達風味
        const chartData = await responseArr[3].data.flavorCharts

        let allData = []
        itemsData.forEach(element => {
          let oneBrewery = breweriesData.filter(item => item.id === element.breweryId)[0]
          // console.log('oneBrewery:', oneBrewery)

          let oneArea = AreasData.filter(item => item.id === oneBrewery.areaId)[0]
          // console.log('oneArea:', oneArea)

          let oneTags = tagsData.filter(item => item.brandId === element.id)[0]
          // console.log('oneTags:', oneTags)

          let oneChart = chartData.filter(item => item.brandId === element.id)[0]
          // console.log('oneChart:', oneChart)

          const myItem = {
            id: element.id,
            name: element.name,
            maker: oneBrewery.name,
            area: oneArea.name,
            tags: oneTags?.tagIds,
            chart: [oneChart?.f1, oneChart?.f2, oneChart?.f3, oneChart?.f4, oneChart?.f5, oneChart?.f6]
          }
          // console.log('fil', filterIt(allData, submitValue, myItem))
          if (submitValue) {
            if (myItem.name.search(submitValue) !== -1 ||
              myItem.maker.search(submitValue) !== -1 ||
              myItem.area.search(submitValue) !== -1) {
              allData.push(myItem)
              // console.log(myItem)
            }
          } else {
            allData.push(myItem)
          }
        })
        if (allData) {
          setSakeList(allData)
          setLoading(false)
        }
      })
  }

  const pageHandler = (event, page) => {
    setCurrentPage(page)
  }

  const recommendTags = ['純米', '赤武', '獺祭', '久保田', '新潟', '吟醸','月桂冠','白鶴']

  useEffect(() => {
    init()
  }, [submitValue])

  return (
    <div className='container px-3 px-md-5 pb-3 my-2 min-vh-100'>
      <Title cn="酒品總覽 " jp="日本酒を探す" />
      <Form.Text>請以 酒名 / 酒廠 / 產地 進行搜尋</Form.Text>
      <InputGroup size="lg" className='py-3 border-primary'>
        <Form.Control
          className='border-primary'
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder='請輸入檢索關鍵字'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              setLoading(true)
              setTimeout(() => {
                setLoading(false)
              }, 3000)
              setInputValue(e.target.value)
              setSubmitValue(inputValue)
              setCurrentPage(1)
            }
          }}
        />
        <Button
          variant="outline-primary"
          id="button-addon1"
          className='d-flex align-items-center'
          onClick={() => {
            setLoading(true)
            setTimeout(() => {
              setLoading(false)
            }, 3000)
            setSubmitValue(inputValue)
            setCurrentPage(1)
          }
          }
        >
          搜尋
          <Icon.ArrowRightShort size={24} />
        </Button>
      </InputGroup>
      <Form.Text>熱門關鍵字.... </Form.Text>
      {recommendTags.map(item => (
        <Badge as="button" className='border-0 mx-1' onClick={()=>setInputValue(item)}>
          # {item}
        </Badge>
      ))}

      {sakeList.length > 0 ?
        <SakeTable
          currentPost={currentPost}
          totalItems={totalItems}
          perPage={perPage}
          pageHandler={pageHandler}
          loading={loading}
          currentPage={currentPage}
        />
        :
        <div>查無資料，請再次輸入關鍵字</div>
      }
    </div>

  )
}

export default SearchList