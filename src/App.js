import React, {useReducer, useState} from 'react';
import logo from "./logo.svg";
import "./App.css";
import Routing from "./Components/Routing";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContextComponent from './Components/ContextComponent';
import { ThemeProvider } from './ThemeContext';
import Context from "./contextStore";
const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        ...{theme: state.theme === "dark" ? "light" : "dark"}}
    default:
      return state;
  }
};

const App = () => {
 
  const [state, dispatch] = useReducer(reducer, {theme: "dark"});
  return (
    <Context.Provider value={{state, dispatch}}>
    {/* <Context.Provider value={"simer"}> */}
      <div className="App">
        {/* <ThemeProvider>
    
        <ContextComponent></ContextComponent>
        </ThemeProvider> */}
        <div className='header'>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/simer">Simer</Link>
          </li>
          <li>
            <Link to="/gaurav">Gaurav</Link>
          </li>
          <li>
            <Link to="/stopwatch">Stopwatch</Link>
          </li>
          <li>
            <Link to="/theme">Theme</Link>
          </li>
          <li>
            <Link to="/memo">Memo</Link>
          </li>
          <li>
            <Link to="/remote">remote theme context</Link>
          </li>
          <li>
            <Link to="/compound">Compound component</Link>
          </li>
        </ul>
        </div>
        <Routing/>
      </div>
      </Context.Provider>
  );
}

export default App;

// console.log("App()", App())