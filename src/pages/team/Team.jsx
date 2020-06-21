import React from 'react';
import './Team.scss'
import Founders from '../../components/team/Founders';

const Team = (props) => {
    // const { previous, next, bg } = props
  return (
      <div className="team">
        <div className="team__founders">
          <Founders />
        </div>
        <div className="team__team">
             
        </div>
      </div>
  );
}

export default Team;