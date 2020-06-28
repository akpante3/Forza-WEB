import React from 'react';
import './SideNav.scss'


const SideNav = (props) => {
  return (
      <div className={['side-nav', props.bg === 'white' ? 'side-nav--white' : ''].join(' ')} >
            <ul className={[props.visible ? 'side-nav--transform-in' : 'side-nav--transform-out']}>
            { props.list.map((item, index) => (<li key={index} >{item}</li>)) }
            </ul>
      </div>
  );
}

export default SideNav;