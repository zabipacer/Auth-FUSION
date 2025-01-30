import React from "react";
import { FaFileAlt, FaUpload, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

const SubmissionGuidelines = () => {
  return (
    <div className="container mx-auto px-6 py-12 max-w-5xl bg-white shadow-lg rounded-lg border border-gray-200 mt-8">
      {/* Header */}
      <div className="mb-8 border-b pb-4">
        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
          <FaFileAlt className="text-emerald-600" /> Submission Guidelines
        </h2>
        <p className="text-gray-600 mt-2">Please follow these guidelines carefully to ensure a smooth submission and review process.</p>
      </div>

      {/* Instructions for Authors */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 border-b pb-2">Instructions for Authors</h3>
        <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
          <li>The work must not be published or under review elsewhere.</li>
          <li>All co-authors and institutions must approve the submission.</li>
          <li>Permissions must be obtained for third-party content (figures, tables, text).</li>
        </ul>
      </section>

      {/* Formatting Requirements */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 border-b pb-2">Formatting Requirements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Manuscripts must be in English.</li>
            <li>Use 12-point Times New Roman font.</li>
            <li>Double-spacing is required.</li>
          </ul>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Include page numbers at the bottom right.</li>
            <li>Use a decimal heading system (max three levels).</li>
          </ul>
        </div>
      </section>

      {/* File Formats */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 border-b pb-2">File Formats</h3>
        <p className="text-gray-700 mt-3">
          Manuscripts should be submitted in <strong>.docx</strong> (Microsoft Word) or <strong>.pdf</strong> format.
        </p>
      </section>

      {/* Plagiarism Policy */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 border-b pb-2 flex items-center gap-2">
          <FaExclamationTriangle className="text-red-600" /> Plagiarism Policy
        </h3>
        <p className="text-gray-700 mt-3">
          Submissions will be screened for plagiarism. Manuscripts with a similarity score above 15% (excluding references)
          may be rejected or returned for revision.
        </p>
      </section>

      {/* Ethical Guidelines */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 border-b pb-2 flex items-center gap-2">
          <FaCheckCircle className="text-green-600" /> Ethical Guidelines
        </h3>
        <p className="text-gray-700 mt-3">
          Authors must ensure that all co-authors have approved the final version. Any conflicts of interest should be disclosed at submission.
        </p>
      </section>
    </div>
  );
};

export default SubmissionGuidelines;