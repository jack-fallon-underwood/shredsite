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
     <div className="flex flex-col pt-40 items-center">
  {showNavbar && (
    <>
      <div className="flex flex-col items-center pt-40">
        <div className="w-full max-w-4xl aspect-video mt-8 mb-8">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/G2vG_hTqQfo"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Social Links */}
        <div className="flex gap-9 z-50 max-w-sm">
          {/* Instagram */}
          <a href="https://www.instagram.com/shredtheundead/" target="_blank" rel="noopener noreferrer">
            <Image src="/R.png" alt="Instagram" width={48} height={48} className="hover:opacity-80 transition duration-300" />
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/jack-underwood/" target="_blank" rel="noopener noreferrer">
            <Image src="/Rr.png" alt="LinkedIn" width={56} height={56} className="hover:opacity-80 transition duration-300" />
          </a>
          {/* Email */}
          <a href="mailto:musicians.shredtheundead@gmail.com" target="_blank" rel="noopener noreferrer">
            <Image src="/Rrr.png" alt="Email" width={44} height={44} className="hover:opacity-80 transition duration-300" />
          </a>
        </div>
      </div>
    </>
  )}
</div>

    </>
  );
};

export default Home;