'use client';

import React from 'react';
import Countdown from '@/app/components/Countdown';
import Navbar from '@/app/components/Navbar';
import MusicGrid from '@/app/components/MusicGrid';
import { useClientMediaQuery } from '@/app/hooks/useClientMediaQuery';


interface MobileTile {
  border: 0;
  width: '150px';
  height: '150px';
}

interface DesktopTile {
  border: 0;
  width: '400px';
  height: '400px';
}

interface BioFrameProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  fontSize?: string;
}

const ArtistInfoFrame: React.FC<BioFrameProps> = ({ children, width, height, fontSize }) => {
    return (
      <div style={{
        border: '1px solid #ccc',
        width: width,
        height: height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        margin: '0px',
        padding: '8px',
      }}>
        <div style={{ display: 'flex', flexDirection: "column" }}>
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === 'span') {
              return React.cloneElement(child, { style: { ...child.props.style, fontSize: fontSize } });
            }
            return child;
          })}
        </div>
      </div>
    );
  };

  const ArtistPhotoFrame: React.FC = () => {
    return (
        <div style={{
            border: '1px solid #ccc',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            margin: '0px',
            padding: '8px',
          }}>
              <div>
            <img src="/jack.png" alt="Guitarist" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
        </div>
    
    );
  };

const baseSrc = (albumId: string) =>
  `https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=large/bgcol=800080/linkcol=0687f5/minimal=true/transparent=true/`;

const AlbumWrapper = ({ children }: { children: React.ReactNode }) => (
  <div style={{ justifyContent: 'center', width: '50%' }}>
    {children}
  </div>
);

// Define Album as a component that accepts iframeStyle as a prop
const Album = ({ albumId, iframeStyle }: { albumId: string; iframeStyle: React.CSSProperties }) => (
  <AlbumWrapper>
    <iframe
      style={iframeStyle}
      src={baseSrc(albumId)}
      seamless
    >
      {/* ... */}
    </iframe>
  </AlbumWrapper>
);

const MusicPage = () => {
  const isMobile = useClientMediaQuery('(max-width: 500px)');
  const mobileStyle: MobileTile = { border: 0, width: '200px', height: '200px' };
  const desktopStyle: DesktopTile = { border: 0, width: '400px', height: '400px' };
  const currentIframeStyle = isMobile ? mobileStyle : desktopStyle; 
  const mobileFont = '8px';;
  const desktopFont = '18px';
  const currentFontSize = isMobile? mobileFont : desktopFont;
  const eventDate = '2025-09-26T23:59:59';

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
      <Navbar />
        <div style={{ marginTop: '0%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1>i album:</h1>
        <Countdown targetDateString={eventDate} />
        </div>
      <MusicGrid>
      <AlbumWrapper><ArtistPhotoFrame /></AlbumWrapper>
        <Album albumId="1452735474" iframeStyle={currentIframeStyle} />
   
       
        <Album albumId="3047987718" iframeStyle={currentIframeStyle} />

        <ArtistInfoFrame width={currentIframeStyle.width} height={currentIframeStyle.height} fontSize = {currentFontSize}>
      
         
      <span>Jack Fallon-Underwood is the principal architect, guitarist, debugger and producer of Shred The Undead. Each year he releases an album in alphabetical order. Jack is currently enrolled as a graduate student at Brooklyn College.</span>
  </ArtistInfoFrame>
      
    
     
        <Album albumId="3202651286" iframeStyle={currentIframeStyle} />
        <Album albumId="2722892672" iframeStyle={currentIframeStyle} />
        <Album albumId="20637885" iframeStyle={currentIframeStyle} />
        <Album albumId="3742824372" iframeStyle={currentIframeStyle} />
        <Album albumId="3562748246" iframeStyle={currentIframeStyle} />
        <Album albumId="1254684199" iframeStyle={currentIframeStyle} />
      </MusicGrid>
    </div>
  );
};

export default MusicPage;