import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import UserLayout from "./User/UserLayout";
import Home from "./User/Home/Home";
import About from "./User/AboutUS/About";
import Blog from "./User/Blog/Blog";
import SingleBlog from "./User/Blog/SingleBlog";
import AdminLayout from "./Admin/Layout";
import AdminHome from "./Admin/Home/AdminHome";
import AddBlog from "./Admin/Home/Blog/AddBlog";
import EditBlog from "./Admin/Home/Blog/EditBlog";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<UserLayout/>}>
            <Route path="/"  element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/blog/:id" element={<SingleBlog/>}/>

            

          </Route>

          <Route path="/admin/" element={<AdminLayout/>}>
            <Route path="home" element={<AdminHome/>}/>
            <Route path="add" element={<AddBlog/>}/>
            <Route path="edit/:id" element={<EditBlog/>}/>
            </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
