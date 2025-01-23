import React from 'react';
import Navbar from './Components/Navbar';
import JournalAdSection from './Components/JournalAd';


import { signOut } from "firebase/auth"

import InfoSection from './Components/InfoSection';
import Footer from './Components/Footer';
import { auth } from './config/firebase';

function App() {
  


  
  return (
   <>
   
   <JournalAdSection/>
   <InfoSection/>
   
   </>
  );
}

export default App;