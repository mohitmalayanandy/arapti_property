import React from 'react';
import { assets } from '../assets/assets';


const Banner = () => {
    const bannerStyle = {
        backgroundImage: `url(${assets.banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
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
        <div style={bannerStyle} className='relative mt-[50px] sm:mt-[50px] md:mt-[100px] h-full'>
            <div className='justify-center items-center text-center'>
                <button className='text-white text-xs border-[1px] px-5 py-2.5 rounded-full mt-10'>
                    LET US GUIDE YOUR HOME
                </button>
                <h1 style={bannerTitel} className='text-2xl py-3 sm:text-4xl sm:py-4 md:text-5xl lg:text-6xl text-white'>Enjoy The Finest Property</h1>
                <p className='text-white text-sm md:text-base'>From as low as $10 per day with limited time offer discounts</p>
            </div>
            <div className='flex justify-between px-1 m-5 xl:px-5 pt-6 items-center'>
                <img src={assets.w_l_arr} alt="" />
                <img src={assets.w_r_arr} alt="" />
            </div>
            <div className="absolute bottom-0 right-0 bg-white py-[1px] md:py-1.5 lg:py-2 lg:px-12 rounded-full">
                <div className="items-center px-10 py-2.5 mx-auto grid grid-cols-3 gap-6 justify-end">
                    <div className='flex flex-col'>
                        <span className="sm:text-xl lg:text-2xl font-bold">10+</span>Years of Experience
                    </div>
                    <div className='flex flex-col'>
                        <span className="sm:text-xl lg:text-2xl font-bold">230+</span>Happy Customer
                    </div>
                    <div className='flex flex-col'>
                        <span className="sm:text-xl lg:text-2xl font-bold">500+</span>Property Ready
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner