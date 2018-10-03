import React from "react";
import { Switch, Route } from "react-router-dom";

import App from "./../components/App.js";
import Portfolio from "./../components/Portfolio.js";
import About from "./../components/About.js";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Route path="/about" exact component={About} />
    </Switch>
  );
};

export default Routes;
