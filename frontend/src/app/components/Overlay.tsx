//coponents/initalOverlay.tsx
import React, {FC, useState, useEffect} from 'react';
import Cookies from 'js-cookie';



interface OverlayProps {
    text?: string;
  }

const Overlay: FC<OverlayProps> = () => {
    const [black, setBlack] = useState(true)
    const [name, setName] = useState('')
    const [submitted, setSubmitted] = useState(false);


    useEffect(() => {
        Cookies.set('username', name);
    }, []);

    useEffect(() => {
        const savedName = Cookies.get('username');
        if(savedName)
        {
            setName(savedName);
        }
    })

    const handleSubmit = (name: string) => {
        setSubmitted(true);
        Cookies.set('username', name);
    };
  // Function to clear the cookie
  const handleClearCookie = () => {
    Cookies.remove('username'); // Remove the cookie
    setName(''); // Clear the state
    setSubmitted(false); // Reset submitted state
  };


return (
  <div className="">
    <div className="">
      {
        !submitted ? (
          <>
            <p className="text-red-500">Enter your name:</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-4 border-white p-2 rounded w-full"
            />
            <button
              onClick={() => handleSubmit(name)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Submit
            </button>
          </>
        )  : (
            <>
              <p className="animate-move-to-corner text-lg font-bold">
                Welcome back, {name}!</p>
              <button
                onClick={handleClearCookie}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              >
                Clear Cookie
              </button>
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default Overlay;