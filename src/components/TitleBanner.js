import React from 'react';
import { assets } from '../assets/assets';


const TitleBanner = () => {
  return (
    <div className="relative flex items-center justify-center py-5 md:py-16 bg-gray-50 mt-[50px] sm:mt-[50px] md:mt-[100px]">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${assets.title_banner})` }}>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      <h1 className="relative text-4xl md:text-5xl font-semibold text-gray-900">
        About <span className="text-blue-600">Us</span>
      </h1>
    </div>
  )
}

export default TitleBanner
