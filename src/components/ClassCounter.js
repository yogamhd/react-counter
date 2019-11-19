import React, { Component } from "react";
import Button from "./Button";

export default class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  incrementCount() {
    let count = this.state.count + 1;

    this.setState({
      count: count
    });
  }

  decrementCount() {
    let count = this.state.count - 1;

    if (count < 0) return;

    this.setState({
      count: count
    });
  }

  reset() {
    this.setState({
      count: 0
    });
  }

  render() {
    return (
      <div className="App">
        <p>Class Component</p>
        <h4>Count: {this.state.count} </h4>
        <Button title={"+"} task={() => this.incrementCount()} />
        <Button title={"-"} task={() => this.decrementCount()} />
        <Button title={"Reset"} task={() => this.reset()} />
      </div>
    );
  }
}
