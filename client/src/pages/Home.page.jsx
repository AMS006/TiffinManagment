import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'
import ChooseUs from '../components/Home/ChooseUs'
import HeroSlider from '../components/Home/HeroSlider'
import Info from '../components/Home/Info'
import Testimonials from '../components/Home/Testimonials'
import HomeLayout from '../layouts/Home.layout'
import FoodCarousel from '../components/Home/FoodCarousel'
import Order from '../components/Home/Order'

function HomePage() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setActive(true)
    }, 600);
  }, [])
  if (!active) {
    return (
      <div className='w-full flex items-center justify-center' style={{ height: '85vh' }}>
        <CircularProgress />
      </div>
    )
  }
  return (
    <div>
      <HeroSlider />
      <FoodCarousel />
      <Order />
      <ChooseUs />
      <Testimonials />
      <Info />
    </div>
  )
}

export default HomeLayout(HomePage)
