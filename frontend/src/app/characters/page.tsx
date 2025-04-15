'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const CharacterPage = () => {
  const images = ['g.jpg', 'd.jpg', 'p.jpg', 'b.jpg'];
  const characterInfo = [
    { name: 'Character 1', description: 'Description of Character 1.' },
    { name: 'Character 2', description: 'Description of Character 2.' },
    { name: 'Character 3', description: 'Description of Character 3.' },
    { name: 'Character 4', description: 'Description of Character 4.' },
  ];

  const [focusedImage, setFocusedImage] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setFocusedImage(index);
  };

  const handleCloseFocus = () => {
    setFocusedImage(null);
  };

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '20px' }}>Image Showcase</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => handleImageClick(index)}
              style={{
                cursor: 'pointer', // Indicate interactivity
                position: 'relative', // Needed for absolute positioning of focused content
              }}
            >
              <img
                src={`/${img}`}
                alt={`Character ${index + 1}`}
                style={{
                  maxWidth: '200px',
                  height: 'auto',
                  border: '2px solid white',
                  borderRadius: '8px',
                  transition: 'transform 0.2s ease-in-out', // Smooth transition
                  transform: focusedImage === index ? 'scale(1.2)' : 'scale(1)', // Enlarge when focused
                  boxShadow: focusedImage === index ? '0 0 20px rgba(255, 255, 255, 0.7)' : 'none', // Add shadow
                }}
              />
              {focusedImage === index && (
                <div
                  style={{
                    position: 'fixed', // Use fixed positioning for the overlay
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark semi-transparent overlay
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10, // Ensure it's on top
                    cursor: 'pointer', // Close on click
                  }}
                  onClick={handleCloseFocus}
                >
                  <div
                    style={{
                      backgroundColor: 'black', // Background for text and image
                      borderRadius: '8px',
                      padding: '20px',
                      maxWidth: '80%', // Limit the width
                      maxHeight: '80%',
                      overflowY: 'auto', // Allow scrolling if content is too long
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '20px',
                    }}
                  >
                    <img
                      src={`/${img}`}
                      alt={`Character ${index + 1}`}
                      style={{
                        maxWidth: '400px', // Larger image in focus view
                        height: 'auto',
                        border: '2px solid white',
                        borderRadius: '8px',
                      }}
                    />
                    <div>
                      <h2 style={{ fontSize: '24px' }}>{characterInfo[index].name}</h2>
                      <p style={{ fontSize: '16px', textAlign: 'left' }}>{characterInfo[index].description}</p>
                    </div>
                    <button onClick={handleCloseFocus} style={{position: 'absolute', top: '10px', right: '10px', color: 'white', background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer'}}>
                      X
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CharacterPage;