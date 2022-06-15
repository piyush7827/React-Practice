import React from "react";
import Greet from "./Greet";
import Namaste from "./Namaste";

function App() {
  return (
    <>
      {/* <Greet name="Piyush" age={28} />
      <Greet name="RICHA" age={25} /> */}

      <Namaste name="Piyush" age={28} isGraduate={true} />
      <Namaste name="Richa" age={25} isGraduate={false} />
    </>
  );
}

export default App;
