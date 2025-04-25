'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import ImageGallery from '../components/ImageGallery';

const CharacterPage = () => {
  const images = ['g.jpg', 'd.jpg', 'p.jpg', 'b.jpg'];
  const characterInfo = [
    { 
      name: 'Ami the Guitarist', 
      description: 'A free spirit who thrives in the moment, Ami is always ready to take risks and face challenges head-on. With a bold personality and an even bolder playing style, she has a unique power: when she strums a powerful chord, it sends out a wave of sound that clears the stage, wiping away any lingering chaos.' 
    },
    
    { 
      name: 'Russo the Drummer', 
      description: 'Russo is quick on his feet and always ready to lend a helping hand. His infectious energy makes him the backbone of the band, always keeping the beat going and the mood high. When needed, he can kick his drum so forcefully that it resonates like a shockwave, giving everyone around him a burst of energy and support.' 
    },
    
    { 
      name: 'Sara the Pianist', 
      description: 'Sara is a brilliant mind with a knack for planning and problem-solving. She’s the band’s tech expert, always looking for ways to enhance their performances. Her special move involves building intricate player pianos mid-performance, creating automated melodies that obliterate undead audiences.' 
    },
    
    { 
      name: 'Grog the Bassist', 
      description: 'Grog may seem unpredictable, but his raw strength and intensity make him the heart of the band. He has a knack for turning chaos into control, especially when it comes to his instrument. By syncing his rhythm perfectly with the beat, he can extend the swing of his bass, augmenting its power and impact, creating an overwhelming force that brings the crowd to their feet.' 
    },
    
  ];

  return (
    <>
      <div
        style={{
     
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

export default CharacterPage;
