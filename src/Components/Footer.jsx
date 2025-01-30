import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-900 text-white py-10 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Links Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b-2 border-emerald-400 pb-2">
            Quick Links
          </h2>
          <ul className="space-y-4 text-sm">
            <li>
              <Link
                to="/guidelines/copyright-policy"
                className="hover:text-emerald-300 transition"
              >
                Copyright Policy
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-emerald-300 transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/guidelines/manuscript"
                className="hover:text-emerald-300 transition"
              >
                Author Guidelines
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="hover:text-emerald-300 transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Info Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b-2 border-emerald-400 pb-2">
            About Fusion
          </h2>
          <p className="text-sm leading-relaxed mb-6">
            Fusion is dedicated to bridging the gap between science and
            engineering. We empower researchers, students, and professionals to
            share their knowledge and make groundbreaking discoveries.
          </p>
          <p className="text-lg font-bold">Fusion</p>
          <p className="text-sm mt-1">© 2025 Fusion. All rights reserved.</p>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-emerald-500 mt-8 pt-4 text-center text-sm">
        Made with ❤️ by the Fusion Team.
      </div>
    </footer>
  );
};

export default Footer;
