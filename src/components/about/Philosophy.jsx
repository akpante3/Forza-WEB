import React, { useEffect, useContext }from 'react';
import { ReactComponent as ForzaFuse } from '../../icons/forzaFuze.svg';
import { ReactComponent as ForzaFuseOff } from '../../icons/forzaFuzeoff.svg';
import { useOnScreen } from '../../hooks/index';
import AppContext from '../../context/context';
import SideNav from '../sideNav/SideNav';
import { aboutNavList } from '../../utils/lists'

const WhoWeAre = (props) => {
    const [ ref, visible ] = useOnScreen({ threshold: 0.8 })
    const { setNavColor } = useContext(AppContext);
    
    useEffect(() => { 
        setNavColor('white')
    }, [visible])
    return (
        <div className="philosophy" ref={ref}>
        <SideNav visible={ visible } bg='white' list={ aboutNavList } />
        <div>
            <div className="philosophy__text">
                    <div className={["philosophy__text__header", visible ? "philosophy__text__header--animate" : ''].join(' ')}>
                        <span> Philosophy </span>
                    </div>
                    <p className="philosophy__text__body">Our philosophy is to deliver impact for our customers in the shortest time possible. We are deliberate about results from the get go and we have developed a unique creative process that delivers quick results for our partners and clients without compromising work quality.</p>
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