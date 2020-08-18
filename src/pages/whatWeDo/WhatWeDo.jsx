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
import { Link } from "react-router-dom";
import Footer from '../../components/app-footer/Footer'
import { useOnScreen } from '../../hooks/index';
import './WhatWeDo.scss';




const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 

const WhatWeDo = (props) => {
  const [servicesRef, servicesRefVisible] = useOnScreen({ threshold: 0.5 })
  const [brandIdentityDevRef, brandIdentityDevRefVisible] = useOnScreen({ threshold: 0.5 })
  const [desginAndCreativeRef, desginAndCreativeRefVisible] = useOnScreen({ threshold: 0.5 })
  const [communicationRef, communicationRefVisible] = useOnScreen({ threshold: 0.5 })
  const [marketStrategyRef, marketStrategyRefVisible] = useOnScreen({ threshold: 1.0 })

  const { scrollTo, setScrollTo, setNavColor  } = useContext(AppContext);

  const executeScroll = (ref) => scrollToRef(ref)

  let { section } = useParams();
  let history = useHistory()
  
  // useEffect(() => {
  //   setNavColor('black')
  // }); 

  const disableScroll =  () => {
    setTimeout(() => {
      setScrollTo(false)
    }, 800)
  }

  const wheelEvent =  (event, link) => {
    if (event.nativeEvent.wheelDelta > 0) {
      if (link.to) history.push(`/services/${link.to}`)
    } else {
      if (link.from) history.push(`/services/${link.from}`)
    }
  }
  useEffect(() => {
    const paramList = ['our-services', 'brand-identity-development', 'design-and-creative', 'communication', 'market-strategy']
    if (!paramList.includes(section)) history.push('/404')
  }, [section]);   

  var lastY;
  // if( section !== 'our-services' || section !== 'brand-identity-development' || section !== 'design-and-creation' || section !== 'communication' || section !== 'market-strategy' ) {
  return (
      <main className='main'>
        <div
          className={['page-container', 'snap-scroll', section === 'our-services' ? 'page-container--show' : 'page-container--hide' ].join(' ')} 
          onWheel={ event => {
            if (event.nativeEvent.wheelDelta > 0) {
              return
            } else { 
              history.push('/services/brand-identity-development')  
            }
          }}
        ref={ servicesRef }>
          <OurServices  />
        </div>


        <div 
          className={['page-container', 'snap-scroll', section === 'brand-identity-development' ? 'page-container--show' : 'page-container--hide' ].join(' ')} 
          onWheel={ event => wheelEvent(event, {to:'our-services', from: 'design-and-creative'})}
          ref={ brandIdentityDevRef }>
          <BrandIdentityDev />
        </div>

        <div
          className={['page-container', 'snap-scroll', section === 'design-and-creative' ? 'page-container--show' : 'page-container--hide' ].join(' ')}
          onWheel={ event => wheelEvent(event, {to:'brand-identity-development', from: 'communication'})}
          ref={ desginAndCreativeRef }
        >
          <DesginAndCreative />
        </div>


        <div
          className={['page-container', 'snap-scroll', section === 'communication' ? 'page-container--show' : 'page-container--hide' ].join(' ')}
          onWheel={ event => wheelEvent(event, {to:'design-and-creative', from: 'market-strategy'})}
          ref={communicationRef}
        >
          <Communication />
        </div>
        <div className={['page-container', 'snap-scroll', section === 'market-strategy' ? 'page-container--show' : 'page-container--hide' ].join(' ')}>
          <div
            onWheel={ event => {
              if (event.nativeEvent.wheelDelta > 0) {
                if (marketStrategyRefVisible) {
                  history.push('/services/communication')
                }
              } 
            }}
          ref={marketStrategyRef}>
            <MarketStrategy />
          </div>
          <Footer bg='white' previous={{ link: "/about/who-we-are", name: "About Us" }} next={{ name: "Our Work", link: "/our-work" }} />
        </div>
      </main>
  );
}

export default WhatWeDo;