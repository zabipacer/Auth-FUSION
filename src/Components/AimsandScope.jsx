import React from "react";
import { FaMicroscope, FaFlask, FaCogs, FaFileAlt } from "react-icons/fa";

const AimsAndScope = () => (
  <div className="p-8 bg-white rounded-lg shadow-xl max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto border border-gray-200 transform transition-all hover:shadow-2xl">
    <h1 className="text-4xl font-bold text-emerald-900 mb-8 text-center md:text-left border-b-4 border-emerald-500 pb-3 animate-fade-in">
      Aims and Scope    </h1>
    <p className="text-gray-800 leading-relaxed mb-8 animate-fade-in-up">
      <strong>Fusion Journal of Engineering and Sciences</strong> is a fully open-access (OA) journal dedicated to advancing multidisciplinary research across engineering, applied sciences, and their intersections with societal and planetary challenges. All content is freely accessible to promote global knowledge sharing, collaboration, and innovation.
    </p>
    <p className="text-gray-800 leading-relaxed mb-8 animate-fade-in-up">
      We publish rigorously peer-reviewed research that bridges theoretical insights with practical applications, fostering solutions to real-world problems. Our scope spans five core disciplines: Engineering, Medical Sciences, Earth Sciences, Social Sciences, and Others, with a focus on interdisciplinary linkages.
    </p>

    <h2 className="text-2xl font-semibold text-emerald-800 mb-6 border-b-2 border-gray-300 pb-2">Sections and Topics</h2>
    
    <h3 className="text-xl font-semibold text-emerald-700">1. Engineering</h3>
    <ul className="list-disc list-inside text-gray-800 mt-3 ml-6">
      <li>Biomedical & Bioengineering (e.g., prosthetics, medical devices)</li>
      <li>Renewable Energy Systems & Smart Grids</li>
      <li>Artificial Intelligence & Machine Learning Applications</li>
      <li>Robotics, Automation, and Control Systems</li>
      <li>Civil & Structural Engineering Innovations</li>
    </ul>
    
    <h3 className="text-xl font-semibold text-emerald-700">2. Medical Sciences</h3>
    <ul className="list-disc list-inside text-gray-800 mt-3 ml-6">
      <li>Clinical Trials & Translational Medicine</li>
      <li>Genomics, Precision Medicine, & Biotechnology</li>
      <li>Public Health Strategies & Epidemiology</li>
      <li>Neuroscience & Mental Health Interventions</li>
      <li>Medical Imaging & Diagnostic Technologies</li>
    </ul>
    
    <h3 className="text-xl font-semibold text-emerald-700">3. Earth Sciences</h3>
    <ul className="list-disc list-inside text-gray-800 mt-3 ml-6">
      <li>Climate Change Mitigation & Adaptation Strategies</li>
      <li>Geology, Hydrology, & Natural Hazard Prediction</li>
      <li>Oceanography & Marine Ecosystems</li>
      <li>Environmental Pollution & Remediation</li>
      <li>Sustainable Agriculture & Soil Science</li>
    </ul>
    
    <h3 className="text-xl font-semibold text-emerald-700">4. Social Sciences</h3>
    <ul className="list-disc list-inside text-gray-800 mt-3 ml-6">
      <li>Science Communication & Public Engagement</li>
      <li>Ethics in Technology & Biomedical Research</li>
      <li>Policy Frameworks for Sustainability</li>
      <li>Societal Impacts of AI & Automation</li>
      <li>Urban Planning & Community Resilience</li>
    </ul>
    
    <h3 className="text-xl font-semibold text-emerald-700">5. Others</h3>
    <ul className="list-disc list-inside text-gray-800 mt-3 ml-6">
      <li>Data Science & Big Data Applications</li>
      <li>Ethics of Emerging Technologies</li>
      <li>Space Exploration & Planetary Science</li>
      <li>Innovation in Education & STEM Outreach</li>
      <li>Global Health & One Health Initiatives</li>
    </ul>
    
    <h2 className="text-2xl font-semibold text-emerald-800 mb-6 border-b-2 border-gray-300 pb-2">Content Types</h2>
    <p className="text-gray-800 leading-relaxed mb-8">
      We welcome original research articles, comprehensive reviews, case studies, and short communications. The journal also features Topical Collections curated by guest editors to address pressing global challenges, such as climate resilience, healthcare equity, and ethical AI.
    </p>
    
    <h2 className="text-2xl font-semibold text-emerald-800 mb-6 border-b-2 border-gray-300 pb-2">Why Submit to Us?</h2>
    <ul className="list-disc list-inside text-gray-800 mt-3 ml-6">
      <li><strong>Rapid Publication:</strong> Streamlined peer review and open-access visibility.</li>
      <li><strong>Global Reach:</strong> Freely accessible to researchers, policymakers, and practitioners worldwide.</li>
      <li><strong>Interdisciplinary Focus:</strong> Bridging gaps between technical fields and societal needs.</li>
    </ul>
    <p className="text-gray-800 leading-relaxed mt-6">For submission guidelines and editorial policies, visit <a href="https://www.fusionesj.com/guidelines/manuscript" className="text-emerald-600 font-semibold hover:underline">Fusionesj.com/guidelines/manuscript</a>.</p>
  </div>
);

export default AimsAndScope;
