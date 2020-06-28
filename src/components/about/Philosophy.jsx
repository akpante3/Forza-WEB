import React, { useEffect }from 'react';
import { ReactComponent as Buldwire } from '../../icons/buldwire.svg';
import { ReactComponent as ForzaFuse } from '../../icons/forzaFuze.svg';
import { ReactComponent as ForzaFuseOff } from '../../icons/forzaFuzeoff.svg';
import { useOnScreen } from '../../hooks/index';
import {
    useParams, useHistory
  } from "react-router-dom";
import SideNav from '../sideNav/SideNav';
import { aboutNavList } from '../../utils/lists'
import {
  Link
} from "react-router-dom";

const WhoWeAre = (props) => {
    const [ ref, visible ] = useOnScreen({ threshold: 0.8 })
    let history = useHistory()
    
    // useEffect(() => { 
    //     if(visible) {
    //         history.replace('/about/philosophy');
    //     }
    // }, [visible])
    return (
        <div className="philosophy" ref={ref}>
        <SideNav visible={ visible } bg='white' list={ aboutNavList } />
        <div>
            <div className="philosophy__text">
                    <div className={['philosophy__text__header', visible ? 'philosophy__text__header--on' : 'philosophy__text__header--off'].join(' ')}>
                        Philosophy
                    </div>
                    <p className="philosophy__text__body">We’re a marketing agency. We work with goal oriented brands and companies to create digital marketing solutions that people love. Because what works for people, works for business.</p>
            </div>
        </div>
                {
                    visible ? (<ForzaFuse className="philosophy__forza-fuse animate-appear"/>) : ''
                }
                <ForzaFuseOff className="philosophy__forza-fuse"/>
        </div>
    );
}

export default WhoWeAre;