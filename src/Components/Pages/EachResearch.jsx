import React, { useEffect, useState } from "react";
import { ref, get, child } from "firebase/database";
import { useParams } from "react-router-dom";
import { DB } from "../../config/firebase";
import DOMPurify from "dompurify"; // Import DOMPurify for sanitization (if needed)
import ResearchAd from "../ResearchAD";

const EachResearch = () => {
    useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top of the page when the component loads
    }, []);
  
  const { id } = useParams();
  const [research, setResearch] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResearch = async () => {
      try {
        const dbRef = ref(DB);
        const snapshot = await get(child(dbRef, `research/${id}`));
        if (snapshot.exists()) {
          setResearch(snapshot.val());
        } else {
          console.log("No data found for this research.");
        }
      } catch (error) {
        console.error("Error fetching research data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResearch();
  }, [id]);

  // Dynamic styling functions
  const formatText = (text) => {
    return text.split("\n").map((line, index) => {
      const isImportant = line.toLowerCase().includes("important");

      return (
        <p
          key={index}
          style={{
            color: isImportant ? "red" : "inherit", // Red for important text, else default
            fontWeight: line.length > 300 ? "bold" : "normal", // Bold for long paragraphs
            marginBottom: "1rem",
          }}
        >
          {line}
        </p>
      );
    });
  };

  const renderListItems = (text) => {
    const listItems = text.split("\n").map((item, index) => {
      return (
        <li
          key={index}
          style={{
            color: item.toLowerCase().includes("important") ? "red" : "inherit",
            fontWeight: "normal",
          }}
        >
          {item}
        </li>
      );
    });
    return <ul>{listItems}</ul>;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 to-emerald-200">
        <p className="text-lg text-emerald-800 font-semibold animate-pulse">
          Loading research details...
        </p>
      </div>
    );
  }

  if (!research) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-red-100 to-red-200">
        <p className="text-lg text-red-700 font-semibold">
          Research not found.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8">
        {/* Pass title as a prop to ResearchAd */}
        <ResearchAd title={research.title} />
        
        {/* Title Section */}

        {/* Abstract Section */}
        {research.abstract && (
          <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-8 sm:mb-10">
            <h2 className="text-2xl  text-gray-800 mb-4 text-center font-bold text-4xl ">Abstract</h2>
            <div className="text-base sm:text-lg text-gray-800 leading-relaxed max-w-3xl mx-auto">
              {formatText(research.abstract)}
            </div>
          </section>
        )}

        {/* Image Section */}
        {research.image && (
          <img
            src={research.image}
            alt={research.title}
            className="w-full max-h-[500px] object-contain rounded-lg shadow-md mb-8 sm:mb-10"
          />
        )}

        {/* Topics Section */}
        <section>
          {research.topics && research.topics.length > 0 ? (
            research.topics.map((topic, topicIndex) => (
              <article key={topicIndex} className="mb-8 sm:mb-10">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                  {`${topicIndex + 1}. ${topic.title}`}
                </h2>

                {topic.description && (
                  <div className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 max-w-3xl mx-auto">
                    {formatText(topic.description)}
                  </div>
                )}

                {topic.image && (
                  <img
                    src={topic.image}
                    alt={topic.title}
                    className="w-full max-h-[400px] object-contain rounded-lg shadow-md mb-6 sm:mb-8"
                  />
                )}

                {topic.subtopics && topic.subtopics.length > 0 && (
                  <div className="pl-6 border-l-4 border-indigo-400">
                    <ul className="list-disc list-inside">
                      {topic.subtopics.map((subtopic, subIndex) => (
                        <li key={subIndex} className="mb-6 sm:mb-8">
                          <h3 className="text-lg sm:text-xl font-medium text-gray-800">
                            {`${topicIndex + 1}.${subIndex + 1} ${subtopic.subtopicTitle}`}
                          </h3>
                          {subtopic.subtopicDescription && (
                            <p className="text-gray-700 mt-2 leading-relaxed">
                              {formatText(subtopic.subtopicDescription)}
                            </p>
                          )}

                          {subtopic.subtopicImage && (
                            <img
                              src={subtopic.subtopicImage}
                              alt={subtopic.subtopicTitle}
                              className="w-full max-h-[300px] object-contain rounded-lg shadow-md mt-4 sm:mt-6"
                            />
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            ))
          ) : (
            <p className="text-gray-700 text-lg">No topics available for this research.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default EachResearch;
