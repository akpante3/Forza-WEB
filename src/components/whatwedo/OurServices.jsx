import React from 'react';
import {
  Link
} from "react-router-dom";
import { useOnScreen } from '../../hooks/index';

const OverServices = (props) => {
  const [ref, visible] = useOnScreen({ threshold: 0.8 })
  return (
      <div className="our-services what-we-do-container" ref={ref}>
      <div className="our-services__text">
            <p className="our-services__text__header">Our Services</p>
            <div className={['our-services__line', visible ? 'our-services__line--on' : 'our-services__line--off'].join(' ')}></div>
            <p className="our-services__text__body">Our services are birthed out of the need to ease brand communication.</p>
      </div>
            <img className="what-we-do__image" src={require('../../icons/images/image-1.png')} />
      </div>
  );
}

export default OverServices;