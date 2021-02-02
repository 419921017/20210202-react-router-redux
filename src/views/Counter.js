import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './../store/actions/counter';
// @connect(() => ({}), () => ({}))
class Counter extends Component {
  render() {
    return (
      <div>
        Counter
        <div>{this.props.number}</div>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
        <br />
        <button onClick={this.props.goHome}>去首页</button>
      </div>
    );
  }
}
export default connect((state) => state.counter, actions)(Counter);
