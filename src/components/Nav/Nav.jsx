import React, { useState, useEffect } from 'react';
import { useRouteMatch, useLocation } from "react-router-dom";
import { ReactComponent as  NavIcon } from '../../icons/navIcon.svg';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import { ReactComponent as MenuButton } from '../../icons/hamburger.svg';
import { ReactComponent as CloseButton } from '../../icons/closebutton.svg';
import'./Nav.scss'

const Nav = (props) => {
  const { toggleMenu,  showMenu } = props
  const location = useLocation()
  const [ navName, setNavName ] = useState('')

  useEffect(() => {
      if (location.pathname === '/about') {
        setNavName('About')
      } else if (location.pathname === '/team') {
        setNavName('Our Team')
      } else {
        setNavName('What we do')
      }
  }, [location])

  const match = useRouteMatch({
    path: "/",
    strict: true,
    sensitive: true
  });

  return (
    <nav className="nav">
        <div className="nav__logo">
          { match.isExact ? <Logo /> : <div className="nav-icon"><NavIcon /><span className="nav-icon__name">{ navName }</span></div> }
        </div>
        <div className="nav__menu" onClick={() => toggleMenu()}>
            { showMenu ?  <CloseButton className="nav__close nav__menu" /> : <MenuButton className="nav__menu nav__open" /> }
        </div>
    </nav>
  );
}

export default Nav;