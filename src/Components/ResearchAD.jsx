import { Link } from "react-router-dom";
import { storage } from "../config/firebase";
import { useEffect, useState } from "react";

 
import { ref, listAll, getDownloadURL } from "firebase/storage";



const ResearchAD = ({ title, researchId }) => {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleDownload = async () => {
    if (!researchId) {
      setErrorMsg("Research ID is missing.");
      setShowError(true);
      return;
    }

    try {
      // ✅ Log the storage path we're trying to access
      console.log(`Fetching from path: researchPDFs/${researchId}`);

      // ✅ List all files inside researchPDFs/{researchId}/
      const folderRef = ref(storage, `researchPDFs/${researchId}`);
      const fileList = await listAll(folderRef);

      // ✅ Log all found files in the folder
      console.log("Files found:", fileList.items.map(file => file.name));

      if (fileList.items.length === 0) {
        throw new Error("Unfortunately PDF for this Research is not Available Right Now");
      }

      // ✅ Get the first (and only) file in the folder
      const pdfRef = fileList.items[0];
      console.log("Downloading file:", pdfRef.name);

      const url = await getDownloadURL(pdfRef);
      console.log("Download URL:", url);

      setPdfUrl(url);
      setShowError(false);
      window.open(url, "_blank"); // ✅ Open in new tab
    } catch (error) {
      console.error("Error fetching PDF:", error);
      setErrorMsg(error.message);
      setShowError(true);
    }
  };

  return (
    <div className="bg-emerald-900 text-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-[95%] mx-auto">
      <h1 className="text-xl sm:text-3xl font-bold mb-4 text-center sm:text-left">
        {title}
      </h1>

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <img
          src="/FUSON.png"
          alt="Article Preview"
          className="w-[200px] h-[300px] object-cover rounded-md shadow-lg mx-auto sm:mx-0"
        />

        <div className="flex-1 text-center sm:text-left text-justify">
          <div className="text-emerald-400 text-sm mb-6">
            Research | Open access | Published: 24 January 2025
          </div>

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

      {/* ✅ Error Popup (Only Shows When Clicking "Download PDF") */}
      {showError && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-[90%] max-w-md">
            <h2 className="text-xl font-bold text-red-600">Error</h2>
            <p className="text-gray-700 mt-2">{errorMsg}</p>
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