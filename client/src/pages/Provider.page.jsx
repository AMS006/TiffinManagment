import React from 'react'
import HomeLayout from '../layouts/Home.layout'
import {BiSearch} from 'react-icons/bi'
function ProviderPage() {
    const [providers,setProviders] = ([
        {
            name:"",
            img:"",
            address:"",
            descripton:""
        }
    ])
  return (
    <div>
        <div className='w-full flex justify-center items-center py-4'>
            <div className='flex items-center border rounded-full w-96 mx-3 shadow'>
                <div className='flex items-center border bg-white w-full rounded-full overflow-hidden'>
                    <input type="email"  name="email" placeholder='Search Provider Near You' className='w-full h-full px-4 py-2 border-l focus:outline-none flex items-center' id="email" required />
                    <button className='flex items-center bg-slate-900 text-white h-10 px-3'>
                        <BiSearch />
                    </button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default HomeLayout(ProviderPage)
