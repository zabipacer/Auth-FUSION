import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../config/firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/Join";
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
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
            className="w-full py-2 bg-emerald-600 text-white font-semibold rounded-lg shadow-lg hover:bg-emerald-700 transition"
          >
            Submit
          </button>
        </form>
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
