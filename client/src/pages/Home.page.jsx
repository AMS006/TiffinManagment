import { CircularProgress } from '@mui/material'
import React, { useEffect,useState } from 'react'
import ChooseUs from '../components/ChooseUs'
import HeroSlider from '../components/HeroSlider'
import Info from '../components/Info'
import Testimonials from '../components/Testimonials'
import HomeLayout from '../layouts/Home.layout'

function HomePage() {
  const [active,setActive] = useState(false);
  useEffect(()=>{
    setTimeout(() => {
      setActive(true)
    }, 600);
  },[])
  if(!active){
    return(
      <div className='w-full flex items-center justify-center' style={{height:'85vh'}}>
        <CircularProgress />
      </div>
    )
  }
  return (
    <div>
      <HeroSlider />
      <ChooseUs />
      <Testimonials />
      <Info /> 
    </div>
  )
}

export default HomeLayout(HomePage)
