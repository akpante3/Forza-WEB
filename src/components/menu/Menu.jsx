import React from 'react';
import {
  Link
} from "react-router-dom";
import './Menu.scss';

const Menu = (props) => {

  return (
    <div className={['menu','menu--bg-white', `${props.class}`].join(' ')}>
       <div className="menu__items">
            <div className="menu__item" onClick={props.toggleMenu}><Link to="/">Home</Link></div>
            <div className="menu__item" onClick={props.toggleMenu}><Link to="/about/who-we-are">About Us</Link></div>
            <div className="menu__item" onClick={props.toggleMenu}><Link to="/services/our-services">Our Services</Link></div>
            <div className="menu__item" onClick={props.toggleMenu}><Link to="/our-works">Our Works</Link></div>
            <div className="menu__item" onClick={props.toggleMenu}><Link to="/team">The Team</Link></div>
            <div className="menu__item" onClick={props.toggleMenu}><Link to="/contact">Contact Us</Link></div>
       </div>
    </div>
  );
}

export default Menu;