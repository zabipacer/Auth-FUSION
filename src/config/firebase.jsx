// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Note: not "firebase/firestore/lite"
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "fusion-journal-of-engg-and-sci.firebaseapp.com",
  projectId: "fusion-journal-of-engg-and-sci",
  storageBucket: "fusion-journal-of-engg-and-sci.firebasestorage.app",
  messagingSenderId: "227752215255",
  appId: "1:227752215255:web:842fb3c6f5a234122ee692",
  measurementId: "G-3ZRXVJX9RL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // using full Firestore
export const DB = getDatabase(app);
export default app;
