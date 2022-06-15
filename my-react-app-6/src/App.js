import "./App.css";
import React from "react";
import { ThemeContext } from "./Theme-context";
// import Context from "./Context";
// import Provider from "./Provider";

// function Agents() {
//   return <AgentBonds />;
// }
// function AgentBonds() {
//   return (
//     <Context.Consumer>
//       {(Context) => (
//         <>
//           <h3>Agent Information:{Context.data.AgentName}</h3>
//           <p>Mission Name : {Context.data.MissionName}</p>
//           <h2>Mission Status: {Context.data.Accept} </h2>
//           <button onClick={Context.isMissionAccepted}>Choose To Accept</button>
//         </>
//       )}
//     </Context.Consumer>
//   );
// }

function App() {
  const { theme, dark, toggle } = React.useContext(ThemeContext);

  // useContext is alternative to comsumer
  return (
    <div className="app">
      {/* <Provider>
        <Agents />
      </Provider> */}

      <h1>Theme Toggler</h1>
      <div
        className="app-header"
        onClick={toggle}
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.color,
        }}
      >
        <h1>Context API Theme Toggler</h1>
        <p>
          Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem
          Ipsum सन १५०० के बाद से अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक
          अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों
          से जीवित रहा बल्कि इसने इलेक्ट्रॉनिक मीडिया में छलांग लगाने के बाद भी
          मूलतः अपरिवर्तित रहा. यह 1960 के दशक में Letraset Lorem Ipsum अंश
          युक्त पत्र के रिलीज के साथ लोकप्रिय हुआ, और हाल ही में Aldus PageMaker
          Lorem Ipsum के संस्करणों सहित तरह डेस्कटॉप प्रकाशन सॉफ्टवेयर के साथ
          अधिक प्रचलित हुआ.
        </p>
        <div className="button_container">{`Toggle To ${
          !dark ? "Dark" : "Light"
        }  theme`}</div>
      </div>
    </div>
  );
}

// function Welcome(props) {
//   return (
//     <h1>
//       hello {props.name}, Your Age is:{props.age}
//     </h1>
//   );
// }

// // Destructuring the props

// function Welcome({ name, age }) {
//   return (
//     <h1>
//       Hello {name}, Your Age is:{age}
//     </h1>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Welcome name="Piyush" age="28" />
//       <Welcome name="Ritu" age="30" />
//       <Welcome name="Richa" age="24" />
//       <Welcome name="Advika" age="3" />
//     </div>
//   );
// }

export default App;
