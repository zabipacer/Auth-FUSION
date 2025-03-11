import React, { useState, useEffect } from "react";
import {
  FaMicroscope,
  FaFlask,
  FaGlobe,
  FaCogs,
  FaAtom,
  FaSearch,
} from "react-icons/fa";
import { DB } from "../../config/firebase";
import { child, get, ref } from "firebase/database";
import LatestResearch from "../LatestResearch";

const ResearchPage = () => {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Loading and error states
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Data states
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Categories with icons
  const categories = [
    { name: "Engineering", icon: <FaMicroscope /> },
    { name: "Medical Sciences", icon: <FaFlask /> },
    { name: "Earth Sciences", icon: <FaGlobe /> },
    { name: "Social Sciences", icon: <FaCogs /> },
    { name: "Others", icon: <FaAtom /> },
  ];

  // Fetch research data on component mount
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
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch research data.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchResearchData();
  }, []);

  // Filter articles based on selected category and search term
  const filteredArticles = React.useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory = selectedCategory
        ? article.category === selectedCategory
        : true;
      const lowerSearch = searchTerm.toLowerCase();
      const matchesSearch =
        searchTerm.trim() === "" ||
        (article.title &&
          article.title.toLowerCase().includes(lowerSearch)) ||
        (article.abstract &&
          article.abstract.toLowerCase().includes(lowerSearch));
      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchTerm]);

  // Utility: truncate text
  const truncateText = (text = "", length = 100) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + "...";
  };

  // Toggle selected category (toggle off if clicked again)
  const handleCategoryClick = (categoryName) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === categoryName ? null : categoryName
    );
  };

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      {/* Home Button */}
    
      {/* Page Header */}
      <h1 className="text-3xl font-bold text-emerald-700 mb-6">Research</h1>

      {/* Search Input */}
      <div className="relative mb-6">
        <FaSearch className="absolute top-3 left-3 text-gray-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search research articles..."
          aria-label="Search research articles"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            aria-label="Clear search"
          >
            &times;
          </button>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">{error}</div>
      )}

      {/* Categories Section */}
      <section className="mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <div
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
              className={`bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center cursor-pointer transition hover:shadow-lg ${
                selectedCategory === category.name
                  ? "border-2 border-emerald-600"
                  : ""
              }`}
            >
              <div className="text-emerald-600 text-4xl mb-3">
                {category.icon}
              </div>
              <p className="font-semibold text-gray-700">{category.name}</p>
            </div>
          ))}
        </div>
        {(selectedCategory || searchTerm) && (
          <button
            onClick={() => {
              setSelectedCategory(null);
              setSearchTerm("");
            }}
            className="mt-4 text-sm text-blue-600 hover:underline"
          >
            Clear Filter & Search
          </button>
        )}
      </section>

      {/* Articles Section */}
      <section>
        {isLoading ? (
          <div className="flex justify-center items-center text-gray-500 py-20">
            Loading...
          </div>
        ) : filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white p-6 mb-4 rounded-lg shadow-md flex flex-col lg:flex-row space-x-0 lg:space-x-6 hover:bg-gray-50 transition-all ease-in-out duration-300"
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
            </article>
          ))
        ) : (
          <p className="text-gray-500">
            {selectedCategory
              ? `No articles available for ${selectedCategory}.`
              : searchTerm
              ? `No articles found matching "${searchTerm}".`
              : "No articles available."}
          </p>
        )}
      </section>

      {/* Latest Research Section */}
      <LatestResearch />
    </main>
  );
};

export default ResearchPage;
