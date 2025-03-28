import React from 'react'
import { assets } from '../assets/assets.js'
const Categories = () => {
    const bannerStyle = {
        backgroundImage: `url(${assets.category_banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
    };

    const categories = [
        {
            id: 1,
            icon: assets.flats,
            title: "Flats",
            propertiesCount: 13,
        },
        {
            id: 2,
            icon: assets.duplex_home,
            title: "Duplex Homes",
            propertiesCount: 15,
        },
        {
            id: 3,
            icon: assets.lands,
            title: "Lands",
            propertiesCount: 16,
        },
    ];

    return (
        <div style={bannerStyle} className='relative h-full  mx-auto px-16 py-10'>
            <div className='flex gap-2 text-center items-center py-2'>
                <img src={assets.home} alt="" className='h-5 w-5' />
                <span className="text-blue-600 text-lg uppercase">Trusted Real estate Care</span>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-start gap-10 py-2'>
                <h2 className='text-4xl font-medium leading-tight'>Properties Categories</h2>
                <p className='flex items-start text-left'>Our company provides a full range of services for the construction <br /> of private houses and cottages since 19</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-20">
                {categories.map((category) => (
                    <div key={category.id} className="relative bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition">
                        <img src={category.icon} alt="" />
                        <div className="absolute top-4 right-4 bg-white shadow-md rounded-full h-10 w-10 flex items-center justify-center text-blue-500 font-semibold">
                            {category.propertiesCount}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mt-4">
                                {category.title}
                            </h3>
                            <p className="text-blue-500 font-semibold mt-2 cursor-pointer hover:underline">
                                {category.propertiesCount} Properties
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories
