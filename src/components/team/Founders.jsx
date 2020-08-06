import React from 'react';
import { useOnScreen } from '../../hooks/index'

const Founders = (props) => {
    const [ ref, visible ] = useOnScreen({ threshold: 0.8 })

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
      <div className="founders__image__text">
        <div className="founders__image__text__name"><h1>{ data.firstName }</h1><h1>{ data.lastName }</h1></div>
        <div className="founders__image__text__role">{ data.role }</div>
      </div>
      <img src={data.image}/>
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
              We’re FORZA, a marketing agency.We work with goal oriented brands and companies to create digital marketing solutions that people love. Because what works for people, works for business.
            </p>
         </div>
         <div className="founders__images">
           { foundersList.map((data) => foundersDetails(data)) }
         </div>
      </div>
  );
}

export default Founders;