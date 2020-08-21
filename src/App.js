import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Routes from './routes'
import Nav from './components/Nav/Nav'
import Menu from './components/menu/Menu'
import AppContext from './context/context';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import './App.scss'

/**
 * @description Root component
 * @returns {object} the component
 */
const App = () => {
  const [ showMenu, setshowMenu ] = useState(false);
  const [ menuClass, setMenuClass ] = useState('');
  const [ navColor, setNavColor ] = useState('')
  const [ scrollTo, setScrollTo ] = useState(true)
  const [ isDay, setIsDay ]= useState( false )

  const toggleNavColor = (color) => setNavColor(color)
  const toggleScrollTo= (color) => setScrollTo(color)

  const toggleMenu = () => {
    setshowMenu(!showMenu)
    showMenu ? setMenuClass('menu--close') : setMenuClass('menu--open')
  }

  useEffect(() => {
    if (moment().format('a') === 'am') setIsDay(true)
  }, [])


  return (
    <AppContext.Provider
      value={{
        navColor,
        setNavColor: (color) => toggleNavColor(color),
        isDay,
        showMenu,
        setIsDay: (val) => setIsDay(val),
        scrollTo,
        setScrollTo: (value) => toggleScrollTo(value)
      }}
    >
      <main className="main-container">
        <Router >      
          <Menu toggleMenu={toggleMenu} class={menuClass} />
          <div  className="main-container__nav">
            <Nav toggleMenu={toggleMenu} showMenu={showMenu} />
          </div>
          <div>
            <Routes />
          </div>
        </Router>
      </main>
    </AppContext.Provider>
  );
}


export default App;