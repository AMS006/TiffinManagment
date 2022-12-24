import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import HomeLayout from '../layouts/Home.layout'
import MealBox from '../components/MealBox'
import ProviderTopBar from '../components/ProviderTopBar'
import { useParams } from 'react-router-dom'
import { getAllFood } from '../redux/food/food.action'
import CircularProgress from '@mui/material/CircularProgress';
function ProviderPage() {
    const foods = useSelector((state) => state.foods.foods);
 
    const params = useParams();
    const _id = params._id;
    const dispatch = useDispatch()
   useEffect(()=>{
    dispatch(getAllFood(_id))
   },[_id])
   const food = useSelector((state) => state.foods)
   if(food.loading){
    return(
      <div className='w-full  flex items-center justify-center' style={{height:'90vh'}}>
        <CircularProgress />
      </div>
    )
   }
  return (
    <>
     {foods? 
      <div>
        <ProviderTopBar foods={foods}/>
        <MealBox foods={foods}/>
      </div>:null
      }
   </>
  )
}

export default HomeLayout(ProviderPage)
