import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2 border-gray-400'>
        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
            <NavLink to={"/add"} className={"flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg"}>
                <img src={assets.add_icon} className='w-5 h-5' alt="" />
                <p className='hidden md:block'>ADD ITEMS</p>
            </NavLink>
            <NavLink to={"/orders"} className={"flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg"}>
                <img src={assets.order_icon} className='w-5 h-5' alt="" />
                <p className='hidden md:block'>ORDER ITEMS</p>
            </NavLink>
            <NavLink to={"/list"} className={"flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg"}>
                <img src={assets.order_icon} className='w-5 h-5' alt="" />
                <p className='hidden md:block'>LIST ITEMS</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar