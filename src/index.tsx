import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './style.scss';

interface Result {
  result: string;
}

class Index extends React.Component<object, Result> {
  public constructor(props) {
    super(props);

    this.state = {
      result: '',
    };
  }

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
