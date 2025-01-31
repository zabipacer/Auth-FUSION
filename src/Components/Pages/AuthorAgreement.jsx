import React, { useEffect } from "react";

const AuthorAgreement = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component loads
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-10 bg-white shadow-lg rounded-lg border border-gray-300">
      <h2 className="text-4xl font-bold text-emerald-900 mb-6 text-center">
        Author Agreement
      </h2>

      <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
        By submitting a manuscript to <strong>Fusion Journal of Engineering and Sciences</strong>, authors acknowledge and agree to the following terms, ensuring the integrity and ethical standards of academic publishing.
      </p>

      <div className="border-t border-gray-300 pt-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Copyright & Licensing</h3>
        <p className="text-gray-700 text-lg mb-4">
          Authors retain copyright of their work while granting Fusion Journal the right to publish, distribute, and archive the manuscript in accordance with open-access policies. The work will be licensed under a <strong>Creative Commons Attribution License (CC-BY)</strong>, allowing others to share and adapt the content with proper attribution.
        </p>
      </div>

      <div className="border-t border-gray-300 pt-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Originality & Plagiarism</h3>
        <p className="text-gray-700 text-lg mb-4">
          Authors confirm that their submission is original, has not been previously published, and is not under consideration elsewhere. All sources must be properly cited, and any instances of plagiarism will result in rejection or retraction.
        </p>
      </div>

      <div className="border-t border-gray-300 pt-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Authorship & Contributions</h3>
        <p className="text-gray-700 text-lg mb-4">
          All listed authors must have significantly contributed to the research, writing, or analysis of the manuscript. The corresponding author must ensure that all co-authors have reviewed and approved the final submission.
        </p>
      </div>

      <div className="border-t border-gray-300 pt-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">4. Ethical Research & Data Integrity</h3>
        <p className="text-gray-700 text-lg mb-4">
          Authors must adhere to ethical research practices, including obtaining necessary approvals for studies involving human or animal subjects. Data must be accurately reported without fabrication or manipulation.
        </p>
      </div>

      <div className="border-t border-gray-300 pt-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">5. Peer Review & Editorial Decisions</h3>
        <p className="text-gray-700 text-lg mb-4">
          Manuscripts submitted to Fusion Journal will undergo rigorous **double-blind peer review** to ensure quality and originality. Authors must respond to reviewer comments professionally and make necessary revisions before publication.
        </p>
      </div>

      <div className="border-t border-gray-300 pt-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">6. Conflict of Interest & Funding</h3>
        <p className="text-gray-700 text-lg mb-4">
          Authors must disclose any financial, institutional, or personal relationships that could influence the research. Funding sources should be acknowledged in the manuscript.
        </p>
      </div>

      <div className="border-t border-gray-300 pt-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">7. Retraction & Corrections</h3>
        <p className="text-gray-700 text-lg mb-4">
          If errors or misconduct are discovered after publication, the journal reserves the right to issue corrections or retract the article in accordance with academic integrity guidelines.
        </p>
      </div>

     
    </div>
  );
};

export default AuthorAgreement;
