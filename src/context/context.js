import React from 'react';

export default React.createContext({
    navColor: 'blue',
    setNavColor: () => {},
    scrollTo: false,
    isDay: true,
    setIsDay: () => {},
    setScrollTo: () => {}
})