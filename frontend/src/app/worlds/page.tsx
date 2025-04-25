//app/worlds/page.tsx

'use client';
import React, { useEffect, useRef, useState } from 'react';
import ImageGallery from '../components/ImageGallery';
const WorldPage = () => {
  const images = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'];

  const characterInfo = [
    { name: 'Character 1', description: 'Description of Character 1.' },
    { name: 'Character 2', description: 'Description of Character 2.' },
    { name: 'Character 3', description: 'Description of Character 3.' },
    { name: 'Character 4', description: 'Description of Character 4.' },
  ];

  return (
    <>
      <div
        style={{
          backgroundColor: 'black',
          minHeight: '100vh',
          color: 'white',
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ marginBottom: '20px' }}>The Band</h1>
        <ImageGallery images={images} characterInfo={characterInfo} />
      </div>
    </>
  );
};


export default WorldPage;
