import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import { CircularProgress, Typography } from '@mui/material';
import HomeLayout from '../layouts/Home.layout'
import ProviderCard from '../components/ProviderCard'
import TopNavigation from '../components/TopNavigation';
import { useEffect } from 'react';
import { useState } from 'react';

function AllProvidersPage() {
  const provider = useSelector((state) => state.provider)
  const providers = useSelector((state) => state.provider.allProviders)
  const breadcrumbs = [
    <Link to='/' underline="hover" key="1" color="inherit" className='hover:underline'>
      Home
    </Link>,
    <Typography key="3" color="text.primary">
      AllProviders
    </Typography>
  ];
  const [searchedProviders,setSearchedProviders] = useState([])
  const [allProviders,setAllProviders] = useState([])
  const [searchData,setSearchData] = useState("")
  const [isSearch,setIsSearch] = useState(false)

  useEffect(() =>{
    setAllProviders(providers)
  },[providers])

  const handleKeyDown = (e) =>{
    if(e.key === 'Enter')
      handleSearch()
    if(searchData.length === 0){
      setSearchedProviders([])
      setIsSearch(false)
    }
  }
  
  const handleSearch = () =>{

    let updatedSearchedProviders = []
    setIsSearch(true)
    if(searchData.length === 0){
      setSearchedProviders([])
      setIsSearch(false)
    }
    if(searchData.length>0 && allProviders && allProviders.length >0){
      updatedSearchedProviders = allProviders.filter((provider) => provider.address.toLowerCase().search(searchData.toLowerCase()) !== -1)
    }
    if(updatedSearchedProviders.length >0){
      setSearchedProviders(updatedSearchedProviders)
    }
  }
  if (provider.loading) {
    return (
      <div className='w-full flex items-center justify-center' style={{ height: '50vh' }}>
        <CircularProgress />
      </div>
    )
  }
  if(!provider.loading && providers && providers.length === 0){
    return(
      <p className='font-semibold w-full text-center py-2.5'>No Providers Found</p>
    )
  }
  return (
    <>
      {providers && <div>
        <div className='md:px-8 px-3 py-3'>
          <TopNavigation breadcrumbs={breadcrumbs} />
        </div>
        <div className='w-full flex justify-center items-center pb-4'>
          <div className='flex items-center border rounded-full w-96 mx-3 shadow'>
            <div className='flex items-center border bg-white w-full rounded-full overflow-hidden'>
              <input type="text" onKeyDown={handleKeyDown} name="search" value={searchData} onChange={(e)=> setSearchData(e.target.value)} placeholder='Search Provider Near You' className='w-full h-full px-4 py-2 border-l focus:outline-none flex items-center' id="email"/>
              <button onClick={handleSearch} className='flex items-center bg-slate-800 text-white h-10 px-3'>
                <BiSearch />
              </button>
            </div>
          </div>
        </div>
        <h1 className='font-bold md:text-2xl text-xl  md:px-8 px-2 py-3'>All Tiffin Providers</h1>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 my-4  gap-6 md:px-8 px-2'>
          {searchedProviders.length>0 && searchedProviders.map((item,index)=>(
            <ProviderCard name={item.name} key={index} providerLogo={item.providerLogo} address={item.address} rating={item.rating} id={item._id} />
          ))}
          {searchedProviders.length<=0 && !isSearch && providers.map((item, index) => (
            <ProviderCard name={item.name} key={index} providerLogo={item.providerLogo} address={item.address} rating={item.rating} id={item._id} />
          ))}
        </div>
          {isSearch && searchData.length>0 && searchedProviders.length === 0 && <p className='font-semibold text-gray-500 text-center w-full py-2.5'>No Providers Found</p>}
      </div>}
    </>
  )
}

export default HomeLayout(AllProvidersPage)
