import React, { useEffect } from "react";

const AboutUs = () => {
 useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component loads
  }, []);
    return (
    <div className="bg-gradient-to-r from-green-50 via-yellow-100 to-red-100 p-8 rounded-lg shadow-xl max-w-4xl mx-auto my-8">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
        About Us
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        Welcome to Fusion, where engineering meets science! We are a multi-disciplinary open-access journal dedicated to fostering research in applied sciences, engineering, and technology.
      </p>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 underline decoration-green-500">
            Our Mission
          </h2>
          <p className="text-gray-600 mb-4">
            Our mission is to disseminate knowledge to a global audience of researchers, practitioners, and students, empowering them to make groundbreaking discoveries.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 underline decoration-green-500">
            What We Offer
          </h2>
          <ul className="list-disc list-inside text-gray-600 mb-4 pl-5">
            <li>Indexed and recognized research contributions</li>
            <li>Commitment to excellence and innovation</li>
            <li>Author and reader-focused solutions</li>
          </ul>
        </div>
        <div>
          <p className="text-gray-600">
            Join us on our journey to bridge the gap between engineering and science. Together, we can explore and innovate for a brighter future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
