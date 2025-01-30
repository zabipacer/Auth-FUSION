import React from "react";
import { Link } from "react-router-dom";

const AuthorGuidelines = () => {
  const guidelines = [
    { title: "Manuscript Submission Guidelines", path: "/guidelines/manuscript" },
    { title: "Author Agreement", path: "/guidelines/author-agreement" },
    { title: "Copyright Policy", path: "/guidelines/copyright-policy" },
    { title: "Reviewer Guidelines", path: "/guidelines/reviewer-guidelines" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-gray-800 mb-6">For Authors</h3>
      <ul className="space-y-4">
        {guidelines.map((item, index) => (
          <li key={index} className="border-b pb-3 last:border-b-0 last:pb-0">
            <Link
              to={item.path}
              className="text-sm text-gray-700 hover:text-blue-600 hover:underline flex justify-between items-center w-full text-left"
            >
              {item.title}
              <span className="text-blue-600">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorGuidelines;
