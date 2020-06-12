import React from 'react';
import'./Home.scss'
import { ReactComponent as Building } from '../../icons/building.svg';
import { ReactComponent as Cloud } from '../../icons/cloud.svg';

const Home = () => {
  return (
    <div className="home">
      <div className="home__text">
        <div>
            <div className="home__header home_pd border-left">Branding</div>
            <div className="home__header home_pd">that</div>
            <div className="home__header home_pd">works</div>
            <span className="home__link home_pd">GET TO KNOW US</span>
        </div>
        <div className="home__decription home_pd">
            <div>Let’s work with you to</div>
            <div>get desired results.</div>
        </div>
      </div>
      <div className="home__images">
         <Cloud />
         <div className="home__images__building">
          <Building />
         </div>
      </div>
    </div>
  );
}

export default Home;