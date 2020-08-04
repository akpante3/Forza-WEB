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
        <SideNav visible={visible} list={ aboutNavList } />
        { showPlayButton ? <Play className="who-we-are__playbutton" onClick={() => playVideo() } /> : '' }
        <ReactPlayer onPause={handlePause} controls={!showPlayButton} playing={play} width="100%" height="100vh" url='https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/%234%20WooCommerce%20and%20React%20-%20Next.js%20with%20WooCommerce%20-%20WooCommerce%20Store%20-%20WooCommerce%20REST%20API.mp4?alt=media&token=2bc8f72a-8a72-417c-9c40-4fcff68e1e0a' />
      </div>
  );
}

export default WhoWeAre;