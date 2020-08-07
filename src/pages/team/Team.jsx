import React, { useState, useEffect, useContext } from 'react';
import './Team.scss'
import Founders from '../../components/team/Founders';
import TeamSection from '../../components/team/TeamSection';
import Footer from '../../components/footer/footer';
import AppContext from '../../context/context';
import db from '../../services/firestore';

const Team = (props) => {
  const { setNavColor } = useContext(AppContext);
  const [team, setTeam] = useState([])

  useEffect(() => { 
      setNavColor('white')
      fetchTeam()
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
        <div className="team__founders">
          <Founders />
        </div>
        <div className="team__team">
             <TeamSection team={team} />
        </div>
        <Footer previous="Our works" next="Our services" bg="white"  />
      </div>
  );
}

export default Team;