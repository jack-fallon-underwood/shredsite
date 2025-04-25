'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbuttons from './Navbuttons';
import Dropdown from './Dropdown';
import { useClientMediaQuery } from '@/app/hooks/useClientMediaQuery';
import { useOverlay } from '../context/OverlayContext';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const { showNavbar } = useOverlay();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useClientMediaQuery('(max-width: 640px)');

  if (!showNavbar) return null;

  const handleMouseEnterBuyNow = () => setIsDropdownVisible(true);
  const handleMouseLeaveBuyNow = () => setTimeout(() => setIsDropdownVisible(false), 100);

  const menuItems = (
    <>
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
    </>
  );

  return (
    <div className="flex items-center justify-between w-full mt-8 mb-4 px-4 sm:px-6 md:px-8">
      {/* Left: Logo */}
      <Link href="/" style={{ textDecoration: 'none' }}>
        <h1
          className="text-left ml-2 sm:ml-0"
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
  
      {/* Desktop menu (hidden on mobile) */}
      <div className="hidden sm:flex items-center gap-6">
        {menuItems}
      </div>
  
      {/* Right: Hamburger icon for mobile */}
      <div className="sm:hidden mr-2">
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
          {menuOpen ? <X className="w-8 h-8 text-white" /> : <Menu className="w-8 h-8 text-white" />}
        </button>
      </div>
  
      {/* Full-screen mobile menu with backdrop */}
      {menuOpen && (
        <div className="fixed inset-0 z-[9999] bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300 ease-in-out">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-white hover:scale-110 transition-transform duration-200"
            >
              <X className="w-8 h-8" />
            </button>
            {menuItems}
          </div>
        </div>
      )}
    </div>
  );
}  

export default Navbar;