import React from 'react';
import {
  Link
} from "react-router-dom";
import WhoWeAre from '../../components/about/WhoWeAre';
import Philosophy from '../../components/about/Philosophy';
import Thinking from '../../components/about/Thinking';
import WorkFlow from '../../components/about/WorkFlow';
import Footer from '../../components/footer/footer'
import './About.scss'

const About = (props) => {

  return (
    <div>
      <WhoWeAre />
      <Philosophy />
      <Thinking />
      <WorkFlow />
      <Footer previous="What we do" next="Our Works"  />
    </div>
  );
}

export default About;