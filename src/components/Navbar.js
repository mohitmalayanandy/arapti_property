import React from 'react';
import { assets } from '../assets/assets';
const Navbar = () => {
    return (
        <div className='fixed top-0 right-0 left-0 z-10'>
            <div className='flex items-center justify-between px-20 py-2 bg-black text-white font-thin text-sm'>
                <div className='flex items-center justify-between gap-4'>
                    <div className='flex items-center gap-2'>
                        <img src={assets.mail} alt="mail_icon" className='h-4 w-4' />
                        <p>example@example.com</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={assets.location} alt="location_icon" className='h-4 w-4' />
                        <p>547 ns tower St. anglo City, USA</p>
                    </div>
                </div>
                <div className='flex items-center justify-between gap-2'>
                    <div><img src={assets.fb} alt="fb" className='h-5 w-5' /></div>
                    <div><img src={assets.x} alt="x" className='h-5 w-5' /></div>
                    <div><img src={assets.instagram} alt="insta" className='h-5 w-5' /></div>
                    <div><img src={assets.youtube} alt="youtube" className='h-5 w-5' /></div>
                    <div><img src={assets.pintrest} alt="pintrest" className='h-5 w-5' /></div>
                </div>
            </div>
            <div className='flex justify-between items-center bg-white text-center px-20 py-2 z-10'>
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
                        <button className='flex items-center text-center bg-blue-600 text-white px-5 py-2.5 rounded-md gap-2'>
                            Add Listing
                            <img src={assets.filled_add} alt="" className='h-5 w-5' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
