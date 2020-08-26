import React, { useState, useEffect, useContext } from 'react';
import'./Home.scss'
import Typing from 'react-typing-animation';
// import {
//   useParams, useHistory
// } from "react-router-dom";
import { ReactComponent as Building } from '../../icons/building.svg';
import { ReactComponent as Cloud } from '../../icons/cloud.svg';
import { ReactComponent as CloudTop } from '../../icons/cloudTop.svg';
import { ReactComponent as Bird } from '../../icons/bird.svg';
import { ReactComponent as Talk } from '../../icons/talk.svg';
import { ReactComponent as Lets } from '../../icons/lets.svg';
import db from '../../services/firestore';
// import { ReactComponent as  PowerIcon } from '../../icons/navIcon.svg';
import { ReactComponent as DoubleBirds } from '../../icons/doubleBirds.svg';
import { Link } from "react-router-dom";
import AppContext from '../../context/context';
import { useOnScreen } from '../../hooks/index';

// Ajemart: Powering Prosperity in the Local Economy via Trade

// Task:
// Create and execute a campaign that generates considerable awareness for the Ajemart brand: Osun State’s attempt to help local producers access a market beyond their geographical confines and grow the local economy.

// Problem:
// Due to the experiences of patronizing ecommerce brands in the country, customers have grown numb to the promise of value while shopping online. They are now being presented with yet another one. We must differentiate Aje from being just a regular ecommerce outfit to one that gives maximum value to both sellers and buyers.
// Our Solution:
// We understood quickly that the success of the project would rely heavily on finding the true value points in the chain of activities and communicating them in plain terms to the users.
// Our strategy was using communication to highlight how the Ajemart offerings can be embedded in the lives of the users while underplaying the political sentiments and focusing on functional relatable communication.
// Communication was largely driven via digital channels mapping the journey of users who were already familiar with similar brands to Aje.

// Outcome:
// We delivered a digital campaign that familiarized Ajemart with over 6 million Nigerians in local and diaspora communities and also drove customer orders to more than 1000 orders/month.



const data = [
   {
     image: 'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/worksImage.png?alt=media&token=3c70c859-0f03-4be8-8f5e-b450fec2771d',
     headerImage: 'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/62DDFA63-EB83-4214-80BC-204EFCC0BDD4.png?alt=media&token=b74b31e5-5583-4c89-848b-f5efbe9544e1',
     service: 'service',
     name: 'Flytime Music Festival',
     textHeader: 'A Fusion of Art, Entertainment and Culture',
     task: 'Grow a community of engaged users and drive concert ticket sales for Flytime Music Festival: Africa’s Largest Indoor Concert',
     problem: 'With the logistics of concert arrangements being delayed, the usual attendees of the music festival weren’t engaging with the brand via digital channels. Also, their biggest competition, Afronation, had begun communications since April and was commanding a bigger share of voice.',
     solution: `We initiated the design and deployment of a deliberate content strategy. 
     Using a mix of legacy content and top notch design, we developed 
     a matrix of communication to engage users consistently with the few days left to the festival.
     The key success of this campaign was consumer targeting; by profiling all of the relevant audience groups, we were able to deliver appropriate communication to an 
     active group of individuals who were easy to convert to followers/fans of the brand.We also ensured proper management of communication across all touchpoints (Social Media, Email and Web) such that the intending consumers were not left out of loop at any point in time.`,
     outcome: `Besides growing the following of the brand across all social media channels, we also improved engagement on communication by over 1000% within 60 days. This led to sold out concerts, along with other marketing efforts, on all the days of the music festival.`,
   },
   {
    image: 'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/worksImage.png?alt=media&token=3c70c859-0f03-4be8-8f5e-b450fec2771d',
    headerImage: 'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/62DDFA63-EB83-4214-80BC-204EFCC0BDD4.png?alt=media&token=b74b31e5-5583-4c89-848b-f5efbe9544e1',
    service: 'service',
    name: 'Ajemart',
    textHeader: 'Powering Prosperity in the Local Economy via Trade',
    task: 'Create and execute a campaign that generates considerable awareness for the Ajemart brand: Osun State’s attempt to help local producers access a market beyond their geographical confines and grow the local economy.',
    problem: 'Due to the experiences of patronizing ecommerce brands in the country, customers have grown numb to the promise of value while shopping online. They are now being presented with yet another one. We must differentiate Aje from being just a regular ecommerce outfit to one that gives maximum value to both sellers and buyers.',
    solution: `We understood quickly that the success of the project would rely heavily on finding the true value points in the chain of activities and communicating them in plain terms to the users.
    Our strategy was using communication to highlight how the Ajemart offerings can be embedded in the lives of the users while underplaying the political sentiments and focusing on functional relatable communication.
    Communication was largely driven via digital channels mapping the journey of users who were already familiar with similar brands to Aje.`,
    outcome: ` We delivered a digital campaign that familiarized Ajemart with over 6 million Nigerians in local and diaspora communities and also drove customer orders to more than 1000 orders/month.`
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/worksImage.png?alt=media&token=3c70c859-0f03-4be8-8f5e-b450fec2771d',
    headerImage: 'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/62DDFA63-EB83-4214-80BC-204EFCC0BDD4.png?alt=media&token=b74b31e5-5583-4c89-848b-f5efbe9544e1',
    service: 'service',
    name: 'Coscharis Group',
    textHeader: 'Digital Transformation for a 40 Year Old Conglomerate',
    task: 'Develop a proprietary footprint for Coscharis and all its related brands across all digital channels.',
    problem: 'Coscharis, a diversified institution with trade verticals in automobile, agriculture, medical equipment & supplies, food and technology, had built a massive reputation in the Nigerian community as a progressive organisation with a commitment to the development of the society. However, they struggled with expanding the perception of the company beyond the influence of its founder, Dr. Cosmas Maduka. We were tasked with creative representation for the company on digital channels to further expand the understanding of the diversified nature of the company and connect to newer audiences.',
    solution: ``,
    outcome: `Created a growing digital footprint for the company across all channels growing at an average of 300% plus month on month. Also successfully deployed a lead generation engine connecting to users and customers all over the world and building serious consideration for all service offerings at Coscharis Group.`
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/worksImage.png?alt=media&token=3c70c859-0f03-4be8-8f5e-b450fec2771d',
    headerImage: 'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/62DDFA63-EB83-4214-80BC-204EFCC0BDD4.png?alt=media&token=b74b31e5-5583-4c89-848b-f5efbe9544e1',
    service: 'service',
    name: 'Flour Mills of Nigeria',
    textHeader: 'Digital Transformation for a 40 Year Old Conglomerate',
    task: 'Develop a proprietary footprint for Coscharis and all its related brands across all digital channels.',
    problem: 'Coscharis, a diversified institution with trade verticals in automobile, agriculture, medical equipment & supplies, food and technology, had built a massive reputation in the Nigerian community as a progressive organisation with a commitment to the development of the society. However, they struggled with expanding the perception of the company beyond the influence of its founder, Dr. Cosmas Maduka. We were tasked with creative representation for the company on digital channels to further expand the understanding of the diversified nature of the company and connect to newer audiences.',
    solution: ``,
    outcome: `Created a growing digital footprint for the company across all channels growing at an average of 300% plus month on month. Also successfully deployed a lead generation engine connecting to users and customers all over the world and building serious consideration for all service offerings at Coscharis Group.`
  },

]


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 

const Home = () => {
    const { setNavColor } = useContext(AppContext);
    const [ bodyRef, bodyRefVisible ] = useOnScreen({ threshold: 1.0 })
    // const [ headerRef, HeaderVisible ] = useOnScreen({ threshold: 0.8 })
    const [ footerRef, footerRefVisible ] = useOnScreen({ threshold: 0.01 })
    const [ switchText, setSwitchText ] = useState('Branding')
    const { isDay, showMenu } = useContext(AppContext);
    const [ showTyping, setShowTyping ] = useState(true)
    const [ section, setSection ] = useState('header')
    // let history = useHistory()
    const headerWords = ['Branding', 'Content', 'Design', 'Market Intelligence']
    // const coverImageList = [
    //   ( <div className={[switchText === 'Branding' ? 'animate-appear' : 'dont-display', 'home-header__cover-image' ].join(' ')}><img className={['home-header__cover-image' ].join(' ')} src='https://firebasestorage.googleapis.com/v0/b/forza-application.appspot.com/o/Image%20208.png?alt=media&token=938d6e64-ed30-4956-90ae-ee971b919728'  alt="image1"/></div>),
    //   (<div className={[switchText === 'Content' ? 'animate-appear' : 'dont-display', 'home-header__cover-image' ].join(' ')}><img className={['home-header__cover-image' ].join(' ')} src='https://firebasestorage.googleapis.com/v0/b/forza-application.appspot.com/o/Content%20that%20works.png?alt=media&token=d66cece7-5386-4001-87b3-f7ca780d03b7'  alt="image2"/></div>),
    //   (<div className={[switchText === 'Design' ? 'animate-appear' : 'dont-display', 'home-header__cover-image' ].join(' ')}><img className={['home-header__cover-image' ].join(' ')}  src='https://firebasestorage.googleapis.com/v0/b/forza-application.appspot.com/o/Landing%20FL1.png?alt=media&token=73f485b2-fd27-48a0-b4e4-fcc2876763ed' alt="image3" /></div>),
    //   (<div className={[switchText === 'Market Intelligence' ? 'animate-appear' : 'dont-display', 'home-header__cover-image' ].join(' ')}><img className={['home-header__cover-image' ].join(' ')}  src='https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/bg-image-4.png?alt=media&token=9626ed91-e15e-41e5-bda9-aba153a2d786'  alt="image4"/></div>), 
    // ]


 
    let [ counter, setCounter ] = useState(0)
    const executeScroll = (ref) => scrollToRef(ref)
    // let wheeled = false;
  
    //#endregion
    useEffect(() => {
      if (isDay) {
        setNavColor('black')
        setShowTyping(false)
        setTimeout(() => setShowTyping(true), 0.5);
      } else {
        setNavColor('white')
        setShowTyping(false)
        setTimeout(() => setShowTyping(true), 0.5);
      }
      // setSwitchText('')
    }, [ isDay, setNavColor ])

    const trigger = () => {
      data.forEach(element => {
        db.collection('projects').add(element)     
      });
     }

     useEffect(() => {
       if(section === 'header') executeScroll(bodyRef)
       else executeScroll(footerRef)
     }, [ section ])

    useEffect(() => {
        if (!bodyRefVisible) setShowTyping(false)
        else setShowTyping(true)     
    }, [ bodyRefVisible ])

    useEffect(() => {
      // trigger()
      if (showMenu) setShowTyping(false)
      else setShowTyping(true)
    }, [showMenu])


    const AfterType = () => {
       if (counter === headerWords.length - 1) {
          setSwitchText(headerWords[0])
          setCounter(0)
       } else {
          setCounter(counter + 1)
          setSwitchText(headerWords[counter + 1])
       }
    }

    // useEffect(() =>  AfterType(), []); 
     /*** commented code is still useful pending when style comes back to normal */
     /**  */
      // const wheelEvent =  (event, link) => {
      //   if (event.nativeEvent.wheelDelta > 0) {
      //     if (link.to) setSection(link.to)
      //   } else {
      //     if (link.from) setSection(link.from)
      //   }
      // }
      // <main className={['home', isDay ? '' : 'home--dark-theme', 'main' ].join(' ')}></main>


    return (
      <main  
      onWheel={ event => {
        if (event.nativeEvent.wheelDelta > 0) {
          setSection('header')
        } else { 
          setSection('footer')  
        }
      }}
      className={['home', isDay ? '' : 'home--dark-theme', '' ].join(' ')}>
        {/* <div 
          className={['page-container', 'snap-scroll', section === 'header' ? 'page-container--show' : 'page-container--hide' ].join(' ')}
          style={{position: 'relative', overflow: 'hidden'}}
          onWheel={ event => wheelEvent(event, { to:'', from: 'body' })}
        >
            <div className={["home-text-headers" ].join(' ')}>
              <div className="home-text-headers__text home-text-headers__bold">
                {   HeaderVisible ?        
                  (<Typing onFinishedTyping={() => AfterType()} loop={true} speed={200} startDelay={50}>
                  <span>{switchText}</span>
                  <Typing.Backspace count={switchText.length} delay={5000} />
                </Typing>) : switchText}
                </div>
              <p className="home-text-headers__text home-text-headers__medium">that</p>
              <p className="home-text-headers__text home-text-headers__medium">works</p>
              <p className="home-text-headers__link"><Link to="/our-work">VIEW OUR WORK</Link></p>
            </div>
            <div className="home-header" ref={headerRef}>
                { coverImageList[counter] }
              <img onClick={() => setSection('body')} className="home-header__direction-icon" src={require('../../icons/downward-arrow.png')} />
            </div>
        </div> */}
        {/* <div 
          className={['page-container', 'snap-scroll', section === 'body' ? 'page-container--show' : 'page-container--hide' ].join(' ')} 
          onWheel={ event => {
            if (event.nativeEvent.wheelDelta > 0) {
              if (bodyRefVisible) {
                setSection('header')
              }
            } else {
              executeScroll(footerRef)
            }
          }}

          // onTouchMove={(event) => {
          //   let currentY = event.nativeEvent.touches[0].clientY
          //   if(currentY > lastY){
          //     if (window.scrollY == 0) setSection('header')
          //   } 
          //   lastY = currentY;
          // }}
        > */}
          <div className={["home-body", isDay ? '' : 'home-body--dark-theme'].join(' ')} ref={bodyRef}>
            <div className={["home-text-body", bodyRefVisible ? 'home-text-body--animate-in' : 'home-text-body--animate-out'].join(' ')}>
              {/* <h2>The <span style={{ color:'#FF5F4B' }}>p<div className="power-icon"><PowerIcon /></div>wer</span> to create</h2>            */}
              <div className={["home-text-headers" ].join(' ')}>
                <div className="home-text-headers__text home-text-headers__bold">
                  {   showTyping ?        
                    (<Typing onFinishedTyping={() => AfterType()} loop={true} speed={200} startDelay={50}>
                    <span>{switchText}</span>
                    <Typing.Backspace count={switchText.length} delay={5000} />
                  </Typing>) : switchText}
                  </div>
                <p className="home-text-headers__text home-text-headers__medium">that</p>
                <p className="home-text-headers__text home-text-headers__medium">works</p>
                {/* <p>{`${moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}`}</p>
                <p>{`${moment().format("ss a")}`}</p> */}

                {/* <p className="home-text-headers__link"><Link to="/our-work">VIEW OUR WORK</Link></p> */}
              </div>
              <p className="home-text-body__text">
                We’re a marketing agency. We work with goal oriented brands and companies to create digital marketing solutions that people love. Because what works for people, works for business.
              </p>
              <div className="home-text-body__link">
                <Link to="/our-work">View Our Work</Link>
              </div>
            </div>
            <div className="home__images">
                  <div className="double-birds">
                      <DoubleBirds />
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
          <div
            // onWheel={ () => setSection('header')}
            ref={footerRef} className={["home-footer", isDay ? '' : 'home-footer--dark-theme'].join(' ')}
          >
            <div ref={footerRef} className={['home-footer__lets-talk'].join(' ')}>
                <div className={['home-footer__lets-talk__icon'].join(' ')}>
                  <div className={['home-footer__lets-talk__icon__svg', footerRefVisible ? 'home-footer__lets-talk__icon__top' : 'home-footer__lets-talk__icon__svg--animate-in'].join(' ')}>
                    <Lets />
                  </div>
                  <div className={['home-footer__lets-talk__icon__svg' , footerRefVisible ?  'home-footer__lets-talk__icon__bottom' : 'home-footer__lets-talk__icon__svg--animate-in'].join(' ')}>
                    <Talk />
                  </div>
                </div>
                <div className="home-footer__lets-talk__text">
                  <p>Find out more about how we can</p>
                  <p>work together</p>
                </div>
                <div className="home-footer__lets-talk__text__link">
                  <Link to="/services/our-services">GET TO KNOW US</Link>
                </div>
            </div>
          </div>
        {/* </div> */}
      </main>
    );
}

export default Home;