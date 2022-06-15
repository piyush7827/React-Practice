import React from "react";

export default function Namaste(props) {
  let message = props.isGraduate ? (
    <h1>GO Ahead 😊 </h1>
  ) : (
    <h1>Wait for sometime 😠 </h1>
  );

  //   if (props.isGraduate) {
  //     message = <h1>GO Ahead 😊 </h1>;
  //   } else {
  //     message = <h1>Wait for sometime 😠 </h1>;
  //   }
  return (
    <h1>
      Namaste {props.name}. Your age is {props.age}. isGraduate {message}
      {props.age > 26 ? <h3> Bada Bhai 😎 </h3> : <h3> Choti behan 😝 </h3>}
    </h1>
  );
}

// Other way to write a function component =>

// const Namaste = (props) => {
//   return (
//     <h1>
//       Namaste {props.name}. Your age is {props.age}.
//     </h1>
//   );
// };

// export default Namaste;
