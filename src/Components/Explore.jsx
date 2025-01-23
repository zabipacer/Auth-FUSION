import { Link } from "react-router-dom";

const Explore = () => (
    <div className="bg-white p-6 rounded-lg shadow-md sticky top-8">
      <h3 className="text-xl font-bold text-gray-800 mb-6">Explore</h3>
      <ul className="space-y-4">
        {[
          { title: "Articles", link: "/Research" },
          { title: "About Us", link: "/About" },
          { title: "Privacy Policy", link: "/Privacy" },
        ].map((item, index) => (
          <li
            key={index}
            className="border-b pb-3 last:border-b-0 last:pb-0"
          >
            <Link to={item.link}
             
              className="text-sm text-gray-700 hover:text-blue-600 hover:underline flex justify-between items-center"
            >
              {item.title}
              <span className="text-blue-600">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
  
  export default Explore;
  