import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
// The layout with Navbar and Footer
import App from "./App"; // The home page
 // Species detail page
import Layout from "./Layout";

import ResarchPage from './Components/Pages/ResarchPage.jsx'
import Joinus from './Components/Pages/Joinus.jsx'
import Login from "./Components/Pages/Login.jsx";
import Signup from "./Components/Pages/Signup.jsx";
import EachResearch from "./Components/Pages/EachResearch.jsx";
import AboutUs from "./Components/Pages/AboutUs.jsx";
import PrivacyPolicy from "./Components/Pages/PrivacyPollicy.jsx";
import ResearchPage1 from "./Components/Pages/RresearchPage1.jsx";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout />, // Always show Layout (with Navbar & Footer)
    children: [
      {
        path: "/", // Home route
        element: <App />, // Show App component in the Layout
      },
      {
        path: "Research", // Dynamic route for species detail
        element: <ResearchPage1 />, // Show SpeciesDetail component in the Layout
      },
      {
        path: "Join", // Dynamic route for species detail
        element: <Joinus />, // Show SpeciesDetail component in the Layout
      },
      {
        path: "Login", // Dynamic route for species detail
        element: <Login />, // Show SpeciesDetail component in the Layout
      },
      {
        path: "Signup", // Dynamic route for species detail
        element: <Signup />, // Show SpeciesDetail component in the Layout
      },
      {
        path: "/research/:id", // Dynamic route for species detail
        element: <EachResearch />, // Show SpeciesDetail component in the Layout
      },
      {
        path: "About", // Dynamic route for species detail
        element: <AboutUs />, // Show SpeciesDetail component in the Layout
      },
      {
        path: "Privacy", // Dynamic route for species detail
        element: <PrivacyPolicy />, // Show SpeciesDetail component in the Layout
      },

      
      // Add more routes here as needed
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);