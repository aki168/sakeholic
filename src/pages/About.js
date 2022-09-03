import React from 'react'
import Title from '../components/Title'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as Icon from 'react-bootstrap-icons';


const About = () => {


  return (
    <>
      <div className='container py-5' style={{ maxWidth: "800px" }}>
        <Title cn="聯絡我們" jp="お問い合わせ" />
        {/* 聯絡表單 */}
        <Form className='d-flex flex-column ps-5 mb-5'>
          <Form.Group className="mb-3" controlId="formBasicName" >
            <Form.Floating>
              <Form.Control
                type="text"
                placeholder="姓名 / 暱稱"
                id="floatingInputCustom"
              />
              <label htmlFor="floatingInputCustom">姓名 / 暱稱</label>
            </Form.Floating>
            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Floating>
              <Form.Control
                type="email"
                placeholder="您的電子信箱"
              />
              <label htmlFor="floatingInputCustom">您的電子信箱</label>
              {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
            </Form.Floating>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicTitle" >
            <Form.Floating>
              <Form.Control
                type="text"
                placeholder="主旨"
              />
              <label htmlFor="floatingInputCustom">主旨</label>
            </Form.Floating>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicMessage" >
            <Form.Floating>
              <Form.Control
                as="textarea"
                placeholder="訊息內容"
                style={{ minHeight: "180px" }}
              />
              <label htmlFor="floatingInputCustom">訊息內容</label>
            </Form.Floating>
          </Form.Group>
          {/* <Form.Group className="mb-4" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
          <Button variant="primary" type="submit" style={{ width: "100px" }} className='align-self-end' >
            <span className='pe-1'>送出</span>
            <Icon.ArrowRightShort size={25} />
          </Button>
        </Form>
        {/* 關於小酌 */}
        <section className='container py-5'>

          <div className="row justify-content-between">

            <div className="col-12 col-md-6 py-5 px-4 mb-5 bg-light">
              <h3 className='fw-bold text-primary mb-2'>製作初衷</h3>
              <p className='mb-5'>
                「小酌圖鑑」日本酒檢索網站。<br />
                針對喜歡日本酒，但總感中文資訊匱乏的人。<br />
                <br />
                使用者可以輸入酒廠、酒名、產地等資訊<br />
                查詢到在居酒屋、超市看到的日本酒，<br />
                得知各項風味量表、建議喝法等實用資訊。
              </p>
              <h3 className='fw-bold text-primary mb-2'>特別感謝</h3>
              <ul>
                <li>
                  <Icon.BrightnessLowFill size={20} className="me-2" />
                  喜歡喝日本酒的大家
                </li>
                <li>
                  <Icon.BrightnessLowFill size={20} className="me-2" />
                  ＸＸＸＸＸ
                </li>
                <li>
                  <Icon.BrightnessLowFill size={20} className="me-2" />
                  ＯＯＯＯＯ
                </li>
                <li>
                  <Icon.BrightnessLowFill size={20} className="me-2" />
                  さけのわデータ
                </li>
                <li>
                  <Icon.BrightnessLowFill size={20} className="me-2" />
                  ＸＸＸＸＸ
                </li>
                <li>
                  <Icon.BrightnessLowFill size={20} className="me-2" />
                  六角學院 2022夏切版直播班
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-5 py-5 px-4 mb-5 bg-dark text-white col-4 d-flex flex-column justify-content-center">
              <h3 className='fw-bold mb-2'>版權聲明</h3>
              <p className='fw-lighter'>
                由AKI CHENG製作及維護<br />
                若有相關聯繫或商業合作意願<br />
                歡迎填寫站內聯絡表單<br />
                <br />
                <h5>亦可直接來信與我聯繫</h5>
                <ul>
                <li className='mb-2'>
                  <Icon.Mailbox size={20} className="me-2" />
                  mail：ahsi.aki@gmail.com
                </li>
                <li className='mb-2'>
                  <Icon.Telegram size={20} className="me-2" />
                  telegram：ahsiaki
                </li>
                <li className='mb-2'>
                  <Icon.Line size={20} className="me-2" />
                  LINE：sakeholic
                </li>
              </ul>
              </p>
            </div>

          </div>
        </section>

      </div>
    </>
  )
}

export default About