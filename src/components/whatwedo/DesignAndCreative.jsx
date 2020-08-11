import React, { useEffect, useState } from 'react';
import { useOnScreen } from '../../hooks/index';
import { ourservicesNavList } from '../../utils/lists';
import SideNav from '../sideNav/SideNav';

const DesignAndCreative = (props) => {
  const [ref, visible] = useOnScreen({ threshold: 0.8 })
  let image = [ 
    require('../../icons/images/blankon-1.png'),
    require('../../icons/images/blankon-2.png'),
    require('../../icons/images/blankon-3.png'),
    require('../../icons/images/blankon-4.png'),
    require('../../icons/images/blankon-5.png'),
    require('../../icons/images/blankon-6.png'),
    require('../../icons/images/blankon-7.png'),
    require('../../icons/images/blankon-8.png'),
  ]
  const [ displayImage, setDisplayImage ]= useState( image[0] )

  useEffect(() => {
    setInterval(() => {
      let number = Math.floor((Math.random() * 8) + 0);
      setDisplayImage(image[number])
    }, 700)
  }, []);
  return (
      <div className="design-and-creative what-we-do-container" ref={ref}>
            <SideNav visible={visible}  list={ourservicesNavList} />
            { visible ? (<img className="what-we-do__image" src={displayImage} />) : (<img className="what-we-do__image" src={require('../../icons/images/blank-1.png')}  />)}
            <div className="what-we-do-container__text design-and-creative__text">
            <div className="list__number"><span className={['list__number__figures', 'list__number__figures--two', visible ? 'list__number__figures--animate-in' : 'list__number__figures--animate-out' ].join(' ')}>2</span></div>
                <div className="what-we-do-container__text__details">
                   <div className="what-we-do-container__text__details__header">Design & Creative</div>
                   <p className="what-we-do-container__text__details__body">We create premium digital design work for web, mobile and experiential channels. Design is at the core of what we do and we put our passion and pride into it. Check our design portfolio here</p>
                </div>                  
            </div>
      </div>
  );
}

export default DesignAndCreative;