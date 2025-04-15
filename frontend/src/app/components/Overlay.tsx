//coponents/initalOverlay.tsx
import React, {FC, useState, useEffect} from 'react';
import Cookies from 'js-cookie';
import { useOverlay } from '../context/OverlayContext';


interface OverlayProps {
    text?: string;
  }

const Overlay: FC<OverlayProps> = () => {

  const { showNavbar, setShowNavBar } = useOverlay();


    const [name, setName] = useState('')
    const [instrument, setInstrument] = useState('')
    const [submittedName, setSubmittedName] = useState(false)
    const [submittedInstrument, setSubmittedInstrument] = useState(false)

    const instruments = [
      { name: 'banjo', src: '/banjoLogo.png', alt: 'Banjo' },
      { name: 'bass', src: '/bassLogo.png', alt: 'Bass' },
      { name: 'drum', src: '/drumLogo.png', alt: 'Drum' },
      { name: 'flute', src: '/fluteLogo.png', alt: 'Flute' },
      { name: 'guitar', src: '/guitarLogo.png', alt: 'Guitar' },
      { name: 'perc', src: '/percLogo.png', alt: 'Percussion' },
      { name: 'piano', src: '/pianoLogo.png', alt: 'Piano' }
    ];

    useEffect(() => {
        const savedName = Cookies.get('username')
        if(savedName)
        {
            setName(savedName);
            setSubmittedName(true);
            
        }

        const savedInstrument = Cookies.get('class')
        if(savedInstrument)
        {
          setInstrument(savedInstrument);
          setSubmittedInstrument(true);
          setShowNavBar(true);
        }

    })

    const handleSubmitName = (name: string) => {
      setSubmittedName(true);
        Cookies.set('username', name);
    };
    
    const handSubmitInstrament = (instrument: string) => 
    {
      setSubmittedInstrument(true)
        Cookies.set('class', instrument)
    };
  
  
    const handleClearCookie = () => {
    Cookies.remove('username');
    Cookies.remove('class');
    setName(''); 
    setInstrument('');
    setSubmittedName(false); 
    setSubmittedInstrument(false); 
    setShowNavBar(false);
  };


  return (
    <div>
      <div>
        {!submittedName ? (
          <>
            <p className="flex items-center justify-center">Enter your name:</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-4 border-white p-2 rounded"
            />
            <button
              onClick={() => handleSubmitName(name)}
              className="flex items-center justify-center mt-4 px-4 py-2 text-white rounded"
            >
              Submit
            </button>
          </>
        ) : (
          <>
            <p className="animate-move-to-corner text-lg font-bold">
              Welcome back, {name}!
            </p>
            <button
              onClick={handleClearCookie}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
              Reset
            </button>
          </>
        )}
      </div>

      {/* Show instrument selection after name submission */}
      {submittedName && !submittedInstrument && (
      <div className="flex flex-wrap justify-center mt-8">
      {instruments.map((instrument) => (
        <img
        style={{ maxWidth: '10vh' }}
          key={instrument.name}
          src={instrument.src}
          alt={instrument.alt}
          onClick={() => handSubmitInstrament(instrument.name)}
          className="w-24 h-24 m-4 cursor-pointer"
        />
      ))}
    </div>
      )}

      {/* Display animated selected instrument */}
      {submittedInstrument && (
        <div className="animate-move-to-corner mt-8 text-lg font-bold">
          You have selected the {instrument}!
        </div>
      )}
    </div>
  );
};

export default Overlay;
