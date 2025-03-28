import React from 'react'
import { assets } from '../assets/assets'

const Featured = () => {
    return (
        <div className='flex flex-col md:flex-row  mx-auto px-16 py-10 bg-[#F8F7FC] w-full'>
            {/* Left Side */}
            <div className='relative w-full md:w-1/2'>
                <img src={assets.featured_house} alt="" />
                <div className='absolute top-10 right-6 bg-white px-4 py-2 flex items-center rounded-md'>
                    <div className='text-[#0B68F2] font-bold text-6xl'>13</div>
                    <div className='text-black ml-2 text-lg font-medium'>Years of <br /> experience</div>
                </div>
            </div>

            {/* Right Side */}
            <div className='mt-8 md:mt-0 md:w-1/2 md:ml-12'>
                <div className='flex gap-2 mb-5 text-center items-center py-2'>
                    <img src={assets.home} alt="" className='h-5 w-5' />
                    <span className="text-blue-600 text-lg uppercase">Trusted Real estate Care</span>
                </div>
                <h2 className='text-4xl font-medium my-3 py-6 leading-tight'>Dream living Spaces Setting New Build</h2>
                <p className='text-gray-600 font-normal text-lg py-5'>Transmds is the world’s driving worldwide coordinations supplier — we uphold industry and exchange the worldwide trade of merchandi</p>
                <div className='flex flex-col justify-between py-4'>
                    <div className='flex justify-self-start gap-12 '>
                        <div className='flex items-center '>
                            <img src={assets.duplex} alt="" className='items-center' />
                            <span className='text-lg'>Perfect Duplex <br /> Houses</span>
                        </div>
                        <div className='flex items-center'>
                            <img src={assets.friendly} alt="" />
                            <span className='text-lg'>Friendly Support <br /> Team</span>
                        </div>
                    </div>
                    <div className='flex py-4 gap-1'>
                        <div>
                            <h3 className='text-xl'>Construction</h3>
                            <p className='text-gray-600 py-4'>Curabitur vel auctor nibh. Curabitur
                                egestas posuere mi, sed pulvinar ligula.
                            </p>
                        </div>
                        <div>
                            <h3 className='text-xl'>Architecture</h3>
                            <p className='text-gray-600 py-4'>Curabitur vel auctor nibh. Curabitur
                                egestas posuere mi, sed pulvinar ligula.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex items-center gap-6">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">More About Us</button>
                    <button className='border-white'>
                        <img src={assets.play_button} alt="" className='h-16  w-16'/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured;
