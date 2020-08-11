import React,{ useEffect, useContext } from 'react';
import {
  useParams, useHistory
} from "react-router-dom";
import AppContext from '../../context/context';
import OurServices from '../../components/whatwedo/OurServices';
import BrandIdentityDev from '../../components/whatwedo/BrandIdentityDev';
import DesginAndCreative from '../../components/whatwedo/DesignAndCreative';
import Communication from '../../components/whatwedo/Communication';
import MarketStrategy from '../../components/whatwedo/MarketStrategy';
import Client from '../../components/about/Clients';
import Footer from '../../components/app-footer/Footer'
import { useOnScreen } from '../../hooks/index';
import {
  Link
} from "react-router-dom";
import './WhatWeDo.scss';




const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 

const WhatWeDo = (props) => {
  const [servicesRef, servicesRefVisible] = useOnScreen({ threshold: 0.5 })
  const [brandIdentityDevRef, brandIdentityDevRefVisible] = useOnScreen({ threshold: 0.5 })
  const [desginAndCreativeRef, desginAndCreativeRefVisible] = useOnScreen({ threshold: 0.5 })
  const [communicationRef, communicationRefVisible] = useOnScreen({ threshold: 0.5 })
  const [marketStrategyRef, marketStrategyRefVisible] = useOnScreen({ threshold: 0.5 })

  const { scrollTo, setScrollTo } = useContext(AppContext);

  const executeScroll = (ref) => scrollToRef(ref)

  let { section } = useParams();
  let history = useHistory()

    // const { previous, next, bg } = props
  useEffect(() => {
    setTimeout(() => {
      if (scrollTo) { 
        if( section === 'our-services') {
          executeScroll(servicesRef)
        } else if (section === 'brand-identity-development') {
          executeScroll(brandIdentityDevRef)        
        } else if (section === 'design-and-creation') {
          executeScroll(desginAndCreativeRef)  
        } else if (section === 'communication') {
          executeScroll(communicationRef)  
        } else if (section === 'market-strategy') {
          executeScroll(marketStrategyRef)
        } else {
          history.push('/404')
        }
      }
    }, 0.5)
  }, [section]);


    // change route as you scroll down the page
    useEffect(() => {
      if(servicesRefVisible) {
        setScrollTo(false)
        history.push('/services/our-services')
      } else if (brandIdentityDevRefVisible) {
        setScrollTo(false)
        history.push('/services/brand-identity-development')
      } else if (desginAndCreativeRefVisible) {
        setScrollTo(false)
        history.push('/services/design-and-creation')
      } else if (communicationRefVisible) {
        setScrollTo(false)
        history.push('/services/communication')
      } else if (marketStrategyRefVisible) {
        setScrollTo(false)
        history.push('/services/market-strategy')
      }
  }, [
    servicesRefVisible, 
    brandIdentityDevRefVisible, 
    desginAndCreativeRefVisible, 
    communicationRefVisible, 
    marketStrategyRefVisible
  ]);

  return (
      <main>
        <div ref={ servicesRef }>
          <OurServices  />
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
        <Footer bg='white' previous={{ link: "/about/who-we-are", name: "About Us" }} next={{ name: "Our Works", link: "/our-works" }} />
      </main>
  );
}

export default WhatWeDo;