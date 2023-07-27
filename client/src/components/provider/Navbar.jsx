import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { providerlogout } from '../../redux/provider/provider.action'
import logo from '../TiffinWalaLogo.png'

function Navbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(providerlogout())
    navigate('/')
  }
  return (
    <div className='flex  px-8 text-white justify-between w-full py-3 items-center fixed top-0 z-10' style={{ background: '#3c8dbc' }}>
      <div className='flex items-center gap-2'>
        <img src={logo} alt='logo' className='h-8'/>
        <h1 className='font-semibold text--2xl'>Provider DashBoard</h1>
      </div>
      <div className='flex items-center bg-white text-teal-500 font-semibold px-2 py-1'>
        <button className='' onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
