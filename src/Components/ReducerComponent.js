import React, {useState, useReducer} from 'react'

const reducerFunction = (existingState, secondArg) => {
    // if(action.type === "buttonClicked"){
    //     return {counter: 7};
    // }
    console.log("state", existingState, "secondArg", secondArg)
    return {counter: 6}
}

export default function ReducerComponent() {

    const [{counter}, setCounter ] = useReducer(reducerFunction, {counter: 4})


  return (
   <> <div>counter value is {counter}</div>
   <button onClick={()=> setCounter({type: "buttonClicked"})}>reducer</button></>
  )
}
