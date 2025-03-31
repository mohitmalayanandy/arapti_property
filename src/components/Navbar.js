import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className='fixed top-0 right-0 left-0 z-10'>
            <div className='hidden md:flex items-center justify-between px-20 py-2 bg-black text-white font-thin text-sm'>
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
                <div className='flex items-center justify-between gap-4'>
                    <FaFacebookF className="cursor-pointer text-[#8DB8FF]" />
                    <FaTwitter className="cursor-pointer text-[#8DB8FF]" />
                    <FaInstagram className="cursor-pointer text-[#8DB8FF]" />
                    <FaYoutube className="cursor-pointer text-[#8DB8FF]" />
                    <FaPinterestP className="cursor-pointer text-[#8DB8FF]" />
                </div>
            </div>
            <div className='flex justify-between items-center bg-white text-center px-10 py-2 sm:px-10 sm:py-2 md:px-5 md:py-3   lg:px-20 lg:py-3 lg:z-10'>
                <div className='flex text-center items-center'>
                    <img src={assets.logo} alt="" className='h-10 items-center w-auto sm:15 md:h-15' />
                </div>
                <div>
                    <ul className='hidden md:flex items-center justify-between text-center gap-8'>
                        <li className="cursor-pointer hover:text-blue-600">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="cursor-pointer hover:text-blue-600">
                            <Link to="/about">About Us</Link>
                        </li>
                        <li className="cursor-pointer hover:text-blue-600">
                            <Link to="/properties">Properties</Link>
                        </li>
                        <li className="cursor-pointer hover:text-blue-600">News & Blogs</li>
                        <li className="cursor-pointer hover:text-blue-600">Contact Us</li>
                    </ul>
                </div>
                <div className='flex items-center text-center gap-4'>
                    <div className='hidden md:flex items-center gap-2'>
                        <img src={assets.login} alt="login_icon" className='h-5 w-5' />
                        <p>Login</p>
                    </div>
                    <div className='hidden lg:flex items-center text-center'>
                        <button className='flex items-center text-center bg-blue-600 text-white md:px-5 md:py-2 lg:px-5 lg:py-2 rounded-md gap-2'>
                            Add Listing
                            <img src={assets.filled_add} alt="" className='h-5 w-5' />
                        </button>
                    </div>
                </div>
                <div className="md:hidden flex items-center">
                    <button className="text-gray-600 focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
                        <img src={assets.menu} alt="" className='h-8 w-8' />
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden bg-slate-100 shadow-lg absolute top-[60px] right-0 w-auto rounded-md px-8 z-20">
                    <ul className="flex flex-col items-start gap-4 py-4">
                        <li className="text-sm cursor-pointer hover:text-blue-600">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="text-sm cursor-pointer hover:text-blue-600">
                            <Link to="/about">About Us</Link>
                        </li>
                        <li className="text-sm cursor-pointer hover:text-blue-600">
                            <Link to="/properties">Properties</Link>
                        </li>
                        <li className="text-sm cursor-pointer hover:text-blue-600">News & Blogs</li>
                        <li className="text-sm cursor-pointer hover:text-blue-600">Contact Us</li>
                        <li className="flex flex-col items-center gap-2">
                            <div className="flex items-center gap-2 border-gray-400 border-[1px] px-9 py-2 rounded-md hover:bg-gray-300">
                                <img src={assets.login} alt="login_icon" className="h-5 w-5" />
                                <p className="text-sm cursor-pointer hover:text-blue-600">Login</p>
                            </div>
                            <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md gap-2 hover:bg-blue-700 transition">
                                Add Listing
                                <img src={assets.filled_add} alt="add_icon" className="h-5 w-5" />
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Navbar;