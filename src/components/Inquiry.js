import React from 'react'
import { assets } from '../assets/assets';
const Inquiry = () => {
    return (
        <div className="py-6 px-6 md:px-16 h-full bg-[#FFFAFA]">
            <div className='flex gap-2 mb-5 justify-center text-center items-center md:py-2'>
                <img src={assets.home} alt="" className='h-4 w-4 md:h-5 md:w-5' />
                <span className="text-blue-600 text-sm sm:text-sm md:text-lg uppercase">Trusted Real estate Care</span>
            </div>
            <div className="text-center">
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-medium leading-tight'>Trending Flat & Duplex</h2>
            </div>
            <div className='flex flex-col md:flex-row gap-10 w-full md:mt-5'>
                <div className="space-y-6 md:w-1/2">
                    <div className="mt-4 md:mt-6 text-gray-700 text-justify  text-sm md:text-base lg:text-lg">
                        <p>Browse our property listing and find your best With over 1 million+ homes for sale available on the website you with a house you will want to call home.</p>
                    </div>
                    <div className="text-gray-600 items-center space-y-2">
                        <p className='flex text-sm sm:text-base md:text-lg'><img src={assets.tik} alt="" className='h-3 w-3' />&nbsp; Living rooms are pre-wired for Surround</p>
                        <p className='flex text-sm sm:text-base md:text-lg'><img src={assets.tik} alt="" className='h-3 w-3' />&nbsp; Luxurious interior design and amenities</p>
                        <p className='flex text-sm sm:text-base md:text-lg'><img src={assets.tik} alt="" className='h-3 w-3' />&nbsp; Nestled in the Buckhead</p>
                    </div>
                    <div className="flex justify-center">
                        <img src={assets.inquiry_banner} alt="" className="w-full max-w-2xl" />
                    </div>
                </div>
                <div className="bg-[#F2F6F7] px-6 lg:px-10 py-10 rounded-lg md:w-1/2">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight mb-4">Enter for more inquiry</h1>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400">Name</label>
                            <input type="text" placeholder='Enter Your Name' className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400">Phone Number</label>
                            <input type="text" placeholder='Enter Your Number' className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400">Message</label>
                            <textarea className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"></textarea>
                        </div>
                        <button className='bg-blue-600 text-white px-3 py-[4px] md:px-5 md:py-2 rounded-lg mt-3 hover:bg-blue-700 transition"'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Inquiry;