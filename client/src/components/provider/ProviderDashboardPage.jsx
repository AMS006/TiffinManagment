import React, { useEffect } from 'react'
import Layout from './Layout'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

function ProviderDashboardPage() {
  const { pathname } = useLocation();
  const navigate = useNavigate()
  useEffect(() =>{
    if (pathname === "/provider/dashboard"){
      navigate('/provider/dashboard/orders')
    }
  },[navigate,pathname])
  return (
    <div className='md:ml-44 mt-14'>
      <Outlet />
    </div>
  )
}

export default Layout(ProviderDashboardPage)
