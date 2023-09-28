import React, { useContext } from "react";
import Context from "../contextStore";
import { useLocalStorage, useCounter } from "../hooks";

export const RemoteComponent = () => {
  const { state, dispatch } = useContext(Context);
  const background = state.theme === "dark" ? "black" : "yellow";
  const color = state.theme === "dark" ? "white" : "black";
  return (
    <>
      <div style={{background, color}}>Remote Component</div>
      <RemoteComponent2></RemoteComponent2>
    </>
  );
};

export const RemoteComponent2 = () => {
  const { state, dispatch } = useContext(Context);
  const  { count, add, sub} =  useCounter(20);
//   const contextValue = useContext(Context);
  return (
    <>
      <div>Remote 2</div>
      {/* {contextValue} */}
      <button onClick={()=>{dispatch({type: "TOGGLE_THEME"})}}>
        change theme
      </button>
      <h3>Mode: {state.theme}</h3>
      <button onClick={add}>Add Count</button>
      <button onClick={sub}>Sub Count</button>
      <h3>Count: {count}</h3>
      <RemoteCompoent3></RemoteCompoent3>
    </>
  );
};

export const RemoteCompoent3 = () => {
    const [name, setName] = useLocalStorage("name");

    return (
    <>
        <div>{name}</div>
        <input value ={name}  onChange={e=> setName(e.target.value)}></input>
    </>
    )

} 
