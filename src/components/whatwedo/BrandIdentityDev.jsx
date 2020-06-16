import React from 'react';
import {
  Link
} from "react-router-dom";

const BrandIdentityDev = (props) => {

  return (
      <div className="brand-identity-dev what-we-do-container">
            <div className="list">
                 <div>
                 <div className="list__number"><span className="list__number__figures list__number__figures--one">1</span></div>                    
                 </div>
            </div>
            <img className="what-we-do__image" src={require('../../icons/images/image-2.png')} />
      </div>
  );
}

export default BrandIdentityDev;