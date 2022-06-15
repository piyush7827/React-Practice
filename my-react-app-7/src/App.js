import React, { createContext, useContext } from "react";
// React Context API Steps

// 1. Create context using the creatContext method
// const UserContext = React.createContext();
const UserContext = createContext();

// 2. Wrap the component tree into provider

function App() {
  return (
    <UserContext.Provider
      value={{ name: "Piyush Shukla", age: 28, place: "Katni" }}
    >
      {/*3. data is to be passed as prop to provider  */}
      <User /> {/*Com[onent Tree] */}
    </UserContext.Provider>
  );
}
// 4. Read the value into any component use consumer

// function User() {
//   return (
//     <UserContext.Consumer>
//       {(value) => <h1>My Name is {value}</h1>}
//       {/* here value passed as a arrow function */}
//     </UserContext.Consumer>
//   );
// }

// in place of consumer we use useContext

function User() {
  return <UserChild />;
}

function UserChild() {
  // const context = React.useContext(UserContext);
  const context = useContext(UserContext);

  return (
    <h1>
      My Name Is {context.name}. age {context.age}. place {context.place}
    </h1>
  );
}

export default App;
