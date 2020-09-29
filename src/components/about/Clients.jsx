import React, { useEffect, useContext, useState }  from 'react';
import { useOnScreen} from '../../hooks/index';
import SideNav from '../sideNav/SideNav';
import AppContext from '../../context/context';
import { aboutNavList } from '../../utils/lists';
import { useLocation } from "react-router-dom";

const Clients = (props) => {
  const [ref, visible] = useOnScreen({ threshold: 0.8 })
  const { setNavColor } = useContext(AppContext);
  const [ animate, setAnimate ] = useState(false)
  let location = useLocation()

  useEffect(() => {
    if(location.pathname.includes('/about/clients')) {
      setNavColor('black')
    }
  }, [location])

  useEffect(() => {
    if(visible) {
        setAnimate(true)
    }
}, [visible])

  const images = [
    'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/client6.png?alt=media&token=d42fe7e2-56d8-4e63-b383-6b8e69f819e3',
    'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/client7.png?alt=media&token=e5e8efca-68bb-42a0-bf30-d7196e4a60e0',
    'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/Image%204314.png?alt=media&token=8cdd8f4e-bec1-4a07-9605-3580b8722ee6',
    'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/client2.png?alt=media&token=476f31f2-3cf2-4c0f-bf7d-b323a7acde6e',
    require('../../icons/first-bank.png'),
    'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/Image%204308.png?alt=media&token=41f59ce8-8d13-4ba5-a25e-69e68c15ce9c',
    require('../../icons/halogen.png'),
    require('../../icons/fmn.png'),
    require('../../icons/Bmw.png'),
    // require('../../icons/ford.png'),
    'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/client3.png?alt=media&token=3f7964b3-0276-486a-b106-56b0508f6671',
    'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/client55.png?alt=media&token=efd22740-f162-4aac-8f97-cf7d347cb1dc',
    'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/client8.png?alt=media&token=0fac54b4-aa77-4174-b500-188bc5bc29ed'
  ]

  const Logos = () => {
    return images.map((image, index) => <div key={index} className="clients__logo"><img src={image} /></div>)
  }

  return (
      <div className="clients what-we-do-container" ref={ref}>
        <SideNav visible={animate} bg='black' list={aboutNavList} />
        <div className="clients__text">
          <div className={["clients__text__header", animate ? "clients__text__header--animate" : ''].join(' ')}><span>Clients</span></div>
        </div>
        <div className="clients__images">
            { Logos() }
        </div>
      </div>
  );
}

export default Clients;