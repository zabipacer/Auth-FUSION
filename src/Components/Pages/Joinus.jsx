import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";

const JoinUs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoading(false); // User is logged in, allow access
      } else {
        navigate("/login"); // Redirect to login if not logged in
      }
    });

    return () => unsubscribe(); // Cleanup the listener
  }, [navigate]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    abstract: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would integrate EmailJS, NodeMailer, or another email service.
    console.log("Form Data Submitted:", formData);
    alert("Thank you for submitting your research! We will get back to you soon.");

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      title: "",
      abstract: "",
      file: null,
    });
  };

  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        navigate("/login"); // Redirect to login after sign-out
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-emerald-700 mb-6 text-center">
        Join Us
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
        Submit your research to our journal and contribute to groundbreaking discoveries in science and engineering.
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl"
      >
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Research Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Research Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Enter your research title"
            required
          />
        </div>

        {/* Abstract */}
        <div className="mb-4">
          <label htmlFor="abstract" className="block text-sm font-medium text-gray-700">
            Abstract
          </label>
          <textarea
            id="abstract"
            name="abstract"
            value={formData.abstract}
            onChange={handleChange}
            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Provide a brief abstract of your research"
            rows="4"
            required
          ></textarea>
        </div>

        {/* File Upload */}
        <div className="mb-4">
          <label htmlFor="file" className="block text-sm font-medium text-gray-700">
            Upload Your Research Paper (PDF only)
          </label>
          <input
            type="file"
            id="file"
            name="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="mt-2 block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition"
        >
          Submit Research
        </button>

        {/* Sign Out Button */}
        <button
          onClick={handleSignOut}
          className="my-4 py-2 px-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
        >
          Sign Out
        </button>
      </form>
    </div>
  );
};

export default JoinUs;
