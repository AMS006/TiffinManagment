import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const HomeLayout = (Component) => ({...props}) =>{
  return (
    <div>
      <Navbar />
      <Component {...props} />
      <Footer />
    </div>
  )
}

export default HomeLayout
