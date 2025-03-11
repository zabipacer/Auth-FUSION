import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../config/firebase";
import { collection, query, onSnapshot } from "firebase/firestore";
import {
  FiFileText,
  FiLoader,
  FiSearch,
  FiPlus,
  FiAlertCircle,
  FiEdit,
  FiChevronRight,
  FiClock,
  FiCheckCircle,
  FiXCircle,
  FiInfo,
  FiMenu,
  FiX
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import ReactPaginate from "react-paginate";
import { format } from "date-fns";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const slideUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  // Sign out function
  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
      toast.error("Error signing out. Please try again.");
    }
  };

  // Listen for auth changes
  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      if (!user) navigate("/login");
      else setCurrentUser(user);
    });
    return unsubscribeAuth;
  }, [navigate]);

  // Subscribe to all submissions (we’ll filter them on the client)
  useEffect(() => {
    if (!currentUser) return;

    try {
      const submissionsQuery = query(collection(db, "submissions"));
      const unsubscribeSub = onSnapshot(
        submissionsQuery,
        (snapshot) => {
          const allSubmissions = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            // Use submittedAt if available; otherwise use createdAt
            submittedAt: doc.data().submittedAt
              ? doc.data().submittedAt.toDate()
              : doc.data().createdAt
              ? doc.data().createdAt.toDate()
              : null
          }));
          setSubmissions(allSubmissions);
          setLoading(false);
        },
        (err) => {
          console.error("Firestore error:", err);
          setError(err.message);
          setLoading(false);
        }
      );
      return unsubscribeSub;
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, [currentUser]);

  // Client-side filtering: If submission.userId exists, it must match currentUser.uid.
  // Otherwise, compare the submission email with currentUser.email.
  const filteredSubmissions = useMemo(() => {
    return submissions.filter((submission) => {
      const matchesSearch = submission.title
        .toLowerCase()
        .includes(searchText.toLowerCase());
      let belongsToUser = false;
      if (submission.userId) {
        belongsToUser = submission.userId === currentUser.uid;
      } else if (submission.email && currentUser.email) {
        belongsToUser =
          submission.email.toLowerCase() === currentUser.email.toLowerCase();
      }
      return matchesSearch && belongsToUser;
    });
  }, [submissions, searchText, currentUser]);

  const pageCount = Math.ceil(filteredSubmissions.length / itemsPerPage);
  const paginatedSubmissions = filteredSubmissions.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const StatusBadge = ({ status }) => {
    const statusConfig = {
      approved: { color: "bg-green-100 text-green-800", icon: <FiCheckCircle /> },
      rejected: { color: "bg-red-100 text-red-800", icon: <FiXCircle /> },
      pending: { color: "bg-yellow-100 text-yellow-800", icon: <FiClock /> },
      "revision requested": { color: "bg-blue-100 text-blue-800", icon: <FiInfo /> }
    };

    return (
      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${statusConfig[status]?.color}`}>
        {statusConfig[status]?.icon}
        <span className="ml-2 capitalize">{status}</span>
      </div>
    );
  };

  if (error) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-emerald-50 to-green-50 p-4"
      >
        <FiAlertCircle className="text-red-500 text-6xl mb-4 animate-pulse" />
        <h2 className="text-2xl font-bold text-red-600 mb-4">Application Error</h2>
        <p className="text-gray-700 mb-6 max-w-md text-center">{error}</p>
        <div className="flex gap-4">
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-transform transform hover:scale-105"
          >
            Reload Page
          </button>
          <button
            onClick={handleSignOut}
            className="px-6 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-emerald-700 flex items-center">
            <FiFileText className="mr-2" />
            Research Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => navigate("/join-us")}
                className="flex items-center px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg"
              >
                <FiPlus className="mr-2" />
                New Submission
              </button>
              <button
                onClick={handleSignOut}
                className="flex items-center px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              >
                <FiChevronRight className="mr-2" />
                Sign Out
              </button>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="text-2xl text-gray-700 focus:outline-none"
              >
                {mobileMenuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="px-4 py-2 flex flex-col space-y-2">
              <button
                onClick={() => {
                  navigate("/join-us");
                  setMobileMenuOpen(false);
                }}
                className="flex items-center px-4 py-2 text-emerald-600 hover:bg-gray-100 rounded"
              >
                <FiPlus className="mr-2" />
                New Submission
              </button>
              <button
                onClick={() => {
                  handleSignOut();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center px-4 py-2 text-red-600 hover:bg-gray-100 rounded"
              >
                <FiChevronRight className="mr-2" />
                Sign Out
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideUp}
          className="bg-white rounded-lg shadow-sm p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <FiSearch className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search research..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
              />
            </div>
          </div>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-lg shadow-sm p-6 animate-pulse"
              >
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4" />
                <div className="h-3 bg-gray-200 rounded w-1/2 mb-2" />
                <div className="h-3 bg-gray-200 rounded w-1/3" />
              </motion.div>
            ))}
          </div>
        ) : filteredSubmissions.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedSubmissions.map((submission) => (
                <motion.div
                  key={submission.id}
                  initial="hidden"
                  animate="visible"
                  variants={slideUp}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <StatusBadge status={submission.status} />
                      <button
                        onClick={() => {
                          setSelectedSubmission(submission);
                          setShowModal(true);
                        }}
                        className="text-emerald-600 hover:text-emerald-700"
                      >
                        <FiChevronRight className="text-xl" />
                      </button>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {submission.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <FiClock className="mr-2" />
                      {submission.submittedAt
                        ? format(submission.submittedAt, "PPpp")
                        : "N/A"}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {pageCount > 1 && (
              <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                pageCount={pageCount}
                onPageChange={({ selected }) => setCurrentPage(selected)}
                containerClassName="flex justify-center gap-2 mt-8"
                pageClassName="px-3 py-1 rounded-lg hover:bg-gray-100"
                activeClassName="bg-emerald-100 text-emerald-700"
                previousClassName="px-3 py-1 rounded-lg hover:bg-gray-100"
                nextClassName="px-3 py-1 rounded-lg hover:bg-gray-100"
                disabledClassName="opacity-50 cursor-not-allowed"
              />
            )}
          </>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center py-20"
          >
            <FiFileText className="text-gray-300 text-6xl mx-auto mb-6" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              No Submissions Found
            </h2>
            <p className="text-gray-500 max-w-md mx-auto mb-6">
              Ready to share your research? Start by creating a new submission.
            </p>
            <button
              onClick={() => navigate("/join-us")}
              className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-transform transform hover:scale-105"
            >
              <FiPlus className="mr-2 inline" />
              Create New Submission
            </button>
          </motion.div>
        )}
      </main>

      <AnimatePresence>
        {showModal && selectedSubmission && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-xl shadow-2xl max-w-2xl w-full"
            >
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-xl font-semibold">{selectedSubmission.title}</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FiXCircle className="text-2xl" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <StatusBadge status={selectedSubmission.status} />
                  <div className="text-sm text-gray-500">
                    <FiClock className="mr-2 inline" />
                    {selectedSubmission.submittedAt
                      ? format(selectedSubmission.submittedAt, "PPpp")
                      : "N/A"}
                  </div>
                </div>
                {selectedSubmission.reviewComments && (
                  <div>
                    <h4 className="font-semibold mb-2">Reviewer Comments</h4>
                    <div className="prose max-w-none">
                      {selectedSubmission.reviewComments}
                    </div>
                  </div>
                )}
                <div className="flex gap-4 justify-end pt-6">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => navigate(`/edit/${selectedSubmission.id}`)}
                    className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
                  >
                    <FiEdit className="mr-2 inline" />
                    Edit Submission
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;
