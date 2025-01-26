import React, { useState } from "react";

const AuthorGuidelines = () => {
  const [popupContent, setPopupContent] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const guidelines = [
    {
      title: "Manuscript Submission Guidelines",
      content: (
        <>
          <h4 className="font-semibold text-emerald-800 mb-4">General Requirements</h4>
          <p className="text-gray-800 mb-6">
            Manuscripts must be submitted in English and should be double-spaced, using a 12-point font size (preferably Times New Roman). The manuscript should include the following sections: Abstract, Introduction, Methodology, Results, Discussion, and Conclusion.
          </p>
          <h4 className="font-semibold text-emerald-800 mb-4">Formatting Instructions</h4>
          <p className="text-gray-800 mb-6">
            Authors are required to submit their manuscript in a Microsoft Word (.docx) format or PDF. All figures, tables, and illustrations must be embedded in the manuscript at the appropriate locations.
          </p>
          <h4 className="font-semibold text-emerald-800 mb-4">Peer Review Process</h4>
          <p className="text-gray-800">
            After submission, your manuscript will undergo a peer review process. Reviewers will evaluate the quality, originality, and relevance of your research. You will be notified of the outcome within 4-6 weeks.
          </p>
        </>
      ),
    },
    {
      title: "Author Agreement",
      content: (
        <>
          <h4 className="font-semibold text-emerald-800 mb-4">Agreement Overview</h4>
          <p className="text-gray-800 mb-6">
            By submitting your manuscript, you agree to allow Fusion Journal to publish your work under the applicable copyright terms. Authors must confirm that the work is original and has not been submitted or published elsewhere.
          </p>
          <h4 className="font-semibold text-emerald-800 mb-4">Copyright and Licensing</h4>
          <p className="text-gray-800 mb-6">
            Authors will retain the copyright to their work but will grant Fusion Journal an exclusive license to publish and distribute the manuscript. The journal follows an open-access model, meaning your work will be freely available to readers worldwide.
          </p>
          <h4 className="font-semibold text-emerald-800 mb-4">Ethical Guidelines</h4>
          <p className="text-gray-800">
            Authors must ensure their work adheres to ethical standards. This includes ensuring that no plagiarism is involved and that proper credit is given to contributors.
          </p>
        </>
      ),
    },
    {
      title: "Copyright Policy",
      content: (
        <>
          <h4 className="font-semibold text-gray-800 mb-2">Ownership of Work:</h4>
          <p className="text-gray-700 mb-4">
            Upon acceptance for publication, Fusion Journal will own the rights to publish the content. However, authors can reuse their work for academic purposes with proper citation of the original publication.
          </p>
          <h4 className="font-semibold text-gray-800 mb-2">Permissions and Licensing:</h4>
          <p className="text-gray-700 mb-4">
            Authors are required to secure permission for any third-party content (e.g., images, tables, or figures) included in their manuscript. All third-party content must be properly credited with the source.
          </p>
          <h4 className="font-semibold text-gray-800 mb-2">Open Access Policy:</h4>
          <p className="text-gray-700 mb-4">
            Fusion Journal follows an open-access model, which means that all published articles are freely accessible to readers without any subscription or paywall. Authors must acknowledge the benefits of open-access publication in their agreements.
          </p>
        </>
      ),
    },
    {
      title: "Reviewer Guidelines",
      content: (
        <>
          <h4 className="font-semibold text-gray-800 mb-2">Reviewer Responsibilities:</h4>
          <p className="text-gray-700 mb-4">
            Reviewers are responsible for evaluating the quality and relevance of the manuscript. They should assess whether the research methodology is sound, the results are well-interpreted, and the manuscript contributes to the field.
          </p>
          <h4 className="font-semibold text-gray-800 mb-2">Confidentiality:</h4>
          <p className="text-gray-700 mb-4">
            Reviewers must maintain confidentiality regarding the manuscript's content. They should not share or use any information from the manuscript for personal gain.
          </p>
          <h4 className="font-semibold text-gray-800 mb-2">Conflict of Interest:</h4>
          <p className="text-gray-700 mb-4">
            Reviewers must disclose any potential conflicts of interest to the editor. If a reviewer has a personal or professional relationship with the author, they must recuse themselves from reviewing the manuscript.
          </p>
        </>
      ),
    },
  ];

  const openPopup = (content) => {
    setPopupContent(content);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupContent(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
  <h3 className="text-xl font-bold text-gray-800 mb-6">For Authors</h3>
  <ul className="space-y-4">
    {guidelines.map((item, index) => (
      <li
        key={index}
        className="border-b pb-3 last:border-b-0 last:pb-0"
      >
        <button
          onClick={() => openPopup(item.content)}
          className="text-sm text-gray-700 hover:text-blue-600 hover:underline flex justify-between items-center w-full text-left"
        >
          {item.title}
          <span className="text-blue-600">→</span>
        </button>
      </li>
    ))}
  </ul>

  {/* Popup Modal */}
   {/* Popup Modal */}
   {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-emerald-900 bg-opacity-80 z-50">
          <div className="bg-white p-8 rounded-lg shadow-2xl max-w-4xl w-full relative">
            <h4 className="text-2xl font-bold text-emerald-800 mb-6">Guideline Details</h4>
            <div className="text-gray-800 text-lg mb-8 overflow-y-auto max-h-96">{popupContent}</div>
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-emerald-900 hover:text-emerald-700 text-xl font-bold"
            >
              &times;
            </button>
            <button
              onClick={closePopup}
              className="mt-4 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
</div>

  );
};

export default AuthorGuidelines;
