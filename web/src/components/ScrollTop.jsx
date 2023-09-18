import {useEffect} from 'react'
import { useLocation } from 'react-router-dom'


const ScrollTop = ({children}) => {
    const location = useLocation()
   useEffect(() => {
     window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
     })
   }, [location])
   
  return (
    <>{children}</>
  )
}

export default ScrollTop