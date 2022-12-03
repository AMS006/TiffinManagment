import React, { useState } from 'react'
import {Link}  from 'react-router-dom'
function MealBox() {
    const [meals,setMeals] = useState([
        {
            _id:"kjdfkjdlkfjlkf",
            name:"Indian Veg Thali",
            img:"https://ik.imagekit.io/curefoods/image/packs/eat/LUNCH_INDIAN_THALI_PARENT/5_mag_web.jpg",
            price:"120"
        },
        {
            _id:"kjdfkjdlkfjlkf",
            name:"Indian Veg Thali",
            img:"https://ik.imagekit.io/curefoods/image/packs/eat/LUNCH_INDIAN_THALI_PARENT/5_mag_web.jpg",
            price:"120"
        },
        {
            _id:"kjdfkjdlkfjlkf",
            name:"Indian Veg Thali",
            img:"https://ik.imagekit.io/curefoods/image/packs/eat/LUNCH_INDIAN_THALI_PARENT/5_mag_web.jpg",
            price:"120"
        },
        {
            _id:"kjdfkjdlkfjlkf",
            name:"Indian Veg Thali",
            img:"https://ik.imagekit.io/curefoods/image/packs/eat/LUNCH_INDIAN_THALI_PARENT/5_mag_web.jpg",
            price:"120"
        },
        {
            _id:"kjdfkjdlkfjlkf",
            name:"Indian Veg Thali",
            img:"https://ik.imagekit.io/curefoods/image/packs/eat/LUNCH_INDIAN_THALI_PARENT/5_mag_web.jpg",
            price:"120"
        },
        {
            _id:"kjdfkjdlkfjlkf",
            name:"Indian Veg Thali",
            img:"https://ik.imagekit.io/curefoods/image/packs/eat/LUNCH_INDIAN_THALI_PARENT/5_mag_web.jpg",
            price:"120"
        },
        {
            _id:"kjdfkjdlkfjlkf",
            name:"Indian Veg Thali",
            img:"https://ik.imagekit.io/curefoods/image/packs/eat/LUNCH_INDIAN_THALI_PARENT/5_mag_web.jpg",
            price:"120"
        },
        {
            _id:"kjdfkjdlkfjlkf",
            name:"Indian Veg Thali",
            img:"https://ik.imagekit.io/curefoods/image/packs/eat/LUNCH_INDIAN_THALI_PARENT/5_mag_web.jpg",
            price:"120"
        }
    ])
  return (
    <div className='lg:px-12 md:px-6 px-4  py-4 '>
        <h1 className="font-bold font-mono text-2xl">All Meal Plans</h1>
        <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 py-4 gap-6'>
            {meals.map((meal) =>(
                <Link to={`/meal/${meal._id}`}>
                    <div className='hover:shadow py-2 '>
                        <div>
                            <img src={meal.img} alt={meal.name} />
                        </div>
                        <h3 className='font-semibold py-1 px-1'>{meal.name}</h3>
                        <div className='flex justify-between px-1 items-center'>
                            <p>Price</p>
                            <p>₹ <span className='font-semibold'>{meal.price}/meal</span></p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default MealBox