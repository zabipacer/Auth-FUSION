import React, { useState, useEffect } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import app from "../config/firebase";


const ResearchAD = ({ title, pdfPath }) => {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (pdfPath) {
      const storage = getStorage(app);
      const pdfRef = ref(storage, pdfPath);

      getDownloadURL(pdfRef)
        .then((url) => setPdfUrl(url))
        .catch(() => setShowError(true));
    }
  }, [pdfPath]);

  const handleDownload = () => {
    if (pdfUrl) {
      window.open(pdfUrl, "_blank");
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="bg-emerald-900 text-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-[95%] mx-auto">
      {/* Title */}
      <h1 className="text-xl sm:text-3xl font-bold mb-4 text-center sm:text-left">
        {title}
      </h1>

      {/* Article Layout */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        {/* Photo */}
        <img
          src="/FUSON.png"
          alt="Article Preview"
          className="w-[200px] h-[300px] object-cover rounded-md shadow-lg mx-auto sm:mx-0"
        />

        {/* Text Content */}
        <div className="flex-1 text-center sm:text-left text-justify">
          {/* Metadata */}
          <div className="text-emerald-400 text-sm mb-6">
            Research | Open access | Published: 24 January 2025
          </div>

          {/* Download Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center bg-emerald-800 p-4 rounded-lg shadow gap-4">
            <button
              onClick={handleDownload}
              className="bg-white text-emerald-800 px-4 py-2 rounded-md font-medium hover:bg-emerald-200"
            >
              Download PDF
            </button>
            <span className="text-sm text-emerald-300">
              ✅ You have full access to this{" "}
              <span className="underline hover:text-white">
                open access article
              </span>
            </span>
          </div>

          {/* Discover Section */}
          <div className="mt-6">
            <h2 className="text-lg font-bold mb-2">FUSION</h2>
            <div className="flex flex-wrap justify-start sm:justify-start gap-4 text-sm">
              <a
                href="/Join"
                className="text-emerald-400 hover:underline hover:text-white"
              >
                Submit manuscript →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Error Modal - Styled Only */}
      {showError && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-[90%] max-w-md">
            <h2 className="text-xl font-bold text-red-600">PDF Not Available</h2>
            <p className="text-gray-700 mt-2">
              Sorry, the PDF for this research paper is not available at the moment.
            </p>
            <button
              onClick={() => setShowError(false)}
              className="mt-4 bg-emerald-700 text-white px-4 py-2 rounded-lg hover:bg-emerald-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResearchAD;
