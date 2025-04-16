import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-center text-black-600 mb-6">About Us</h1>
      <p className="text-lg text-gray-700 text-center mb-6 max-w-2xl mx-auto">
        Welcome to <span className="font-semibold text-black-500">QUICK HEALTH</span>, your trusted online pharmacy for medicines, cosmetics, and daily essentials.
      </p>
      <div className="grid md:grid-cols-2 gap-10 p-6">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold text-black-500 mb-3">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to provide high-quality healthcare products with convenience, affordability, and reliability. 
            We ensure that every product we deliver meets the highest safety and quality standards.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold text-black-500 mb-3">Why Choose Us?</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Wide range of medicines and healthcare products</li>
            <li>Certified and trusted pharmacy</li>
            <li>Fast and secure delivery</li>
            <li>24/7 customer support</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center bg-black-500 text-black p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="text-lg">For inquiries, reach us at <a href="mailto:support@yourpharmacy.com" className="underline">support@yourpharmacy.com</a></p>
      </div>
    </div>
  );
};

export default About;