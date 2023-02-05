import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import LookMa from './LookMa';

function Routing() {

  return (
    <Routes>
    <Route exact path="/" element={<LookMa></LookMa>}>
    </Route>
    <Route path="/simer" element={<h1>hello simer</h1>}>
     
    </Route>
    <Route path="/gaurav" element={<h2>hello gaurav</h2>}>

    </Route>
  </Routes>
  )
}

export default Routing