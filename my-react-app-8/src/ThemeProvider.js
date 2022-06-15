import React, { createContext, useState } from "react";

export const ThemeContext = createContext(false);
export const Context = () => React.useContext(ThemeContext);

function ThemeProvider({ children }) {
  const [toggle, setToggle] = useState(false);

  const toggleFunction = () => {
    setToggle(!toggle);
  };

  return (
    <ThemeContext.Provider value={{ toggle, toggleFunction }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
