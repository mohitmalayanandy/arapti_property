import React from 'react'
import { assets } from '../assets/assets';
import { FaRulerCombined, FaMapMarkerAlt } from 'react-icons/fa';
const OurLands = () => {
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

  return (
    <div className="px-6 py-6 md:px-16 md:py-10 bg-gradient-to-t from-[#F0EFFB] to-[#FFFFFF]">
      <div className="container mx-auto">
        <div className='flex gap-2 mb-5 text-center items-center py-2'>
          <img src={assets.home} alt="" className='h-4 w-4 md:h-4 md:w-4' />
          <span className="text-blue-600 text-sm sm:text-sm md:text-md uppercase">Trusted Real estate Care</span>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-lg md:text-3xl font-semibold">Check Out Our Lands</h2>
          <button className="bg-blue-600 text-white px-3 py-[4px] md:px-5 md:py-2 rounded-lg mt-3 hover:bg-blue-700 transition">
            View More →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lands.map((land) => (
            <div
              key={land.id}
              className="bg-white shadow-md rounded-xl overflow-hidden"
            >
              <div className="relative">
                <img
                  src={land.image}
                  alt={`Plot No - ${land.plotNo}`}
                  className="w-full h-48 object-cover"
                />
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
    </div>
  );
}

export default OurLands
