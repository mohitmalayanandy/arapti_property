import React from "react";
import { assets } from "../assets/assets";
const benefits = [
  {
    title: "Local Expertise and Market Knowledge",
    description:
      "Our team has deep roots in the community and a thorough understanding of the local real estate market.",
  },
  {
    title: "Personalized and Client-Centric Service",
    description:
      "We believe in building lasting relationships by putting our clients’ needs first. Our personalized approach ensures.",
  },
  {
    title: "Comprehensive Support and Resources",
    description:
      "From initial consultation to closing and beyond, we provide comprehensive support throughout the entire real estate process.",
  },
];

const Benefits = () => {
  return (
    <section className="bg-[#FFFAFA] py-16 text-center px-6">
      <h2 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold px-3 text-gray-900">
        What Benefits Do You Get From Us
      </h2>
      <p className="text-gray-600 text-sm mt-3 max-w-2xl mx-auto">
        Work with Renting brokers who help you to get started with smart tools.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-md bg-white transition-all`}
          >
            <div className="flex justify-center">
              <div className="bg-blue-100 p-3 rounded-full">
                <img src={assets.dolleruser} alt="" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mt-4">{benefit.title}</h3>
            <p className="text-gray-600 mt-2">{benefit.description}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row w-full lg:px-16 md:gap-10 mt-5 md:mt-10 ">
        <div className="md:w-1/2">
          <img src={assets.building_image} alt="" className="md:max-h-full md:max-w-full"/>
        </div>
        <div className="flex flex-col md:w-1/2 mt-5 md:mt-16 md:gap-2 lg:mt-20 xl:mt-28  gap-10">
          <div className="text-justify bg-[#F8F7FC] md:px-5 md:py-3 md:text-sm lg:text-base lg:px-10 lg:py-8 md:mt-[2px] p-3 lg:w-4/5 lg:h-60 rounded-lg">
            <h3 className="text-xl font-semibold mb-5">Who we are</h3>
            <p className="text-justify">
              Our founders Dustin Moskovitz & Justin Rosenstein met leading Engineering teams at Facebook. As operations scaled, they grew frustrated by how difficult coordinate
            </p>
          </div>
          <div className="text-justify bg-[#F8F7FC] md:px-5 md:py-3 md:text-sm lg:text-base lg:px-10 lg:py-8 md:mt-[2px] p-3 lg:w-4/5 lg:h-60 rounded-lg">
            <h3 className="text-xl font-semibold mb-5">Our Mission</h3>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;