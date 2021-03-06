import React, { useEffect, useContext, useState } from 'react';
import { useOnScreen } from '../../hooks/index';
import SideNav from '../sideNav/SideNav';
import AppContext from '../../context/context';
import { ourservicesNavList } from '../../utils/lists';
import { useLocation } from "react-router-dom";

const BrandIdentityDev = (props) => {
  const [ref, visible] = useOnScreen({ threshold: 0.8 })
  const { setNavColor } = useContext(AppContext);
  const [ animate, setAnimate ] = useState(false)
  let location = useLocation()

    useEffect(() => {
        if(location.pathname.includes('brand-identity-development')) {
        setNavColor('white')
        }
    }, [location])

    useEffect(() => {
        if(visible) {
            setAnimate(true)
        }
    }, [visible])

  return (
      <div className="brand-identity-dev what-we-do-container" ref={ref}>
      {/* <div style={{width:'100%', maxWidth: '1800px', position: 'relative', margin: '0 auto'}}> */}
        <SideNav visible={visible} bg='white' list={ourservicesNavList} />
            <div className="what-we-do-container__text brand-identity-dev__text">
                <div className="list__number"><span className={['list__number__figures', 'list__number__figures--one', animate ? 'list__number__figures--animate-in' : 'list__number__figures--animate-out' ].join(' ')}>1</span></div>
                <div className="what-we-do-container__text__details">
                   <div className="what-we-do-container__text__details__header">Brand Identity Development</div>
                   <p className="what-we-do-container__text__details__body">Good branding should spark an emotional connection within a brand’s target audience. It is a careful marriage between the brand’s positioning statement and the visual elements of that brand. We immerse ourselves in rigorous strategy that helps us craft dynamic branding elements for our customers, delivering a long standing identity that sets you apart.</p>
                </div>                  
            </div>
            <img className="what-we-do__image" src={require('../../icons/images/catimage.png')} />
            { animate ? (<img className="what-we-do__image what-we-do__image--shadow  animate-appear" src={ require('../../icons/images/catImageShadow.png') } />) : '' }
      {/* </div> */}
      </div>
  );
}

export default BrandIdentityDev;