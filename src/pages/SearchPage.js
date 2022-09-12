import { useState, useEffect } from 'react'
import axios from 'axios'
import SakeSection from '../components/SakeSection';

const SearchPage = () => {

const [ sakeItem, setSakeItem ] = useState({}) 


const init  = () => {
// execute simultaneous requests -------------------------------------------------------------------------------------
axios.all([
axios.get('https://raw.githubusercontent.com/aki168/sakeData/main/brands.json'),
axios.get('https://raw.githubusercontent.com/aki168/sakeData/main/breweries.json'),
axios.get('https://raw.githubusercontent.com/aki168/sakeData/main/brand-flavor-tags.json'),
axios.get('https://raw.githubusercontent.com/aki168/sakeData/main/flavor-charts.json'),
axios.get('https://raw.githubusercontent.com/aki168/sakeData/main/areas.json'),
axios.get('https://raw.githubusercontent.com/aki168/sakeData/main/rankings.json')
])
.then( async (responseArr) => {
  //this will be executed only when all requests are complete
  
  // 1 酒名搜尋
  const itemsData = await responseArr[0].data.brands;
  let oneItem = await itemsData.filter(item => item.name === '玉乃光')[0];
  // console.log('oneItem:',oneItem)
  
  // 2 找酒廠
  const breweriesData = await responseArr[1].data.breweries;
  let oneBrewery = await breweriesData.filter( item => item.id === oneItem.breweryId)[0];
  // console.log('oneBrewery:', oneBrewery)
    
  // 2-1 找地區
  const AreasData = await responseArr[4].data.areas;
  let oneArea = await AreasData.filter( item => item.id === oneBrewery.areaId)[0];
  // console.log('oneArea:', oneArea)
  
  // 1-1 找TAG
  const tagsData = await responseArr[2].data.flavorTags;
  let oneTags = await tagsData.filter( item => item.brandId === oneItem.id)[0];
  // console.log('oneTags:', oneTags)
  
  // 1-2 找雷達風味
  const chartData = await responseArr[3].data.flavorCharts;
  let oneChart = await chartData.filter( item => item.brandId === oneItem.id)[0];
  // console.log('oneChart:', oneChart)
  
  const myItem = {
    id:oneItem.id,
    name:oneItem.name,
    maker:oneBrewery.name,
    area:oneArea.name,
    tags:oneTags.tagIds,
    chart: [oneChart.f1, oneChart.f2, oneChart.f3, oneChart.f4, oneChart.f5, oneChart.f6]
  }
  
  console.log(myItem)
  setSakeItem(myItem)
  
})
}


console.log(sakeItem)


useEffect(()=>{
  init();
},[])
  return (
    <div className='vh-100 text-primary container'>
      SearchPage
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

export default SearchPage