import React, { useState, useContext, useEffect } from 'react';
import SideNav from '../sideNav/SideNav';
import { useOnScreen } from '../../hooks/index';
import { aboutNavList } from '../../utils/lists';
import AppContext from '../../context/context';
import { ReactComponent as  Play } from '../../icons/playButton.svg';
import ReactPlayer from 'react-player'

const WhoWeAre = (props) => {
  const [ref, visible] = useOnScreen({ threshold: 0.1 })
  const [play, setPlay] = useState(false)
  const [ showPlayButton, setShowPlayButton ] = useState(true)
  const { setNavColor } = useContext(AppContext);

  useEffect(() => {
    setNavColor('white')
  }, [])

  const playVideo = () => {
    setPlay(!play)
    setShowPlayButton(false)
  }
  const handlePause = () => {
    setShowPlayButton(true)
    setPlay(false)
  }
  return (
      <div className="who-we-are" ref={ref}>
        <SideNav visible={visible} bg="white" list={ aboutNavList } />
        { showPlayButton ? <div className="who-we-are__playbutton-wrapper"> <Play className="who-we-are__playbutton" onClick={() => playVideo() } /></div> : '' }
        <ReactPlayer onPause={handlePause} controls={!showPlayButton} playing={play} width="100%" height="100vh"  url='https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/Forza-%20Our%20Rebrand%20Story.mp4?alt=media&token=ad614a7e-073d-4383-abad-2c096405bb02' />
      </div>
  );
}

export default WhoWeAre;