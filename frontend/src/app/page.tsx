'use client'; 
import Image from "next/image";
import React from "react";
import Navbar from "./components/Navbar";
import Overlay from './components/Overlay';
const Home = () => {
  return (
    <>

      <Navbar />
      <Overlay  />
    </>
    
  );
};

export default Home;