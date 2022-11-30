import React from 'react'
import { CircularProgress } from '@mui/material'

const Loading = () => {
  return (
    <div className='vh-100'>
      <CircularProgress
        size="64px"
        color="error"
        className='d-block mx-auto'
      />
    </div>
  )
}

export default Loading