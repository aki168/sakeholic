import React from 'react'


const AreaSearchPage = () => {



  const JapanMap = () => {

    const areaHandler = (e) => {
      e.preventDefault()
    }

    return (
      <div id="japan-map" className="clearfix">
        <div id="hokkaido-touhoku" className="clearfix">
          <p className="area-title">北海道・東北</p>
          <div className="area">
            <a href="#" onClick={areaHandler}>
              <div id="hokkaido">
                <p>北海道</p>
              </div>
            </a>
            <a href="#" onClick={areaHandler}>
              <div id="aomori">
                <p>青森</p>
              </div>
            </a>
            <a href="#" onClick={areaHandler}>
              <div id="akita">
                <p>秋田</p>
              </div>
            </a>
            <a href="#" onClick={areaHandler}>
              <div id="iwate">
                <p>岩手</p>
              </div>
            </a>
            <a href="#" onClick={areaHandler}>
              <div id="yamagata">
                <p>山形</p>
              </div>
            </a>
            <a href="#" onClick={areaHandler}>
              <div id="miyagi">
                <p>宮城</p>
              </div>
            </a>
            <a href="#" onClick={areaHandler}>
              <div id="fukushima">
                <p>福島</p>
              </div>
            </a>
          </div>
        </div>

        <div id="kantou">
          <p className="area-title">関東</p>
          <div className="area">
            <a href="#" onClick={areaHandler}>
              <div id="gunma">
                <p>群馬</p>
              </div>
            </a>
            <a href="#" onClick={areaHandler}>
              <div id="tochigi">
                <p>栃木</p>
              </div>
            </a>
            <a href="#" onClick={areaHandler}>
              <div id="ibaraki">
                <p>茨城</p>
              </div>
            </a>
            <a href="#" onClick={areaHandler}>
              <div id="saitama">
                <p>埼玉</p>
              </div>
            </a>
            <a href="#" onClick={areaHandler}>
              <div id="chiba">
                <p>千葉</p>
              </div>
            </a>
            <a href="#" onClick={areaHandler}>
              <div id="tokyo">
                <p>東京</p>
              </div>
            </a>
            <a href="#" onClick={areaHandler}>
              <div id="kanagawa">
                <p>神奈川</p>
              </div>
            </a>
          </div>
        </div>

        <div id="tyubu" className="clearfix">
          <p className="area-title">中部</p>
          <div className="area">
            <a href="#" onClick={areaHandler}>
              <div id="nigata">
                <p>新潟</p>
              </div>
            </a>
            <a href="#" onClick={areaHandler}>
              <div id="toyama">
                <p>富山</p>
              </div>
            </a>
            <a href="#" onClick={areaHandler}>
              <div id="ishikawa">
                <p>石川</p>
              </div>
            </a>
            <a href="#" onClick={areaHandler}>
              <div id="fukui">
                <p>福井</p>
              </div>
            </a>
            <a href="#" onClick={areaHandler}>
              <div id="nagano">
                <p>長野</p>
              </div>
            </a>
            <a href="#" onClick={areaHandler}>
              <div id="gifu">
                <p>岐阜</p>
              </div>
            </a>
            <a href="#" onClick={areaHandler}>
              <div id="yamanashi">
                <p>山梨</p>
              </div>
            </a>
            <a href="#" onClick={areaHandler}>
              <div id="aichi">
                <p>愛知</p>
              </div>
            </a>
            <a href="#" onClick={areaHandler}>
              <div id="shizuoka">
                <p>静岡県</p>
              </div>
            </a>
          </div>
        </div>

        <div id="kinki" className="clearfix">
          <p className="area-title">近畿</p>
          <div className="area">
            <a href="#" onClick={areaHandler}>
              <div id="kyoto">
                <p>京都</p>
              </div>
            </a>
            <a href="#" onClick={areaHandler}>
              <div id="shiga">
                <p>滋賀</p>
              </div>
            </a>
            <a href="#" onClick={areaHandler}>
              <div id="osaka">
                <p>大阪</p>
              </div>
            </a>
            <a href="#" onClick={areaHandler}>
              <div id="nara">
                <p>奈良</p>
              </div>
            </a>
            <a href="#" onClick={areaHandler}>
              <div id="mie">
                <p>三重</p>
              </div>
            </a>
            <a href="#" onClick={areaHandler}>
              <div id="wakayama">
                <p>和歌山</p>
              </div>
            </a>
            <a href="#" onClick={areaHandler}>
              <div id="hyougo">
                <p>兵庫</p>
              </div>
            </a>
          </div>
        </div>

        <div id="tyugoku" className="clearfix">
          <p className="area-title">中国</p>
          <div className="area">
            <a href="#" onClick={areaHandler}>
              <div id="tottori">
                <p>鳥取</p>
              </div>
            </a>
            <a href="#"  onClick={areaHandler} >
              <div id="okayama">
                <p>岡山</p>
              </div>
            </a>
            <a href="#"  onClick={areaHandler}>
              <div id="shimane">
                <p>島根</p>
              </div>
            </a>
            <a href="#"  onClick={areaHandler}>
              <div id="hiroshima">
                <p>広島</p>
              </div>
            </a>
            <a href="#"  onClick={areaHandler}>
              <div id="yamaguchi">
                <p>山口</p>
              </div>
            </a>
          </div>
        </div>

        <div id="shikoku" className="clearfix">
          <p className="area-title">四国</p>
          <div className="area">
            <a href="#"  onClick={areaHandler}>
              <div id="kagawa">
                <p>香川</p>
              </div>
            </a>
            <a href="#"  onClick={areaHandler}>
              <div id="ehime">
                <p>愛媛</p>
              </div>
            </a>
            <a href="#"  onClick={areaHandler}>
              <div id="tokushima">
                <p>徳島</p>
              </div>
            </a>
            <a href="#"  onClick={areaHandler}>
              <div id="kouchi">
                <p>高地</p>
              </div>
            </a>
          </div>
        </div>

        <div id="kyusyu" className="clearfix">
          <p className="area-title">九州・沖縄</p>
          <div className="area">
            <a href="#"  onClick={areaHandler}>
              <div id="fukuoka">
                <p>福岡</p>
              </div>
            </a>
            <a href="#"  onClick={areaHandler}>
              <div id="saga">
                <p>佐賀</p>
              </div>
            </a>
            <a href="#"  onClick={areaHandler}>
              <div id="nagasaki">
                <p>長崎</p>
              </div>
            </a>
            <a href="#"  onClick={areaHandler}>
              <div id="oita">
                <p>大分</p>
              </div>
            </a>
            <a href="#"  onClick={areaHandler}>
              <div id="kumamoto">
                <p>熊本</p>
              </div>
            </a>
            <a href="#"  onClick={areaHandler}>
              <div id="miyazaki">
                <p>宮崎</p>
              </div>
            </a>
            <a href="#"  onClick={areaHandler}>
              <div id="kagoshima">
                <p>鹿児島</p>
              </div>
            </a>
            <a href="#"  onClick={areaHandler}>
              <div id="okinawa">
                <p>沖縄</p>
              </div>
            </a>
          </div>
        </div>

      </div>
    )
  }





  return (
    <>
      <section className='py-3 px-2 px-md-0'>
        <JapanMap />
      </section>
      <div className='vh-100 px-3 px-md-5 py-3 my-2 container'>

      </div>
    </>
  )
}

export default AreaSearchPage