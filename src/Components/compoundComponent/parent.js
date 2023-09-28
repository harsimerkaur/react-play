import React, {createContext, useContext, useEffect, useState} from 'react'

/**
 * What we learn from this component>
 * Compound components, handling of  DOM elements in compound components
 * how to handle error if child components of compound components are used outside 
 * the compound component.
 * https://www.youtube.com/watch?v=MfIoAG3e7p4&t=619s
 */


const checkboxContext = createContext(null);


export default function ParentCheckbox() {
  return (
    <>
    
   <Checkbox>
    <div>
        <div>
        <LabelCheckbox>Checbox label</LabelCheckbox>
        </div>
    </div>
    <CheckboxInput></CheckboxInput>
   </Checkbox>
    {/* <CheckboxInput></CheckboxInput> */}
 </>
  )
}


export function Checkbox({children}) {
    // return (
    //     <div>{children}</div>
    // )
    const [checked, setChecked] = useState(true);

    // return React.Children.map(children, (child) => {
    //     console.log(child);
    //     // child.props.hello = "world"  //Uncaught TypeError: Cannot add property hello, object is not extensible
    //     const clone = React.cloneElement(child, {hello: "world", checked, setChecked});
    //     return clone }
    // )

       return <checkboxContext.Provider value={{checked, setChecked}}>{children}</checkboxContext.Provider>
    }

export function CheckboxInput(){

    // handling errors if checked and setChecked are undefined. 
    // const [_checked, _setChecked] = useState(!!checked);

    // useEffect(()=> {
    //     if(!setChecked){
    //         console.warn("checkboxInput should be called inside a Checkbox component for max benefits.")
    //     }
    // },[])
    const context = useContext(checkboxContext)
    if(!context){
        throw new Error("use CheckboxInput within checkbox")
    }
    const {checked, setChecked} = context;
    return (
        <input checked={checked} type="checkbox" onChange={e =>{
            // handling error if CheckboxInput component is used outside of compound component.
        // _setChecked(e.target.checked);
        if(setChecked){
         setChecked(e.target.checked)       
        }
        } }/>
    )
}

export function LabelCheckbox({children}){

    // const [checked, setChecked] =  useState(true)
    const context = useContext(checkboxContext)
    if(!context){
        throw new Error("use LabelCheckbox within checkbox")
    }
    const {checked, setChecked} = context;
    return (
        <label onClick={() =>  setChecked(!checked)}>{children}</label>
    )
}