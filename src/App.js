import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Create from "./Component/Create";
import Home from "./Component/Home";
import Menu from "./Component/Menu";
import Pnf from "./Component/Pnf";
import Update from "./Component/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu/>

      <Routes>
        <Route path={`/`} element={<Home/>}/>
        <Route path={`/home`} element={<Home/>}/>
        <Route path={`/create`} element={<Create/>}/>
        <Route path={`/update/:id`} element={<Update/>}/>
        <Route path={`/*`} element={<Pnf/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
