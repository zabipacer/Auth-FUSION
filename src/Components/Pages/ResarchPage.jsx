import React, { useState, useEffect } from "react";
import { FaMicroscope, FaFlask, FaGlobe, FaCogs, FaAtom } from "react-icons/fa";
import LatestResearch from "../LatestResearch";

const ResearchPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component loads
  }, []);

  // Dummy categories
  const categories = [
    { name: "Life Sciences", icon: <FaMicroscope /> },
    { name: "Chemistry", icon: <FaFlask /> },
    { name: "Environmental Sciences", icon: <FaGlobe /> },
    { name: "Engineering", icon: <FaCogs /> },
    { name: "Physics", icon: <FaAtom /> },
  ];

  // Dummy articles
  const articles = [
    {
      title: "Oxygen-modulated photoresponse in nickel oxide thin films",
      authors: "Swati Suman, Anupama Behra, Parasuraman Swaminathan",
      date: "15 January 2025",
      journal: "Materials Science",
      category: "Life Sciences", // Added category to articles
    },
    {
      title:
        "Research on the confinement mechanism of steel-reinforced concrete",
      authors: "Cong Peng, Deprizon Syamsunur, Zhiming Zhang",
      date: "15 January 2025",
      journal: "Engineering",
      category: "Engineering", // Added category to articles
    },
    {
      title: "Adapting to climate change and enhancing urban resilience",
      authors: "Abdillah Abdillah, Ida Widianingsih, Heru Nurasa",
      date: "15 January 2025",
      journal: "Environmental Sciences",
      category: "Environmental Sciences", // Added category to articles
    },
  ];

  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter articles based on selected category
  const filteredArticles = selectedCategory
    ? articles.filter((article) => article.category === selectedCategory)
    : articles;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <h1 className="text-3xl font-bold text-emerald-700 mb-6">Research</h1>

      {/* Categories Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => setSelectedCategory(category.name)} // Set selected category on click
            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition cursor-pointer"
          >
            <div className="text-emerald-600 text-4xl mb-3">{category.icon}</div>
            <p className="font-semibold text-gray-700">{category.name}</p>
          </div>
        ))}
      </div>

      {/* Articles Section */}
      <div>
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article, index) => (
            <div key={index} className="bg-white p-6 mb-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg text-gray-800">{article.title}</h3>
              <p className="text-sm text-gray-500">By: {article.authors}</p>
              <p className="text-sm text-gray-500">Published: {article.date}</p>
              <p className="text-sm text-gray-500">Journal: {article.journal}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No articles available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default ResearchPage;
