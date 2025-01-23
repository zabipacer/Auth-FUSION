import React, { useEffect, useState } from "react";
import { ref, get, child } from "firebase/database";
import { DB } from "../config/firebase";
import { Link } from "react-router-dom";

const LatestResearch = () => {
  const [researchData, setResearchData] = useState([]);
  const [loading, setLoading] = useState(true);

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
          setResearchData(researchArray);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchResearchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full text-gray-500">
        Loading...
      </div>
    );
  }

  if (researchData.length === 0) {
    return (
      <div className="flex justify-center items-center h-full text-gray-500">
        No research data found.
      </div>
    );
  }

  // Function to truncate text after a certain length
  const truncateText = (text, length = 100) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + "...";
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
  <h3 className="text-xl font-bold text-gray-800 mb-6">Latest Research</h3>
  <ul className="space-y-6">
    {researchData.map((research) => (
      <li
        key={research.id}
        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 border-b pb-6 hover:bg-gray-50 transition-all ease-in-out duration-300"
      >
        <img
          src={
            research.mainImage
              ? research.mainImage
              : "https://placehold.co/600x400/png"
          }
          alt={research.title || "Research"}
          className="w-full sm:w-40 sm:h-40 object-cover rounded-lg shadow-md"
        />
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-gray-900">
            {research.title || "No Title"}
          </h4>
          <p className="text-sm text-gray-600 mt-2">
            {truncateText(research.abstract || "No Abstract")}
          </p>
          <Link
            to={`/research/${research.id}`}
            className="text-blue-600 text-sm hover:underline mt-3 block"
          >
            Read More →
          </Link>
        </div>
      </li>
    ))}
  </ul>
  <div className="mt-4 text-center">
    <Link
      to="/research"
      className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-white border border-emerald-700 rounded-full text-gray-700 font-semibold shadow-sm hover:bg-gray-100 hover:shadow-md transition-all duration-300"
    >
      View All Research
      <svg
        className="ml-2 w-4 h-4 text-gray-700"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  </div>
</div>

  );
};

export default LatestResearch;
