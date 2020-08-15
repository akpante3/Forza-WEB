import React, { useState, useEffect, useContext } from 'react';
import {
  useParams, useHistory
} from "react-router-dom";
import WhoWeAre from '../../components/about/WhoWeAre';
import Philosophy from '../../components/about/Philosophy';
import Thinking from '../../components/about/Thinking';
import WorkFlow from '../../components/about/WorkFlow';
import Footer from '../../components/app-footer/Footer';
import Client from '../../components/about/Clients';
import AppContext from '../../context/context';
import { useOnScreen } from '../../hooks/index';
import './About.scss'


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 
// {
//   top: 100,
//   left: 100,
//   behavior: 'smooth'
// }
const About = (props) => {
  const [thinkingRef] = useOnScreen({ threshold: 0.8 })
  // , thinkingRefVisible philosophyRefVisible , whoWeAreRefVisible, workFlowRefVisible , clientRefVisible  SetpresentPage
  const [philosophyRef] = useOnScreen({ threshold: 0.8 })
  const [whoWeAreRef] = useOnScreen({ threshold: 0.8 })
  const [footerRef] = useOnScreen({ threshold: 0.8 })
  const [ clientRef, clientRefVisible ] = useOnScreen({ threshold: 1.0 })
  const [presentPage] = useState(' ')
  const { scrollTo, setScrollTo } = useContext(AppContext);

  let { section } = useParams();
  let history = useHistory()

  const executeScroll = (ref) => scrollToRef(ref)
  
  const disableScroll =  () => {
    setTimeout(() => {
      setScrollTo(false)
    }, 800)
  }

  
  const pushToSection = (data) => {
    // if (!scrollTo) {
      console.log(data, 'this is data')

    }    


  useEffect(() => {

  }, [section]);

  // var touchobj = e.changedTouches[0]
  // distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
  // distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
  // if (Math.abs(distX) > Math.abs(distY)){ // if distance traveled horizontally is greater than vertically, consider this a horizontal movement
  //     dir = (distX < 0)? 'left' : 'right'
  //     handletouch(e, dir, 'move', swipeType, distX) // fire callback function with params dir="left|right", phase="move", swipetype="none" etc
  // }
  // else{ // else consider this a vertical movement
  //     dir = (distY < 0)? 'up' : 'down'
  //     handletouch(e, dir, 'move', swipeType, distY) // fire callback function with params dir="up|down", phase="move", swipetype="none" etc
  // }
  // e.preventDefault() 

  return (
    <main className="main">
      {/* <div className="snap-scroll" ref={ whoWeAreRef }> */}
      <div className={['page-container', 'snap-scroll', section === 'who-we-are' ? 'page-container--show' : 'page-container--hide' ].join(' ')} onWheel={ event => {
            if (event.nativeEvent.wheelDelta > 0) {
              return
            } else { 
              history.push('/about/philosophy')  
            }
    }} ref={ whoWeAreRef }>
        <WhoWeAre  />
      </div>

    <div className={['page-container', 'snap-scroll', section === 'philosophy' ? 'page-container--show' : 'page-container--hide' ].join(' ')} ref={ philosophyRef } 
    onWheel={ event => {
          if (event.nativeEvent.wheelDelta > 0) {
            history.push('/about/who-we-are')
          } else { 
            history.push('/about/thinking')     
          }
    }}
    onTouchMove> 
        <Philosophy />
      </div>


      {/* <div classNasnap-scrollme="snap-scroll" ref={ thinkingRef }> */}
      {/* section === 'philosophy' */}
      <div className={['page-container', 'snap-scroll', section === 'thinking' ? 'page-container--show' : 'page-container--hide' ].join(' ')} onWheel={ event => {
        if (event.nativeEvent.wheelDelta > 0) {
          history.push('/about/philosophy')
        } else { 
          history.push('/about/workflow')    
        }
    }} ref={ thinkingRef } >
        <Thinking />
      </div>

      <div className={['page-container', 'snap-scroll', section === 'workflow' ? 'page-container--show' : 'page-container--hide' ].join(' ')} onWheel={ event => {
        if (event.nativeEvent.wheelDelta > 0) {
          history.push('/about/thinking')
        } else { 
          history.push('/about/clients')    
        }
    }} ref={ thinkingRef } >
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
        }}>
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