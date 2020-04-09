import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

import Math from './components/math';

ReactDOM.render(<Math num={3} />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
