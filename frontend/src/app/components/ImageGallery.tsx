'use client';
import React, { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
  characterInfo: { name: string; description: string }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, characterInfo }) => {
  const [focusedImage, setFocusedImage] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setFocusedImage(index);
  };

  const handleCloseFocus = () => {
    setFocusedImage(null);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
      {images.map((img, index) => (
        <div
          key={index}
          onClick={() => handleImageClick(index)}
          style={{
            cursor: 'pointer',
            position: 'relative',
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
              transition: 'transform 0.2s ease-in-out',
              transform: focusedImage === index ? 'scale(1.2)' : 'scale(1)',
              boxShadow: focusedImage === index ? '0 0 20px rgba(255, 255, 255, 0.7)' : 'none',
            }}
          />

          {focusedImage === index && (
            <div
              onClick={handleCloseFocus}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                cursor: 'pointer',
              }}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                style={{
                  backgroundColor: 'black',
                  borderRadius: '8px',
                  padding: '20px',
                  maxWidth: '80%',
                  maxHeight: '80%',
                  overflowY: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '20px',
                  position: 'relative',
                }}
              >
                <img
                  src={`/${img}`}
                  alt={`Character ${index + 1}`}
                  style={{
                    maxWidth: '400px',
                    height: 'auto',
                    border: '2px solid white',
                    borderRadius: '8px',
                  }}
                />
                <div>
                  <h2 style={{ fontSize: '24px' }}>{characterInfo[index].name}</h2>
                  <p style={{ fontSize: '16px', textAlign: 'left' }}>{characterInfo[index].description}</p>
                </div>
                <button
                  onClick={handleCloseFocus}
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    color: 'white',
                    background: 'none',
                    border: 'none',
                    fontSize: '24px',
                    cursor: 'pointer',
                  }}
                >
                  ✕
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
