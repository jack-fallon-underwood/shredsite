'use client';

import React from 'react';
import { useClientMediaQuery } from '@/app/hooks/useClientMediaQuery';
import Navbar from '@/app/components/Navbar';
import MusicGrid from '@/app/components/MusicGrid';
import { useParams } from 'next/navigation';

interface ArtistData {
  name: string;
  imageSrc: string;
  bio: string;
  albumIds: string[];
  singleIds?: string[];
}

const ARTISTS: Record<string, ArtistData> = {
  '1': {
    name: '',
    imageSrc: '/jack.png',
    bio: 'Jack Fallon-Underwood is the principal architect, guitarist, debugger and producer of Shred The Undead. Each year he releases an album in alphabetical order. Jack is currently enrolled as a graduate student at Brooklyn College.',
    albumIds: ['1452735474', '3047987718', '3202651286', '2722892672', '20637885', '3742824372', '3562748246', '1254684199'],
    
  },
  '2': {
    name: '',
    imageSrc: '/ben.png',
    bio: 'Ben DeUrso is the drummer for The Bunker Brothers Trio Band and the wizard behind their rhythmic charm.',
    albumIds: ['2270247403', '4265531398',  '3871796258','2761052191'],
    singleIds:['3449032665','2502173971','2323749030','665717195']
  },
  '3': {
    name:'',
    imageSrc: '/ian.jpg',
    bio: 'Ben DeUrso is the drummer for The Bunker Brothers Trio Band and the wizard behind their rhythmic charm.',
    albumIds: ["2249615514", "3773504046", "4265531398"],
    singleIds:["2334029491", "3433223300", "4247352859","4007036561","4182138612"]
  },
  '4': {
    name:'',
    imageSrc: '/kamen.jpg',
    bio: 'Ben DeUrso is the drummer for The Bunker Brothers Trio Band and the wizard behind their rhythmic charm.',
    albumIds: ['1111111111', '2222222222'],
    singleIds:['1111111111', '2222222222']
  }
};

interface TileStyle {
  border: number;
  width: string;
  height: string;
}

const ArtistInfoFrame: React.FC<{ children: React.ReactNode; width?: string; height?: string; fontSize?: string }> = ({ children, width, height, fontSize }) => (
  <div style={{ border: '1px solid #ccc', width, height, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '8px' }}>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child) && child.type === 'span'
          ? React.cloneElement(child, { style: { ...child.props.style, fontSize } })
          : child
      )}
    </div>
  </div>
);

const ArtistPhotoFrame: React.FC<{ imageSrc: string }> = ({ imageSrc }) => (
  <div style={{ border: '1px solid #ccc', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '8px' }}>
    <img src={imageSrc} alt="Artist" style={{ maxWidth: '100%', height: 'auto' }} />
  </div>
);

const baseSrcA = (albumId: string) =>
  `https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=large/bgcol=800080/linkcol=0687f5/minimal=true/transparent=true/`;

const AlbumWrapper = ({ children }: { children: React.ReactNode }) => (
  <div style={{ justifyContent: 'center', width: '50%' }}>
    {children}
  </div>
);

const baseSrcT = (singleId: string) =>
  `https://bandcamp.com/EmbeddedPlayer/track=${singleId}/size=large/bgcol=800080/linkcol=0687f5/minimal=true/transparent=true/`;

const SingleWrapper = ({ children }: { children: React.ReactNode }) => (
  <div style={{ justifyContent: 'center', width: '50%' }}>
    {children}
  </div>
);

const Album = ({ albumId, iframeStyle }: { albumId: string; iframeStyle: React.CSSProperties }) => (
  <AlbumWrapper>
    <iframe style={iframeStyle} src={baseSrcA(albumId)} seamless />
  </AlbumWrapper>
);
const Single = ({ singleId, iframeStyle }: { singleId: string; iframeStyle: React.CSSProperties }) => (
  <SingleWrapper>
    <iframe style={iframeStyle} src={baseSrcT(singleId)} seamless />
  </SingleWrapper>
);

const MusicianPage = () => {
  const musicianid = useParams<{ musicianid?: string }>().musicianid;
  console.log(musicianid);
  const artist = ARTISTS[musicianid as string];

  const isMobile = useClientMediaQuery('(max-width: 500px)');
  const currentIframeStyle: TileStyle = isMobile
    ? { border: 0, width: '200px', height: '200px' }
    : { border: 0, width: '400px', height: '400px' };
  const currentFontSize = isMobile ? '8px' : '17px';

  if (!artist) {
    return (
      <div style={{ color: 'white', textAlign: 'center', padding: '2rem' }}>
        <h1>Artist not found</h1>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
      <Navbar />

      <h1>{artist.name}</h1>

      <MusicGrid>
        <AlbumWrapper><ArtistPhotoFrame imageSrc={artist.imageSrc} /></AlbumWrapper>
        
        <ArtistInfoFrame width={currentIframeStyle.width} height={currentIframeStyle.height} fontSize={currentFontSize}>
          <span>{artist.bio}</span>
        </ArtistInfoFrame>
        {artist.albumIds.map((albumId) => (
          <Album key={albumId} albumId={albumId} iframeStyle={currentIframeStyle} />
        ))}
     {artist.singleIds?.map((singleId) => (
          <Single key={singleId} singleId={singleId} iframeStyle={currentIframeStyle} />
        ))}
      </MusicGrid>
    </div>
  );
};

export default MusicianPage;