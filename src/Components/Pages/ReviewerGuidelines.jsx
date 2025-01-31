import React, { useEffect } from "react";
import { FaClipboardList, FaFileAlt, FaUsers, FaShieldAlt } from "react-icons/fa";

const ReviewerGuidelines = () => {
      useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page when the component loads
      }, []);
    
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Main content wrapper */}
      <div className="flex-1 p-8 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mt-24">
        <h2 className="text-4xl font-extrabold text-emerald-800 mb-6 flex items-center">
          <FaClipboardList className="mr-3 text-emerald-600" />
          Reviewer Guidelines
        </h2>

        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
          As a reviewer for Fusion Journal, you play a critical role in ensuring the quality, accuracy, and relevance of the research we publish. We value your expertise and aim to make the review process efficient, fair, and collaborative.
        </p>

        <div className="bg-emerald-100 p-6 rounded-lg shadow-inner mb-10">
          <h3 className="text-2xl font-semibold text-emerald-800 mb-4 flex items-center">
            <FaFileAlt className="inline-block mr-3 text-emerald-600" />
            Responsibilities of Reviewers
          </h3>
          <p className="text-gray-700">
            Reviewers are responsible for evaluating the submitted manuscript for its originality, relevance, and overall quality. The key responsibilities include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Assessing the novelty and significance of the research.</li>
            <li>Checking the accuracy and validity of the methodology and results.</li>
            <li>Providing constructive feedback and recommendations for improvement.</li>
            <li>Ensuring that the manuscript adheres to ethical standards and guidelines.</li>
            <li>Submitting reviews in a timely manner to ensure a smooth editorial process.</li>
          </ul>
        </div>

        <div className="bg-emerald-100 p-6 rounded-lg shadow-inner mb-10">
          <h3 className="text-2xl font-semibold text-emerald-800 mb-4 flex items-center">
            <FaUsers className="inline-block mr-3 text-emerald-600" />
            Reviewer Ethics and Integrity
          </h3>
          <p className="text-gray-700">
            Reviewers are expected to uphold the highest ethical standards while conducting reviews. This includes:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Maintaining confidentiality of the manuscript and reviewer discussions.</li>
            <li>Disclosing any conflicts of interest before agreeing to review a manuscript.</li>
            <li>Providing unbiased, objective, and evidence-based assessments.</li>
            <li>Respecting the intellectual property of authors and other reviewers.</li>
          </ul>
        </div>

        <div className="bg-emerald-100 p-6 rounded-lg shadow-inner mb-10">
          <h3 className="text-2xl font-semibold text-emerald-800 mb-4 flex items-center">
            <FaShieldAlt className="inline-block mr-3 text-emerald-600" />
            Review Process Overview
          </h3>
          <p className="text-gray-700">
            The review process is designed to ensure that only high-quality, well-researched manuscripts are published. Here's how the process works:
          </p>
          <ul className="list-decimal list-inside text-gray-700 mt-4">
            <li>The editor assigns manuscripts to reviewers based on their expertise.</li>
            <li>Reviewers evaluate the manuscript and provide their feedback through the journal's submission system.</li>
            <li>Reviewers suggest whether the manuscript should be accepted, revised, or rejected.</li>
            <li>The editor makes the final decision based on the reviewers' recommendations.</li>
          </ul>
        </div>

        <div className="bg-emerald-100 p-6 rounded-lg shadow-inner mb-10">
          <h3 className="text-2xl font-semibold text-emerald-800 mb-4 flex items-center">
            <FaClipboardList className="inline-block mr-3 text-emerald-600" />
            How to Submit Your Review
          </h3>
          <p className="text-gray-700">
            After completing your review, follow these steps to submit your feedback:
          </p>
          <ul className="list-decimal list-inside text-gray-700 mt-4">
            <li>Log into the journal's review system.</li>
            <li>Navigate to the manuscript assigned to you.</li>
            <li>Fill out the review form, including your recommendation and detailed comments.</li>
            <li>Click 'Submit Review' to finalize your feedback.</li>
          </ul>
        </div>

        <footer className="mt-12 text-center text-gray-500">
          <p>&copy; 2025 Fusion Journal. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default ReviewerGuidelines;
