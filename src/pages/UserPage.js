import React from 'react'
import { useAuth } from '../MyContext'
import Title from '../components/Title'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const UserPage = () => {

  let navigate = useNavigate()

  const { userData, setToken, token } = useAuth()

  const MySwal = withReactContent(Swal)

  const Toast = Swal.mixin({
    showConfirmButton: false,
    timer: 3000,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const logout = () => {

    let config = {
      headers: {
        Authorization: token
      }
    }

    let url = 'https://todoo.5xcamp.us/users/sign_out'
    axios.delete(url, config).then(res => {
      console.log(res)

      if (res.data.message === '已登出') {
        setToken(null)
        Toast.fire({
          icon: 'success',
          title: '已登出',
          html: "您以登出 SAKEHOLIC"
        })
        navigate('/login')
      }
    }).catch(err => {
      Toast.fire({
        icon: 'error',
        title: 'Oops...',
        html: "網路連線異常"
      })
    })
  }

  return (
    <div className='container vh-100'>
      <Title cn="會員中心" jp="アカウント" />
      <p className='text-primary'>UserPage: hi {userData.nickname}</p>
      <div className='d-flex flex-column'>
        <Button
          variant="outline-dark" style={{ width: "100px" }}
          className='align-self-end'
          onClick={logout}
        >
          <span className='pe-1'>登出</span>
        </Button>
      </div>

    </div>
  )
}

export default UserPage