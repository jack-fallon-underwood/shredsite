'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import ImageGallery from '../components/ImageGallery';

const CharacterPage = () => {
  const images = ['g.jpg', 'd.jpg', 'p.jpg', 'b.jpg'];
  const characterInfo = [
    { name: 'Ami the Guitarist', description: 'Description of Character 1.' },
    { name: 'Russo the Drummer', description: 'Description of Character 2.' },
    { name: 'Sara the Pianist', description: 'Description of Character 3.' },
    { name: 'Grog the Bassist', description: 'Description of Character 4.' },
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
        <h1 style={{ marginBottom: '20px' }}>Image Showcase</h1>
        <ImageGallery images={images} characterInfo={characterInfo} />
      </div>
    </>
  );
};

export default CharacterPage;
