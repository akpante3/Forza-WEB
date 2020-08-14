import React, { useEffect, useContext, useState } from 'react';
import { useLocation } from "react-router-dom";
import { ReactComponent as ThinkingImage } from '../../icons/thinking.svg';
import { ReactComponent as ThinkingCloud } from '../../icons/thinkingcloud.svg';
import { useOnScreen } from '../../hooks/index';
import SideNav from '../sideNav/SideNav';
import { aboutNavList } from '../../utils/lists';
import AppContext from '../../context/context';


const Thinking = (props) => {
    const [ref, visible] = useOnScreen({ threshold: 0.8 })
    const { setNavColor } = useContext(AppContext);
    const [animate, setAnimate] = useState(false)
    let location = useLocation()

    useEffect(() => {
        if(location.pathname.includes('/about/thinking')) {
          setNavColor('black')
        }
    }, [location])

    useEffect(() => {
        if(visible) {
            setAnimate(true)
        }
    }, [visible])

    return (
        <div className="thinking snap-scroll" ref={ref} list={aboutNavList}>
            <SideNav visible={visible} list={aboutNavList}/>
            <div>
                <ThinkingCloud className="thinking__cloud"/>
                <ThinkingImage className={['thinking__cloud-image', animate ? 'thinking__cloud-image--on' : 'thinking__cloud-image--off'].join(' ')}/>
                {/* <ThinkingImage className={['thinking__cloud-image', 'thinking__cloud-image--on'].join(' ')}/> */}

            </div>
            <div className="thinking__text">
                <div className={["thinking__text__header", animate ? "thinking__text__header--animate" : ''].join(' ')}> 
                {/* <div className={["thinking__text__header",  "thinking__text__header--animate" ].join(' ')}>  */}
                     
                    <span>Perspective</span>
                </div>
                <p className="thinking__text__body">At Forza, every decision is data-driven. We go through repeated iterations and tests before coming up with decisions. It could be a simple problem such as what background color to use for your social media posts or a more complex problem like how to deliver an integrated marketing campaign to launch your brand. Either way, we are obsessively focused on delivering solutions that work.</p>
            </div>
        </div>
    );
}

export default Thinking;