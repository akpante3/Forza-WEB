import React from "react";
import Home from '../components/home/Home'
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
      <Route name="home" path='/' component={Home} />
  </Switch>
);

export default Routes;