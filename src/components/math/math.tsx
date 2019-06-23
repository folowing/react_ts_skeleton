import React, { Component } from 'react';
import styles from './math.module.scss';

interface State {
  result: string;
}

interface Props {
  num: number;
}

class Math extends Component<Props, State> {
  state = {
    result: '',
  };

  public async componentDidMount() {
    const module = await import('./math_func');
    const Math = module.default;
    const title = `${this.props.num} * ${this.props.num} = ${Math.square(
      this.props.num,
    )}`;
    this.setState({
      result: title,
    });
  }

  public render() {
    return <div className={styles.mathBox}>{this.state.result}</div>;
  }
}

export default Math;
