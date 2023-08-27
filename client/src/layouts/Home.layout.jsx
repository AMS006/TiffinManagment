import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'

const HomeLayout = (Component) => ({ ...props }) => {
  return (
    <div className='flex flex-col h-full overflow-x-hidden'>
      <Navbar />
      <main>
        <Component {...props} />
      </main>
      <Footer />
    </div>
  )
}

export default HomeLayout
