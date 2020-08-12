import React from 'react';
import { useOnScreen } from '../../hooks/index';
import Spinner from '../spinner/Spinner';

const TeamSection = (props) => {

  const teamDetails = (data) => {
    return (
      <div className="team-section__profile" key={data.id}>
      <div className="team-section__profile__image">
        <img src={data.data.image} />
      </div>
        <div className="team-section__profile__text">
            <h2 className="team-section__profile__text__name">{data.data.name}</h2>
            <div className="team-section__profile__text__role">{data.data.role}</div>
        </div>            
      </div>
    )
  }


  return (
      <div className="team-section">
        <div className="team-section__profiles">
          { props.team.length ? props.team.map((data) => teamDetails(data)) : <Spinner />}
        </div>
      </div>
  );
}

export default TeamSection;