import React, { useState, useEffect } from "react";
import { FaMicroscope, FaFlask, FaGlobe, FaCogs, FaAtom } from "react-icons/fa";
import { DB } from "../../config/firebase";
import { child, get, ref } from "firebase/database";
import LatestResearch from "../LatestResearch";

const ResearchPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component loads
  }, []);
  const [isLoading, setIsLoading] = useState(true);

  // Categories with icons
  const categories = [
    { name: "Life Sciences", icon: <FaMicroscope /> },
    { name: "Chemistry", icon: <FaFlask /> },
    { name: "Environmental Sciences", icon: <FaGlobe /> },
    { name: "Engineering", icon: <FaCogs /> },
    { name: "Physics", icon: <FaAtom /> },
  ];

  // States for articles and selected category
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchResearchData = async () => {
      try {
        const dbRef = ref(DB);
        const snapshot = await get(child(dbRef, "research"));
        if (snapshot.exists()) {
          const data = snapshot.val();
          const researchArray = Object.entries(data).map(([id, details]) => ({
            id,
            ...details,
          }));
          setArticles(researchArray);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchResearchData();
  }, []);

  // Filter articles based on the selected category
  const filteredArticles = selectedCategory
    ? articles.filter((article) => article.category === selectedCategory)
    : articles;

  // Function to truncate text after a certain length
  const truncateText = (text, length = 100) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + "...";
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Home Button */}
      <a
        href="/"
        className="text-emerald-700 underline text-xl font-bold mb-6 inline-block bg-transparent hover:text-emerald-600"
      >
        Home
      </a>

      {/* Page Header */}
      <h1 className="text-3xl font-bold text-emerald-700 mb-6">Research</h1>

      {/* Categories Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => setSelectedCategory(category.name)} // Set selected category on click
            className={`bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition cursor-pointer ${
              selectedCategory === category.name
                ? "border-2 border-emerald-600"
                : ""
            }`}
          >
            <div className="text-emerald-600 text-4xl mb-3">{category.icon}</div>
            <p className="font-semibold text-gray-700">{category.name}</p>
          </div>
        ))}
      </div>

      {/* Articles Section */}
      <div>
        {isLoading ? (
          <div className="flex justify-center items-center h-full text-gray-500">
            Loading...
          </div>
        ) : filteredArticles.length > 0 ? (
          filteredArticles.map((article, index) => (
            <div
              key={index}
              className="bg-white p-6 mb-4 rounded-lg shadow-md flex flex-col lg:flex-row space-x-6 hover:bg-gray-50 transition-all ease-in-out duration-300"
            >
              <img
                src={
                  article.mainImage
                    ? article.mainImage
                    : "https://placehold.co/600x400/png"
                }
                alt={article.title || "Research"}
                className="w-full lg:w-40 h-40 object-cover rounded-lg shadow-md mb-4 lg:mb-0"
              />
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-gray-900">
                  {article.title || "No Title"}
                </h4>
                <p className="text-sm text-gray-600 mt-2">
                  {truncateText(article.abstract || "No Abstract")}
                </p>
                <a
                  href={`/research/${article.id}`}
                  className="text-blue-600 text-sm hover:underline mt-3 block"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">
            {selectedCategory
              ? `No articles available for ${selectedCategory}.`
              : "No articles available."}
          </p>
        )}
      </div>

      {/* Latest Research Section */}
      <LatestResearch />
    </div>
  );
};

export default ResearchPage;
