import React from 'react';
import { ReactComponent as SpinnerIcon } from '../../icons/spinner.svg';
import './Spinner.scss';

const Spinner = (props) => {

  return (
    <div className="spinner">
        <div className="spinner__icon"><SpinnerIcon /></div>
    </div>
  );
}

export default Spinner;