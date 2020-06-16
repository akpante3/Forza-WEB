import React from 'react';
import OurServices from '../../components/whatwedo/OurServices';
import BrandIdentityDev from '../../components/whatwedo/BrandIdentityDev';
import DesginAndCreative from '../../components/whatwedo/DesignAndCreative';
import Communication from '../../components/whatwedo/Communication';
import MarketStrategy from '../../components/whatwedo/MarketStrategy';
import {
  Link
} from "react-router-dom";
import './WhatWeDo.scss';

const WhatWeDo = (props) => {
    // const { previous, next, bg } = props
  return (
      <div>
        <OurServices />
        <BrandIdentityDev />
        <DesginAndCreative />
        <Communication />
        <MarketStrategy />
      </div>
  );
}

export default WhatWeDo;