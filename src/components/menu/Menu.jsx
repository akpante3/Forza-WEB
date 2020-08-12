import React from 'react';
import {
  Link, useLocation
} from "react-router-dom";
import './Menu.scss';

const Menu = (props) => {
  let location = useLocation()

  return (
    <div className={['menu','menu--bg-white', `${props.class}`].join(' ')}>
       <div className="menu__items">
            <div className={["menu__item", location.pathname === '/' ? "menu__item--active" : ''].join(' ')} onClick={props.toggleMenu}><Link to="/">Home</Link></div>
            <div className={["menu__item", location.pathname.includes('/about/') ? "menu__item--active" : ''].join(' ')} onClick={props.toggleMenu}><Link to="/about/who-we-are">About Us</Link></div>
            <div className={["menu__item", location.pathname.includes('/services/') ? "menu__item--active" : ''].join(' ')} onClick={props.toggleMenu}><Link to="/services/our-services">Our Services</Link></div>
            <div className={["menu__item", location.pathname.includes('/our-work') ? "menu__item--active" : ''].join(' ')} onClick={props.toggleMenu}><Link to="/our-work">Our Work</Link></div>
            <div className={["menu__item", location.pathname.includes('/team') ? "menu__item--active" : ''].join(' ')} onClick={props.toggleMenu}><Link to="/team">The Team</Link></div>
            <div className={["menu__item", location.pathname === '/contact' ? "menu__item--active" : ''].join(' ')} onClick={props.toggleMenu}><Link to="/contact">Contact Us</Link></div>
       </div>
    </div>
  );
}

export default Menu;