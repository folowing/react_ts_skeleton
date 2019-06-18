import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './style.scss';

interface IResult {
  result: string
}


class Index extends React.Component<object, IResult> {
  constructor(props) {
    super(props);

    this.state = {
      result: '',
    };
  }

  async componentDidMount() {
    const module = await import('./math');
    const Math = module.default;
    const title = `4 * 4 = ${Math.square(5)}`;
    this.setState({
      result: title,
    });
  }

  render() {
    return <div>{this.state.result}</div>;
  }
}

ReactDOM.render(
  <Index/>,
  document.getElementById('app'),
);
