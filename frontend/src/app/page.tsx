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
      <div className="flex items-center justify-center w-full">
 

        {showNavbar && (
          <>
           <div className = 'flex flex-col pt-40'>
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
            <div className="flex gap-9 z-50 max-w-sm">
              {/* Instagram */}
<a
  href="https://www.instagram.com/shredtheundead/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Image
    src="/R.png"
    alt="Instagram"
    width={48}
    height={48}
    className="hover:opacity-80 transition duration-300"
  />
</a>

{/* LinkedIn */}
<a
  href="https://www.linkedin.com/in/jack-underwood/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Image
    src="/Rr.png"
    alt="LinkedIn"
    width={48}
    height={48}
    className="hover:opacity-80 transition duration-300"
  />
</a>

{/* Email */}
<a
  href="mailto:musicians.shredtheundead@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <Image
    src="/Rrr.png"
    alt="Email"
    width={48}
    height={48}
    className="hover:opacity-80 transition duration-300"
  />
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