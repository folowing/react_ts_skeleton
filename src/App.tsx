import React from 'react';
import { Router } from 'react-router-dom';
import { history } from './utils/history';

import Routes from './pages/routes';

const App = () => {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
};

export default App;
