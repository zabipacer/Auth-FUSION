import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../config/firebase";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, [auth]);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Left Side - Home Button */}
      <div className="flex items-center space-x-2">
        <FaReact className="text-emerald-700 text-2xl" />
        <Link
          to="/"
          className="text-emerald-700 text-lg font-semibold hover:underline"
        >
          Home
        </Link>
      </div>

      {/* Right Side - Links and Auth Buttons */}
      <div className="flex items-center space-x-4">
        <Link to="/about" className="text-gray-600 hover:text-emerald-700 font-medium">
          About Us
        </Link>

        {user ? (
          // If user is logged in
          <div className="flex items-center space-x-3">
            <span className="text-emerald-700 font-medium">{user.displayName || "User"}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          // If user is not logged in
          <Link
            to="/login"
            className="bg-emerald-700 text-white px-4 py-2 rounded-md hover:bg-emerald-800 transition"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
