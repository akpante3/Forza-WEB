import React, { useState, useEffect, useContext } from 'react';
import {
  useParams, useHistory
} from "react-router-dom";
import WhoWeAre from '../../components/about/WhoWeAre';
import Philosophy from '../../components/about/Philosophy';
import Thinking from '../../components/about/Thinking';
import WorkFlow from '../../components/about/WorkFlow';
import Footer from '../../components/footer/footer';
import Client from '../../components/about/Clients';
import AppContext from '../../context/context';
import { useOnScreen } from '../../hooks/index';
import './About.scss'


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 

const About = (props) => {
  const [thinkingRef, thinkingRefVisible] = useOnScreen({ threshold: 0.9 })
  const [philosophyRef, philosophyRefVisible] = useOnScreen({ threshold: 0.9 })
  const [whoWeAreRef, whoWeAreRefVisible] = useOnScreen({ threshold: 0.9 })
  const [workFlowRef, workFlowRefVisible] = useOnScreen({ threshold: 0.9 })
  const [ clientRef, clientRefVisible ] = useOnScreen({ threshold: 0.9 })
  const { scrollTo, setScrollTo } = useContext(AppContext);

  let { section } = useParams();
  let history = useHistory()

  const executeScroll = (ref) => scrollToRef(ref)
  
  useEffect(() => {
    setTimeout(() => {
      if (scrollTo) {
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
        }
      }
    }, 0.1)
  }, [section]);

  // change route as you scroll down the page
  useEffect(() => {
      if(clientRefVisible) {
        setScrollTo(false)
        history.push('/about/clients')
      } else if (workFlowRefVisible) {
        setScrollTo(false)
        history.push('/about/workflow')
      } else if (whoWeAreRefVisible) {
        setScrollTo(false)
        history.push('/about/who-we-are')
      } else if (philosophyRefVisible) {
        setScrollTo(false)
        history.push('/about/philosophy')
      } else if (thinkingRefVisible) {
        setScrollTo(false)
        history.push('/about/thinking')
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