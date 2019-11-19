import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter'
import FunctionCounter from './components/FunctionCounter'

function App() {
  return (
    <div>
      <h2 className="App">Class Counter dan Function Counter</h2>
      <ClassCounter />
      <FunctionCounter />
    </div>
  );
}

export default App;










// import React, { Component } from "react";
// import Button from "./components/Button";

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     };
//   }

//   incrementCount = () => {
//     this.setState({
//       count: this.state.count + 1
//     });
//   };

//   decrementCount = () => {
//     let count = this.state.count -1
//     if (count < 0) return
//     this.setState({
//       count: count
//     });
//   };

//   reset = () => {
//     this.setState({
//       count: this.state.count 0
//     });
//   };

//   render() {
//     let { count } = this.state;
//     return (
//       <div className="App">
//         <h4>Count: {count}</h4>
//         <Button title={"+"} task={() => this.incrementCount()} />
//         <Button title={"-"} task={() => this.decrementCount()} />
//         <Button title={"Reset"} task={() => this.reset()} />
//       </div>
//     );
//   }
// }
