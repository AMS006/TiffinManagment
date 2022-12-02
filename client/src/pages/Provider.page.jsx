import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import HomeLayout from '../layouts/Home.layout'
import MealBox from '../components/MealBox'
import ProviderTopBar from '../components/ProviderTopBar'
function ProviderPage() {
  return (
    <div>
     <ProviderTopBar />
     <MealBox />
    </div>
  )
}

export default HomeLayout(ProviderPage)
