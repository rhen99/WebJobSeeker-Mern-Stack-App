import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import TopJobs from "./components/TopJobs";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Showcase />
      <TopJobs />
      <Footer />
    </Router>
  );
}

export default App;
