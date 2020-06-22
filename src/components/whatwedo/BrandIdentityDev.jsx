import React from 'react';
import {
  Link
} from "react-router-dom";
import { useOnScreen } from '../../hooks/index';
import SideNav from '../sideNav/SideNav';
import { ourservicesNavList } from '../../utils/lists'

const BrandIdentityDev = (props) => {
  const [ref, visible] = useOnScreen({ threshold: 0.8 })

  return (
      <div className="brand-identity-dev what-we-do-container" ref={ref}>
            <SideNav visible={visible} bg='white' list={ourservicesNavList} />
            <div className="what-we-do-container__text brand-identity-dev__text">
                <div className="list__number"><span className={['list__number__figures', 'list__number__figures--one', visible ? 'list__number__figures--animate-in' : 'list__number__figures--animate-out' ].join(' ')}>1</span></div>
                <div className="what-we-do-container__text__details">
                   <div className="what-we-do-container__text__details__header">Brand Identity Development</div>
                   <p className="what-we-do-container__text__details__body">Good branding should spark an emotional connection within a brand’s target audience. It is a careful marriage between the brand’s positioning statement and the visual elements of that brand. We immerse ourselves in rigorous strategy that helps us craft dynamic branding elements for our customers, delivering a long standing identity that sets you apart.</p>
                </div>                  
            </div>
            {
              visible ? (<img className="what-we-do__image" src={require('../../icons/images/image-2-on.png')} />) : (<img className="what-we-do__image" src={require('../../icons/images/image-2.png')} />)
            }
           
      </div>
  );
}

export default BrandIdentityDev;