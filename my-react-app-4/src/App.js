import React from "react";

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       on: false,
//     };
//   }
//   handleClick = () => {
//     const intialValue = this.state.on;

//     this.setState({ on: !this.state.on });
//   };

//   render() {
//     return (
//       <>
//         {this.state.on && <div>ON 💡 </div>}
//         {!this.state.on && <div>OFF 💙 </div>}
//         <button onClick={this.handleClick}>
//           Turn {this.state.on ? "OFF" : "ON"}
//         </button>
//       </>
//     );
//   }
// }

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    const earlierCount = this.state.count;
    this.setState({ count: earlierCount + 1 });
  };
  handleDecrement = () => {
    const earlierCount = this.state.count;
    this.setState({ count: earlierCount - 1 });
  };

  render() {
    return (
      <>
        <button onClick={this.handleIncrement}>Increment </button>
        {this.state.count}
        <button onClick={this.handleDecrement}>Decrement</button>
      </>
    );
  }
}
