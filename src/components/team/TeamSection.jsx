import React from 'react';
import { useOnScreen } from '../../hooks/index';

const TeamSection = (props) => {
   const [ref, visible] = useOnScreen({ threshold: 0.8 })
   
   const foundersList = [
      {
        firstName: 'Chika',
        lastName: 'Nzekwe',
        image: require('../../icons/images/chika-nzekwe.png'),
        role: 'Strategy & Comms'
      },
      {
        firstName: 'Ameen',
        lastName: 'Olumide',
        image: require('../../icons/images/ameen-olumide.png'),
        role: 'Art Director'
      },
      {
        firstName: 'Kam',
        lastName: 'Obasi',
        image: require('../../icons/images/kam-obasi.png'),
        role: 'Social Media Manager'
      },
      {
        firstName: 'Salam',
        lastName: 'Tijani',
        image: require('../../icons/images/salam-tijani.png'),
        role: 'Support'
      },
      {
        firstName: 'Edi',
        lastName: 'Iren',
        image: require('../../icons/images/edi-iren.png'),
        role: 'Business Administration'
      },
      {
        firstName: 'Ifeoma',
        lastName: 'Nwaoha',
        image: require('../../icons/images/ifeoma-nwaoha.png'),
        role: 'Social Media / Communications'
      },

   ]



  const teamDetails = (data) => {
    return (
      <div className="team-section__profile">
        <img src={data.image} />
        <div className="team-section__profile__text">
            <h2 className="team-section__profile__text__name">{data.firstName} {data.lastName}</h2>
            <div className="team-section__profile__text__role">{data.role}</div>
        </div>            
      </div>
    )
  }


  return (
      <div className="team-section">
        <div className="team-section__profiles">
          { foundersList.map((data) => teamDetails(data))}
        </div>
      </div>
  );
}

export default TeamSection;