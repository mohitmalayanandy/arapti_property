import React from 'react';

const AboutUs = () => {
  return (
    <div className="relative flex items-center justify-center py-16 bg-gray-50">
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/your-background-image-path.png')" }}></div>
      <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
        About <span className="text-blue-600">Us</span>
      </h1>
    </div>
  );
};

export default AboutUs;
