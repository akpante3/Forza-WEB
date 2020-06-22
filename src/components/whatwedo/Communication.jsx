import React from 'react';
import {
  Link
} from "react-router-dom";
import { useOnScreen } from '../../hooks/index';
import SideNav from '../sideNav/SideNav';
import { ourservicesNavList } from '../../utils/lists'

const Communication= (props) => {
    const [ref, visible] = useOnScreen({ threshold: 0.8 })
    return (
        <div className="communition what-we-do-container" ref={ref}>
                <SideNav visible={visible} bg='white' list={ourservicesNavList} />
                { visible ? (<img className="what-we-do__image" src={require('../../icons/images/image-4-on.png')} />) : (<img className="what-we-do__image" src={require('../../icons/images/image-4.png')} />)}
                <div className="what-we-do-container__text communition__text">
                    <div className="list__number"><span className={['list__number__figures', 'list__number__figures--three', visible ? 'list__number__figures--animate-in' : 'list__number__figures--animate-out' ].join(' ')}>3</span></div>
                    <div className="what-we-do-container__text__details">
                    <div className="what-we-do-container__text__details__header">Communications</div>
                    <p className="what-we-do-container__text__details__body">Today’s world is noisy, fast-paced and busier than ever before, Consumers have shorter than ever attention spans to give your brand a chance to register in their minds. Our prerogative is to convert your brand into an experience using a blended approach to communicate your brand’s core promise. We position brands firmly in the minds of their target audience</p>
                    <ul className="what-we-do-container__text__details__body"> 
                        <li>Digital Marketing</li>
                        <li>Public Relations</li>
                        <li>Social Media Management</li>
                        </ul>
                    </div>                  
                </div>
        </div>
    );
}

export default Communication;