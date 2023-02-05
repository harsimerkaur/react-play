import React, { useState } from "react";
import { useContext } from "react/cjs/react.development";
export const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export  function useTheme(){
    return useContext(ThemeContext)
}

export  function useThemeUpdater(){
    return useContext(ThemeUpdateContext)
}

export function ThemeProvider ({children}) {


const [darkTheme, setDarkTheme] = useState(true);

function toggleTheme(){
  setDarkTheme(prevDarkTheme => !prevDarkTheme)
}

   return( <ThemeContext.Provider value={darkTheme}>
        <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
        </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
   )
}