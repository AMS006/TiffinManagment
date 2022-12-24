import React,{useState} from 'react'

function MealSubscription() {
    const [mealData,setMealDate] = useState({
        name:"Indian Veg Thali",
        price:"120",
        isVeg:true,
    })
    const [totalPrice,setTotalPrice] = useState(mealData.price * 28);
    const [totalDays,setTotalDays] = useState(28);

    const toggleTotalPrice = (days) =>{

      setTotalDays(days);
      setTotalPrice(days * mealData.price);
    }

  return (
    <div className='flex flex-col gap-6 lg:px-8 md:px-4 px-2'>
        <h2 className='font-bold text-2xl'>{mealData.name}</h2>

        <div className='flex items-center gap-3'>
          <div className='bg-slate-800 text-white px-2 py-5 rounded-lg flex flex-col items-center justify-center lg:w-28 w-44 '>
            <h4 className='font-semibold lg:text-xl text-lg'>₹{totalPrice}</h4>
            <p>for {totalDays} days</p>
          </div>
          <div className='shadow-lg text-white py-10 flex gap-3 flex-wrap'>
            <button onClick={() => toggleTotalPrice(28)} className={`${totalDays === 28?'bg-slate-800   text-white':"text-slate-900"} w-20  rounded  py-1 border border-slate-900`}>Monthly</button>
            <button onClick={() => toggleTotalPrice(7)} className={`${totalDays === 7?'bg-slate-800  text-white':"text-slate-900"} w-20 rounded  py-1 border border-slate-900`}>Weekly</button>
            <button onClick={() => toggleTotalPrice(1)} className={`${totalDays === 1?'bg-slate-800  text-white':"text-slate-900"} w-20 rounded  py-1 border border-slate-900`}>Today</button>
          </div>
        </div>
        <div className='w-full px-4'>
          <button className='w-full bg-slate-800 py-2 rounded text-white font-semibold '>Subscribe Meal Plan</button>
        </div>
    </div>
  )
}

export default MealSubscription