import React from 'react';
import {
  Link
} from "react-router-dom";
import { useOnScreen } from '../../hooks/index';
import SideNav from '../sideNav/SideNav';
import { aboutNavList } from '../../utils/lists'


const WorkFlow = (props) => {
    const [ref, visible] = useOnScreen({ threshold: 0.8 })

    return (
        <div className="workflow" ref={ref}>
                 <SideNav visible={visible} list={aboutNavList}  bg='white' />
                <div className="workflow__text">
                    <div className="workflow__text__header">Workflow</div>
                    <p className="workflow__text__body">Like the rush of electrons when a power switch is turned on, we want to enable our clients with the power to create impact in their chosen field of business. Thus we don’t create fleeting moments of hype, we create lasting experiences that deliver real business impact. We assess the situation, agree objectives, create the components of service, test, iterate and measure continuously.</p>
                </div>
                <div className="workflow__list list list--white">
                    <div className="workflow__list__item">
                    <div className="list__number"><span className={['list__number__figures', 'list__number__figures--one', visible ? 'list__number__figures--animate-in' : 'list__number__figures--animate-out' ].join(' ')}>1</span></div>
                        <div>
                            <div className="list__header">Talk to Us</div>
                            <p className="list__body">If you are interested in creating lasting impact for your brand or business, get in touch with us here.</p>
                        </div>
                    </div>
                    <div className="workflow__list__item">
                    <div className="list__number"><span className={['list__number__figures', 'list__number__figures--two', visible ? 'list__number__figures--animate-in' : 'list__number__figures--animate-out' ].join(' ')}>2</span></div>
                        <div>
                            <div className="list__header">Research & Strategy</div>
                            <p className="list__body">We’re a marketing agency. We work with goal oriented brands and companies to create digital marketing solutions that people love. Because what works for people, works for business.</p>
                        </div>
                    </div>
                    <div className="workflow__list__item">
                    <div className="list__number"><span className={['list__number__figures', 'list__number__figures--three', visible ? 'list__number__figures--animate-in' : 'list__number__figures--animate-out' ].join(' ')}>3</span></div>
                        <div>
                            <div className="list__header">Make magic!</div>
                            <p className="list__body">We’re a marketing agency. We work with goal oriented brands and companies to create digital marketing solutions that people love. Because what works for people, works for business.</p>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default WorkFlow;