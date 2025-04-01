import React from "react";
import { assets } from "../assets/assets";

const blogPosts = [
  {
    title: "How to Prepare for your First Track his consumer-focused",
    date: "02 Apr 2024",
    category: "Business",
    image: assets.blog1,
    desc: "Business is the activity of making or buying and selling products.",
  },
  {
    title: "Get Best Advertiser In Your Side Pocket",
    date: "02 Apr 2024",
    category: "Business",
    image: assets.blog2,
  },
  {
    title: "Get Best Advertiser In Your Side Pocket",
    date: "02 Apr 2024",
    category: "Business",
    image: assets.blog3,
  },
  {
    title: "Get Best Advertiser In Your Side Pocket",
    date: "02 Apr 2024",
    category: "Business",
    image: assets.blog4,
  },
];

const Blogs = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-8 md:px-16 lg:px-20">
      <div className='flex gap-2 mb-5 justify-center text-center items-center md:py-2'>
        <img src={assets.home} alt="" className='h-4 w-4 md:h-5 md:w-5' />
        <span className="text-blue-600 text-sm sm:text-sm md:text-lg uppercase">Trusted Real estate Care</span>
      </div>
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight">
          Latest News & Blogs
        </h2>
      </div>
      {/* for large screens */}
      <div className="hidden xl:flex gap-8 mt-6 md:mt-10 w-full">
        <div className="relative md:col-span-2 w-1/2">
          <img src={blogPosts[0].image} alt="Blog Main" className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg" />
          <div className="absolute bottom-0 left-0 bg-white p-6 shadow-lg rounded-lg w-[85%] m-10">
            <p className="text-gray-500 text-sm font-semibold flex gap-2">
              <img src={assets.tag} alt="Tag Icon" className="h-5 w-4" /> {blogPosts[0].category}
              <span>—</span>
              <img src={assets.calender} alt="Calendar Icon" className="h-5 w-4" /> {blogPosts[0].date}
            </p>
            <h3 className="text-lg sm:text-xl font-semibold mt-2">{blogPosts[0].title}</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">{blogPosts[0].desc}</p>
            <a href="#" className="text-blue-600 font-medium items-center text-center flex gap-2 mt-2 hover:underline">
              Read More <img src={assets.arrow} alt="Arrow Icon" className="h-5 w-4" />
            </a>
          </div>
        </div>

        <div className="hidden xl:flex flex-col gap-6 w-1/2">
          {blogPosts.slice(1).map((post, index) => (
            <div key={index} className="relative">
              <img src={post.image} alt="Blog Thumbnail" className="w-full sm:w-40 h-40 object-cover rounded-lg"  />
              <div className="absolute bottom-0 right-0 bg-white p-6 shadow-lg rounded-lg w-full md:w-3/4 m-4">
                <p className="text-gray-500 md:text-xs lg:text-sm font-semibold flex gap-2">
                  <img src={assets.tag} alt="Tag Icon" className="h-5 w-4" /> {post.category}
                  <span>—</span>
                  <img src={assets.calender} alt="Calendar Icon" className="h-5 w-4" /> {post.date}
                </p>
                <h4 className="text-xs md:text-sm lg:text-lg font-medium">{post.title}</h4>
                <a href="#" className="text-blue-600 font-medium items-center text-center flex gap-2 mt-2 hover:underline">
                  Read More <img src={assets.arrow} alt="Arrow Icon" className="h-5 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* card view for medium and below */}
      <div className="grid xl:hidden grid-cols-1 sm:grid-cols-2 gap-6 mt-6 md:mt-10">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={post.image} alt="Blog Thumbnail" className="w-full h-40 object-cover" />
            <div className="p-4">
              <p className="text-gray-500 text-xs sm:text-sm font-semibold flex gap-2">
                <img src={assets.tag} alt="Tag Icon" className="h-4 w-4" /> {post.category}
                <span>—</span>
                <img src={assets.calender} alt="Calendar Icon" className="h-4 w-4" /> {post.date}
              </p>
              <h4 className="text-sm sm:text-base font-medium mt-2">{post.title}</h4>
              <p className="text-gray-600 text-xs sm:text-sm mt-2">
                {post.desc || "No description available."}
              </p>
              <a href="#" className="text-blue-600 font-medium flex items-center gap-2 mt-2 hover:underline">
                Read More <img src={assets.arrow} alt="Arrow Icon" className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Blogs;
