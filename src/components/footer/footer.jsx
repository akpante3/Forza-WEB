import React from 'react';
import {
  Link
} from "react-router-dom";
import './footer.scss';

const Footer = (props) => {
    const { previous, next, bg } = props

  return (
      <div className={[ 'footer',  bg === 'white' ? 'footer--bg-white' : 'footer--bg-black' ].join(' ') }>
          <div className="footer__label">Next</div>
          <div className="footer__nav">
              <div className="footer__prev footer__nav__item">{ previous }</div>
              <div className="footer__next footer__nav__item">{ next }</div>
          </div>
      </div>
  );
}

export default Footer;
