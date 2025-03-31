import React from 'react';
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt } from 'react-icons/fa';
import { assets } from '../assets/assets';

const properties = [
    {
        id: 1,
        title: 'Luxury Family Home',
        price: '$ 13000',
        bedrooms: 3,
        bathrooms: 3,
        size: 3450,
        location: '1421 San Pedro St, Los Angeles, CA',
        image: assets.luxury_home_1,
    },
    {
        id: 2,
        title: 'Apartment Ocean Duplex',
        price: '$ 15000',
        bedrooms: 3,
        bathrooms: 3,
        size: 3450,
        location: '1421 San Pedro St, Los Angeles, CA',
        image: assets.appertment_duplex,
    },
    {
        id: 3,
        title: 'Single Family Home',
        price: '$ 12000',
        bedrooms: 3,
        bathrooms: 3,
        size: 3450,
        location: '1421 San Pedro St, Los Angeles, CA',
        image: assets.single_house,
    },
    {
        id: 4,
        title: 'Luxury Family Home',
        price: '$ 16000',
        bedrooms: 3,
        bathrooms: 3,
        size: 3450,
        location: '1421 San Pedro St, Los Angeles, CA',
        image: assets.luxury_home_2,
    },
];

const Trending = () => {
    return (
        <div className="py-8 px-6 md:px-16 h-full bg-[#FFFAFA]">
            <div className='flex gap-2 mb-5 justify-center text-center items-center py-2'>
                <img src={assets.home} alt="" className='h-4 w-4 md:h-5 md:w-5' />
                <span className="text-blue-600 text-sm sm:text-sm md:text-lg uppercase">Trusted Real estate Care</span>
            </div>
            <div className="text-center">
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-medium leading-tight'>Trending Flat & Duplex</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {properties.map((property) => (
                    <div key={property.id} className="bg-white shadow-md rounded-md overflow-hidden">
                        <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row p-3 gap-5 '>
                            <div className="relative">
                                <img src={property.image} alt={property.title} className="w-full h-48 object-cover rounded-md" />
                                <span className="absolute top-4 left-4 bg-slate-100 cursor-default text-black px-3 py-1 text-sm rounded-full">
                                    For sale
                                </span>

                            </div>
                            <div className="relative">
                                <h3 className="text-md sm:text-lg md:text-xl mb-2">{property.title}</h3>
                                <p className="text-blue-500 font-semibold text-md md:text-lg">{property.price}</p>
                                <div className="flex items-center gap-4 text-gray-600 text-sm md:text-md lg:my-4">
                                    <div>
                                        <div className="flex items-center gap-2">
                                            {property.bedrooms} <FaBed className='h-5 w-5 md:h-6 md:w-6' />
                                        </div>
                                        <div className='text-sm sm:text-md md:text-sm lg:text-md'>Bedrooms</div>
                                    </div>
                                    <span className="border-l border-gray-300 h-6"></span>
                                    <div>
                                        <div className="flex items-center gap-1">
                                            {property.bathrooms} <FaBath className='h-5 w-5 md:h-6 md:w-6' />
                                        </div>
                                        <div className='text-sm sm:text-md md:text-sm lg:text-md'>Bathrooms</div>
                                    </div>
                                    <span className="border-l border-gray-300 h-6"></span>
                                    <div>
                                        <div className="flex items-center gap-1">
                                            {property.size} <FaRulerCombined className='h-5 w-5 md:h-6 md:w-6' />
                                        </div>
                                        <div className='text-sm sm:text-md md:text-sm lg:text-md'>Sq. Ft.</div>
                                    </div>
                                </div>
                                <hr className="border-t border-gray-300 w-full" />
                                <div className="flex items-center gap-1 mt-2 text-gray-500 text-sm">
                                    <FaMapMarkerAlt />
                                    <span>{property.location}</span>
                                </div>
                                <button className="absolute top-2 right-2 border-slate-50 rounded-md p-1 sm:2 shadow">
                                    ❤️
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-8">
                <button className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-500 transition">
                    View More ➔
                </button>
            </div>
        </div>
    );
};

export default Trending;
