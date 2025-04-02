import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Map = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row w-full px-6 py-6 md:px-16 gap-6">
            <div className="flex flex-col gap-6 md:w-1/2">
                <div className="flex gap-4 items-center">
                    <FaEnvelope className="text-blue-600 text-xl" />
                    <div>
                        <p className="font-semibold text-gray-700">Mail Address</p>
                        <p className="text-gray-600">info@example.com</p>
                        <p className="text-gray-600">+9987654321</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <FaMapMarkerAlt className="text-blue-600 text-xl" />
                    <div>
                        <p className="font-semibold text-gray-700">Office Address</p>
                        <p className="text-gray-600">Digital Agency Network 2021 Eastbourne Terrace</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <FaPhoneAlt className="text-blue-600 text-xl" />
                    <div>
                        <p className="font-semibold text-gray-700">Phone Numbers</p>
                        <p className="text-gray-600">+9987654321, +9987654321, +9987654321, +9987654321</p>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4201.403356601246!2d85.77435785950553!3d20.257799241294496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a782befbdd7b%3A0xb5c213af61368446!2sWeb_Bocket%20Classes!5e0!3m2!1sen!2sin!4v1743573585158!5m2!1sen!2sin"
                    className="w-full h-64 md:h-full rounded-md"
                    allowFullScreen=""
                    title="Google Map"></iframe>
            </div>
        </div>
    );
};

export default Map;