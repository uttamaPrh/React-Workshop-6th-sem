import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import UserLayout from "./User/UserLayout";
import Home from "./User/Home/Home";
import About from "./User/AboutUS/About";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<UserLayout/>}>
            <Route path="/"  element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
