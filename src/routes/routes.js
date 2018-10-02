import React from "react";
import { Switch, Route } from "react-router-dom";

import App from "./../components/App.js";
import Portfolio from "./../components/Portfolio.js";
import Navigation from "./../components/Navigation.js";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/portfolio" exact component={Portfolio} />
    </Switch>
  );
};

export default Routes;
