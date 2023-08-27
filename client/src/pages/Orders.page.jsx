import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CircularProgress, Typography } from '@mui/material'
import TopNavigation from '../components/TopNavigation'
import HomeLayout from '../layouts/Home.layout'
import { getUserOrders, updateUserOrder } from '../redux/order/order.action'
import ReviewModal from '../components/ReviewModal'

function OrdersPage() {
    const orders = useSelector((state) => state.orders.userOrders)
    const allOrders = useSelector((state) => state.orders)
    const [reviewModal, setReviewModal] = useState(false)
    const [activeOrder, setActiveOrder] = useState("")
    let data = ""

    if (orders || orders?.length === 0) {
        data = <p className='text-gray-600 flex items-center justify-center' style={{ height: '50vh' }}>No Orders Found</p>
    }
    const handleReviewModal = (order) => {
        setActiveOrder(order)
        setReviewModal(true)
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserOrders())
    }, [dispatch])
    if (allOrders.loading) {
        return (
            <div className='w-full flex items-center justify-center' style={{ height: '50vh' }}>
                <CircularProgress />
            </div>
        )
    }
    const breadcrumbs = [
        <Link to='/' underline="hover" key="1" color="inherit" className='hover:underline'>
            Home
        </Link>,
        <Typography key={'2'}>
            Orders
        </Typography>
    ];
    const handleCancel = (order) => {
        dispatch(updateUserOrder({ _id: order._id, status: "Cancelled", user: order.user, provider: order.provider, food: order.food, quantity: order.quantity }))
    }
    return (
        <div className='md:px-8 px-1 py-4'>
            <ReviewModal open={reviewModal} setOpen={setReviewModal} order={activeOrder} />
            <TopNavigation breadcrumbs={breadcrumbs} />
            <h1 className='text-2xl font-semibold '>My Orders</h1>
            {orders && orders?.length !== 0 ? <div className='flex flex-col gap-4 pt-4 w-full'>
                {orders.map((order, idx) => (
                    <div className='md:flex gap-2 border-b py-2' key={idx}>
                        <div className='w-32 h-28 overflow-hidden'>
                            <img src={order?.food?.image} alt="" />
                        </div>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p>Name: <span className='font-semibold'>{order?.food?.name}</span></p>
                                <p>Quantity : <span className='font-semibold'>{order?.quantity}</span></p>
                                <p>Price : <span className='font-semibold'>₹{order?.totalAmount}</span></p>
                                <p>OrderStatus: <span className='font-semibold'>{order?.orderStatus}</span></p>
                                <div className='flex gap-2 justify-between'>
                                    <p>OrderedDate: <span className='font-semibold'>{order?.date}</span></p>
                                    <div>
                                        {order?.orderStatus === "Ordered" && <button className='bg-red-500 text-white px-2 py-1 rounded ' onClick={() => handleCancel(order)}>Cancel Order</button>}
                                    </div>
                                </div>
                                {order?.orderStatus === "Delivered" && <button className="cursor-pointer text-blue-800 hover:underline" onClick={() => handleReviewModal(order)}>Write a Review</button>}
                            </div>

                        </div>
                    </div>
                ))}
            </div> : data}
        </div>
    )
}

export default HomeLayout(OrdersPage)