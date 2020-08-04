import React, { useState, useEffect, useMemo } from 'react';
import'./Home.scss'
import Typing from 'react-typing-animation';
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
      <main className={['home', isDay ? '' : 'home--dark-theme' ].join(' ')}>
        <div className="home-text-headers">
           <p className="home-text-headers__text home-text-headers__bold">
           Design
           {/* <Typing>
              <span>Design</span>
              <Typing.Backspace count={20} />
            </Typing> */}
            </p>
           <p className="home-text-headers__text home-text-headers__medium">that</p>
           <p className="home-text-headers__text home-text-headers__medium">works</p>
           <p className="home-text-headers__link">GET TO KNOW US</p>
        </div>
        <div className="home-header">
          <img src="https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/Screen%20Shot%202020-08-04%20at%201.03.16%20AM.png?alt=media&token=a7817bff-96b5-488e-bc21-0fd0a4d9bfca"/>
        </div>
        <div className="home-body">
          <div className="home-text-body">
              We’re a marketing agency. We work with goal oriented brands and companies to create digital marketing solutions that people love. Because what works for people, works for business.
          </div>
          <div className="home__images">
                {/* <div className="">
                {
                  isDay ? (<div className="home__images__theme" onClick={ () => toggleTheme() }><Sun /></div>) : (<div className="home__images__theme" onClick={ () => toggleTheme() }><Moon /></div>)
                }
                </div> */}
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
      </main>
    );
}

export default Home;