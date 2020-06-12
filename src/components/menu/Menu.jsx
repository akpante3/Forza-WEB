import React from 'react';
import {
  Link
} from "react-router-dom";
import './Menu.scss';

function Menu(props) {

  return (
    <div className={['menu', props.open ? 'menu--open' : 'menu--close'].join(' ')}>
       <div className="menu__items">
            <div className="menu__item" onClick={props.toggleMenu}><Link to="/about">about</Link></div>
            <div className="menu__item" onClick={props.toggleMenu}><Link to="/portfolio">portfolio</Link></div>
            <div className="menu__item" onClick={props.toggleMenu}><Link to="/my-offer">my offer</Link></div>
            <div className="menu__item" onClick={props.toggleMenu}><Link to="/contact">contact</Link></div>
       </div>
    </div>
  );
}

export default Menu;