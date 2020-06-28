import React, { useState, useEffect } from 'react';
import {
  useParams, useHistory
} from "react-router-dom";
import WhoWeAre from '../../components/about/WhoWeAre';
import Philosophy from '../../components/about/Philosophy';
import Thinking from '../../components/about/Thinking';
import WorkFlow from '../../components/about/WorkFlow';
import Footer from '../../components/footer/footer';
import './About.scss'


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 

const About = (props) => {
  const thinkingRef = React.useRef(null)
  const philosophyRef = React.useRef(null)
  const whoWeAreRef = React.useRef(null)
  const workFlowRef = React.useRef(null)
  let { section } = useParams();
  const executeScroll = (ref) => scrollToRef(ref)

  useEffect(() => {
    setTimeout(() => {
      if( section === 'perspective') {
        executeScroll(thinkingRef)
      } else if (section === 'philosophy') {
        executeScroll(philosophyRef)        
      } else if (section === 'who-we-are') {
        executeScroll(whoWeAreRef)  
      } else if (section === 'workflow') {
        executeScroll(workFlowRef)  
      }
    }, 0.1)
  }, [section]);


  return (
    <div>
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
      <Footer previous="What we do" next="Our Works"  />
    </div>
  );
}

export default About;