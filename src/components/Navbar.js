import React from 'react';
import {assets} from '../assets/assets';
const Navbar = () => {
  return (
    <div className='flex justify-between items-center text-center px-20 py-2'>
      <div>
        <img src={assets.logo} alt="" />
      </div>
      <div>
        <ul className='flex items-center justify-between text-center gap-8'>
            <li>Home</li>
            <li>About Us</li>
            <li>Properties</li>
            <li>News & Blogs</li>
            <li>Contact Us</li>
        </ul>
      </div>
      <div className='flex items-center text-center gap-4'>
        <div className='flex items-center gap-2'>
            <img src={assets.login} alt="login_icon" className='h-5 w-5' />
            <p>Login</p>
        </div>
        <div className='items-center text-center'>
            <button className='flex items-center text-center bg-blue-600 text-white px-5 py-4 rounded-md gap-2'>
                Add Listing
                <img src={assets.filled_add} alt="" className='h-5 w-5'/>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
