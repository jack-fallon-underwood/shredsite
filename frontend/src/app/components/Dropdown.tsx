import React from 'react';
import Navbuttons from './Navbuttons';

const Dropdown = () => {
  return (
    <div className=" rounded-md shadow-lg p-2 min-w-[150px]">
      <div className="space-y-1">
        <Navbuttons
          href="https://store.steampowered.com/app/2484270/Shred_The_Undead/"
          text="@ Steam" // Added text prop
         
        />
        <Navbuttons
          href="https://jackfu.itch.io/shred-the-undead"
          text="itch.io"  // Added text prop
  

        />
      </div>
    </div>
  );
};

export default Dropdown;