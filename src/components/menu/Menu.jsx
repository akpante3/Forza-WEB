import React from 'react';
import {
  Link
} from "react-router-dom";
import './Menu.scss';

const Menu = (props) => {

  return (
    <div className={['menu','menu--bg-white', `${props.class}`].join(' ')}>
       <div className="menu__items">
            <div className="menu__item" onClick={props.toggleMenu}>Home</div>
            <div className="menu__item" onClick={props.toggleMenu}>About Us</div>
            <div className="menu__item" onClick={props.toggleMenu}>Our Services</div>
            <div className="menu__item" onClick={props.toggleMenu}>Our Works</div>
            <div className="menu__item" onClick={props.toggleMenu}>The Team</div>
            <div className="menu__item" onClick={props.toggleMenu}>Contact Us</div>
       </div>
    </div>
  );
}

export default Menu;