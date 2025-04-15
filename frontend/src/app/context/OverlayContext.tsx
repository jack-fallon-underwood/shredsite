'use client';

import React, {createContext, useContext, useState} from 'react';

const OverlayContext = createContext({
    showNavbar: true,
    setShowNavBar: (val:boolean) => {},

});

export const useOverlay = () => useContext(OverlayContext);

export const OverlayProvider = ({children}:{children: React.ReactNode}) =>{
    const [showNavbar, setShowNavBar] = useState(false);

    return(
        <OverlayContext.Provider value = {{showNavbar, setShowNavBar}}>
            {children}
        </OverlayContext.Provider>
    )

}