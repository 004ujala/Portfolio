import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Project from "./components/Project";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/experience" element={<Experience />} />
        <Route exact path="/project" element={<Project />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
