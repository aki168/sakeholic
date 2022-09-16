import React from 'react'
import { useAuth } from '../MyContext'

const UserPage = () => {

  const {userData} = useAuth()

  return (
    <div className='vh-100 text-primary container'>UserPage: hi {userData.nickname} </div>
  )
}

export default UserPage