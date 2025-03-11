import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../config/firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [isResetting, setIsResetting] = useState(false);
  const [resetMessage, setResetMessage] = useState("");

  // Login function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("User logged in successfully");
      window.location.href = "/Join";
    } catch (error) {
      setErrorMessage(error.message);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Password reset function
  const handlePasswordReset = async () => {
    if (!resetEmail) {
      setResetMessage("Please enter your email.");
      return;
    }
    setIsResetting(true);
    setResetMessage("");

    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setResetMessage("Check your email for a reset link.");
      toast.success("Password reset email sent!");
    } catch (error) {
      setResetMessage(error.message);
      toast.error(error.message);
    } finally {
      setIsResetting(false);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-400 flex items-center justify-center">
      <div className="bg-emerald-700 text-gray-100 p-8 rounded-xl shadow-2xl max-w-lg w-full sm:max-w-md transition-transform transform hover:scale-105">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-50">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-emerald-600 border border-emerald-500 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-shadow hover:shadow-md"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-emerald-600 border border-emerald-500 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-shadow hover:shadow-md"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 text-white font-semibold rounded-lg shadow-lg transition ${
              isLoading ? "bg-emerald-500 cursor-not-allowed" : "bg-emerald-600 hover:bg-emerald-700"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Submit"}
          </button>
        </form>

        {errorMessage && (
          <p className="text-red-500 text-sm mt-4 text-center">{errorMessage}</p>
        )}

        <div className="mt-4 flex justify-between items-center">
          <a href="/Signup" className="text-sm text-gray-400 hover:underline hover:text-emerald-500">
            New user? Register Here
          </a>
          <button
            onClick={() => setShowResetModal(true)}
            className="text-sm text-gray-400 hover:underline hover:text-emerald-500"
          >
            Forgot Password?
          </button>
        </div>
      </div>

      {/* Password Reset Modal */}
      {showResetModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-gray-800">
            <h3 className="text-xl font-semibold mb-4">Reset Password</h3>
            <p className="text-sm text-gray-600 mb-2">
              Enter your email address, and we'll send you a reset link.
            </p>
            <input
              type="email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition-shadow hover:shadow-md"
              placeholder="Your email"
            />
            <button
              onClick={handlePasswordReset}
              className={`w-full mt-4 py-2 text-white font-semibold rounded-lg shadow-md transition ${
                isResetting ? "bg-gray-400 cursor-not-allowed" : "bg-emerald-600 hover:bg-emerald-700"
              }`}
              disabled={isResetting}
            >
              {isResetting ? "Sending..." : "Send Reset Link"}
            </button>
            {resetMessage && <p className="text-sm mt-2 text-center text-gray-600">{resetMessage}</p>}
            <button
              onClick={() => setShowResetModal(false)}
              className="w-full mt-2 py-2 text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-lg shadow-md transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
