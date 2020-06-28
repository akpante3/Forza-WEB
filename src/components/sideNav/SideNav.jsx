import React from 'react';
import './SideNav.scss'
import {
  useParams, useHistory
} from "react-router-dom";

const SideNav = (props) => {
  let { section } = useParams();
  let history = useHistory()

  return (
      <div className={['side-nav', props.bg === 'white' ? 'side-nav--white' : ''].join(' ')} >
            <ul className={[ props.visible ? 'side-nav--transform-in' : 'side-nav--transform-out' ]}>
            { props.list.map((item, index) => (<li key={index} onClick={() => history.push(item.link) }  className={[ item.link.includes(section) ? 'active' : '' ].join(' ')}>{ item.name }</li>)) }
            </ul>
      </div>
  );
}

export default SideNav;