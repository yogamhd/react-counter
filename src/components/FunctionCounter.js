import React,{useState} from "react";
//import Button from "./Button";

function FunctionCounter(props) {
    let [count, setCount] = React.useState(0);

    return (
        <div className="App">
            <p>Function Counter</p>
            <h4>Count: {count}</h4>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button color="primary" onClick={() => {
                if (count <= 0) {
                    alert("Maksimum");
                } else {
                    setCount(count - 1);
                }
            }}
        >
            -
            </button>
            <button onClick={() => setCount(count = 0)}>Reset</button>
        </div>
    );
}

export default FunctionCounter;



















//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0
//     };
//   }

//   incrementCount() {
//     let count = this.state.count + 1;

//     this.setState({
//       count: count
//     });
//   }

//   decrementCount() {
//     let count = this.state.count - 1;

//     if (count < 0) return;

//     this.setState({
//       count: count
//     });
//   }

//   reset() {
//     this.setState({
//       count: 0
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//         {/* <h4>Count: {count}</h4> */}
//         <Button title={"+"} task={() => this.incrementCount()} />
//         <Button title={"-"} task={() => this.decrementCount()} />
//         <Button title={"Reset"} task={() => this.reset()} />
//       </div>
//     );
//   }
// }
