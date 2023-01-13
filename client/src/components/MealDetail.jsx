import React from 'react'
import { useSelector } from 'react-redux';

function MealDetail() {
  const mealData = useSelector((state) => state.foods.food);
  return (
    <>
      {mealData && <div className='pb-4'>
        <div className='mealImage' style={{height:'380px'}}>
          <img src={mealData.image} alt={mealData.name} className='h-full w-full rounded-lg overflow-hidden'/>
        </div>
          <div className= 'flex flex-col gap-4 py-4 h-40'>
            <h3 className='font-semibold'>{mealData.name}</h3>
            <h6 className='font-semibold'>Price: <span className='text-slate-900 font-normal'>₹{mealData.price}/meal</span></h6>
            <p className='font-semibold'>Quantity Left: <span className='font-normal'>{mealData.quantity}</span></p>
            <h6 className='font-medium'>Description :</h6>
            <p className='text-gray-500'>{mealData.description}</p>
          </div>
        </div>}
    </>
  )
}

export default MealDetail