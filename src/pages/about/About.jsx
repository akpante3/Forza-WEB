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
  const [thinkingRef, thinkingRefVisible] = useOnScreen({ threshold: 0.3 })
  const [philosophyRef, philosophyRefVisible] = useOnScreen({ threshold: 0.3 })
  const [whoWeAreRef, whoWeAreRefVisible] = useOnScreen({ threshold: 0.3 })
  const [workFlowRef, workFlowRefVisible] = useOnScreen({ threshold: 0.3 })
  const [ clientRef, clientRefVisible ] = useOnScreen({ threshold: 0.3 })
  const { scrollTo, setScrollTo } = useContext(AppContext);

  let { section } = useParams();
  let history = useHistory()

  const executeScroll = (ref) => scrollToRef(ref)
  
  const disableScroll =  () => {
    setTimeout(() => {
      setScrollTo(false)
    }, 500)
  }

  useEffect(() => {
    setTimeout(() => {
        if( section === 'thinking') {
          executeScroll(thinkingRef)   
        } else if (section === 'philosophy') {
          executeScroll(philosophyRef)      
        } else if (section === 'who-we-are') {
          executeScroll(whoWeAreRef)
        } else if (section === 'workflow') {
          executeScroll(workFlowRef)
        } else if (section === 'clients') {
          executeScroll(clientRef) 
        } else {
          history.push('/404')
        }
        disableScroll() 
    }, 0.1)
  }, [section]);


  
  // change route as you scroll down the page
  useEffect(() => {
    console.log(scrollTo)
    if (!scrollTo) {
      if(clientRefVisible) {
        history.push('/about/clients')
        // setScrollTo(false)
      } else if (workFlowRefVisible) {
        history.push('/about/workflow')
        // setScrollTo(false)
      } else if (whoWeAreRefVisible) {
        history.push('/about/who-we-are')
        // setScrollTo(false)
      } else if (philosophyRefVisible) {
        history.push('/about/philosophy')
        // setScrollTo(false)
      } else if (thinkingRefVisible) {
        history.push('/about/thinking')
        // setScrollTo(false)
      }
    }
  }, [
    clientRefVisible, 
    workFlowRefVisible, 
    whoWeAreRefVisible, 
    philosophyRefVisible, 
    thinkingRefVisible
  ]);


  return (
    <main>
      <div ref={ whoWeAreRef }>
        <WhoWeAre  />
      </div>
      <div ref={ philosophyRef }>
        <Philosophy />
      </div>
      <div ref={ thinkingRef } >
        <Thinking />
      </div>
      <div ref={ workFlowRef }>
        <WorkFlow />
      </div>
     <div ref={clientRef}>
        <Client />
     </div>
      <Footer bg='white' next={{ link: "/services/our-services", name: "Our Services" }} previous={{ name: "Our Works", link: "/our-works" }}  />
    </main>
  );
}

export default About;