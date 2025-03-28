import React from 'react'
import { assets } from '../assets/assets'
const ByLocation = () => {
    const locations = [
        {
            name: 'New Jersey',
            image: assets.new_jursy
        },
        {
            name: 'New York',
            image: assets.new_york
        },
        {
            name: 'Washington',
            image: assets.washington
        }
    ]
    const bannerStyle = {
        backgroundImage: `url(${assets.slider_banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
    };
    return (
        <div style={bannerStyle} className='h-full'>
            <div className='flex gap-2 justify-center text-center items-center pt-4'>
                <img src={assets.home} alt="" className='h-4 w-4' />
                <span className="text-blue-600 text-md uppercase">Real estate agency</span>
            </div>
            <div className="text-center py-5">
                <h2 className='text-4xl text-white font-medium leading-tight'>Find Property by Location</h2>
            </div>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 p-12 ">
                    {locations.map((location, index) => (
                        <div key={index} className="relative rounded-lg shadow-md overflow-hidden">
                            <img src={location.image} alt={location.name} className="w-full h-96 object-cover" />
                            <h3 className="absolute bottom-4 text-xl font-semibold text-white p-4">{location.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ByLocation
