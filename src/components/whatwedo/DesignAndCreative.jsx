import React from 'react';
import {
  Link
} from "react-router-dom";
import { useOnScreen } from '../../hooks/index';

const DesignAndCreative = (props) => {
  const [ref, visible] = useOnScreen({ threshold: 0.8 })
  return (
      <div className="design-and-creative what-we-do-container" ref={ref}>
            {
              visible ? (<img className="what-we-do__image" src={require('../../icons/images/image-3-on.png')} />) : (<img className="what-we-do__image" src={require('../../icons/images/image-3.png')} />)
            }
            <div className="what-we-do-container__text design-and-creative__text">
            <div className="list__number"><span className={['list__number__figures', 'list__number__figures--two', visible ? 'list__number__figures--animate-in' : 'list__number__figures--animate-out' ].join(' ')}>2</span></div>
                <div className="what-we-do-container__text__details">
                   <div className="what-we-do-container__text__details__header">Design & Creative</div>
                   <p className="what-we-do-container__text__details__body">We create premium digital design work for web, mobile and experiential channels. Design is at the core of what we do and we put our passion and pride into it. Check our design portfolio here.</p>
                </div>                  
            </div>
      </div>
  );
}

export default DesignAndCreative;