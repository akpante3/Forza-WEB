import React , {useContext} from 'react';
import AppContext from '../../context/context';

import {
  Link
} from "react-router-dom";
import Footer from '../../components/app-footer/Footer';
import './OurWorks.scss';

const Contact= (props) => {
    const { setNavColor } = useContext(AppContext);

    setNavColor ('black')
   const communicationProjects = [
       {
        image: require('../../icons/images/work2.png'),
        name: 'Ajemart',
        service: 'Communications & Market Entry'
       },
       {
        image: require('../../icons/images/work2.png'),
        name: 'Ajemart',
        service: 'Communications & Market Entry'
       },
       {
        image: 'https://www.businesslist.com.ng/img/ng/k/1533168305-47-the-advert-place-network.jpg',
        name: 'Ajemart',
        service: 'Communications & Market Entry'
       },
       {
        image: require('../../icons/images/works1.png'),
        name: 'Ajemart',
        service: 'Communications & Market Entry'
       },
       {
        image: require('../../icons/images/work2.png'),
        name: 'Ajemart',
        service: 'Communications & Market Entry'
       },
       {
        image: require('../../icons/images/work2.png'),
        name: 'Ajemart',
        service: 'Communications & Market Entry'
       },
       {
        image: require('../../icons/images/work2.png'),
        name: 'Ajemart',
        service: 'Communications & Market Entry'
       },
       {
        image: require('../../icons/images/work2.png'),
        name: 'Ajemart',
        service: 'Communications & Market Entry'
       }
   ]
  const Communications = () => {
      return (
        communicationProjects.map((data) => (
            <div className="our-works__item">
                <div className="our-works__item__image">
                <img src={data.image} alt="" />
                </div>
                <div className="our-works__item__description">
                    <h2>{ data.name }</h2>
                    <span>{ data.service }</span>
                </div>
            </div>
        )) 
      )
  }
  
  const Market = () => {
    return (
      communicationProjects.map((data) => (
          <div className="our-works__item">
              <div className="our-works__item__image">
              <img src={data.image} alt="" />
              </div>
              <div className="our-works__item__description">
                  <h2>{ data.name }</h2>
                  <span>{ data.service }</span>
              </div>
          </div>
      )) 
    )
}

  return (
    <main className="our-works">
        <div>
            <header>Communications</header>
            <div className="our-works__projects">
                { Communications() }
            </div>
            <header>Market</header>
            <div className="our-works__projects">
                { Market() }
            </div>
        </div>
        <Footer bg='white' previous={{ link: "/services/our-services", name: "Our Services" }} next={{ name: "Our Team", link: "/team" }}  />
    </main>
  );
}

export default Contact;