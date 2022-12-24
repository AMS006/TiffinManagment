import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import MealDetail from '../components/MealDetail'
import MealSubscription from '../components/MealSubscription'
import HomeLayout from '../layouts/Home.layout'
import { getFoodById } from '../redux/food/food.action'
import CircularProgress from '@mui/material/CircularProgress';
function MealPage() {
  const params = useParams();
  const id = params._id
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getFoodById(id));
  },[id])
  const food = useSelector((state) => state.foods)
   if(food.loading){
    return(
      <div className='w-full h-full flex items-center justify-center'>
        <CircularProgress />
      </div>
    )
   }
  return (
    <>
      <div className='md:flex lg:gap-8 gap-4 lg:px-16 md:px-6 px-2 py-4'>
          <div className='md:w-1/2'>
              <MealDetail />
          </div>
          <div className='md:sticky top-0 z-10 bg-white md:w-1/2 py-4'>
              <MealSubscription />
          </div>
      </div>
    </>
  )
}

export default HomeLayout(MealPage)