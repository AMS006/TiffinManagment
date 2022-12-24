import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ChooseUs from '../components/ChooseUs'
import HeroSlider from '../components/HeroSlider'
import Info from '../components/Info'
import Testimonials from '../components/Testimonials'
import HomeLayout from '../layouts/Home.layout'

function HomePage() {
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
