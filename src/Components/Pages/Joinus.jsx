// src/components/JoinUs.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../config/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const JoinUs = () => {
  const navigate = useNavigate();
  const storage = getStorage(); // Get Firebase Storage instance

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    abstract: "",
    file: null,
  });
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      setError("File size cannot exceed 5MB.");
      return;
    }
    setFormData((prev) => ({ ...prev, file }));
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.file) {
      setError("Please upload a file.");
      return;
    }

    setSubmitting(true);
    try {
      // Create a storage reference for the file
      const storageRef = ref(
        storage,
        `submissions/${formData.file.name}-${Date.now()}`
      );
      // Upload file to Firebase Storage
      const snapshot = await uploadBytes(storageRef, formData.file);
      // Get the download URL for the uploaded file
      const downloadURL = await getDownloadURL(snapshot.ref);

      // Prepare the submission data
      const submissionData = {
        name: formData.name,
        email: formData.email,
        title: formData.title,
        abstract: formData.abstract,
        fileUrl: downloadURL,
        status: "pending", // default status
        createdAt: serverTimestamp(),
      };

      // Add the submission document to Firestore
      await addDoc(collection(db, "submissions"), submissionData);

      alert("Your research submission has been received!");
      setFormData({
        name: "",
        email: "",
        title: "",
        abstract: "",
        file: null,
      });
    } catch (err) {
      console.error(err);
      setError("Error submitting the form. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate("/login");
    } catch (err) {
      console.error("Error signing out:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-emerald-700 mb-6 text-center">
        Join Us
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
        Submit your research to our journal and contribute to groundbreaking
        discoveries in science and engineering.
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl"
      >
        {/* Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
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
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
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
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
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
          <label
            htmlFor="abstract"
            className="block text-sm font-medium text-gray-700"
          >
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
          <label
            htmlFor="file"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Your Research Paper (PDF, DOC, DOCX, Max 5MB)
          </label>
          <input
            type="file"
            id="file"
            name="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="mt-2 block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
            required
          />
          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition disabled:opacity-50"
        >
          {submitting ? "Submitting..." : "Submit Research"}
        </button>

        {/* Sign Out Button */}
        <button
          type="button"
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
