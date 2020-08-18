import React, { useEffect, useContext } from 'react';
import { useOnScreen } from '../../hooks/index';
import { useLocation } from "react-router-dom";
import AppContext from '../../context/context';
import SideNav from '../sideNav/SideNav';
import { ourservicesNavList } from '../../utils/lists';
import { ReactComponent as Path1 } from '../../icons/boat/path1.svg';
import { ReactComponent as Path2 } from '../../icons/boat/path2.svg';
import { ReactComponent as Path3 } from '../../icons/boat/path3.svg';
import { ReactComponent as Path4 } from '../../icons/boat/path4.svg';


const MarketStrategy = (props) => {
  const [ref, visible] = useOnScreen({ threshold: 0.8 })
  const { setNavColor } = useContext(AppContext);
  let location = useLocation()

  useEffect(() => {
    if(location.pathname.includes('market-strategy')) {
      setNavColor('black')
    }
  }, [location])
  
  return (
      <div className="market-strategy what-we-do-container" ref={ref}>
            <SideNav visible={visible}  list={ourservicesNavList} />
            <div className="what-we-do__image">
                <div style={ {position: 'relative', width: '100%'}}>
                    <div className="market-strategy__boat">
                        <div className={[ visible ? 'market-strategy__boat-image' : 'dont-display' ].join(' ')}>
                            <img className="market-strategy__boat-image__boat"  src={require('../../icons/boat/boat.png')} />
                            <Path3 className="market-strategy__boat-image__path3" />
                            <Path2 className="market-strategy__boat-image__path2"/>
                            <Path1 className="market-strategy__boat-image__path1"/>
                        </div>
                    </div>
                    { visible ? (<img className="market-strategy__image" src={require('../../icons/images/boatimage.png')} />) : (<img className="market-strategy__image" src={require('../../icons/images/boatimage.png')} />)}
                </div>
            </div>
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