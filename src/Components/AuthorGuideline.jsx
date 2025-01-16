const AuthorGuidelines = () => (
    <div className="bg-white p-6 rounded-lg shadow-md sticky top-8">
      <h3 className="text-xl font-bold text-gray-800 mb-6">For Authors</h3>
      <ul className="space-y-4">
        {[
          { title: "Manuscript Submission Guidelines", link: "#" },
          { title: "Author Agreement", link: "#" },
          { title: "Copyright Policy", link: "#" },
          { title: "Reviewer Guidelines", link: "#" },
        ].map((item, index) => (
          <li
            key={index}
            className="border-b pb-3 last:border-b-0 last:pb-0"
          >
            <a
              href={item.link}
              className="text-sm text-gray-700 hover:text-blue-600 hover:underline flex justify-between items-center"
            >
              {item.title}
              <span className="text-blue-600">→</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
  
  export default AuthorGuidelines;