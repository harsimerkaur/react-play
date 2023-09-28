import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import LookMa from './LookMa';
import Stopwatch from './Stopwatch';
import ContextComponent from './ContextComponent';
import RefCase from './RefCase';
import ReducerComponent from './ReducerComponent';
import Memo from './memo';
import { RemoteComponent } from './RemoteComponent';
import ParentCheckbox from './compoundComponent/parent';

function Routing() {

  return (
    <Routes>
    <Route exact path="/" element={<LookMa></LookMa>}>
    </Route>
    <Route path="/simer" element={<h1>hello simer</h1>}></Route>
    <Route path="/gaurav" element={<h2>hello gaurav</h2>}></Route>
    <Route path="/theme" element={<ContextComponent></ContextComponent>}></Route>
    <Route path="/stopwatch" element={<RefCase></RefCase>}></Route>
    <Route path="/memo" element={<Memo/>}></Route>
    <Route path="/remote" element={<RemoteComponent/>}></Route>
    <Route path="/compound" element={<ParentCheckbox/>}></Route>
  </Routes>
  )
}

export default Routing