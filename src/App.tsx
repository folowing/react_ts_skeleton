import React from 'react';
import { Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

import { history } from './utils/history';
import Routes from './pages/routes';

import 'antd/dist/antd.css';

moment.locale('zh-cn');

const App = () => {
  return (
    <RecoilRoot>
      <ConfigProvider locale={zhCN}>
        <Router history={history}>
          <Routes />
        </Router>
      </ConfigProvider>
    </RecoilRoot>
  );
};

export default App;
