//components/Navbar.tsx
'use client';
import React, { useState } from 'react';
import Navbuttons from './Navbuttons';
import Link from "next/link";
import { useClientMediaQuery } from '@/app/hooks/useClientMediaQuery';
import Dropdown from './Dropdown'; // Assuming you have a Dropdown component

const Navbar = () => {
  const isMobile = useClientMediaQuery('(max-width: 500px)');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnterBuyNow = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeaveBuyNow = () => {
    // Optional: Add a small delay to prevent premature closing
    setTimeout(() => {
      setIsDropdownVisible(false);
    }, 100);
  };

  return (
    <div className="navbar-container flex justify-center items-center" >
      <Link href="/" style={{ textDecoration: 'none' }}> {/* Link for the title */}
        <h1 style={{ color: 'red', fontFamily: 'Z', fontSize: '40px', marginRight: '20px', cursor: 'pointer' }} >
          Shred The Undead
        </h1>
      </Link>
      <Navbuttons text="Characters" myStyle={{ color: 'orange' }} href='/characters' />
      <Navbuttons text="Worlds" myStyle={{ color: 'yellow' }} href='/worlds' />
      <Navbuttons text="Music" myStyle={{ color: 'lime' }} href='/music' />
      <Navbuttons text="Items" myStyle={{ color: 'royalblue' }} href='/items' />
      <Navbuttons text="Upcoming" myStyle={{ color: 'purple' }} href='/upcoming' />
      <div
        onMouseEnter={handleMouseEnterBuyNow}
        onMouseLeave={handleMouseLeaveBuyNow}
        style={{ position: 'relative' }} // Needed for absolute positioning of the dropdown
      >
        <Navbuttons text="Buy Now" myStyle={{ color: 'indigo' }} href='https://store.steampowered.com/app/2484270/Shred_The_Undead/' />
        {isDropdownVisible && (
          <div style={{ position: 'absolute', top: '100%', left: 0, zIndex: 10 }}>
            <Dropdown /> {/* Render your Dropdown component here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;