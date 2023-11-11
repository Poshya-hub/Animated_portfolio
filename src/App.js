import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Layout from "./components/Layout";
import Skills from "./components/Skills";
import Soundbar from "./components/Soundbar";
import Contact from "./components/Contact";
import Project from "./components/Project";
import "./App.scss";

const App = () => {
  return (
    <>
      <Soundbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Project" element={<Project />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
