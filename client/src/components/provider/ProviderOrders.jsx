import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrders } from '../../redux/order/order.action'
import OrderTable from './OrderTable'

function ProviderOrders() {
  const provider = useSelector((state) => state.provider.provider)
  const dispatch = useDispatch()
  useEffect(() => {
    if (provider) {
      dispatch(getAllOrders(provider._id))
    }
  }, [provider, dispatch])
  return (
    <>
      <div className='p-2'>
        <h1 className='font-semibold text-xl'>Manage Orders</h1>
      </div>
      <div className='px-2'>
        <OrderTable />
      </div>
    </>
  )
}

export default ProviderOrders
