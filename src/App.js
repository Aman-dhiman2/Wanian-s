import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Home from "./Page/Home";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
