import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

interface Result {
  result: string;
}

interface Props {}

class Index extends Component<Props, Result> {
  state = {
    result: '',
  };

  public async componentDidMount() {
    const module = await import('./math');
    const Math = module.default;
    const title = `4 * 4 = ${Math.square(5)}`;
    this.setState({
      result: title,
    });
  }

  public render() {
    return <div>{this.state.result}</div>;
  }
}

ReactDOM.render(<Index />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
