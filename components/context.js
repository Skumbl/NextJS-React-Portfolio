import { createContext, useState } from "react";

export const DarkModeContext = createContext({
  darkMode: false,
  setDarkMode: () => {},
});

const initialState = true;

const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(initialState);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
