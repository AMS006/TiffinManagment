import React from 'react'
import MealDetail from '../components/MealDetail'
import MealSubscription from '../components/MealSubscription'
import HomeLayout from '../layouts/Home.layout'

function MealPage() {
  return (
    <div>
        <div className='md:flex lg:gap-8 gap-4 lg:px-16 md:px-6 px-2 py-4'>
            <div className='md:w-1/2'>
                <MealDetail />
            </div>
            <div className='md:sticky top-0 z-10 bg-white md:w-1/2 py-8' style={{height:'80vh'}}>
                <MealSubscription />
            </div>
        </div>
    </div>
  )
}

export default HomeLayout(MealPage)