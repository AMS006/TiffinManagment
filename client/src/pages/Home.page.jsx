import { CircularProgress } from '@mui/material'
import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ChooseUs from '../components/ChooseUs'
import HeroSlider from '../components/HeroSlider'
import Info from '../components/Info'
import Testimonials from '../components/Testimonials'
import HomeLayout from '../layouts/Home.layout'

function HomePage() {
  const [active,setActive] = useState(false);
  setTimeout(() => {
    setActive(true)
  }, 800);
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
