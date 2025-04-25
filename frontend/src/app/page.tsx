'use client'; 
import Image from "next/image";
import React from "react";
import Navbar from "./components/Navbar";
import Overlay from './components/Overlay';
import { useOverlay } from './context/OverlayContext';

const Home = () => {
  const { showNavbar, setShowNavBar } = useOverlay();

  return (
    <>
     <div>
   
  {showNavbar && (
    <>
      <div >
        
      
      <div className="aspect-video">
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/embed/G2vG_hTqQfo"
    title="YouTube video"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>


      </div>
    </>
  )}
</div>

    </>
  );
};

export default Home;