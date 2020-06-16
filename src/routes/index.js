import React from "react";
import Home from '../components/home/Home'
import About from '../pages/about/About'
import WhatweDo from '../pages/whatWeDo/WhatWeDo';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

/**
 * @description Routes list
 * @returns {object} the component
 */
const Routes = () => ( 
  <Switch>
      {/* <Route path='/' component={page} />  */}
      <Route name="home" path='/what-we-do' component={WhatweDo} />
      <Route name="home" path='/about' component={About} />
      <Route name="home" path='/' component={Home} />
  </Switch>
);

export default Routes;