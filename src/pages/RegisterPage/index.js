import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useAuth } from '@/MyContext';
import { Form, Card, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import useCheckMobileMode from '@HOOK/useCheckMobileMode';

const RegisterPage = () => {

  const isMobile = useCheckMobileMode()

  const defaultMedia = ['A','B','C','E','F']
  const random = (len) => Math.floor(Math.random()*len + 1);
  let randomMedia = defaultMedia[random(defaultMedia.length)-1]

  const [formData, setFormData] = useState({})
  const { mediaPath } = useAuth()
  let navigate = useNavigate()

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValue: {}
  });
  const onError = (errors, e) => console.error(errors, e);


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
    let url = 'https://todoo.5xcamp.us/users';
    axios.post(url, postObj).then(res => {

      if (res.data.message === '註冊成功') {
        Toast.fire({
          icon: 'success',
          title: '成功',
          html: `${data.nickname}，恭喜註冊成功`
        })
        setFormData(data)
        reset()
        // setToken(res.headers.authorization)
        navigate('/')
      }

    }).catch(err => {
      Toast.fire({
        icon: 'error',
        title: 'Oops...',
        html: "您已經註冊過囉！"
      })
    })
  }


  return (
    <section className='container'>
      <div className='row py-5'>
        <Card className='shadow-sm border-light p-3 col-12 col-md-6 col-lg-5 col-xl-4'>
          <p className='h5 py-2 mb-4'>Welcome!</p>
          <div className='col-6'>
            <h1>註冊會員</h1>
            <p>SAKEHOLIC BOOK</p>
          </div>
          <Form className='d-flex flex-column mt-2 mb-5' onSubmit={handleSubmit(onSubmit, onError)}>
            <Form.Group className="mb-4" controlId="formBasicName" >
              <Form.Floating>
                <Form.Control
                  type="text"
                  name="nickname"
                  placeholder="姓名 / 暱稱"
                  {...register("nickname", {
                    required: { value: true, message: "請輸入您的姓名" }
                  })}
                />
                <Form.Text className='text-danger'>
                  {errors.nickname?.message}
                </Form.Text>
                <label htmlFor="floatingInputCustom">
                  姓名 / 暱稱
                </label>
              </Form.Floating>
            </Form.Group>
            {/* -------------- */}
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
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.password?.message}
                </Form.Text>
                <label htmlFor="floatingInputCustom">輸入密碼</label>
              </Form.Floating>
            </Form.Group>
            <Button variant="primary mt-5" type="submit" >
              <span className='pe-1 h3'>Register</span>
            </Button>
          </Form>

          <div className='d-flex justify-content-center gap-2'>
            <p className='text-info fw-light'>您已經註冊SAKEHOLIC BOOK?</p>
            <Link to='/login' className='fw-bold text-primary'>前往登入</Link>
          </div>
        </Card>
        <div className='site-image py-2 d-none d-md-block col-md-6 col-lg-7 col-xl-8 my-auto' >
          { isMobile ||
          <video autoPlay loop muted className="img-fluid d-none d-md-block" >
            <source src={`${mediaPath}${randomMedia}.mp4`} type="video/mp4" />
          </video>
          }
        </div>
      </div>
    </section>
  )
}

export default RegisterPage