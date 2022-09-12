import { useState, useEffect } from 'react'
import { InputGroup, Form, Button } from 'react-bootstrap'
import axios from 'axios'
import SakeSection from '../components/SakeSection';
import SakeTable from '../components/SakeTable';
import * as Icon from 'react-bootstrap-icons';

const SearchList = () => {

  const [sakeList, setSakeList] = useState([])


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
        //this will be executed only when all requests are complete



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
            area: oneArea.name,
            tags: oneTags?.tagIds,
            chart: [oneChart?.f1, oneChart?.f2, oneChart?.f3, oneChart?.f4, oneChart?.f5, oneChart?.f6]
          }


          // console.log(myItem)
          allData.push(myItem)
        });
        console.log(allData)
        setSakeList(allData)


      }
      )

  }

  //   console.log(sakeList)


  //   // console.log(animals.slice(0, 100));

  // useEffect(() => {
  //   init();
  // }, [])
  return (
    <div className='container px-3 px-md-5 py-5'>
      SearchPage
      {/* {sakeList.slice(0,100).map( (item,index) => (
        <SakeSection key={index} {...item}/>
      )) } */}
      <InputGroup size="lg" className='py-5 border-primary'>
        <Form.Control
        className='border-primary'
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder='輸入酒藏或酒款關鍵字'
        />
        <Button variant="outline-primary" id="button-addon1" className='d-flex align-items-center'>
          搜尋
          <Icon.ArrowRightShort size={24}/>
        </Button>
      </InputGroup>

      <SakeTable />



      {/* <SakeSection
        name={sakeItem.name}
        maker={sakeItem.maker}
        area={sakeItem.area}
        tags={sakeItem.tags}
        chart={sakeItem.chart}
      /> */}
    </div>

  )
}

export default SearchList