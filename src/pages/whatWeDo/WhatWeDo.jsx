import React,{ useEffect } from 'react';
import {
  useParams, useHistory
} from "react-router-dom";
import OurServices from '../../components/whatwedo/OurServices';
import BrandIdentityDev from '../../components/whatwedo/BrandIdentityDev';
import DesginAndCreative from '../../components/whatwedo/DesignAndCreative';
import Communication from '../../components/whatwedo/Communication';
import MarketStrategy from '../../components/whatwedo/MarketStrategy';
import Footer from '../../components/footer/footer'
import {
  Link
} from "react-router-dom";
import './WhatWeDo.scss';



const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 


const WhatWeDo = (props) => {
  const ourServicesRef = React.useRef(null)
  const brandIdentityDevRef = React.useRef(null)
  const desginAndCreativeRef = React.useRef(null)
  const communicationRef = React.useRef(null)
  const marketStrategyRef = React.useRef(null)
  const executeScroll = (ref) => scrollToRef(ref)

  let { section } = useParams();

    // const { previous, next, bg } = props
  useEffect(() => {
    setTimeout(() => {
      if( section === 'our-services') {
        executeScroll(ourServicesRef)
      } else if (section === 'brand-identity-development') {
        executeScroll(brandIdentityDevRef)        
      } else if (section === 'design-and-creation') {
        executeScroll(desginAndCreativeRef)  
      } else if (section === 'communition') {
        executeScroll(communicationRef)  
      } else if (section === 'market-strategy') {
        executeScroll(marketStrategyRef)
      }
    }, 0.1)
  }, [section]);

  return (
      <div>
        <div ref={ ourServicesRef }>
          <OurServices />
        </div>
        <div ref={ brandIdentityDevRef }>
          <BrandIdentityDev />
        </div>
        <div ref={ desginAndCreativeRef }>
          <DesginAndCreative />
        </div>
        <div ref={communicationRef}>
          <Communication />
        </div>
        <div ref={marketStrategyRef}>
          <MarketStrategy />
        </div>
        <Footer bg='white' previous="Our team" next="Our Works" />
      </div>
  );
}

export default WhatWeDo;