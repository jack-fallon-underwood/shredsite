'use client';
import React from "react";
import Image from "next/image"; // Import the Image component

const SocialBar = () => { // Renamed the component to SocialBar
  return (
    <div className="flex flex-col items-center">
    <div className="flex justify-center items-center space-x-4 mt-4">
      {/* Instagram */}
      <a href="https://www.instagram.com/shredtheundead/" target="_blank" rel="noopener noreferrer">
        <Image src="/R.png" alt="Instagram" width={50} height={50} className="hover:opacity-80 transition duration-300" />
      </a>
       {/* Email */}
       <a href="mailto:musicians.shredtheundead@gmail.com" target="_blank" rel="noopener noreferrer">
        <Image src="/Rrr.png" alt="Email" width={50} height={60} className="hover:opacity-80 transition duration-300" />
      </a>
      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/jack-underwood/" target="_blank" rel="noopener noreferrer">
        <Image src="/Rr.png" alt="LinkedIn" width={50} height={50} className="hover:opacity-80 transition duration-300" />
      </a>
    
    </div>
     <div className="text-xs mt-2">Copyrighted Citizens' Loft Interactive LLC 2024</div>
     </div>
  );
};

export default SocialBar;