import React from 'react';
import { ReactComponent as Buldwire } from '../../icons/buldwire.svg';
import { ReactComponent as ForzaFuse } from '../../icons/forzaFuze.svg';
import { ReactComponent as ForzaFuseOff } from '../../icons/forzaFuzeoff.svg';
import {
  Link
} from "react-router-dom";

const WhoWeAre = (props) => {

  return (
      <div className="philosophy">
      <div>
          <div className="philosophy__text">
                <div className="philosophy__text__header">
                    Philosophy
                </div>
                <p className="philosophy__text__body">We’re a marketing agency. We work with goal oriented brands and companies to create digital marketing solutions that people love. Because what works for people, works for business.</p>
          </div>
      </div>
            <ForzaFuse className="philosophy__forza-fuse"/>
      </div>
  );
}

export default WhoWeAre;