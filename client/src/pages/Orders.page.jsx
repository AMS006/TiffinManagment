import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { CircularProgress, Typography } from '@mui/material'
import TopNavigation from '../components/TopNavigation'
import HomeLayout from '../layouts/Home.layout'
import { getUserOrders } from '../redux/order/order.action'

function OrdersPage() {
    const orders = useSelector((state) => state.orders.userOrders)
    const allOrders = useSelector((state) => state.orders)
    let data = ""
    
    if(orders || orders?.length === 0){
        data = <p className='text-gray-600 flex items-center justify-center' style={{height:'50vh'}}>No Orders Found</p>
    }
    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getUserOrders())
    },[dispatch])
    if(allOrders.loading){
        return(
          <div className='w-full flex items-center justify-center' style={{height:'50vh'}}>
            <CircularProgress />
          </div>
        )
    }
    const breadcrumbs = [
        <Link to = '/' underline="hover" key="1" color="inherit" className='hover:underline'>
          Home
        </Link>,
        <Typography >
          Orders
        </Typography>
      ];
  return (
    <div className='md:px-8 px-1 py-4'>
        <TopNavigation breadcrumbs={breadcrumbs} />
        <h1 className='text-2xl font-semibold '>My Orders</h1>
        {orders && orders?.length !==0 ?<div className='flex flex-col gap-4 pt-4 w-full'>
            {orders.map((order) =>(
                <div className='md:flex gap-2 border-b py-2'>
                    <div className='w-32 h-28 overflow-hidden'>
                        <img src={order.food.image} alt="" />
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p>Name: <span className='font-semibold'>{order.food.name}</span></p>
                            <p>Quantity : <span className='font-semibold'>{order.quantity}</span></p>
                            <p>Price : <span className='font-semibold'>₹{order.totalAmount}</span></p>
                            <p>OrderStatus: <span className='font-semibold'>{order.orderStatus}</span></p>
                            <p>DeliveryDate: <span className='font-semibold'>{order.date}</span></p>
                        </div>
                        <div>
                            {order.orderStatus === "Ordered" && <button className='bg-red-500 text-white px-2 py-1 rounded'>Cancel Order</button>}
                        </div>
                    </div>
                </div>
            ))}
        </div>:data}
    </div>
  )
}

export default HomeLayout(OrdersPage)