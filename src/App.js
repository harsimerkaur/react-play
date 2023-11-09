import React, {useReducer, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import logo from "./logo.svg";
import "./App.css";
import Routing from "./Components/Routing";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContextComponent from './Components/ContextComponent';
import { ThemeProvider } from './ThemeContext';
import Context from "./contextStore";
import { addToppings } from './Reducers/pizzaSlice';
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
  const pizza = useSelector(state => state.pizza)
  const dispatchState  = useDispatch()
  const [topping, setTopping] = useState("");
  console.log("pizza.toppings", pizza.toppings)
 const handleToppings = () => {
  console.log("topping", topping)
    dispatchState(addToppings(topping))
  }

  return (
    <Context.Provider value={{state, dispatch}}>
    {/* <Context.Provider value={"simer"}> */}
      <div className="App">
        {/* <ThemeProvider>
    
        <ContextComponent></ContextComponent>
        </ThemeProvider> */}
        <div className='header'>
        {pizza.toppings.map(topping => (<div key={topping}>{topping}</div>))}
        <input value={topping} onChange={e =>setTopping(e.target.value)} />
        <button onClick={handleToppings}> dispatch topping </button>
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