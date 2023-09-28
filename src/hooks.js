import { useState, useEffect } from "react";

export function useCounter (initialValue) {
const [count, setCount] = useState(initialValue);
const add = () => setCount(c=> c+1)
const sub = () => setCount(c=> c-1)
return {count, add, sub}
}

export function useLocalStorage (key, initialValue) {
    const [state, setState] = useState(()=> initialValue || localStorage.getItem(key));

    useEffect(()=> {
        localStorage.setItem(key, state);
    }, [state, key]);

    return [state, setState];
}