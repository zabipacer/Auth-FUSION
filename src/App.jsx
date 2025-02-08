import React from 'react';
import Navbar from './Components/Navbar';
import JournalAdSection from './Components/JournalAd';


import { signOut } from "firebase/auth"

import InfoSection from './Components/InfoSection';
import Footer from './Components/Footer';
import { auth } from './config/firebase';

function App() {
  

  console.log("Firebase API Key:", process.env.REACT_APP_FIREBASE_API);

  
  return (
   <>
   
   <JournalAdSection/>
   <InfoSection/>
   
   </>
  );
}

export default App;