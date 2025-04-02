import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhoneAlt, FaChevronDown, FaPaperPlane, FaCommentAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';


const MessageDrop = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        property: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            process.env.REACT_APP_MAILJS_SERVICE_ID,
            process.env.REACT_APP_MAILJS_TEMPLATE_ID,
            formData,
            process.env.REACT_APP_MAILJS_USER_ID

        )
        .then(()=> {
            alert("Email sent Successfully!");
            setFormData({ name: "", email: "", phone: "", property: "N/A", message: "" });
        })
        .catch((error) => {
            console.error("Email send error:", error);
            alert("Failed to send message. Please try again later")
        })
    }
    return (
        <div className="px-6 py-10 md:px-16">
            <div className="p-6 bg-[#F2F6F7] rounded-md">
                <p className="text-lg font-semibold text-gray-800">Drop Us a Line</p>
                <p className="text-sm text-gray-600 mt-2">
                    Your email address will not be published. Required fields are marked *
                </p>
                <div className="mt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    name='name'
                                    placeholder="Enter Your Name*"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                <FaUser className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400" />
                            </div>
                            <div className="relative">
                                <input
                                    type="email"
                                    name='email'
                                    placeholder="Enter Email Address*"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                <FaEnvelope className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="relative">
                                <select
                                    name="property"
                                    id="property"
                                    value={formData.property}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                                    <option value="N/A">Property Type</option>
                                    <option value="single-house">Single House</option>
                                    <option value="duplex">Duplex</option>
                                    <option value="flat">Flat</option>
                                    <option value="land">Land</option>
                                </select>
                                <FaChevronDown className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400" />
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    name='phone'
                                    placeholder="Enter Your Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                <FaPhoneAlt className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>
                        <div className="relative">
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Enter Your Message here"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4"></textarea>
                            <FaCommentAlt className="absolute top-4 right-4 text-gray-400" />
                        </div>
                        <button type="submit" className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 flex items-center justify-center gap-2">
                            Post a Comment <FaPaperPlane />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MessageDrop;