import axios from 'axios'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../MyContext'
import { Button } from 'react-bootstrap'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import sakeCardDefault from '../../data/sakeCardDefault'
import { Title, TitleReverse } from '../../components/Title'
import ControlledAccordionsUser from '../../components/ControlledAccordionsUser'

const MemberAvatar = styled.div`
  background-image: URL(${({ mediaPath }) => mediaPath + "/user001.jpg"});
  background-position: center;
  background-size: cover;
  width: 120px;
  height: 120px;
`;
const UserPage = () => {

  let navigate = useNavigate()

  const { userData, setToken, token, mediaPath } = useAuth()

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
    <div className='container'>
      <p className='text-primary text-end pt-2 px-5'>
        親愛的{userData.nickname}， 您好！ようこそSAKEHOLIC🍶
      </p>
      <Title cn="會員中心" jp="アカウント" />
      <div className='row justify-content-center'>
        <div className='col-12 col-md-5 col-lg-3 d-flex flex-column
        mb-3  align-items-center'>
          <MemberAvatar mediaPath={mediaPath} className='rounded-circle my-4' />
          <Button
            variant="outline-dark"
            size='sm'
            className='justify-content-center ms-2'
            onClick={logout}
          >
            <span className='py-1'>登出</span>
          </Button>
        </div>
        <div className='col-12 col-md-5 col-lg-3 d-flex flex-column align-items-center'>
          <p className='text-muted my-2'>sakurai@mail.com</p>
          <h5>{userData.nickname}</h5>
          <p>1982 / 1 / 25</p>
          <p>0900-555-888</p>
        </div>
      </div>

      <TitleReverse cn="我的收藏" jp="お気に入り" />
      <div className='mt-3 mb-5 d-flex justify-content-center'>
        <ControlledAccordionsUser sakeCardDefault={sakeCardDefault} />
      </div>

    </div>
  )
}

export default UserPage