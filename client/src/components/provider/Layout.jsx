import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const  Layout = (Components)=>({props}) =>{
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Components {...props} />
    </div>
  )
}

export default Layout
