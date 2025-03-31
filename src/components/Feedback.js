import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { assets } from "../assets/assets";

const testimonials = [
  {
    name: "Cameron Williamson",
    role: "CEO & Founder",
    image: assets.feed1,
    feedback:
      "The most advanced revenue than this. I will refer everyone I like Level more and more each day because it makes my easier. It really saves me time and effort. Level is exactly business has been lacking.",
  },
  {
    name: "Cameron Williamson",
    role: "CEO & Founder",
    image: assets.feed2,
    feedback:
      "The most advanced revenue than this. I will refer everyone I like Level more and more each day because it makes my easier. It really saves me time and effort. Level is exactly business has been lacking.",
  },
];

const Feedback = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 md:px-12 min-h-screen">
      <div className='flex gap-2 mb-5 justify-center text-center items-center py-2'>
        <img src={assets.home} alt="" className='h-4 w-4 md:h-5 md:w-5' />
        <span className="text-blue-600 text-sm sm:text-sm md:text-lg uppercase">Trusted Real estate Care</span>
      </div>
      <div className="text-center">
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-medium leading-tight'>Find Client’s Feedback</h2>
      </div>
      <div className="relative flex items-center justify-center mt-8">
        <button className="absolute hidden md:flex left-0 bg-white shadow-md p-2 rounded-full hover:bg-gray-100">
          <MdKeyboardArrowLeft size={20} />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl px-6">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-lg flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <p className="text-blue-600 text-sm">{item.role}</p>
                </div>
              </div>
              <p className="text-gray-600">{item.feedback}</p>
              <FaQuoteRight className="text-blue-500 text-2xl self-end" />
            </div>
          ))}
        </div>
        <button className="absolute hidden md:flex right-0 bg-white shadow-md p-2 rounded-full hover:bg-gray-100">
          <MdKeyboardArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Feedback;
