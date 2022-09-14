import { useState } from 'react'
import Title from '../components/Title'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as Icon from 'react-bootstrap-icons';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";



const About = () => {

  const MySwal = withReactContent(Swal)

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValue:{}
  });
  const onError = (errors, e) => console.log(errors, e);

  const [formData, setFormData] = useState({})

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const onSubmit = (data) => {
    // alert(JSON.stringify(data))
    // MySwal.fire({
    //   title: <strong>成功</strong>,
    //   html: <i>親愛的{data.userName}，已收到您的來信<br/>
    //   我們將盡速回覆您！</i>,
    //   icon: 'success',
    // })
    Toast.fire({
      icon: 'success',
      title: '成功',
      html: `${data.userName}，已收到您的來信<br/>
      我們將盡速回覆您！`,
    })
    setFormData(data)
    reset();
  };
  console.log(formData)





  return (
    <>
      <div className='container py-5' style={{ maxWidth: "800px" }}>
        <Title cn="聯絡我們" jp="お問い合わせ" />
        {/* 聯絡表單 */}
        <Form className='d-flex flex-column ps-5 mb-5' onSubmit={handleSubmit(onSubmit, onError)}>
          <Form.Group className="mb-3" controlId="formBasicName" >
            <Form.Floating>
              <Form.Control
                type="text"
                name="userName"
                placeholder="姓名 / 暱稱"
                {...register("userName", {
                  required: { value: true, message: "請輸入您的姓名" }
                })}
              />
              <Form.Text className='text-danger'>
                {errors.userName?.message}
              </Form.Text>
              <label htmlFor="floatingInputCustom">
                姓名 / 暱稱
              </label>
            </Form.Floating>
          </Form.Group>
          {/* -------------- */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Floating>
              <Form.Control
                type="text"
                name="email"
                placeholder="您的電子信箱"
                {...register("email", {
                  required: { value: true, message: "請輸入您的email" },
                  pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: "email格式有誤" }
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
              <label htmlFor="floatingInputCustom">
                您的電子信箱
              </label>
            </Form.Floating>
          </Form.Group>
          {/* -------------- */}
          <Form.Group className="mb-3" controlId="formBasicTitle" >
            <Form.Floating>
              <Form.Control
                type="text"
                name="title"
                placeholder="主旨"
              />
              <label htmlFor="floatingInputCustom">主旨</label>
            </Form.Floating>
          </Form.Group>
          {/* -------------- */}
          <Form.Group className="mb-3" controlId="formBasicMessage" >
            <Form.Floating>
              <Form.Control
                as="textarea"
                style={{ minHeight: "180px" }}
                name="message"
                placeholder="訊息內容"
                {...register("message", {
                  required: { value: true, message: "請輸入訊息" }
                })}
              />
              <Form.Text className="text-danger">
                {errors.message?.message}
              </Form.Text>
              <label htmlFor="floatingInputCustom">
                訊息內容
              </label>
            </Form.Floating>
          </Form.Group>
          {/* -------------- */}
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
                「小酌圖鑑」日本酒檢索網站<br />
                針對喜歡日本酒，但總感中文資訊匱乏的人<br />
                <br />
                使用者可輸入酒廠、酒名、產地等資訊<br />
                查詢在居酒屋、超市看到的日本酒<br />
                得知各項風味量表、建議喝法等情報
              </p>
              <h3 className='fw-bold text-primary mb-2'>特別感謝</h3>
              <ul>
                <li>
                  <Icon.BrightnessLowFill size={20} className="me-2" />
                  喜歡喝日本酒的大家
                </li>
                <li>
                  <Icon.BrightnessLowFill size={20} className="me-2" />
                  台中華美街各大日系居酒屋🍻🍶
                </li>
                <li>
                  <Icon.BrightnessLowFill size={20} className="me-2" />
                  さけのわデータ
                </li>
                <li>
                  <Icon.BrightnessLowFill size={20} className="me-2" />
                  日本酒記録アプリSakenote
                </li>
                <li>
                  <Icon.BrightnessLowFill size={20} className="me-2" />
                  22夏切版直播班 第17小組
                </li>
                <li>
                  <Icon.BrightnessLowFill size={20} className="me-2" />
                  hex school 校長
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