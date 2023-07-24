import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material'
import MealDetail from '../components/Meal/MealDetail'
import MealSubscription from '../components/Meal/MealSubscription'
import HomeLayout from '../layouts/Home.layout'
import { getFoodById } from '../redux/food/food.action'
import TopNavigation from '../components/TopNavigation'

function MealPage() {
  const params = useParams();
  const id = params._id
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoodById(id));
  }, [id, dispatch])
  const food = useSelector((state) => state.foods)
  let name = ""
  let providerName = ""
  let providerId = ""
  if (food && food.food) {
    name = food.food.name
    providerName = food.food.provider.name
    providerId = food.food.provider._id
  }
  let breadcrumbs = [
    <Link to='/' underline="hover" key="1" color="inherit" className='hover:underline'>
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      to='/provider'
      color="inherit"
      className='hover:underline'
    >
      Providers
    </Link>,
    <Link
      underline="hover"
      key="3"
      to={`/provider/${providerId}`}
      color="inherit"
      className='hover:underline'
    >
      {providerName}
    </Link>,
    <Typography key={'4'}>
      {name}
    </Typography>
  ];
  if (food.loading) {
    return (
      <div className='w-full flex items-center justify-center' style={{ height: '90vh' }}>
        <CircularProgress />
      </div>
    )
  }


  return (
    <>
      <div className='md:px-8 px-2 py-3'>
        <TopNavigation breadcrumbs={breadcrumbs} />
      </div>
      <div className='md:flex lg:gap-8 gap-4 lg:px-16 md:px-6 px-2 pb-4'>
        <div className='md:w-1/2'>
          <MealDetail />
        </div>
        <div className='md:sticky top-0 z-10 md:mt-0 mt-20 bg-white md:w-1/2 py-4'>
          <MealSubscription />
        </div>
      </div>
    </>
  )
}

export default HomeLayout(MealPage)