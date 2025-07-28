import React from "react";
import { Component } from "react";
class ClassBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    const { msg } = this.props;
    return (
      <div>
        <h1>ClassBase components</h1>
        <h1>{msg}</h1>
        <button onClick={this.increment}>Increment</button>
        <p>Count: {this.state.count}</p>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default ClassBase;