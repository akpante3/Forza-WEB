import React, { useEffect } from 'react';
import {
  useParams, useHistory
} from "react-router-dom";
import WhoWeAre from '../../components/about/WhoWeAre';
import Philosophy from '../../components/about/Philosophy';
import Thinking from '../../components/about/Thinking';
import WorkFlow from '../../components/about/WorkFlow';
import Footer from '../../components/app-footer/Footer';
import Client from '../../components/about/Clients';
// import AppContext from '../../context/context';
import { useOnScreen } from '../../hooks/index';
import './About.scss'
// import { SlowBuffer } from 'buffer';


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 

const About = (props) => {
  const [thinkingRef] = useOnScreen({ threshold: 0.8 })
  const [philosophyRef] = useOnScreen({ threshold: 0.8 })
  const [whoWeAreRef] = useOnScreen({ threshold: 0.8 })
  const [footerRef] = useOnScreen({ threshold: 0.8 })
  const [ clientRef, clientRefVisible ] = useOnScreen({ threshold: 1.0 })

  let { section } = useParams();
  let history = useHistory()

  const executeScroll = (ref) => scrollToRef(ref)
  
  useEffect(() => {
    const paramList = ['who-we-are', 'philosophy', 'thinking', 'workflow', 'clients']
    if (!paramList.includes(section)) history.push('/404')
  }, [section, history]);   


  const wheelEvent =  (event, link) => {
    if (event.nativeEvent.wheelDelta > 0) {
      history.push(`/about/${link.to}`)
    } else {
      history.push(`/about/${link.from}`)
    }
  }


  var lastY;

  return (
    <main className="main">
      <div className={['page-container', 'snap-scroll', section === 'who-we-are' ? 'page-container--show' : 'page-container--hide' ].join(' ')} 
        onWheel={ event => {
          if (event.nativeEvent.wheelDelta > 0) {
            return
          } else { 
            history.push('/about/philosophy')  
          }
        }}
        // onTouchMove={(event) => {
        //   let currentY = event.nativeEvent.touches[0].clientY
        //   if(currentY > lastY){
        //     return
        //     // moved down
        //   } else if(currentY < lastY){
        //     // moved up
        //     console.log('moved up')
        //     history.push('/about/philosophy') 
        //   }
        //   lastY = currentY;
        // }}
        ref={ whoWeAreRef }>
        <WhoWeAre  />
      </div>

      <div className={['page-container', 'snap-scroll', section === 'philosophy' ? 'page-container--show' : 'page-container--hide' ].join(' ')} ref={ philosophyRef } 
        onWheel={ event => wheelEvent(event, {to:'who-we-are', from: 'thinking'})}
        onTouchMove={(event) => {
          let currentY = event.nativeEvent.touches[0].clientY

          if(currentY > lastY){
            if (window.scrollY === 0) history.push('/about/who-we-are')
          } else if(currentY < lastY){
            if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
              history.push('/about/thinking') 
            }
          }
          lastY = currentY;
        }}
      >
        <Philosophy />
      </div>


      {/* <div classNasnap-scrollme="snap-scroll" ref={ thinkingRef }> */}
      {/* section === 'philosophy' */}
      <div className={['page-container', 'snap-scroll', section === 'thinking' ? 'page-container--show' : 'page-container--hide' ].join(' ')} 
      onWheel={ event => wheelEvent(event, {to:'philosophy', from: 'workflow'})} 
      // onTouchMove={ event => {
      //   let currentY = event.nativeEvent.touches[0].clientY

      //   if(currentY > lastY){
      //     if (window.scrollY == 0) history.push('/about/philosophy')
      //   } else if(currentY < lastY){
      //     if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      //        history.push('/about/workflow')
      //     }
      //   }
      //   lastY = currentY;
      // }}
    ref={ thinkingRef } >
        <Thinking />
      </div>


      <div className={['page-container', 'snap-scroll', section === 'workflow' ? 'page-container--show' : 'page-container--hide' ].join(' ')} 
      onWheel={ event => wheelEvent(event, {to:'thinking', from: 'clients'})} 
      onTouchMove={(event) => {
        let currentY = event.nativeEvent.touches[0].clientY

        if(currentY > lastY){
          if (window.scrollY === 0) history.push('/about/thinking')
        } else if(currentY < lastY){
          if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            history.push('/about/clients')
          }
        }
        lastY = currentY;
      }}
      ref={ thinkingRef } >
        <WorkFlow />
      </div>

      <div className={['page-container', 'snap-scroll', section === 'clients' ? 'page-container--show' : 'page-container--hide' ].join(' ')} 
        onWheel={ event => {
          if (event.nativeEvent.wheelDelta > 0) {
            if (clientRefVisible) {
              history.push('/about/workflow')
            }
          } else {
            executeScroll(footerRef)
          }
        }}
        // onTouchMove={(event) => {
        //   let currentY = event.nativeEvent.touches[0].clientY
        //   if(currentY > lastY){
        //     if (window.scrollY == 0) history.push('/about/workflow')
        //   } 
        //   lastY = currentY;
        // }}
      >
          <div ref={clientRef}>
            <Client />
          </div>
          <div ref={footerRef} >
            <Footer bg='white' next={{ link: "/services/our-services", name: "Our Services" }} previous={{ name: "Our Work", link: "/our-work" }}  />
          </div>
     </div>
    </main>
  );
}

export default About;