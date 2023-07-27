import React from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Avatar, Rating } from '@mui/material'
import { useSelector } from 'react-redux'
dayjs.extend(relativeTime)
function Reviews() {
    const reviews = useSelector((state) => state.reviews.providerReviews)
    return (
        <div>
            {reviews && reviews.length > 0 ?
                <div className='md:px-8 px-2'>
                    <h1 className='font-semibold py-3 text-xl'>Customers Reviews</h1>
                    <div className='flex gap-3 flex-col'>
                        {reviews.map((review, idx) => (
                            <div className='border-b py-2' key={idx}>
                                <div className='flex gap-3 items-center'>
                                    <Avatar />
                                    <h5 className='font-medium'>{review.user.name}</h5>
                                </div>
                                <div className='py-1'>
                                    <Rating name="read-only" size='small' value={review.rating} precision={0.5} readOnly />
                                </div>
                                <p className='pb-2 text-gray-400'>{dayjs().to(dayjs(review.createdAt))}</p>
                                <p className='text-gray-600 md:w-1/2'>{review.message}</p>
                            </div>
                        ))}
                    </div>
                </div> : null}
        </div>
    )
}

export default Reviews