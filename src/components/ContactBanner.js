import React from 'react'
import { assets } from '../assets/assets';
const ContactBanner = () => {
    return (
        <div className="relative flex items-center justify-center py-10 md:py-32 bg-gray-50 mt-[50px] sm:mt-[50px] md:mt-[100px]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${assets.title_banner})` }}></div>
            <h1 className="relative text-4xl md:text-5xl font-semibold text-gray-900">
                Contact <span className="text-blue-600">Us</span>
            </h1>
        </div>
    )
}

export default ContactBanner;