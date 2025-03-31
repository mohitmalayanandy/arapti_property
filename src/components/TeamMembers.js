import React from 'react';
import { assets } from '../assets/assets';

const teamMembers = [
  { name: 'Jasmin Setty', role: 'Service Support', img: assets.jasmin },
  { name: 'Sumit Singh', role: 'Service Support', img: assets.sumit },
  { name: 'John Powell', role: 'Service Support', img: assets.jhon },
  { name: 'John Powell', role: 'Service Support', img: assets.powel },
];

const TeamMembers = () => {
  return (
    <section className="py-10 px-6 md:px-10 lg:px-16 bg-[#FFFAFA] mb-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Team Members</h2>
      <p className="text-center text-gray-600 mb-8">Here are some common property amenities that can be highlighted for real estate listings or developments:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="rounded-2xl shadow-md h-full bg-[#F8F7FC];
]">
            <img src={member.img} alt={member.name} className="w-full md:h-full object-cover rounded-xl" />
            <h3 className="text-xl font-semibold mt-4 text-center">{member.name}</h3>
            <p className="text-gray-500 text-center">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;