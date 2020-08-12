import React from 'react';
import { useOnScreen } from '../../hooks/index';
import SideNav from '../sideNav/SideNav';
import { ReactComponent as Thought1 } from '../../icons/thought/1.svg';
import { ReactComponent as Thought2 } from '../../icons/thought/2.svg';
import { ReactComponent as Thought3 } from '../../icons/thought/3.svg';
import { ReactComponent as Thought4 } from '../../icons/thought/4.svg';
import { ReactComponent as DigitalMarketing } from '../../icons/digitalMaketing.svg';
import { ReactComponent as PublicRelations } from '../../icons/publicRelations.svg';
import { ReactComponent as SocialMedia } from '../../icons/socialMedia.svg';
import { ourservicesNavList } from '../../utils/lists'

const Communication= (props) => {
    const [ref, visible] = useOnScreen({ threshold: 0.8 })
    return (
        <div className="communication what-we-do-container" ref={ref}>
                <SideNav visible={visible} bg='white' list={ourservicesNavList} />
                <div className="what-we-do__image">
                    <div style={ {position: 'relative', width: '100%'}}>
                        <div className={[ visible ? 'communication__thought' : 'dont-display' ].join(' ')}>
                            <Thought4 className="communication__thought__1" />
                            <Thought3 className="communication__thought__2" />
                            <Thought2 className="communication__thought__3" />
                            <Thought1 className="communication__thought__4" />
                        </div>
                        { visible ? (<img className="communication__image" src={require('../../icons/images/image-4-on.png')} />) : (<img className="communication__image" src={require('../../icons/images/image-4.png')} />)}
                    </div>
                </div>
                <div className="what-we-do-container__text communication__text">
                    <div className="list__number"><span className={['list__number__figures', 'list__number__figures--three', visible ? 'list__number__figures--animate-in' : 'list__number__figures--animate-out' ].join(' ')}>3</span></div>
                    <div className="what-we-do-container__text__details">
                    <div className="what-we-do-container__text__details__header">Communications</div>
                    <p className="what-we-do-container__text__details__body">Today’s world is noisy, fast-paced and busier than ever before, Consumers have shorter than ever attention spans to give your brand a chance to register in their minds. Our prerogative is to convert your brand into an experience using a blended approach to communicate your brand’s core promise.</p>
                    <ul className="what-we-do-container__text__details__body"> 
                        <li>
                            <div className="communication__text__icon">
                             <DigitalMarketing />
                            </div>
                            <div className={[visible ? 'animate-list-item--on' : 'animate-list-item'].join(' ')}>
                                <p >Digital Marketing</p>
                            </div>
                        </li>
                        <li><div className="communication__text__icon"><PublicRelations /></div> <p>Public Relations</p></li>
                        <li><div className="communication__text__icon"><SocialMedia /></div> <p>Social Media Management</p>  </li>                      </ul>
                    </div>                  
                </div>
        </div>
    );
}

export default Communication;