import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../config/firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [errorMessage, setErrorMessage] = useState(""); // Error message state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true
    setErrorMessage(""); // Clear previous error messages

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully");
      window.location.href = "/Join";
      toast.success("User logged in successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      setErrorMessage(error.message); // Set error message based on the caught error
      toast.error(error.message, {
        position: "bottom-center",
      });
    } finally {
      setIsLoading(false); // Set loading to false once process is complete
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-400 flex items-center justify-center">
      <div className="bg-emerald-700 text-gray-100 p-8 rounded-xl shadow-2xl max-w-lg w-full sm:max-w-md">
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
              className="w-full px-4 py-2 bg-emerald-600 border border-emerald-500 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-emerald-600 border border-emerald-500 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 text-white font-semibold rounded-lg shadow-lg transition ${
              isLoading
                ? "bg-emerald-500 cursor-not-allowed"
                : "bg-emerald-600 hover:bg-emerald-700"
            }`}
            disabled={isLoading} // Disable button while loading
          >
            {isLoading ? "Logging in..." : "Submit"}
          </button>
        </form>
        {errorMessage && (
          <p className="text-red-500 text-sm mt-4 text-center">{errorMessage}</p>
        )}
        <p className="text-sm mt-6 text-center text-gray-400">
          New user?{" "}
          <a
            href="/Signup"
            className="text-emerald-400 hover:underline hover:text-emerald-500"
          >
            Register Here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
