import React, { useState, useEffect, useContext } from 'react';
import { useRouteMatch, useLocation } from "react-router-dom";
import { ReactComponent as  NavIcon } from '../../icons/navIcon.svg';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import AppContext from '../../context/context';
import { ReactComponent as MenuButton } from '../../icons/hamburger.svg';
import { ReactComponent as CloseButton } from '../../icons/closebutton.svg';
import'./Nav.scss'

const Nav = (props) => {
  const { toggleMenu,  showMenu } = props
  const location = useLocation()
  const [ navName, setNavName ] = useState('')
  const { navColor } = useContext(AppContext);

  useEffect(() => {
      if (location.pathname.includes('/about')) {
        setNavName('About')
      } else if (location.pathname === '/team') {
        setNavName('Our Team')
      } else if (location.pathname === '/contact') { 
        setNavName('Contact')
      } else if (location.pathname === '/our-works') { 
        setNavName('Our Works')
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
          { match.isExact ? <Logo /> : <div className="nav-icon"><NavIcon /><span className={["nav-icon__name", navColor == 'white' ? 'nav-icon__name--white' : ''].join(' ')}>{ navName }</span></div> }
        </div>
        <div className={[ 'nav__menu']} onClick={() => toggleMenu()}>
            { showMenu ?  <div className={['nav__menu', 'nav__menu--black'].join(' ')}> <CloseButton className="nav__close" />  </div>: <div className={[ navColor == 'white' ? 'nav__menu--white' : 'nav__menu--black']}><MenuButton className={[ "nav__open"].join(' ')} /></div> }
        </div>
    </nav>
  );
}

export default Nav;