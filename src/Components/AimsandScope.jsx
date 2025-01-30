import React from "react";
import { FaMicroscope, FaFlask, FaCogs, FaFileAlt } from "react-icons/fa";

const AimsAndScope = () => (
  <div className="p-8 bg-white rounded-lg shadow-xl max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto border border-gray-200 transform transition-all hover:shadow-2xl">
    <h1 className="text-4xl font-bold text-emerald-900 mb-8 text-center md:text-left border-b-4 border-emerald-500 pb-3 animate-fade-in">
      Aims and Scope
    </h1>
    <p className="text-gray-800 leading-relaxed mb-8 animate-fade-in-up">
      <strong>Fusion Journal of Engineering and Sciences</strong> is a fully open-access (OA) journal dedicated to the multidisciplinary exploration of engineering, applied sciences, and medical fields. All content published in the journal is freely accessible to readers worldwide, fostering the widest possible dissemination and reuse of scientific knowledge.
    </p>
    <p className="text-gray-800 leading-relaxed mb-8 animate-fade-in-up">
      The journal serves as a platform for high-quality, peer-reviewed research across various disciplines, including Life Sciences, Chemistry, Environmental Sciences, Engineering, Physics, and Medicine. We encourage submissions that present original research, methodologies, and interdisciplinary linkages that contribute to solving practical issues and advancing scientific discoveries.
    </p>

    <div className="mb-10 animate-fade-in-up">
      <h2 className="text-2xl font-semibold text-emerald-800 mb-6 border-b-2 border-gray-300 pb-2">
        Sections and Topics
      </h2>

      <div className="space-y-8">
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-emerald-700 flex items-center">
            <FaMicroscope className="mr-2 text-emerald-600" /> Life Sciences
          </h3>
          <p className="text-gray-800 leading-relaxed mt-4">
            The Life Sciences section aims to publish articles that highlight modern applications in areas such as Biological Sciences, Medicine, Health Sciences, and Environmental Sciences. Topics include:
          </p>
          <ul className="list-disc list-inside text-gray-800 mt-3 ml-6">
            <li>Biomedical Sciences</li>
            <li>Biotechnology</li>
            <li>Microbiology</li>
            <li>Genetics and Genomics</li>
            <li>Ecology and Environmental Life Science</li>
            <li>Food Science and Nutrition</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-emerald-700 flex items-center">
            <FaFlask className="mr-2 text-emerald-600" /> Chemistry
          </h3>
          <p className="text-gray-800 leading-relaxed mt-4">
            The Chemistry section focuses on key research areas in chemistry and materials science, encouraging studies that address both theoretical and practical challenges. Topics include:
          </p>
          <ul className="list-disc list-inside text-gray-800 mt-3 ml-6">
            <li>Catalysis and Reaction Mechanisms</li>
            <li>Green Chemistry and Sustainable Practices</li>
            <li>Electrochemistry and Energy Materials</li>
            <li>Nano chemistry and Nanomaterials</li>
            <li>Food Chemistry</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-emerald-700 flex items-center">
            <FaCogs className="mr-2 text-emerald-600" /> Engineering
          </h3>
          <p className="text-gray-800 leading-relaxed mt-4">
            The Engineering section provides a platform for diverse sub-disciplines of engineering. We invite research in areas such as:
          </p>
          <ul className="list-disc list-inside text-gray-800 mt-3 ml-6">
            <li>Bioengineering and Biomedical Engineering</li>
            <li>Robotics and Control Systems</li>
            <li>Data Science and Machine Learning</li>
            <li>Structural Engineering and Materials</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="animate-fade-in-up">
      <h2 className="text-2xl font-semibold text-emerald-800 mb-6 border-b-2 border-gray-300 pb-2 flex items-center">
        <FaFileAlt className="mr-2 text-emerald-600" /> Content Types
      </h2>
      <p className="text-gray-800 leading-relaxed mb-8">
        Fusion Journal of Engineering and Sciences welcomes a variety of article types, including original research articles, reviews, and case studies. We also publish guest-edited Topical Collections that address current trends and innovations across the various disciplines of applied sciences and engineering. For detailed submission guidelines, please refer to our journal's website.
      </p>
    </div>
  </div>
);

export default AimsAndScope;