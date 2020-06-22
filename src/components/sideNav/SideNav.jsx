import React from 'react';
import './SideNav.scss'

const SideNav = (props) => {
  return (
      <div className={['side-nav', props.bg === 'white' ? 'side-nav--white' : ''].join(' ')} >
            <ul className={[props.visible ? 'side-nav--transform-in' : 'side-nav--transform-out']}>
                <li>Who we are</li>
                <li>Philosophy</li>
                <li>Perspective</li>
                <li>Workflow</li>
            </ul>
      </div>
  );
}

export default SideNav;