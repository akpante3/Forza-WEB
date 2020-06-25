import React from 'react';
import { useRouteMatch } from "react-router-dom";
import { ReactComponent as Logo } from '../../icons/logo.svg';
import { ReactComponent as MenuButton } from '../../icons/hamburger.svg';
import { ReactComponent as CloseButton } from '../../icons/closebutton.svg';
import'./Nav.scss'

const Nav = (props) => {
  const { toggleMenu,  showMenu } = props
  let match = useRouteMatch("/");
  
  return (
    <nav className="nav">
        <div className="nav__logo">
          <Logo />
        </div>
        <div className="nav__menu" onClick={() => toggleMenu()}>
            {
              showMenu ?  <CloseButton className="nav__close nav__menu" /> : <MenuButton className="nav__menu nav__open" />
            }

        </div>
    </nav>
  );
}

export default Nav;