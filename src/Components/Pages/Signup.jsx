import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";

import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { auth,db } from "../../config/firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo:""
        });
      }
      console.log("User Signuped Successfully!!");
      toast.success("User Signuped Successfully!!", {
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
    <div className="h-screen bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-900 flex items-center justify-center text-white">
  <div className="bg-white text-emerald-700 p-8 rounded-lg shadow-lg max-w-sm w-full">
    <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
    <form onSubmit={handleSignup}>
      <div className="mb-4">
        <label htmlFor="fname" className="block text-sm font-semibold mb-2">
          First Name
        </label>
        <input
          type="text"
          id="fname"
          onChange={(e) => setFname(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
          placeholder="First name"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="lname" className="block text-sm font-semibold mb-2">
          Last Name
        </label>
        <input
          type="text"
          id="lname"
          onChange={(e) => setLname(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
          placeholder="Last name"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-semibold mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
          placeholder="Enter email"
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
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
          placeholder="Enter password"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-emerald-700 text-white font-semibold rounded-lg shadow-lg hover:bg-emerald-800 transition"
      >
        Sign Up
      </button>
    </form>
    <p className="text-sm mt-4 text-center">
      Already Signed Up?{' '}
      <a href="/login" className="text-emerald-500 hover:underline">
        Login
      </a>
    </p>
  </div>
</div>

  );
}
export default Signup;
