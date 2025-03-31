import React from 'react';
import { assets } from '../assets/assets.js';

const Categories = () => {
    const bannerStyle = {
        backgroundImage: `url(${assets.category_banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'auto',
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
        <div style={bannerStyle} className="relative overflow-visible mx-auto px-6 md:px-16 py-6 md:py-10">
            <div className="flex gap-2 mb-5 text-center items-center py-2">
                <img src={assets.home} alt="Home Icon" className="h-4 w-4 md:h-5 md:w-5" />
                <span className="text-blue-600 text-sm sm:text-sm md:text-lg uppercase">Trusted Real Estate Care</span>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start gap-10 py-1 lg:py-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight">
                    Properties Categories
                </h2>
                <p className="flex items-start leading-tight text-justify">
                    Our company provides a full range of services for the construction <br /> of private houses and cottages since 19
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto py-10">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="relative bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
                    >
                        <img src={category.icon} alt={category.title} className="h-16 w-16" />
                        <div className="absolute top-4 right-4 bg-white shadow-md rounded-full h-10 w-10 flex items-center justify-center text-blue-500 font-semibold">
                            {category.propertiesCount}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mt-4">{category.title}</h3>
                            <p className="text-blue-500 font-semibold mt-2 cursor-pointer hover:underline">
                                {category.propertiesCount} Properties
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;