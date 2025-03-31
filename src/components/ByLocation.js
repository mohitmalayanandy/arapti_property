import React from 'react';
import { assets } from '../assets/assets';

const ByLocation = () => {
    const locations = [
        {
            name: 'New Jersey',
            image: assets.new_jursy,
        },
        {
            name: 'New York',
            image: assets.new_york,
        },
        {
            name: 'Washington',
            image: assets.washington,
        },
    ];

    const bannerStyle = {
        backgroundImage: `url(${assets.slider_banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'auto', 
        width: '100%',
    };

    return (
        <div style={bannerStyle} className="relative overflow-visible mx-auto px-6 md:px-16 py-6 md:py-10">
            <div className="flex gap-2 justify-center text-center items-center pt-4">
                <img src={assets.home} alt="Home Icon" className="h-4 w-4 md:h-5 md:w-5" />
                <span className="text-blue-600 text-sm sm:text-sm md:text-lg uppercase">Real estate agency</span>
            </div>
            <div className="text-center py-5">
                <h2 className="text-xl sm:text-3xl md:text-4xl text-white font-medium leading-tight">
                    Find Property by Location
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6 md:gap-12 md:p-12">
                {locations.map((location, index) => (
                    <div
                        key={index}
                        className="relative rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition"
                    >
                        <img
                            src={location.image}
                            alt={location.name}
                            className="w-full h-64 sm:h-72 md:h-80 object-cover"
                        />
                        <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white bg-black bg-opacity-50 px-3 py-1 rounded-md">
                            {location.name}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ByLocation;