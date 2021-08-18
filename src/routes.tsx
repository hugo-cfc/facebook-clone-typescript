import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/index';
import Feed from './pages/Feed';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/feed" component={Feed} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
