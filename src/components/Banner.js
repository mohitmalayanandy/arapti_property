import React, { useState } from 'react';
import { assets, bgImage } from '../assets/assets';


const Banner = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? bgImage.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    
    const nextSlide = () => {
        const islastSlide = currentIndex === bgImage.length - 1;
        const newIndex = islastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    const bannerStyle = {
        backgroundImage: `url(${bgImage[currentIndex].img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        /* height: '82vh', */
        width: '100%',
    };
    const bannerTitel = {
        fontFamily: 'serif',
        fontWeight: '300',
       /*  fontSize: '4rem',
        color: '#fff',
        marginTop: '20px' */
    }
    return (
        <div style={bannerStyle} className='relative mt-[50px] sm:mt-[50px] md:mt-[100px] h-[93vh] md:h-[91vh] lg:h-[82vh] group'>
            <div className='justify-center items-center text-center'>
                <button className='text-white text-xs border-[1px] px-5 py-2.5 rounded-full mt-10'>
                    LET US GUIDE YOUR HOME
                </button>
                <h1 style={bannerTitel} className='text-2xl py-3 sm:text-4xl sm:py-4 md:text-5xl lg:text-6xl text-white'>Enjoy The Finest Property</h1>
                <p className='text-white text-sm md:text-base'>From as low as $10 per day with limited time offer discounts</p>
            </div>
            <div className=''>
                <img src={assets.w_l_arr} alt="" onClick={prevSlide} className='absolute top-[50%] left-5 hidden group-hover:block'/>
                <img src={assets.w_r_arr} alt="" onClick={nextSlide} className='absolute top-[50%] right-5 hidden group-hover:block'/>
            </div>
            <div className="absolute bottom-0 right-0 bg-white py-[1px] md:py-1.5 lg:py-2 lg:px-12 rounded-full mb-3 mx-4 lg:mx-10">
                <div className="items-center px-5 lg:px-1 lg:py-1 mx-auto grid grid-cols-3 gap-10">
                    <div className='flex flex-col'>
                        <span className="sm:text-xl lg:text-2xl font-bold">10+</span><span className="text-xs lg:text-xl">Years of Experience</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className="sm:text-xl lg:text-2xl font-bold">230+</span><span className="text-xs lg:text-xl">Happy Customer</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className="sm:text-xl lg:text-2xl font-bold">500+</span><span className="text-xs lg:text-xl">Property Ready</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;