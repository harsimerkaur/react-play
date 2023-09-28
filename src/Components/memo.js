import React, { useEffect, useMemo, useState } from 'react'

/**
 * 
 * On every render we will get new reference value for obj but
 * objMemo will be assigned value only once when the component is 
 * loaded first.
 */
export default function Memo() {
    const [counter, setCounter] = useState(0);
    const value1 = 100;
    const objMemo = useMemo(()=> {
        console.log("I am inside useMemo");
        return {user: 1};
    },[])
    const obj = {user: 2}; 
    useEffect(()=>{
      
      console.log("obj changed")
    },[obj])
    useEffect(()=>{
      
      console.log("objMemo changed")
    },[objMemo])
  return (
    <>
     <div>{counter}</div>
     <div>value 1 {value1}</div>
     <div>value 2 {objMemo.user}</div>
    <button onClick={()=>setCounter(Math.random())}>change counter</button>
    </>
   
  )
}
