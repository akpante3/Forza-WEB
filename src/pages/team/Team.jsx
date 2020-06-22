import React from 'react';
import './Team.scss'
import Founders from '../../components/team/Founders';
import TeamSection from '../../components/team/TeamSection';
import Footer from '../../components/footer/footer'

const Team = (props) => {
    // const { previous, next, bg } = props
  return (
      <div className="team">
        <div className="team__founders">
          <Founders />
        </div>
        <div className="team__team">
             <TeamSection />
        </div>
        <Footer previous="Our works" next="Our services" bg="white"  />
      </div>
  );
}

export default Team;