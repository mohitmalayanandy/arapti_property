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
        fontSize: '4rem',
        color: '#fff',
        marginTop: '20px'
    }
    return (
        <div style={bannerStyle} className='relative mt-[100px] h-full'>
            <div className='justify-center items-center text-center'>
                <button className='text-white text-xs border-[1px] px-5 py-2.5 rounded-full mt-10'>
                    LET US GUIDE YOUR HOME
                </button>
                <h1 style={bannerTitel}>Enjoy The Finest Property</h1>
                <p className='text-white text-sm'>From as low as $10 per day with limited time offer discounts</p>
            </div>
            <div className='flex justify-between px-10 m-5 items-center'>
                <img src={assets.w_l_arr} alt="" />
                <img src={assets.w_r_arr} alt="" />
            </div>
            <div className="absolute bottom-0 right-0 bg-white py-4 px-12 rounded-tl-full">
                <div className="container mx-auto grid grid-cols-3 gap-6 justify-end">
                    <div className='flex flex-col'>
                        <span className="text-2xl font-bold">10+</span>Years of Experience
                    </div>
                    <div className='flex flex-col'>
                        <span className="text-2xl font-bold">230+</span>Happy Customer
                    </div>
                    <div className='flex flex-col'>
                        <span className="text-2xl font-bold">500+</span>Property Ready
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner