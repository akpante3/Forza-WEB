import React from 'react';
import {
  Link
} from "react-router-dom";
import SideNav from '../sideNav/SideNav';
import { useOnScreen } from '../../hooks/index';
import { aboutNavList } from '../../utils/lists';
import { ReactComponent as  NavIcon } from '../../icons/navIcon.svg';

const WhoWeAre = (props) => {
  const [ref, visible] = useOnScreen({ threshold: 0.1 })

  return (
      <div className="who-we-are" ref={ref}>
        <SideNav visible={visible} list={ aboutNavList } />
        <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/1YuN3POoNnQ?modestbranding=1&autohide=1&showinfo=0&controls=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
  );
}

export default WhoWeAre;