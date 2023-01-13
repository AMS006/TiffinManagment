import React, {useEffect} from 'react'
import HomeLayout from '../layouts/Home.layout'
import {BiSearch} from 'react-icons/bi'
import ProviderCard from '../components/ProviderCard'
import { getAllProviders } from '../redux/provider/provider.action';
import { useSelector,useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { CircularProgress, Typography } from '@mui/material';
import TopNavigation from '../components/TopNavigation';

function AllProvidersPage() {
    const provider = useSelector((state) => state.provider)
    const providers = useSelector((state) => state.provider.allProviders)
    const breadcrumbs = [
        <Link to = '/' underline="hover" key="1" color="inherit" className='hover:underline'>
          Home
        </Link>,
        <Typography key="3" color="text.primary">
          AllProviders
        </Typography>
      ];
    if(provider.loading){
      return(
        <div className='w-full flex items-center justify-center' style={{height:'50vh'}}>
          <CircularProgress />
        </div>
      )
    }  
  return (
    <>
        {providers && <div>
            <div className='md:px-8 px-3 py-3'>
          <TopNavigation breadcrumbs={breadcrumbs}/>
        </div>
        <div className='w-full flex justify-center items-center pb-4'>
                <div className='flex items-center border rounded-full w-96 mx-3 shadow'>
                    <div className='flex items-center border bg-white w-full rounded-full overflow-hidden'>
                        <input type="email"  name="email" placeholder='Search Provider Near You' className='w-full h-full px-4 py-2 border-l focus:outline-none flex items-center' id="email" required />
                        <button className='flex items-center bg-slate-800 text-white h-10 px-3'>
                            <BiSearch />
                        </button>
                    </div>
                </div>
            </div>
            <h1 className='font-bold md:text-2xl text-xl  md:px-8 px-2 py-3'>All Tiffin Providers</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 my-4  gap-6 md:px-8 px-2'>
                {providers.map((item,index) =>(
                  <ProviderCard name={item.name} key={index} providerLogo={item.providerLogo}  address={item.address} rating={item.rating} id={item._id}/>
                ))}
            </div>
        </div>}
    </>
  )
}

export default HomeLayout(AllProvidersPage)
