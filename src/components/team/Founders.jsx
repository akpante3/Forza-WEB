import React from 'react';
import { useOnScreen } from '../../hooks/index';
import { useHistory } from "react-router-dom";

const Founders = (props) => {
    const [ ref, visible ] = useOnScreen({ threshold: 0.1 })
    let history = useHistory()


   const foundersList = [
    {
      firstName: 'Chikodi',
      lastName: 'Ukaiwe',
      image1: 'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/chikodi.png?alt=media&token=83a96309-136a-4b4d-8686-979660efc162',
      image2: 'https://firebasestorage.googleapis.com/v0/b/forza-application.appspot.com/o/Group%205.png?alt=media&token=77a92625-8a64-4868-8750-c52df9b1339e',
      role: 'Partner',
      link: '/chikodi-ukaiwe'
    },
      {
        firstName: 'Seye',
        lastName: 'Bandele',
        image1: 'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/seye.png?alt=media&token=5aaefb70-ebe6-40cb-9cf1-c108699ef9cc',
        image2: 'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/seyi-black-white.png?alt=media&token=94c40bc6-b26d-4470-a0f6-434aa8bfe94b',
        role: 'Communications/Partner',
        link: '/seye-bandele'
      },
      {
        firstName: 'Ope',
        lastName: 'Adetomiwa',
        image1: 'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/ope.png?alt=media&token=e73b5a84-15b7-4109-ba07-0635ff857aec',
        image2: 'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/image00005.png?alt=media&token=7914a45b-aeb4-49a1-b932-1d096f16db32',
        role: 'Communications/Partner',
        link: '/ope-adetomiwa',
      },
      {
        firstName: 'Joshua',
        lastName: 'Biyere',
        image1: 'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/josh.png?alt=media&token=d4147b0e-a4a0-4f99-ae1e-e58f47017d6a',
        image2: 'https://firebasestorage.googleapis.com/v0/b/forza-application.appspot.com/o/josh.png?alt=media&token=41c7e611-b2ff-4dbe-8c25-75657d06d4c7',
        role: 'Design Partner',
        link: '/joshua-biyere',
      },

   ]



  const foundersDetails = (data, index) => {
    return (
    <div className="founders__image" key={index}>
      <div className="founders__image__text">
        <div className="founders__image__text__name"><h1>{ data.firstName }</h1><h1>{ data.lastName }</h1></div>
        <div className="founders__image__text__role">{ data.role }</div>
      </div>
      <div className="founders__image__wrapper" onClick={ () => history.push(`/team${data.link}`)}>
         <img id="image1" src={data.image1}/>
         <img id="image2"src={data.image2}/>
      </div>
    </div>
    )
  }


  return (
      <div className="founders" ref={ref}>
          <div className="founders__text">
            <div>
            <div className={['founders__text__header', visible ? "founders__text__header--animate" : '' ].join(' ')}>
                  <span>
                    The Crew
                  </span>
                </div>
            </div>
            <p className='founders__text__body'>
            <span className='founders__text__body__bold'>Forza</span> is a melting pot of creatives, strategists and business people from diverse backgrounds coming together to create stellar communication for clients via shared experiences.
            </p>
         </div>
         <div className="founders__images">
           { foundersList.map((data, index) => foundersDetails(data, index)) }
         </div>
      </div>
  );
}

export default Founders;