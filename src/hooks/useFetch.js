import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (url, method = 'post', pramsObj) => {

  const [status, setStatus] = useState('')
  const [data, setData] = useState([])

  useEffect(()=>{
    if(!url) return;

    const fetchData = async () => {
      setStatus('fetching')
      await axios({
        method,
        url,
        data : pramsObj
      })
      .then( res => {
        setData(res.data)
      })
      .catch( err => {
        console.error(err)
      })
    }
  })

  fetchData()
  
  return { status, data }
}