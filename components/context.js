import { createContext, useState } from "react";

export const DarkModeContext = createContext({
  darkMode: false,
  setDarkMode: () => {},
});

const initialState = false;

const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(initialState);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
