import React from "react";

export default class Greet extends React.Component {
  isGraduate = false;
  
  render()
 
    // 1. 1st way =>Return from if
    if (this.isGraduate) {
      return <h1>GO Ahead 😊</h1>;
    } else {
      return <h1>Wait for sometime 😠</h1>;
    }
  }

    // 2. 2nd way => assign jsx to a variable and return the variable
  // let message;
  
  //   if(this.isGraduate){
  //     message=<h1>GO Ahead 😊</h1>;
  //   }else{
  //     message = <h1>Wait for sometime 😠</h1>;
  //   }
  //   return message;
    

    // 3rd way  using ternary
    // return this.isGraduate ? (
    //   <h1>GO Ahead 😊</h1>
    // ) : (
    //   <h1>Wait for sometime 😠</h1>
    // );

    return (
      <h1>
        Hello {this.props.name}. Your age is {this.props.age}.
      </h1>
    );
  }
// }