import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Skeleton from '../Skeleton';

function MealBox({ foods }) {
    const [loading, setLoading] = useState(true);

    if (!foods || foods.length === 0) {
        return (
            <div className='flex items-center justify-center h-32 w-full'>
                <p className='font-semibold text-gray-500'>No Meals Found</p>
            </div>
        )
    }
    return (
        <>
            {foods && <div className='lg:px-12 md:px-6 px-4  py-4 '>
                <h1 className="font-bold font-mono text-2xl">All Meal Plans</h1>
                <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 py-4 gap-6'>
                    {foods.map((food, index) => {
                        if (food.quantity > 0) {
                            return (
                                <Link to={`/food/${food._id}`} key={index}>
                                    <div className='hover:shadow py-2 '>
                                        <div>
                                            {loading && <Skeleton />}
                                            <img src={food.image} className={`${loading ? 'hidden' : 'block'}`} onLoad={() => setLoading(false)} alt={food.name} />
                                        </div>
                                        <h3 className='font-semibold py-1 px-1'>{food.name}</h3>
                                        <div className='flex justify-between px-1 items-center'>
                                            <p>Price</p>
                                            <p>₹ <span className='font-semibold'>{food.price}/meal</span></p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        } else {
                            return <div key={index}></div>
                        }
                    })}
                </div>
            </div>}
        </>
    )
}

export default MealBox