import React from 'react'
import { assets } from '../assets/assets';
import { FaRulerCombined, FaMapMarkerAlt } from 'react-icons/fa';

const lands = [
    {
        id: 1,
        plotNo: 568,
        location: "Near Tamando, Bhubaneswar, Odisha, 751030",
        size: "3450 Square Ft",
        image: assets.plot1,
        featured: true,
    },
    {
        id: 2,
        plotNo: 212,
        location: "Near Tamando, Bhubaneswar, Odisha, 751030",
        size: "3450 Square Ft",
        image: assets.plot2,
        featured: true,
    },
    {
        id: 3,
        plotNo: 568,
        location: "Near Tamando, Bhubaneswar, Odisha, 751030",
        size: "3450 Square Ft",
        image: assets.plot3,
        featured: true,
    },
    {
        id: 4,
        plotNo: 568,
        location: "Near Tamando, Bhubaneswar, Odisha, 751030",
        size: "3450 Square Ft",
        image: assets.plot1,
        featured: true,
    },
    {
        id: 5,
        plotNo: 212,
        location: "Near Tamando, Bhubaneswar, Odisha, 751030",
        size: "3450 Square Ft",
        image: assets.plot2,
        featured: true,
    },
    {
        id: 6,
        plotNo: 568,
        location: "Near Tamando, Bhubaneswar, Odisha, 751030",
        size: "3450 Square Ft",
        image: assets.plot3,
        featured: true,
    },
];

const PropertyLands = () => {
    return (
        <div className='px-6 md:px-10 lg:px-16'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {lands.map((land) => (
                    <div key={land.id} className="bg-white shadow-md rounded-xl overflow-hidden">
                        <div className="relative">
                            <img src={land.image} alt={`Plot No - ${land.plotNo}`} className="w-full h-48 object-cover" />
                            {land.featured && (
                                <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
                                    Featured
                                </span>
                            )}
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">
                                Plot No - {land.plotNo}
                            </h3>
                            <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
                                <FaMapMarkerAlt /> {land.location}
                            </p>
                            <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
                                <FaRulerCombined /> {land.size}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PropertyLands
