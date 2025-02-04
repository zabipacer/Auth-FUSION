import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component loads
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-50 via-indigo-100 to-purple-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto my-8">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
        Privacy Policy
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        At Fusion, we are committed to protecting your privacy. This policy outlines
        the information we collect, how it is used, and your rights regarding your data.
      </p>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 underline decoration-indigo-500">
            Information We Collect
          </h2>
          <p className="text-gray-600 mb-4">
            We collect personal information when you interact with our platform, including but not limited to:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4 pl-5">
            <li>Name and contact details</li>
            <li>Usage data and analytics</li>
            <li>Preferences and interests</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 underline decoration-indigo-500">
            How We Use Your Information
          </h2>
          <p className="text-gray-600 mb-4">
            Your information is used to enhance your experience, provide customer support, and improve our services. We never sell your data to third parties.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 underline decoration-indigo-500">
            Your Rights
          </h2>
          <p className="text-gray-600 mb-4">
            You have the right to access, modify, or delete your personal data. For assistance, please contact our support team.
          </p>
        </div>
        <div>
          <p className="text-gray-600">
            For a detailed policy, please refer to our{" "}
            <a href="/Privacy Policy - Fusionesj.docx"
          download="Privacy Policy - Fusionesj.docx" className="text-blue-600 font-semibold hover:underline">
              full Privacy Policy document
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
