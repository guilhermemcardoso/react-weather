import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { HomeFactory } from "../factories/pages/Home";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomeFactory} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
