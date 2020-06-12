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

  const toggleMenu = () => {
    setshowMenu(!showMenu)
  }
  return (
    <main className="main-container">
      <Menu toggleMenu={toggleMenu} open={showMenu}/>
      <div  className="main-container__nav">
        <Nav toggleMenu={toggleMenu} />
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