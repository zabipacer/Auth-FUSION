import React from "react";
import { FaRegChartBar, FaBookOpen, FaUserCheck } from "react-icons/fa";

const Overview = () => {
  return (
    <section className="py-16 px-8 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-emerald-600">
            Overview
          </h2>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            Discover Applied Sciences is a multi-disciplinary open access journal 
            fostering research in applied life sciences, chemistry, earth and environmental sciences, 
            engineering, materials science, and physics. Our mission is to facilitate the dissemination 
            of knowledge to a global audience of researchers, practitioners, and students.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Indexed Information */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <FaRegChartBar className="text-emerald-500 text-3xl mr-4" />
              <h3 className="text-xl font-medium text-emerald-500">
                Indexed and Recognized
              </h3>
            </div>
            <p className="text-sm text-gray-700">
              Indexed in key platforms like <span className="font-medium">DOAJ</span>, 
              the <span className="font-medium">Emerging Sources Citation Index (ESCI)</span>, 
              and <span className="font-medium">SCOPUS</span> (CiteScore 2023: 7.0), ensuring visibility 
              and accessibility of published research.
            </p>
          </div>

          {/* Legacy Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <FaBookOpen className="text-emerald-500 text-3xl mr-4" />
              <h3 className="text-xl font-medium text-emerald-500">
                Building on Excellence
              </h3>
            </div>
            <p className="text-sm text-gray-700">
              Formerly known as <span className="font-medium">SN Applied Sciences</span> 
              (2023 Impact Factor: 2.8). Under our current name, we are committed to continuing 
              the legacy of publishing impactful research with the aim of receiving future impact factors.
            </p>
          </div>

          {/* Author and Reader Services */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <FaUserCheck className="text-emerald-500 text-3xl mr-4" />
              <h3 className="text-xl font-medium text-emerald-500">
                Author and Reader Focused
              </h3>
            </div>
            <p className="text-sm text-gray-700">
              With a <span className="font-medium">9-day median submission-to-decision time</span>, 
              we offer a streamlined process for authors. In 2023, we achieved over 
              <span className="font-medium">3.5 million downloads</span>, reflecting strong reader engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
