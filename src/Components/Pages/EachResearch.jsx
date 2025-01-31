import React, { useEffect, useState } from "react";
import { ref, get, child } from "firebase/database";
import { useParams } from "react-router-dom";
import { DB } from "../../config/firebase";
import DOMPurify from "dompurify";
import ResearchAd from "../ResearchAD";

const EachResearch = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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

  const formatText = (text) => {
    return text.split("\n").map((line, index) => {
      if (line.startsWith("-") || line.startsWith("*") || line.match(/^\d+\. /)) {
        return (
          <li key={index} className="ml-6 list-disc list-inside text-gray-800 text-lg p-2">
            {line.replace(/^[-*\d+\. ]/, "")}
          </li>
        );
      }
      return (
        <p key={index} className="mb-4 text-gray-800 text-lg p-2 leading-relaxed border-l-4 border-gray-300 pl-4">
          {line}
        </p>
      );
    });
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
        <p className="text-lg text-red-700 font-semibold">Research not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto sm:bg-white sm:rounded-xl sm:shadow-lg sm:p-6 sm:max-w-4xl lg:max-w-5xl">
        <ResearchAd title={research.title} />

        {research.abstract && (
          <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-8 sm:mb-10 sm:bg-transparent sm:shadow-none w-full sm:w-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center border-b-2 pb-2">
              Abstract
            </h2>
            <div className="text-lg text-gray-800 leading-relaxed w-full sm:max-w-4xl mx-auto">
              {formatText(research.abstract)}
            </div>
          </section>
        )}

        {research.image && (
          <div className="flex justify-center mb-8 sm:mb-10">
            <img
              src={research.image}
              alt={research.title}
              className="w-full max-w-2xl object-contain rounded-lg shadow-md border border-gray-300"
            />
          </div>
        )}

        <section>
          {research.topics && research.topics.length > 0 ? (
            research.topics.map((topic, topicIndex) => (
              <article key={topicIndex} className="mb-8 sm:mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 border-l-4 border-indigo-400 pl-2">
                  {`${topicIndex + 1}. ${topic.title}`}
                </h2>

                {topic.description && (
                  <div className="text-lg text-gray-700 leading-relaxed mb-4 w-full sm:max-w-4xl mx-auto">
                    {formatText(topic.description)}
                  </div>
                )}

                {topic.image && (
                  <div className="flex justify-center mb-6 sm:mb-8">
                    <img
                      src={topic.image}
                      alt={topic.title}
                      className="w-full max-w-xl object-contain rounded-lg shadow-md border border-gray-300"
                    />
                  </div>
                )}

                {topic.subtopics && topic.subtopics.length > 0 && (
                  <div className="pl-6 border-l-4 border-indigo-400">
                    <ul className="list-disc list-inside space-y-4">
                      {topic.subtopics.map((subtopic, subIndex) => (
                        <li key={subIndex} className="text-lg text-gray-800">
                          <h3 className="font-medium text-gray-800">
                            {`${topicIndex + 1}.${subIndex + 1} ${subtopic.subtopicTitle}`}
                          </h3>
                          {subtopic.subtopicDescription && (
                            <p className="mt-2 leading-relaxed">
                              {formatText(subtopic.subtopicDescription)}
                            </p>
                          )}

                          {subtopic.subtopicImage && (
                            <div className="flex justify-center mt-4 sm:mt-6">
                              <img
                                src={subtopic.subtopicImage}
                                alt={subtopic.subtopicTitle}
                                className="w-full max-w-lg object-contain rounded-lg shadow-md border border-gray-300"
                              />
                            </div>
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
