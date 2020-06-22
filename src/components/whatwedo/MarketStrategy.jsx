import React from 'react';
import {
  Link
} from "react-router-dom";
import { useOnScreen } from '../../hooks/index';
import SideNav from '../sideNav/SideNav';
import { ourservicesNavList } from '../../utils/lists';

const MarketStrategy = (props) => {
  const [ref, visible] = useOnScreen({ threshold: 0.8 })
  return (
      <div className="market-strategy what-we-do-container" ref={ref}>
            <SideNav visible={visible}  list={ourservicesNavList} />
            { visible ? (<img className="what-we-do__image" src={require('../../icons/images/image-5-on.png')} />) : (<img className="what-we-do__image" src={require('../../icons/images/image-5.png')} />)}
            <div className="what-we-do-container__text market-strategy__text">
            <div className="list__number"><span className={['list__number__figures', 'list__number__figures--four', visible ? 'list__number__figures--animate-in' : 'list__number__figures--animate-out' ].join(' ')}>4</span></div>
                <div className="what-we-do-container__text__details">
                   <div className="what-we-do-container__text__details__header">Market Strategy</div>
                   <p className="what-we-do-container__text__details__body">We’re a marketing agency. We work with goal oriented brands and companies to create digital marketing solutions that people love. Because what works for people, works for business.</p>
                </div>                  
            </div>
      </div>
  );
}

export default MarketStrategy;