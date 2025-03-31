import React from 'react';
import { assets } from '../assets/assets';

const amenities = [
    { id: 1, title: 'Parking Space', icon: assets.parking_space },
    { id: 2, title: 'Swimming Pool', icon: assets.swimming_pool },
    { id: 3, title: 'Private Security', icon: assets.private_security },
    { id: 4, title: 'Medical Center', icon: assets.medical_center },
    { id: 5, title: 'Library Area', icon: assets.library },
    { id: 6, title: 'King Size Beds', icon: assets.king_bed },
    { id: 7, title: 'Smart Homes', icon: assets.smart_homes },
    { id: 8, title: 'Kid’s Playland', icon: assets.kids_playland }
];

const Amenities = () => {
    return (
        <div className="px-6 py-10 md:px-10 lg:px-16 bg-[#FFFAFA]">
            <h2 className="text-2xl sm:text-3xl font-bold text-center">Property Amenities</h2>
            <p className="md:text-center text-sm text-justify text-gray-500 mt-2 mb-8">Here are some common property amenities that can be highlighted for real estate listings or developments:</p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {amenities.map((amenity) => (
                    <div key={amenity.id} className={`p-6 border rounded-lg shadow-md`}>
                        <div className='flex justify-center sm:justify-end md:justify-center lg:justify-end'>
                            <img src={amenity.icon} alt="" className="top-4 right-4 text-3xl md:h-20 md:w-20" />
                        </div>
                        <p className="text-blue-500 font-bold">{amenity.id.toString().padStart(2, '0')}</p>
                        <h3 className="text-base lg:text-xl font-bold my-2">{amenity.title}</h3>
                        <p className="text-gray-500 text-sm lg:text-base">Enimad minim veniam quis no exercitation ullamco lab</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Amenities;
