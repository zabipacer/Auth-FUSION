import React, { useEffect, useState } from "react";
import { ref, get, child } from "firebase/database";
import { useParams } from "react-router-dom";
import { DB } from "../../config/firebase";

const EachResearch = () => {
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
          console.log(snapshot.val());
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
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* Title Section */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">{research.title}</h1>
        </header>

        {/* Abstract Section */}
        {research.abstract && (
          <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Abstract</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {research.abstract}
            </p>
          </section>
        )}

        {/* Image Section */}
        {research.image && (
          <img
            src={research.image}
            alt={research.title}
            className="w-full max-h-[500px] object-contain rounded-lg shadow-md mb-8"
          />
        )}

        {/* Topics Section */}
        <section>
          {research.topics && research.topics.length > 0 ? (
            research.topics.map((topic, topicIndex) => (
              <article key={topicIndex} className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {`${topicIndex + 1}. ${topic.title}`}
                </h2>

                {topic.description && (
                  <p className="text-gray-600 mb-4">{topic.description}</p>
                )}

                {topic.image && (
                  <img
                    src={topic.image}
                    alt={topic.title}
                    className="w-full max-h-[400px] object-contain rounded-lg shadow-md mb-6"
                  />
                )}

                {topic.subtopics && topic.subtopics.length > 0 && (
                  <div className="pl-6 border-l-4 border-emerald-300">
                    {topic.subtopics.map((subtopic, subIndex) => (
                      <div key={subIndex} className="mb-6">
                        <h3 className="text-xl font-medium text-gray-700">
                          {`${topicIndex + 1}.${subIndex + 1} ${subtopic.subtopicTitle}`}
                        </h3>
                        {subtopic.subtopicDescription && (
                          <p className="text-gray-600 mt-2">
                            {subtopic.subtopicDescription}
                          </p>
                        )}

                        {subtopic.subtopicImage && (
                          <img
                            src={subtopic.subtopicImage}
                            alt={subtopic.subtopicTitle}
                            className="w-full max-h-[300px] object-contain rounded-lg shadow-md mt-4"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))
          ) : (
            <p className="text-gray-600">No topics available for this research.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default EachResearch;
