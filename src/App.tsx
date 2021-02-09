import React from 'react';
import { Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { history } from './utils/history';

import Routes from './pages/routes';

const App = () => {
  return (
    <RecoilRoot>
      <Router history={history}>
        <Routes />
      </Router>
    </RecoilRoot>
  );
};

export default App;
