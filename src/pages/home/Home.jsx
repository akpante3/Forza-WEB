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
import { useOnScreen } from '../../hooks/index';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 

const Home = () => {
    const [ ref, visible ] = useOnScreen({ threshold: 0.5 })
    const [ headerRef, HeaderVisible ] = useOnScreen({ threshold: 0.80 })
    const [ switchText, setSwitchText ] = useState('Services')
    const [ isDay, setIsDay ]= useState( true )
    const [ coverImage, setCoverImage ] = useState('https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/62DDFA63-EB83-4214-80BC-204EFCC0BDD4.png?alt=media&token=b74b31e5-5583-4c89-848b-f5efbe9544e1')
    const headerWords = ['Branding', 'Marketing']
    const coverImageList = ['https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/62DDFA63-EB83-4214-80BC-204EFCC0BDD4.png?alt=media&token=b74b31e5-5583-4c89-848b-f5efbe9544e1', 'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/Screen%20Shot%202020-08-04%20at%201.03.16%20AM.png?alt=media&token=a7817bff-96b5-488e-bc21-0fd0a4d9bfca']
    let [ counter, setCounter ] = useState(0)
    const executeScroll = (ref) => scrollToRef(ref)
    

    const textSwitch = () => {
        let number = Math.floor((Math.random() * 2) + 0);
        
    }

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
      setSwitchText(headerWords[counter])

      setCoverImage(coverImageList[counter])
      if ( counter == headerWords.length - 1) {
        setCounter(0)
      } else {
        counter++
        setCounter(counter)
      }
    }

    const image = () => (<img ref={headerRef} className="home-header__cover-image" src={coverImage} />)

    return (
      <main className={['home', isDay ? '' : 'home--dark-theme' ].join(' ')}>
        <div className="home-text-headers">
           <p className="home-text-headers__text home-text-headers__bold">
{   HeaderVisible ?        (<Typing onFinishedTyping={() => AfterType()} loop={true} speed={300}>
              <span>{switchText}</span>
              <Typing.Backspace count={switchText.length} />
            </Typing>) : switchText}
            </p>
           <p className="home-text-headers__text home-text-headers__medium">that</p>
           <p className="home-text-headers__text home-text-headers__medium">works</p>
           <p className="home-text-headers__link">GET TO KNOW US</p>
        </div>
        <div className="home-header">
           { image() }
           <img onClick={() => executeScroll(ref)} className="home-header__direction-icon" src={require('../../icons/downward-arrow.png')} />
        </div>
        <div className="home-body" ref={ref}>
          <div className={["home-text-body", visible? 'home-text-body--animate-in' : 'home-text-body--animate-out'].join(' ')}>
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