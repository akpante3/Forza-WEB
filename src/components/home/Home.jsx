import React, { useState, useEffect } from 'react';
import'./Home.scss'
import { ReactComponent as Building } from '../../icons/building.svg';
import { ReactComponent as Cloud } from '../../icons/cloud.svg';
import { ReactComponent as CloudTop } from '../../icons/cloudTop.svg';
import { ReactComponent as Bird } from '../../icons/bird.svg';

const Home = () => {
  const [ switchText, setSwitchText ] = useState('home__header__animate')
  const [ HeaderText, setHeaderText ]= useState('')
  const textHeaders = [ 'Branding', 'Marketing' ]
  
  const textSwitch = () => {
    
    if ( HeaderText === 'Branding' ) {
      setHeaderText('Marketing')
    } else {
      setHeaderText('Branding')
    }
  }

  useEffect(() => {
    setInterval(() => {
      textSwitch()
    }, 3000)
  }, {});

  return (
    <div className="home">
      <div className="home__text">
        <div>
            <div className="home__header__wrapper">
               <div className={['home__header', 'home_pd', 'border-left', 'header' ].join(' ')}><div className="home__header__animate">{ HeaderText }</div></div>
            </div>
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
          <div className="home__images__bird-one">
            <Bird />
          </div>
          <div className="home__images__cloud-top">
              <CloudTop />
          </div>
          <div className="home__images__cloud">
            <Cloud />
          </div>
         <div className="home__images__building">
          <Building />
         </div>
      </div>
    </div>
  );
}

export default Home;