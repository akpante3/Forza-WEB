import React from 'react';
import { useOnScreen } from '../../hooks/index';
import SideNav from '../sideNav/SideNav';
import { aboutNavList } from '../../utils/lists'

const Clients = (props) => {
  const [ref, visible] = useOnScreen({ threshold: 0.8 })
  const images = [
    'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/client6.png?alt=media&token=d42fe7e2-56d8-4e63-b383-6b8e69f819e3',
    'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/client7.png?alt=media&token=e5e8efca-68bb-42a0-bf30-d7196e4a60e0',
    'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/Image%204314.png?alt=media&token=8cdd8f4e-bec1-4a07-9605-3580b8722ee6',
    'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/client2.png?alt=media&token=476f31f2-3cf2-4c0f-bf7d-b323a7acde6e',
    'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/Screen%20Shot%202020-08-05%20at%204.48.26%20PM.png?alt=media&token=e469e27e-2d3d-4670-a544-6a78463e6afe',
    'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/Image%204310.png?alt=media&token=343a58cd-7720-474d-8425-275e9404f63c',
    'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/Image%204308.png?alt=media&token=41f59ce8-8d13-4ba5-a25e-69e68c15ce9c',
    'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/Screen%20Shot%202020-08-05%20at%203.17.50%20PM.png?alt=media&token=d56d42d0-670e-4987-b7bb-a6fcb9a42985',
    'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/cleint1.png?alt=media&token=5498db50-cecd-4269-9bee-2eb7b585d8c0',
    'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/client3.png?alt=media&token=3f7964b3-0276-486a-b106-56b0508f6671',
    'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/client55.png?alt=media&token=efd22740-f162-4aac-8f97-cf7d347cb1dc',
    'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/client8.png?alt=media&token=0fac54b4-aa77-4174-b500-188bc5bc29ed'
  ]

  const Logos = () => {
    return images.map((image, index) => <div key={index} className="cleints__logo"><img src={image} /></div>)
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