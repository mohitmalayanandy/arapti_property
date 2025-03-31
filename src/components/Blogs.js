import React from "react";
import { assets } from "../assets/assets";

const blogPosts = [
  {
    title: "How to Prepare for your First Track his consumer-focused",
    date: "02 Apr 2024",
    category: "Business",
    image: assets.blog1,
    excerpt:
      "Business is the activity of making on cing or buying and selling pro",
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
    <div className="bg-gray-50 py-12 px-4 md:px-12 max-h-full">
      <div className="text-center">
        <h3 className="text-blue-600 uppercase text-sm font-semibold flex items-center justify-center gap-1">
          <span>🏠</span> Trusted Real Estate Agency
        </h3>
        <h2 className="text-3xl font-semibold mt-2">Latest News & Blogs</h2>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="md:col-span-2">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={blogPosts[0].image} alt="Blog Main" className="w-full h-80 object-cover" />
            <div className="p-6">
              <p className="text-green-600 text-sm font-semibold">{blogPosts[0].category} — {blogPosts[0].date}</p>
              <h3 className="text-xl font-semibold mt-2">{blogPosts[0].title}</h3>
              <p className="text-gray-600 mt-2">{blogPosts[0].excerpt}</p>
              <a href="#" className="text-blue-600 font-semibold mt-4 inline-block">Read More →</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {blogPosts.slice(1).map((post, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden flex">
              <div>
                <img src={post.image} alt="Blog Thumbnail" className="w-1/3 object-cover" />
              </div>
              <div className="p-4 w-2/3">
                <p className="text-green-600 text-sm font-semibold">{post.category} — {post.date}</p>
                <h4 className="text-lg font-semibold">{post.title}</h4>
                <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
