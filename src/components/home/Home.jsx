import React, { useState, useEffect, useMemo } from 'react';
import'./Home.scss'
import { ReactComponent as Building } from '../../icons/building.svg';
import { ReactComponent as Cloud } from '../../icons/cloud.svg';
import { ReactComponent as CloudTop } from '../../icons/cloudTop.svg';
import { ReactComponent as Bird } from '../../icons/bird.svg';
import { ReactComponent as Moon } from '../../icons/moon.svg';
import { ReactComponent as Sun } from '../../icons/sun.svg';
import { ReactComponent as LetsTalk } from '../../icons/letsTalk.svg';

const Home = () => {
    const [ switchText, setSwitchText ] = useState('Branding')
    const [ isDay, setIsDay ]= useState( true )
    const headerWords = ['Branding', 'Marketing']
    

    const textSwitch = () => (setInterval(() => {
        let number = Math.floor((Math.random() * 2) + 0);
        setSwitchText(headerWords[number])
    }, 3000))

    const toggleTheme = () => {
      setIsDay(!isDay)
    }

    useEffect(() => {
      textSwitch()
    }, []);

    return (
      <div>
        <div className="home-text">
           <p>Design</p>
           <p>that</p>
           <p>works</p>
           <p>
                GET TO KNOW US
              </p>
        </div>
        <div className="home-header">
          <img src={require('../../icons/images/homepagephoto.png')} />
        </div>
        <div className={['home', isDay ? '' : 'home--dark-theme' ].join(' ')} >
          <div className="home__images">
                <div className="">
                {
                  isDay ? (<div className="home__images__theme" onClick={ () => toggleTheme() }><Sun /></div>) : (<div className="home__images__theme" onClick={ () => toggleTheme() }><Moon /></div>)
                }
                </div>
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
        <div className="home-footer">
          <div className="home-footer__lets-talk">
            <LetsTalk />
            <div className="home-footer__lets-talk__text">
              <p>Find out more about how we can</p>
              <p>work together</p>
            </div>
            <div className="home-footer__lets-talk__text__link">
              <p>
                START A PROJECT
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home;