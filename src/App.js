import React, {useState} from 'react';
import logo from "./logo.svg";
import "./App.css";
import Routing from "./Components/Routing";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContextComponent from './Components/ContextComponent';
import { ThemeProvider } from './ThemeContext';

function App() {
 
  return (
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
            <Link to="/reducer">Reducer</Link>
          </li>
        </ul>
        </div>
        <Routing/>
      </div>
  );
}

export default App;

console.log("App()", App())