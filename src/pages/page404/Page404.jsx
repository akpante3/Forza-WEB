import React from 'react';
import { ReactComponent as  PowerIcon } from '../../icons/navIcon.svg';
import { Link } from "react-router-dom";
import './Page404.scss';

const Page404= (props) => {

  return (
    <main className="page-404">
      <div className="page-404__wrapper">
        <h1>4 <div className="page-404__power-icon" ><PowerIcon /></div> 4</h1>
        <p>Page was not found</p>
        <button className="btn"><Link to='/' >Home Page</Link></button>
      </div>
    </main>
  );
}

export default Page404;