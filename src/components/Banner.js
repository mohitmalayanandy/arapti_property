import React from 'react';
import { assets } from '../assets/assets';


const Banner = () => {
    const bannerStyle = {
        backgroundImage: `url(${assets.banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%'
    };
  return (
    <div style={bannerStyle}>
      
    </div>
  )
}

export default Banner
