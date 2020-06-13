import React from 'react';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import { ReactComponent as MenuButton } from '../../icons/hamburger.svg';
import { ReactComponent as CloseButton } from '../../icons/closebutton.svg';
import'./Nav.scss'
import { createPublicKey } from 'crypto';

const Nav = (props) => {
  const { toggleMenu,  showMenu } = props
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