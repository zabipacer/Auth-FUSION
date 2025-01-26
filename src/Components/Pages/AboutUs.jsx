import React, { useEffect } from "react";
import { FaLightbulb, FaHandsHelping, FaRocket } from "react-icons/fa";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component loads
  }, []);

  return (
    <div className="bg-emerald-50 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-emerald-800 mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Welcome to <span className="font-semibold text-emerald-700">Fusion</span>, where engineering meets science! Our goal is to bridge the gap between applied sciences, engineering, and technology with cutting-edge research.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-4">
              <FaLightbulb className="text-emerald-600 text-3xl mr-3" />
              <h2 className="text-2xl font-semibold text-emerald-800">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-600">
              Our mission is to disseminate knowledge to a global audience of researchers, practitioners, and students, empowering them to make groundbreaking discoveries.
            </p>
          </div>

          {/* What We Offer Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-4">
              <FaHandsHelping className="text-emerald-600 text-3xl mr-3" />
              <h2 className="text-2xl font-semibold text-emerald-800">
                What We Offer
              </h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Indexed and recognized research contributions</li>
              <li>Commitment to excellence and innovation</li>
              <li>Author and reader-focused solutions</li>
            </ul>
          </div>

          {/* Join Us Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-4">
              <FaRocket className="text-emerald-600 text-3xl mr-3" />
              <h2 className="text-2xl font-semibold text-emerald-800">
                Join Us
              </h2>
            </div>
            <p className="text-gray-600">
              Join us on our journey to explore and innovate for a brighter future. Together, we can make groundbreaking advancements in science and technology.
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-emerald-600 text-white text-lg font-medium rounded-full shadow-md hover:bg-emerald-700 transition-all">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
