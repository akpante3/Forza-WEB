import React from 'react';
import {
  Link
} from "react-router-dom";
import './About.scss'

const About = (props) => {

  return (
    <div>
      <div className="about">
        <div className="about__item">
          <div>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/1YuN3POoNnQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div>
              <div className="about__header"> The power to create </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;