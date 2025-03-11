
// src/components/EditSubmission.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../config/firebase";
import { doc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { FiLoader, FiX, FiCheckCircle } from "react-icons/fi";

const EditSubmission = () => {
  const { id } = useParams(); // The submission id from the URL
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [submission, setSubmission] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchSubmission = async () => {
      try {
        const submissionRef = doc(db, "submissions", id);
        const submissionSnap = await getDoc(submissionRef);
        if (submissionSnap.exists()) {
          const data = submissionSnap.data();
          setSubmission(data);
          setTitle(data.title || "");
          setContent(data.content || "");
        } else {
          toast.error("Submission not found");
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("Error fetching submission:", error);
        toast.error("Error fetching submission");
      } finally {
        setLoading(false);
      }
    };

    fetchSubmission();
  }, [id, navigate]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setUpdating(true);
    try {
      const submissionRef = doc(db, "submissions", id);
      await updateDoc(submissionRef, {
        title,
        content,
        updatedAt: serverTimestamp(),
      });
      toast.success("Submission updated successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error updating submission:", error);
      toast.error("Failed to update submission. Please try again.");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <FiLoader className="animate-spin text-emerald-600 text-4xl" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Edit Submission</h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border rounded"
              rows="5"
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-200"
            >
              <FiX className="inline mr-1" /> Cancel
            </button>
            <button
              type="submit"
              disabled={updating}
              className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
            >
              {updating ? "Updating..." : <><FiCheckCircle className="inline mr-1" /> Save</>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditSubmission;
