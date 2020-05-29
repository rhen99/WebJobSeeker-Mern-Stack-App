import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
    </>
  );
}

export default App;
