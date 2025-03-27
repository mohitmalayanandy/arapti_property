import React from 'react';
import { assets } from '../assets/assets';
const Addressbar = () => {
  return (
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
  )
}

export default Addressbar
