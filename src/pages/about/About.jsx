import React from 'react';
import {
  Link
} from "react-router-dom";
import WhoWeAre from '../../components/about/WhoWeAre'
import Philosophy from '../../components/about/Philosophy'
import './About.scss'
import Thinking from '../../components/about/Thinking';

const About = (props) => {

  return (
    <div>
      <WhoWeAre />
      <Philosophy />
      <Thinking />
    </div>
  );
}

export default About;