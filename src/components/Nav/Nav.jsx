import React, { useState, useEffect, useContext } from 'react';
import moment from 'moment';
import { useRouteMatch, useLocation, useHistory } from "react-router-dom";
import { ReactComponent as  NavIcon } from '../../icons/navIcon.svg';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import AppContext from '../../context/context';
import { ReactComponent as MenuButton } from '../../icons/hamburger.svg';
import { ReactComponent as CloseButton } from '../../icons/closebutton.svg';
import { ReactComponent as BackButton } from '../../icons/navBackButton.svg';
import { ReactComponent as Moon } from '../../icons/moon.svg';
import { ReactComponent as Sun } from '../../icons/sun.svg';
import'./Nav.scss'

const Nav = (props) => {
  const { toggleMenu,  showMenu } = props
  const location = useLocation()
  const [ navName, setNavName ] = useState('')
  // const [ seconds, setSeconds] = useState('')
  const { navColor, setIsDay, isDay } = useContext(AppContext);
  let history = useHistory()
  let hour = moment().format('h')
  let min = moment().format('mm')

  // useEffect(() => { setInterval(() => { setSeconds(moment().format('ss')) }, 1000)})

  useEffect(() => {
      if (location.pathname.includes('/about')) {
        setNavName('About')
      } else if (location.pathname.includes('/team')) {
        setNavName('Our Team')
      } else if (location.pathname === '/contact') { 
        setNavName('Contact')
      } else if (location.pathname.includes('/our-work')) { 
        setNavName('Our Work')
      } else if (location.pathname.includes('/services')) {
        setNavName('What we do')
      }
  }, [location])

  const match = useRouteMatch({
    path: "/",
    strict: true,
    sensitive: true
  });

  return (
    <nav className="nav">
        <div className="nav__logo">
          { match.isExact ? <Logo /> : 
          <div className="nav-icon" onClick={() => history.push('/') }><NavIcon /><span className={["nav-icon__name", navColor === 'white' ? 
          'nav-icon__name--white' : ''].join(' ')}>{ navName }</span></div> }
        </div>
        <div className="time"><div>{ hour }:{ min }<span style={{fontSize: '20px'}}>{ moment().format('a') }</span></div><div style={{fontSize: '12px'}}> {moment().format('Do')} {moment().format('MMM')} {moment().format('YYYY')}</div></div>
        <div style={{display: 'flex'}}>
        { match.isExact ? 
          ( <div className="home__toggle-button">
          <input type="checkbox" id="switch" onClick={ () => setIsDay(!isDay) } /><label htmlFor="switch">Toggle</label>
        { isDay ? (<div className="home__images__theme"><Sun /></div>) : (<div className="home__images__theme"><Moon /></div>)}
                </div>) : 
        <div onClick={history.goBack
          } className={["nav__back-button", navColor === 'white' ? 'nav__back-button--white' : 'nav__back-button--black'].join(' ')}>
              <BackButton />
          </div>  
        }
          <div className={[ 'nav__menu']} onClick={() => toggleMenu()}>
              { showMenu ?  <div className={['nav__menu', 'nav__menu--black'].join(' ')}> <CloseButton className="nav__close" />  </div>: <div className={[ navColor === 'white' ? 'nav__menu--white' : 'nav__menu--black']}><MenuButton className={[ "nav__open"].join(' ')} /></div> }
          </div>
        </div>
    </nav>
  );
}

export default Nav;