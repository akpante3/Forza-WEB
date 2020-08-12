import React from "react";
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import WhatweDo from '../pages/whatWeDo/WhatWeDo';
import Team from '../pages/team/Team';
import SingleProfile from '../pages/singleProfile/SingleProfile';
import Project from '../pages/Project/Project';
import Page404 from  '../pages/page404/Page404';
import OurWorks from '../pages/ourWorks/OurWorks';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

/**
 * @description Routes list
 * @returns {object} the component
 */
const Routes = () => ( 
  <Switch>
      {/* <Route path='/' component={page} />  */}
      <Route name="our-work" exact  path='/our-work' component={OurWorks} />
      <Route name="our-works-projects" exact  path='/our-work/projects/:id' component={Project} />
      <Route name="contact" exact  path='/contact' component={Contact} />
      <Route name="team" exact path='/team' component={Team} />
      <Route name="team" exact path='/team/:id' component={SingleProfile} />
      <Route name="our-services" exact path='/services/:section' component={WhatweDo} />
      <Route name="about" exact path='/about/:section' component={About} />
      <Route name="home" exact  path='/' component={Home} />
      <Route name="home" exact  path='/404' component={Page404} />
      <Route path="*">
          <Redirect to='/404' />
      </Route>
  </Switch>
);

export default Routes;