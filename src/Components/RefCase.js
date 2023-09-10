import React, { useEffect, useRef, useState } from 'react'

export default function RefCase() {
    let counter  = useRef(0);
    const [state, setState] = useState("");

    useEffect(()=> {
        counter.current++;
        console.log("counter", counter)
    })
  return (
 <>
   <input value={state} type="text" onChange={(e)=> {setState(e.target.value)}}></input>
   <span>{counter.current}</span>
   </>
  )
}
