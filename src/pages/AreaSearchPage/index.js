import { useState } from 'react'
import SakeTableArea from '../../components/SakeTableArea'
import { Title } from '../../components/Title'


const AreaSearchPage = () => {

  const [clickArea, setClickArea] = useState('ALL')

  ////////////////// MAP ///////////////////////////
  const JapanMap = () => {
    const areaHandler = (e) => {
      e.preventDefault()
      setClickArea(e.target.id)
    }
    return (
      <div id="japan-map" className="clearfix">
        <div id="hokkaido-touhoku" className="clearfix">
          <p className="area-title">北海道・東北</p>
          <div className="area">

            <a href="!#" onClick={areaHandler} >
              <div id="hokkaido">
                北海道
              </div>
            </a>

            <a href="!#" onClick={areaHandler}>
              <div id="aomori">
                青森
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="akita">
                秋田
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="iwate">
                岩手
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="yamagata">
                山形
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="miyagi">
                宮城
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="fukushima">
                福島
              </div>
            </a>

          </div>
        </div>

        <div id="kantou">
          <p className="area-title">関東</p>
          <div className="area">
            <a href="!#" onClick={areaHandler}>
              <div id="gunma">
                群馬
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="tochigi">
                栃木
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="ibaraki">
                茨城
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="saitama">
                埼玉
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="chiba">
                千葉
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="tokyo">
                東京
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="kanagawa">
                神奈川
              </div>
            </a>
          </div>
        </div>

        <div id="tyubu" className="clearfix">
          <p className="area-title">中部</p>
          <div className="area">
            <a href="!#" onClick={areaHandler}>
              <div id="nigata">
                新潟
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="toyama">
                富山
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="ishikawa">
                石川
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="fukui">
                福井
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="nagano">
                長野
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="gifu">
                岐阜
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="yamanashi">
                山梨
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="aichi">
                愛知
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="shizuoka">
                静岡
              </div>
            </a>
          </div>
        </div>

        <div id="kinki" className="clearfix">
          <p className="area-title">近畿</p>
          <div className="area">
            <a href="!#" onClick={areaHandler}>
              <div id="kyoto">
                京都
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="shiga">
                滋賀
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="osaka">
                大阪
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="nara">
                奈良
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="mie">
                三重
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="wakayama">
                和歌山
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="hyougo">
                兵庫
              </div>
            </a>
          </div>
        </div>

        <div id="tyugoku" className="clearfix">
          <p className="area-title">中国</p>
          <div className="area">
            <a href="!#" onClick={areaHandler}>
              <div id="tottori">
                鳥取
              </div>
            </a>
            <a href="!#" onClick={areaHandler} >
              <div id="okayama">
                岡山
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="shimane">
                島根
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="hiroshima">
                広島
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="yamaguchi">
                山口
              </div>
            </a>
          </div>
        </div>

        <div id="shikoku" className="clearfix">
          <p className="area-title">四国</p>
          <div className="area">
            <a href="!#" onClick={areaHandler}>
              <div id="kagawa">
                香川
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="ehime">
                愛媛
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="tokushima">
                徳島
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="kouchi">
                高知
              </div>
            </a>
          </div>
        </div>

        <div id="kyusyu" className="clearfix">
          <p className="area-title">九州・沖縄</p>
          <div className="area">
            <a href="!#" onClick={areaHandler}>
              <div id="fukuoka">
                福岡
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="saga">
                佐賀
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="nagasaki">
                長崎
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="oita">
                大分
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="kumamoto">
                熊本
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="miyazaki">
                宮崎
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="kagoshima">
                鹿児島
              </div>
            </a>
            <a href="!#" onClick={areaHandler}>
              <div id="okinawa">
                沖縄
              </div>
            </a>
          </div>
        </div>

      </div>
    )
  }


  return (
    <main>
      <Title cn="產地查詢 " jp="地域別 厳選された日本酒"/>
      <section className='py-3 px-2 px-md-0'  data-aos="zoom-out-down">
        <JapanMap/>
      </section>
      <div 
      className='px-3 px-md-3 py-3 my-2 container'>
        <h3>{clickArea}</h3>
        <p>請選擇您想探索的城市</p>
        {clickArea && <SakeTableArea clickAreaId={clickArea} setClickArea={setClickArea} />}
      </div>
    </main>
  )
}

export default AreaSearchPage