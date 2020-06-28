import React from "react";
import Home from '../components/home/Home'
import About from '../pages/about/About'
import WhatweDo from '../pages/whatWeDo/WhatWeDo';
import Team from '../pages/team/Team';
import {
  Switch,
  Route,
} from "react-router-dom";

/**
 * @description Routes list
 * @returns {object} the component
 */
const Routes = () => ( 
  <Switch>
      {/* <Route path='/' component={page} />  */}
      <Route name="team" exact path='/team' component={Team} />
      <Route name="our-services" exact path='/services/:section' component={WhatweDo} />
      <Route name="about" exact path='/about/:section' component={About} />
      <Route name="home" exact  path='/' component={Home} />
  </Switch>
);

export default Routes;