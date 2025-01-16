import React from "react";

const Articles = () => (
  <div className="p-6 bg-gray-50 rounded-lg shadow-md">
    {/* Announcement Section */}
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-blue-900 mb-4">Announcement</h1>
      <p className="text-gray-700">
        As of January 2023, <i>Research and Practice in Thrombosis and Haemostasis (RPTH)</i> is no longer published by Wiley. More information can be found on the new publisher’s website: 
        <a href="https://www.journals.elsevier.com/research-and-practice-in-thrombosis-and-haemostasis" 
           className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
          https://www.journals.elsevier.com/research-and-practice-in-thrombosis-and-haemostasis
        </a>.
      </p>
    </div>

    {/* Articles Section */}
    <div>
      <h1 className="text-2xl font-bold text-blue-900 mb-4">Articles</h1>
      <div className="flex space-x-4 mb-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600">Most Recent</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded shadow hover:bg-gray-300">Most Cited</button>
      </div>

      {/* Article List */}
      <div className="space-y-6">
        {articles.map((article, index) => (
          <div key={index} className="border-b pb-4">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              {article.title}
            </h2>
            <p className="text-gray-600 text-sm mb-2">{article.authors}</p>
            <p className="text-gray-500 text-sm mb-2">First Published: {article.date}</p>
            <div className="flex space-x-4 text-sm text-blue-500">
              <a href={article.abstractLink} className="hover:underline">Abstract</a>
              <a href={article.fullTextLink} className="hover:underline">Full text</a>
              <a href={article.pdfLink} className="hover:underline">PDF</a>
              <a href={article.referencesLink} className="hover:underline">References</a>
              <a href={article.permissionsLink} className="hover:underline">Request permissions</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Sample articles data
const articles = [
  {
    title: "Impact of different factor VIII inhibitor kinetic profiles on the inhibitor titer quantification using the modified Nijmegen–Bethesda assay",
    authors: "Carolin Ketteler MSc, Ingrid Hoffmann, Simon Davidson MPhil, ...",
    date: "12 December 2022",
    abstractLink: "#",
    fullTextLink: "#",
    pdfLink: "#",
    referencesLink: "#",
    permissionsLink: "#"
  },
  {
    title: "Platelet caspase-1 and Bruton tyrosine kinase activation in patients with COVID-19 is associated with disease severity and reversed in vitro by ibrutinib",
    authors: "Livia Claude MSc, Frédéric Martino MD, MSc, Patricia Hermand PhD, ...",
    date: "9 December 2022",
    abstractLink: "#",
    fullTextLink: "#",
    pdfLink: "#",
    referencesLink: "#",
    permissionsLink: "#"
  },
  {
    title: "Reducing use of coagulation tests in a family medicine practice setting: An implementation study",
    authors: "Fatima Khadadah MBBCh, FRCPC, Nadia Gabarin MD, FRCPC, ...",
    date: "9 December 2022",
    abstractLink: "#",
    fullTextLink: "#",
    pdfLink: "#",
    referencesLink: "#",
    permissionsLink: "#"
  },
  {
    title: "Factor eight inhibitor bypassing activity for refractory bleeding in coronary artery bypass grafting: A propensity‐matched analysis",
    authors: "Stevan S. Pupovac MD, Michael A. Catalano MS, ...",
    date: "2 December 2022",
    abstractLink: "#",
    fullTextLink: "#",
    pdfLink: "#",
    referencesLink: "#",
    permissionsLink: "#"
  },
  {
    title: "How to use and report data on D-dimer testing in the COVID-19 era?",
    authors: "Litao Zhang MD, Xiaohui Liu MD, Zhenlu Zhang PhD",
    date: "23 November 2022",
    abstractLink: "#",
    fullTextLink: "#",
    pdfLink: "#",
    referencesLink: "#",
    permissionsLink: "#"
  }
];

export default Articles;
