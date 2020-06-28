import React from 'react';
import {
  Link
} from "react-router-dom";
import WhoWeAre from '../../components/about/WhoWeAre';
import Philosophy from '../../components/about/Philosophy';
import Thinking from '../../components/about/Thinking';
import WorkFlow from '../../components/about/WorkFlow';
import Footer from '../../components/footer/footer';
import './About.scss'


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 

const About = (props) => {
  const myRef = React.useRef(null)
  const executeScroll = () => scrollToRef(myRef)

  return (
    <div>
      <button onClick={ () => executeScroll() }> Click to scroll </button> 
      <WhoWeAre  />
      <Philosophy />
      <Thinking />
      <div ref={myRef} >
        <WorkFlow />
      </div>
      <Footer previous="What we do" next="Our Works"  />
    </div>
  );
}

export default About;