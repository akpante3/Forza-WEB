import React, { useEffect, useContext } from 'react';
import { useOnScreen } from '../../hooks/index';
import SideNav from '../sideNav/SideNav';
import { aboutNavList } from '../../utils/lists'
import { ReactComponent as Kite } from '../../icons/kite.svg';
import AppContext from '../../context/context';

const WorkFlow = (props) => {
    const [ref, visible] = useOnScreen({ threshold: 0.7 })
    const { setNavColor } = useContext(AppContext);

    useEffect(() => {
        setNavColor('white')
    }, [visible])


    return (
        <div className="workflow" ref={ ref }>
            <SideNav visible={visible} list={ aboutNavList }  bg='white' />
            <div className="workflow__text">
                <div className={["workflow__text__header", visible ? "workflow__text__header--animate" : ''].join(' ')}>
                    <span> Workflow </span>
                </div>
                <p className="workflow__text__body">We want to enable our clients with the power to create impact in their chosen field of business. Thus we don’t create fleeting moments of hype, we create lasting experiences that deliver real business impact.<br /><br />We assess the situation, agree objectives, create the components of service, test, iterate and measure continuously. </p>
            </div>
            <div className={["workflow__image", visible ? 'workflow__image--animate' : 'workflow__image--kite' ].join(' ')}>
                <Kite />
            </div>
        </div>
    );
}

export default WorkFlow;