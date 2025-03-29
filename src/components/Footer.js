import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import React from 'react'
import { assets } from "../assets/assets";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 text-sm font-extralight py-10 pt-60 px-6 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center text-center md:text-left md:items-start">
                <div>
                    <img src={assets.footer_logo} alt="" />
                    <p className="mb-4">The world's first and largest digital market for crypto collectibles and non-fungible (NFTs). Buy</p>
                    <div className="flex justify-center space-x-4">
                        <FaFacebookF className="cursor-pointer hover:text-blue-500" />
                        <FaTwitter className="cursor-pointer hover:text-blue-500" />
                        <FaInstagram className="cursor-pointer hover:text-blue-500" />
                        <FaYoutube className="cursor-pointer hover:text-blue-500" />
                        <FaPinterestP className="cursor-pointer hover:text-blue-500" />
                    </div>
                </div>

                <div>
                    <h3 className="text-white text-lg font-semibold mb-3">Services</h3>
                    <ul className="space-y-2">
                        <li>Property on sale</li>
                        <li>Team member</li>
                        <li>Offices for Buy</li>
                        <li>Terms of use</li>
                        <li>Offices for Rent</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white text-lg font-semibold mb-3">Contact</h3>
                    <ul className="space-y-2">
                        <li>Help/FAQ</li>
                        <li>Property owners</li>
                        <li>Contact Support</li>
                        <li>Pricing Plans</li>
                        <li>Partners</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Services Details</li>
                        <li>Add Listing</li>
                        <li>Property</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white text-lg font-semibold mb-3">Contact Us</h3>
                    <ul className="space-y-2">
                        <li><FaMapMarkerAlt className="inline-block mr-2" /> 86 Road Brooklyn Street, 600 New York, USA</li>
                        <li><FaEnvelope className="inline-block mr-2" /> Example@example.com</li>
                        <li><FaPhoneAlt className="inline-block mr-2" /> (+123) 456-7898</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-6 pt-6"></div>
            <div className="md:flex justify-between w-full text-center ">
                <p>© 2024 ADYABHUMI. All Rights Reserved.</p>
                <p>Design & Developed by WEB_BOCKET</p>
            </div>
        </footer>
    );
}

export default Footer

