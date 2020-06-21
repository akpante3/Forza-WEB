import React from 'react';

const Team = (props) => {
   const foundersList = [
      {
        firstName: 'Chikodi',
        lastName: 'Ukaiwe',
        image: require('../../icons/images/chikodi-ukaiwe.png'),
        role: 'Partner'
      },
      {
        firstName: 'Seye',
        lastName: 'Bandele',
        image: require('../../icons/images/seye-bandele.png'),
        role: 'Branding Partner'
      },
      {
        firstName: 'Ope',
        lastName: 'Adetomiwa',
        image: require('../../icons/images/ope-adetomiwa.png'),
        role: 'Communications/Partner'
      },
      {
        firstName: 'Joshua',
        lastName: 'Biyere',
        image: require('../../icons/images/joshua-biyere.png'),
        role: 'Design Partner'
      },

   ]



  const foundersDetails = (data) => {
    return (
      <div className="founders__image">
            <img src={data.image}/>
            <div className="founders__image__text">
                <div className="founders__image__text__name"><h1>{data.firstName}</h1><h1>{data.lastName}</h1></div>
                <div className="founders__image__text__role">{data.role}</div>
            </div>
    </div>
    )
  }


  return (
      <div className="team-section">
        <div className="team-section__profiles">
            <div className="team-section__profile">
                <img src={require('../../icons/images/chika-nzekwe.png')} />
                <div className="team-section__profile__text">
                    <h2 className="team-section__profile__text__name">Chika Nzekwe</h2>
                    <div className="team-section__profile__text__role">Strategy & Comms</div>
                </div>            
            </div>
        </div>
      </div>
  );
}

export default Team;