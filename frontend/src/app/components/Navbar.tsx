//components/Navbar.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbuttons from './Navbuttons';
import Dropdown from './Dropdown';
import { useClientMediaQuery } from '@/app/hooks/useClientMediaQuery';
import { useOverlay } from '../context/OverlayContext';

const Navbar = () => {
  const { showNavbar } = useOverlay();
  const isMobile = useClientMediaQuery('(max-width: 500px)');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  if (!showNavbar) return null;

  const handleMouseEnterBuyNow = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeaveBuyNow = () => {
    setTimeout(() => {
      setIsDropdownVisible(false);
    }, 100);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full mt-8 mb-4">
      <Link href="/" style={{ textDecoration: 'none' }}>
        <h1
          style={{
            color: 'red',
            fontFamily: 'Z',
            fontSize: '40px',
            cursor: 'pointer',
          }}
        >
          Shred The Undead
        </h1>
      </Link>

      <div className="navbar-container flex sm:flex-col justify-center items-center p-4 sm:p-6 md:p-8">
        <Navbuttons text="Characters" myStyle={{ color: 'orange' }} href="/characters" />
        <Navbuttons text="Worlds" myStyle={{ color: 'yellow' }} href="/worlds" />
        <Navbuttons text="Music" myStyle={{ color: 'lime' }} href="/music" />
        <Navbuttons text="Games" myStyle={{ color: 'royalblue' }} href="/items" />
        <Navbuttons
          text="Upcoming"
          myStyle={{ color: 'purple' }}
          href="/upcoming"
          fontSize="text-4xl text-pink-600"
        />
        <div
          onMouseEnter={handleMouseEnterBuyNow}
          onMouseLeave={handleMouseLeaveBuyNow}
          style={{ position: 'relative' }}
        >
          <Navbuttons
            text="Buy Now"
            myStyle={{ color: 'indigo' }}
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
