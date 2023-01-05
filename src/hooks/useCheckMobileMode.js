import { useState, useEffect } from 'react'

const useCheckScreenWidth = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const handleWidthChange = () => {
    setWidth(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener('resize',handleWidthChange)
    return () => {
      window.removeEventListener('resize',handleWidthChange)
    }
  },[])


  return (width <= 768)
}

export default useCheckScreenWidth