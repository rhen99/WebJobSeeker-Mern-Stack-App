import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";

function App() {
  return (
    <Router>
      <Navbar />
      <Showcase />
    </Router>
  );
}

export default App;
