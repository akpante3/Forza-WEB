import React, { useContext } from 'react';
import AppContext from '../../context/context';
import {
  Link
} from "react-router-dom";
import './footer.scss';

const Footer = (props) => {
    const { previous, next, bg } = props
    const { setScrollTo } = useContext(AppContext);

    return (
      <div className={[ 'footer',  bg === 'white' ? 'footer--bg-white' : 'footer--bg-black' ].join(' ') }>
          <div className="footer__label">Next</div>
          <div className="footer__nav">
              <div className="footer__prev footer__nav__item" onClick={ setScrollTo(true) }><Link to={previous.link}>{ previous.name }</Link></div>
              <div className="footer__next footer__nav__item" onClick={ setScrollTo(true) }><Link to={next.link}>{ next.name }</Link></div>
          </div>
      </div>
    );
}

export default Footer;
