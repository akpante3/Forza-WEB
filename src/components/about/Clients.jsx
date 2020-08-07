import React from 'react';
import {
  Link
} from "react-router-dom";
import { useOnScreen } from '../../hooks/index';
import SideNav from '../sideNav/SideNav';
import { aboutNavList } from '../../utils/lists'

const Clients = (props) => {
  const [ref, visible] = useOnScreen({ threshold: 0.8 })
  const images = [
    'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/Image%204314.png?alt=media&token=8cdd8f4e-bec1-4a07-9605-3580b8722ee6',
    'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/Screen%20Shot%202020-08-05%20at%204.48.26%20PM.png?alt=media&token=e469e27e-2d3d-4670-a544-6a78463e6afe',
    'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/Image%204310.png?alt=media&token=343a58cd-7720-474d-8425-275e9404f63c',
    'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/Image%204308.png?alt=media&token=41f59ce8-8d13-4ba5-a25e-69e68c15ce9c',
    'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/Screen%20Shot%202020-08-05%20at%203.17.50%20PM.png?alt=media&token=d56d42d0-670e-4987-b7bb-a6fcb9a42985'
  ]

  const Logos = () => {
    return images.map((image) => <div className="cleints__logo"><img src={image} /></div>)
  }

  return (
      <div className="cleints what-we-do-container" ref={ref}>
        <SideNav visible={visible} bg='black' list={aboutNavList} />
        <div className="cleints__text">
          <div className={["cleints__text__header", visible ? "cleints__text__header--animate" : ''].join(' ')}><span>Cleints</span></div>
        </div>
        <div className="cleints__images">
            { Logos() }
        </div>
      </div>
  );
}

export default Clients;