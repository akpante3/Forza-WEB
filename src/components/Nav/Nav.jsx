import React from 'react';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import { ReactComponent as Menu } from '../../icons/hamburger.svg';
import'./Nav.scss'
import { createPublicKey } from 'crypto';

const Nav = (props) => {
  const { toggleMenu } = props
  return (
    <nav className="nav">
        <div className="nav__logo">
          <Logo></Logo>
        </div>
        <div className="nav__menu" onClick={() => toggleMenu()}>
          <Menu />
        </div>
    </nav>
  );
}

export default Nav;