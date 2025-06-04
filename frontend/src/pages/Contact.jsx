import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {

  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-center text-black-200 mb-6">Contact Us</h1>
      <p className="text-lg text-gray-700 text-center mb-6 max-w-2xl mx-auto">
        Get in touch with us for any inquiries, support, or assistance. Were here to help!
      </p>

      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <FaPhone className="text-black-500 text-4xl mx-auto mb-3" />
          <h2 className="text-xl font-semibold">Call Us</h2>
          <p className="text-gray-600">+1 234 567 890</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <FaEnvelope className="text-black-500 text-4xl mx-auto mb-3" />
          <h2 className="text-xl font-semibold">Email Us</h2>
          <p className="text-gray-600">support@yourpharmacy.com</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <FaMapMarkerAlt className="text-black-500 text-4xl mx-auto mb-3" />
          <h2 className="text-xl font-semibold">Visit Us</h2>
          <p className="text-gray-600">123 Pharmacy St, City, Country</p>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-black-500 mb-4 text-center">Send Us a Message</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name"  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black-500" />
          <input type="email" placeholder="Your Email"  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black-500" />
          <textarea placeholder="Your Message" rows="4"  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black-500"></textarea>
          <div className="flex justify-center">
            <button onSubmit={onSubmitHandler}
              type="submit"
              className="bg-black-500 text-black p-3 border border-gray-300 rounded-lg font-semibold hover:bg-black-600 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
