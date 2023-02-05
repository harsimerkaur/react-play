import React from 'react'
import { useTheme, useThemeUpdater } from '../ThemeContext'
function ContextComponent() {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdater();
    const themeStyles = {
        backgroundColor: darkTheme ? "#000" : "#fff",
        color: darkTheme ? "#CCC" : '#333',
        padding: '2rem',
        margin: '2rem',
        border: darkTheme ? `1px solid #fff`:  `1px solid #000`,
    }
  return (
  <>
      <button onClick={toggleTheme}>change theme</button>
    <div style={themeStyles}>ContextComponent</div>
  </>
  )
}

export default ContextComponent