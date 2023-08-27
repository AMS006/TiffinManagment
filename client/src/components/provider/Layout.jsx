import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = (Components) => {
return function Layout({ props }){
  const [open,setOpen] = useState(false);
  return (
    <div>
      <Navbar open={open} setOpen={setOpen}/>
      <Sidebar open={open} setOpen={setOpen}/>
      <Components {...props} />
    </div>
  )
}}

export default Layout
