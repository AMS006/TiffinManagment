import React from 'react'
import Layout from './Layout'
import { Outlet,useLocation,Navigate } from 'react-router-dom'

function ProviderDashboardPage() {
  const {pathname} = useLocation();
  if(pathname === "/provider/dashboard"){
    return <Navigate to='/provider/dashboard/Orders'/>
  }
  return (
    <div className='ml-44 mt-14'>
        <Outlet />
    </div>
  )
}

export default Layout(ProviderDashboardPage)
