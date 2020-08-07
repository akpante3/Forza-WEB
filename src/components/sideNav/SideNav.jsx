import React, { useContext } from 'react';
import './SideNav.scss'
import AppContext from '../../context/context';
import {
  useParams, useHistory
} from "react-router-dom";

const SideNav = (props) => {
  let { section } = useParams();
  let history = useHistory()
  const { setScrollTo } = useContext(AppContext);

  return (
      <div className={['side-nav', props.bg === 'white' ? 'side-nav--white' : ''].join(' ')} >
            <ul className={[ props.visible ? 'side-nav--transform-in' : 'side-nav--transform-out' ]}>
            { props.list.map((item, index) => (<li key={index} onClick={() => {
              history.push(item.link)
              setScrollTo(true)
              } }  className={[ item.link.includes(section) ? 'active' : '' ].join(' ')}>{ item.name }</li>)) }
            </ul>
      </div>
  );
}

export default SideNav;