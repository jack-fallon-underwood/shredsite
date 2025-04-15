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
      <div className="flex items-center justify-center flex-col min-h-screen">
 

        {showNavbar && (
          <>
            <iframe
              className="mt-4"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/G2vG_hTqQfo"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* Social & Contact Links */}
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex gap-6 z-50">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/shredtheundead/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/R.png"
                  alt="Instagram"
                  className="w-12 h-12 hover:opacity-80 transition duration-300"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/jack-underwood/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/Rr.png"
                  alt="LinkedIn"
                  className="w-12 h-12 hover:opacity-80 transition duration-300"
                />
              </a>

              {/* Email */}
              <a
                href="mailto:musicians.shredtheundead@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/Rrr.png"
                  alt="Email"
                  className="w-12 h-12 hover:opacity-80 transition duration-300"
                />
              </a>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;