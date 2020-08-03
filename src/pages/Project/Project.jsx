import React from 'react';
import {
  Link
} from "react-router-dom";
import './Project.scss';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';
import 'react-awesome-slider/dist/styles.css';

const Project= (props) => {

  return (
    <main className="project">
        <div className="project__header">
          <img src={require('../../icons/images/projectheader.png')} />
        </div>
        <div className="project__text">
            <h1 className="project__text__header">Creating Safety in an Open world.</h1>
            <div className="project__text__body">
                <div className="project__text__body__decription">
                    <p>
                        We were tasked to coming up with a new brand identity that corresponds with the new ideology of the company which is centred around “safety in an open world”. The company has just evolved to a GROUP of companies. We carried out the following tasks for Halogen group and it’s 6 New Operating companies.<br /><br />
                        After quality research, we decided to work on building a comfortable brand that leveraged on their Experience, Response and Technology. Beyond their brand strategy, we designed their uniforms, branded their vehicles and other visual elements for their brand.
                    </p>
                </div>
                <div className="project__text__body__list">
                    <ul>
                        <li>Brand analysis & Research</li>
                        <li>Brand story</li>
                        <li>Brand Identity and Visual language system</li>
		                <li>Corpotae Identity Standards Manual</li>
	                    <li>Brand Strategy brochure</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="project__images">
        <AwesomeSlider  mobileTouch={true} >
            <div data-src={require('../../icons/images/imageslide1.png')} />
            <div data-src={require('../../icons/images/imageslide2.png')} />
            <div data-src={require('../../icons/images/imageslide3.png')}/>
        </AwesomeSlider>
        </div>
    </main>
  );
}

export default Project;