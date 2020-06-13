import React, { useState, useEffect } from 'react';
import Routes from './routes'
import Nav from './components/Nav/Nav'
import Menu from './components/menu/Menu'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import './App.scss'

/**
 * @description Root component
 * @returns {object} the component
 */
const App = () => {
  const [showMenu, setshowMenu] = useState(false);
  const [menuClass, setMenuClass] = useState('');

  const toggleMenu = () => {
    setshowMenu(!showMenu)
    showMenu ? setMenuClass('menu--close') : setMenuClass('menu--open')
  }
  return (
    <main className="main-container">
      <Menu toggleMenu={toggleMenu} class={menuClass} />
      <div  className="main-container__nav">
        <Nav toggleMenu={toggleMenu} showMenu={showMenu} />
      </div>
      <div>
        <Router >
          <Routes />
        </Router>
      </div>
    </main>
  );
}


export default App;