'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbuttons from './Navbuttons';
import Dropdown from './Dropdown';
import { useOverlay } from '../context/OverlayContext';

const Navbar = () => {
  const { showNavbar } = useOverlay();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  if (!showNavbar) return null;

  const handleMouseEnterBuyNow = () => setIsDropdownVisible(true);
  const handleMouseLeaveBuyNow = () => setTimeout(() => setIsDropdownVisible(false), 100);

  return (
    <div className="w-full flex flex-col items-center mt-8 px-4 sm:px-6 md:px-8">
      {/* Logo centered */}
      <Link href="/" style={{ textDecoration: 'none' }}>
        <h1
          className="ml-2 sm:ml-0"
          style={{
            color: 'red',
            fontFamily: 'Z',
            fontSize: '40px',
            cursor: 'pointer',
            marginBottom: "12px"
          }}
        >
          Shred The Undead
        </h1>
      </Link>

      {/* Always-visible nav buttons */}
      <div className="flex items-center gap-6">
        <Navbuttons text="Band" myStyle={{ color: 'orange' }} href="/characters" />
        <Navbuttons text="Music" myStyle={{ color: 'lime' }} href="/music" />
        {/* <Navbuttons
          text="Upcoming"
          myStyle={{ color: 'royalblue' }}
          href="/upcoming"
          fontSize="text-4xl text-pink-600"
        /> */}
        <div
          onMouseEnter={handleMouseEnterBuyNow}
          onMouseLeave={handleMouseLeaveBuyNow}
          style={{ position: 'relative' }}
        >
          <Navbuttons
            text="Buy Now"
            myStyle={{ color: 'royalblue' }}
            href="https://store.steampowered.com/app/2484270/Shred_The_Undead/"
          />
          {isDropdownVisible && (
            <div style={{ position: 'absolute', top: '100%', left: 0, zIndex: 10 }}>
              <Dropdown />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;