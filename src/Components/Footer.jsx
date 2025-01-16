import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-900 text-white py-8 px-16">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Links Section */}
        <div>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="hover:underline hover:text-gray-200 transition"
              >
                Your privacy choices / Manage cookies
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-gray-200 transition"
              >
                Your US state privacy rights
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-gray-200 transition"
              >
                Accessibility statement
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-gray-200 transition"
              >
                Terms and conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-gray-200 transition"
              >
                Privacy policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-gray-200 transition"
              >
                Help and support
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-gray-200 transition"
              >
                Cancel contracts here
              </a>
            </li>
          </ul>
        </div>

        {/* Info Section */}
        <div>
          <p className="text-sm mb-4">
            39.34.9.197 <br />
            Not affiliated
          </p>
          <p className="text-lg font-semibold">Springer Nature</p>
          <p className="text-sm mt-1">© 2025 Springer Nature</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
