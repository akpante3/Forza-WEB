import React, { useState, useEffect } from 'react';
import {
  Link
} from "react-router-dom";
import SideNav from '../sideNav/SideNav';
import { useOnScreen } from '../../hooks/index';
import { aboutNavList } from '../../utils/lists';
import { ReactComponent as  Play } from '../../icons/playButton.svg';
import ReactPlayer from 'react-player'

const WhoWeAre = (props) => {
  const [ref, visible] = useOnScreen({ threshold: 0.1 })
  const [play, setPlay] = useState(false)
  const [ showPlayButton, setShowPlayButton ] = useState(true)
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
        { showPlayButton ? <Play className="who-we-are__playbutton" onClick={() => playVideo() } /> : '' }
        <ReactPlayer onPause={handlePause} controls={!showPlayButton} playing={play} width="100%" height="100vh"  url='https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/Self-Made%20-%20I%20Am%20Giannis%2C%20Episode%201%20-%20Nike.mp4?alt=media&token=8c59e336-e3b5-45cc-bbb5-f3f49e89e8a7' />
      </div>
  );
}

export default WhoWeAre;