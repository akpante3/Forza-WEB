import React from 'react';
import {
  Link
} from "react-router-dom";
import SideNav from '../sideNav/SideNav';
import { useOnScreen } from '../../hooks/index';
import { aboutNavList } from '../../utils/lists';
import { ReactComponent as  NavIcon } from '../../icons/navIcon.svg';

const WhoWeAre = (props) => {
  const [ref, visible] = useOnScreen({ threshold: 0.1 })

  return (
      <div className="who-we-are" ref={ref}>
        <SideNav visible={visible} list={ aboutNavList } />
        <div className="who-we-are__item-container">
          <div className="who-we-are__item who-we-are__video">
              <iframe width="460" height="415" src="https://www.youtube.com/embed/1YuN3POoNnQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="who-we-are__item">
              <div className="who-we-are__header"> <div>The <span>p<div className="who-we-are__power-icon"><NavIcon /></div>wer</span></div> <div>to create</div> </div>
              <p>We are Forza, a result-oriented marketing communications agency. We work with brands and businesses to create marketing solutions that people love. Because what works for people, works for business.</p>
              <p>With our robust portfolio and in-house capacity in brand & identity development, design & creation, communications & public relations, digital marketing, content production, strategic consulting and social media/community management, Forza delivers fresh contemporary marketing and advertising services to individuals, MSMEs and large corporations.</p>
          </div>
        </div>
      </div>
  );
}

export default WhoWeAre;