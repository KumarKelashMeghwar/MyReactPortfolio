import React from "react";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import ErrorPage from "./Pages/ErrorPage";
import Service from "./Pages/Service";
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <>
      <Routes>
        <Route activeclassname="active" path="" element={<Home />} />
        <Route activeclassname="active" path="/home" element={<Home />} />
        <Route activeclassname="active" path="/about" element={<About />} />
        <Route activeclassname="active" path="/contact" element={<Contact />} />
        <Route activeclassname="active" path="/service" element={<Service />} />
        <Route activeclassname="active" path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
