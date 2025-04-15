'use client';

import React from 'react';
import Navbar from '@/app/components/Navbar';
import MusicGrid from '@/app/components/MusicGrid';
import Link from 'next/link';

const MusicPage = () => {
  const albumRoutes = ['/music/1', '/music/2', '/music/3', '/music/4'];
  const imageSources = ['/jack.png', '/ben.png', '/ian.jpg', '/kamen.jpg']; // Replace with your actual image paths

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
      <Navbar />
      <div style={{ marginTop: '0%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ marginBottom: '5%' }}>Soundtrack Performers</h1>
      </div>
      <MusicGrid>
        {albumRoutes.map((route, index) => (
          <Link key={index} href={route} style={{ display: 'block', width: '100%', height: '50%' }}>
            <div style={{
              border: '1px solid #ccc',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              margin: '0px',
              padding: '8px',
              width: '80%',
            
            }}>
              <div>
                <img src={imageSources[index]} alt={`Album ${index + 1}`} style={{ maxWidth: '100%', height: 'auto' }} />
              </div>
            </div>
          </Link>
        ))}
      </MusicGrid>
    </div>
  );
};

export default MusicPage;