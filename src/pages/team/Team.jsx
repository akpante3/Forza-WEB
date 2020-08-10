import React, { useState, useEffect, useContext } from 'react';
import './Team.scss'
import Founders from '../../components/team/Founders';
import TeamSection from '../../components/team/TeamSection';
import Footer from '../../components/app-footer/Footer';
import AppContext from '../../context/context';
import db from '../../services/firestore';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 

const Team = (props) => {
  const { setNavColor } = useContext(AppContext);
  const [team, setTeam] = useState([])
  const teamRef = React.useRef(null)
  const topteamRef = React.useRef(null)
  const executeScroll = (ref) => scrollToRef(ref)

  useEffect(() => { 
      setNavColor('white')
      fetchTeam()
      setTimeout(() => {
        executeScroll(topteamRef)
      }, 500);
  }, [])
   
  const fetchTeam = async () => {
      const snapshot = await db.collection('team').get();
      let TeamMembers = []
      snapshot.forEach((doc) => {
        TeamMembers.push({id: doc.id, data: doc.data()})
      });
      setTeam(TeamMembers)
  }

  return (
      <div className="team">
        <div className="team__founders" ref={topteamRef}>
          <Founders />
          <img onClick={() => executeScroll(teamRef)} className="home-header__direction-icon" src={require('../../icons/downward-arrow.png')} />
        </div>
        <div className="team__team" ref={teamRef}>
             <TeamSection team={team} />
        </div>
        <Footer bg='white' previous={{ link: "/our-works", name: "Our Work" }} next={{ link: "/about/who-we-are", name: "About Us" }}  />
      </div>
  );
}

export default Team;