import React, { Component } from 'react';

import styles from './math.m.scss';

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

  async componentDidMount() {
    const { square } = await import('./math_func');
    const title = `${this.props.num} * ${this.props.num} = ${square(
      this.props.num,
    )}`;
    this.setState({
      result: title,
    });
  }

  render() {
    return <div className={styles.mathBox}>{this.state.result}</div>;
  }
}

export default Math;
