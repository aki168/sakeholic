import React, { useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../MyContext'

const LoginPage = () => {


  const defaultMedia = ['A', 'B', 'C', 'D', 'E', 'F']
  const random = (len) => Math.floor(Math.random() * len + 1);
  let randomMedia = defaultMedia[random(defaultMedia.length) - 1]

  const [formData, setFormData] = useState({})
  const { setToken, setUserData } = useAuth()
  let navigate = useNavigate()
  const MySwal = withReactContent(Swal)

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValue: {}
  });
  const onError = (errors, e) => console.log(errors, e);


  const Toast = Swal.mixin({
    showConfirmButton: false,
    timer: 3000,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const onSubmit = (data) => {

    let postObj = { "user": data }
    let url = 'https://todoo.5xcamp.us/users/sign_in';
    axios.post(url, postObj).then(res => {
      console.log(res)

      if (res.data.message === '登入成功') {
        Toast.fire({
          icon: 'success',
          title: '登入成功',
          html: "歡迎回來 SAKEHOLIC"
        })
        setFormData(data)
        // reset()
        setToken(res.headers.authorization)
        setUserData(res.data)
        navigate('/user')
      }
    }).catch(err => {
      Toast.fire({
        icon: 'error',
        title: 'Oops...',
        html: "帳號或密碼輸入錯誤"
      })
    })
  }
  console.log(formData)


  return (
    <section className='container'>
      <div className='row py-5'>
        <Card className='shadow-sm border-light p-3 col-12 col-md-6 col-lg-5 col-xl-4'>
          <p className='h5 py-2 mb-4'>Welcome!</p>
          <div className='row justify-content-between'>
            <div className='col-6'>
              <h1>即刻登入</h1>
              <p>SAKEHOLIC BOOK</p>
            </div>
            <div className='col-6'>
              <Button variant='info d-flex align-items-center gap-1'>
                <img style={{ width: "16px" }} src={`${process.env.PUBLIC_URL}/media/google.png`} alt="google-icon" />
                Google登入
              </Button>
            </div>
          </div>

          <Form className='d-flex flex-column mt-2 mb-5' onSubmit={handleSubmit(onSubmit, onError)}>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Floating>
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="請輸入電子信箱"
                  {...register("email", {
                    required: { value: true, message: "請輸入您的email" },
                    pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: "email格式有誤" }
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.email?.message}
                </Form.Text>
                <label htmlFor="floatingInputCustom">
                  請輸入電子信箱
                </label>
              </Form.Floating>
            </Form.Group>
            {/* -------------- */}
            <Form.Group className="mb-4" controlId="formBasicTitle" >
              <Form.Floating>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="請輸入密碼"
                  {...register("password", {
                    required: { value: true, min: 6, message: "請輸入至少六碼的密碼" },
                    // pattern: { value:/^\w{6,}$/, message:"密碼至少為6碼" }
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.password?.message}
                </Form.Text>
                <label htmlFor="floatingInputCustom">輸入密碼</label>
              </Form.Floating>
            </Form.Group>
            {/* -------------- */}
            <Button variant="primary mt-5" type="submit" >
              <span className='pe-1 h3'>LOGIN</span>
            </Button>
          </Form>

          <div className='d-flex justify-content-center gap-2'>
            <p className='text-info fw-light'>您尚未註冊嗎?</p>
            <Link to='/register' className='fw-bold text-primary'>前往註冊</Link>
          </div>
        </Card>
        <div className='site-image py-4 d-none d-md-block col-md-6 col-lg-7 col-xl-8 my-auto' >
          <video autoPlay loop muted className="img-fluid d-none d-md-block" >
            <source src={`${process.env.PUBLIC_URL}/media/${randomMedia}.mp4`} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}

export default LoginPage