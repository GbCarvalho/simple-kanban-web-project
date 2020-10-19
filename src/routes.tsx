import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';

// import { Container } from './styles';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={MainPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
