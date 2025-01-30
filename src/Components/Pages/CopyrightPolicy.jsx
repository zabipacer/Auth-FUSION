import React from "react";
import { FaCopyright, FaPen, FaShieldAlt, FaUserShield } from "react-icons/fa";

const CopyrightPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Main content wrapper */}
      <div className="flex-1 p-8 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mt-24">
        <h2 className="text-4xl font-extrabold text-emerald-800 mb-6 flex items-center">
          <FaCopyright className="mr-3 text-emerald-600" />
          Copyright Policy
        </h2>

        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
          At Fusion Journal, we are committed to providing a platform for high-quality, open-access research. All articles and research publications are freely accessible to users across the globe. By providing unrestricted access to scientific work, we hope to foster global collaboration, innovation, and the advancement of knowledge.
        </p>

        <div className="bg-emerald-100 p-6 rounded-lg shadow-inner mb-10">
          <h3 className="text-2xl font-semibold text-emerald-800 mb-4 flex items-center">
            <FaPen className="inline-block mr-3 text-emerald-600" />
            Author Rights and Responsibilities
          </h3>
          <p className="text-gray-700">
            Authors who submit their work to Fusion Journal retain full copyright of their publications. Upon submission, authors grant Fusion Journal a non-exclusive license to publish, distribute, and reproduce the article in any form, medium, or technology. Authors are also free to reuse their articles in future works or publications, provided that proper attribution is given to Fusion Journal as the original publisher.
          </p>
          <p className="text-gray-700 mt-4">
            Authors are encouraged to ensure that their work complies with relevant copyright laws, including obtaining necessary permissions for third-party content used within their articles. Fusion Journal assumes no responsibility for any copyright infringement resulting from the author's failure to secure appropriate rights or permissions.
          </p>
        </div>

        <div className="bg-emerald-100 p-6 rounded-lg shadow-inner mb-10">
          <h3 className="text-2xl font-semibold text-emerald-800 mb-4 flex items-center">
            <FaShieldAlt className="inline-block mr-3 text-emerald-600" />
            Copyright Protection and Enforcement
          </h3>
          <p className="text-gray-700">
            Fusion Journal takes the protection of its intellectual property very seriously. All articles, research, and content published on our platform are protected by copyright law. Any unauthorized reproduction, distribution, or modification of the journal's content is strictly prohibited.
          </p>
          <p className="text-gray-700 mt-4">
            We actively monitor our content for any signs of copyright infringement and will take appropriate legal action against any individual or entity found violating our copyright policy. This includes, but is not limited to, issuing take-down notices and seeking legal remedies.
          </p>
        </div>

        <div className="bg-emerald-100 p-6 rounded-lg shadow-inner mb-10">
          <h3 className="text-2xl font-semibold text-emerald-800 mb-4 flex items-center">
            <FaUserShield className="inline-block mr-3 text-emerald-600" />
            User Content and Licensing
          </h3>
          <p className="text-gray-700">
            Users submitting content to Fusion Journal must ensure that they hold the necessary rights and permissions to do so. By submitting content, users grant Fusion Journal a non-exclusive, royalty-free license to publish, display, and distribute the content across our platform and affiliated channels.
          </p>
          <p className="text-gray-700 mt-4">
            Users are prohibited from submitting any content that violates copyright laws or contains copyrighted material without proper authorization. Fusion Journal does not take responsibility for any user-submitted content that infringes upon the rights of third parties.
          </p>
        </div>

        <div className="bg-emerald-100 p-6 rounded-lg shadow-inner mb-10">
          <h3 className="text-2xl font-semibold text-emerald-800 mb-4 flex items-center">
            <FaPen className="inline-block mr-3 text-emerald-600" />
            Open Access and Reuse
          </h3>
          <p className="text-gray-700">
            Fusion Journal adheres to an open-access model, ensuring that all published articles are freely available to readers worldwide. Authors and users are encouraged to reuse and share the content under the terms of the Creative Commons License, provided appropriate credit is given to the original authors and Fusion Journal.
          </p>
          <p className="text-gray-700 mt-4">
            Articles published in Fusion Journal are intended to be freely accessible for academic, educational, and non-commercial purposes. Redistribution or modification of the articles for commercial gain without prior authorization from the publisher is prohibited.
          </p>
        </div>

        <footer className="mt-12 text-center text-gray-500">
          <p>&copy; 2025 Fusion Journal. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default CopyrightPolicy;
