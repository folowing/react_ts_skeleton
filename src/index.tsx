import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './style.scss';
import { Button } from 'antd-mobile';

class Index extends React.Component<object, object> {
  public render() {
    return <Button>Start</Button>;
  }
}

ReactDOM.render(<Index />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
