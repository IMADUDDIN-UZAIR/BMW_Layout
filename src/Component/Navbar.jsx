import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-around items-center bg-[#000000] text-yellow-50 h-10 '>
      <div className="btn1 bg-[#1B3E80] p-2 h-8 font-Poppins ">
        BMW
      </div>
      <div className="nav flex justify-between items-center ">
        <ul className='flex justify-between items-center space-x-5 ml-40'>
        <li className='font-Poppins'><NavLink exact to="/">Home</NavLink></li>
            <li className='font-Poppins'> <NavLink to="/About">About Us</NavLink></li>
            <li className='font-Poppins'> <NavLink to="/Design">Design</NavLink></li>
           
        </ul>
      </div>
      <div className="btn2 text-[#5a8eed] border-2 p-1 rounded-md border-white font-Poppins">
        pricing
      </div>
    </div>
  )
}

export default Navbar
