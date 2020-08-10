import React, { useState, useEffect, useContext } from 'react';
import'./Home.scss'
import Typing from 'react-typing-animation';
import { ReactComponent as Building } from '../../icons/building.svg';
import { ReactComponent as Cloud } from '../../icons/cloud.svg';
import { ReactComponent as CloudTop } from '../../icons/cloudTop.svg';
import { ReactComponent as Bird } from '../../icons/bird.svg';
import { ReactComponent as Moon } from '../../icons/moon.svg';
import { ReactComponent as Sun } from '../../icons/sun.svg';
import { ReactComponent as LetsTalk } from '../../icons/letsTalk.svg';
import { ReactComponent as  PowerIcon } from '../../icons/navIcon.svg';
import { Link } from "react-router-dom";
import AppContext from '../../context/context';
import { useOnScreen } from '../../hooks/index';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 

const Home = () => {
    const { setNavColor } = useContext(AppContext);
    const [ bodyRef, visible ] = useOnScreen({ threshold: 0.5 })
    const [ headerRef, HeaderVisible ] = useOnScreen({ threshold: 0.80 })
    const [ switchText, setSwitchText ] = useState('Branding')
    const [ isDay, setIsDay ]= useState( true )
    const headerWords = ['Branding', 'Content', 'Design', 'Market Intelligence']
    const coverImageList = [
      ( <div className={[switchText === 'Branding' ? 'home-header__cover-image--animate' : 'dont-display', 'home-header__cover-image' ].join(' ')}><img className={['home-header__cover-image' ].join(' ')} src='https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/b-image-3.png?alt=media&token=0f4650e6-a861-4dcf-a7fc-f8c69ee49ab9' /></div>),
      (<div className={[switchText === 'Content' ? 'home-header__cover-image--animate' : 'dont-display', 'home-header__cover-image' ].join(' ')}><img className={['home-header__cover-image' ].join(' ')} src='https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/bg-image-2.png?alt=media&token=187dec00-1902-4f39-b394-c13e1cbdbfa5' /></div>),
      (<div className={[switchText === 'Design' ? 'home-header__cover-image--animate' : 'dont-display', 'home-header__cover-image' ].join(' ')}><img className={['home-header__cover-image' ].join(' ')}  src='https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/bg-image.png?alt=media&token=875a2204-5623-4551-a222-edd2ee83496d' /></div>),
      (<div className={[switchText === 'Market Intelligence' ? 'home-header__cover-image--animate' : 'dont-display', 'home-header__cover-image' ].join(' ')}><img className={['home-header__cover-image' ].join(' ')}  src='https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/bg-image-4.png?alt=media&token=9626ed91-e15e-41e5-bda9-aba153a2d786' /></div>), 
    ]
    let images = []
    let [reserve, setReserve] = useState();
    let [ counter, setCounter ] = useState(0)
    const executeScroll = (ref) => scrollToRef(ref)
    

    useEffect(() => {
      setNavColor('white')
    }); 

    //#endregion
    useEffect(() => { 
      if(HeaderVisible) {
        executeScroll(headerRef);
      }
    }, [ HeaderVisible ])

    const toggleTheme = () => {
      setIsDay(!isDay)
    }

    const AfterType = () => {
       console.log(reserve, counter)
       if (counter === headerWords.length - 1) {
          setSwitchText(headerWords[0])
          setCounter(0)
       } else {
          setCounter(counter + 1)
          setSwitchText(headerWords[counter + 1])
       }
    }
  

    // const image = () => (<img className="home-header__cover-image" src={coverImage} />)

    return (
      <main className={['home', isDay ? '' : 'home--dark-theme' ].join(' ')}>
        <div className="home-text-headers">
           <p className="home-text-headers__text home-text-headers__bold">
            {   HeaderVisible ?        
              (<Typing onFinishedTyping={() => AfterType()} loop={true} speed={200} startDelay={50}>
              <span>{switchText}</span>
              <Typing.Backspace count={switchText.length} delay={4000} />
            </Typing>) : switchText}
            </p>
           <p className="home-text-headers__text home-text-headers__medium">that</p>
           <p className="home-text-headers__text home-text-headers__medium">works</p>
           <p className="home-text-headers__link">GET TO KNOW US</p>
        </div>
        <div className="home-header" ref={headerRef}>
            { coverImageList[counter] }
           <img onClick={() => executeScroll(bodyRef)} className="home-header__direction-icon" src={require('../../icons/downward-arrow.png')} />
        </div>
        <div className={["home-body", isDay ? '' : 'home-body--dark-theme'].join(' ')} ref={bodyRef}>
          <div className={["home-text-body", visible? 'home-text-body--animate-in' : 'home-text-body--animate-out'].join(' ')}>
             <h2>The <span style={{ color:'#FF5F4B' }}>p<div style={{ width: '45px', display: 'inline-block'}}><PowerIcon /></div>wer</span> to create</h2>           
            <p>
              We’re a marketing agency. We work with goal oriented brands and companies to create digital marketing solutions that people love. Because what works for people, works for business.
            </p>
            <div className="home-text-body__link">
              <Link> Get to know us</Link>
            </div>
          </div>
          <div className="home__images">
               <div className="home__toggle-button">
                  <input type="checkbox" id="switch" onClick={ () => toggleTheme() } /><label for="switch">Toggle</label>
                  { isDay ? (<div className="home__images__theme"><Sun /></div>) : (<div className="home__images__theme"><Moon /></div>)}
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
        <div className={["home-footer", isDay ? '' : 'home-footer--dark-theme'].join(' ')}>
          <div className="home-footer__lets-talk">
            <LetsTalk />
            <div className="home-footer__lets-talk__text">
              <p>Find out more about how we can</p>
              <p>work together</p>
            </div>
            <div className="home-footer__lets-talk__text__link">
              <Link to="/contact">START A PROJECT</Link>
            </div>
          </div>
        </div>
      </main>
    );
}

export default Home;