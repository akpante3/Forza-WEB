import React, { useState, useEffect, useContext } from 'react';
import './Team.scss'
import Founders from '../../components/team/Founders';
import TeamSection from '../../components/team/TeamSection';
import Footer from '../../components/app-footer/Footer';
import AppContext from '../../context/context';
import { useOnScreen } from '../../hooks/index';
import db from '../../services/firestore';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 

const Team = (props) => {
  const { setNavColor } = useContext(AppContext);
  const [team, setTeam] = useState([])
  const [teamRef, teamRefVisible] = useOnScreen({ threshold: 0.001 })
  const [ section, setSection ] = useState('header')
  const [topteamRef, topteamRefVisible] = useOnScreen({ threshold: 0.001 })
  const executeScroll = (ref) => scrollToRef(ref)

  useEffect(() => { 
      fetchTeam()
      setTimeout(() => {
        executeScroll(topteamRef)
      }, 500);
  }, [])

  useEffect(() => {
     if (topteamRefVisible && section !== 'header') {
       executeScroll(topteamRef)
       setSection('header')
       setNavColor('white')
     } else if (teamRefVisible && section !== 'body') {
      executeScroll(teamRef)
      console.log('bottom team')
      setSection('body')
      setNavColor('black')
     }
  }, [topteamRefVisible, teamRefVisible])
   
  const fetchTeam = async () => {
      const snapshot = await db.collection('team').get();
      let TeamMembers = []
      snapshot.forEach((doc) => {
        TeamMembers.push({id: doc.id, data: doc.data()})
      });
      setTeam(TeamMembers)
  }

  let lastScrollPos = 0;
  return (
      <div className="team">
          <div className="team__founders" ref={topteamRef}>
            <Founders />
            <img onClick={() => executeScroll(teamRef)} className="home-header__direction-icon" src={require('../../icons/downward-arrow.png')} />
          </div>
          <div className="team__team" ref={teamRef}>
              <TeamSection team={team} />
          </div>
          <Footer bg='white' previous={{ link: "/our-work", name: "Our Work" }} next={{ link: "/about/who-we-are", name: "About Us" }}  />
        {/* </div> */}
      </div>
  );
}

export default Team;