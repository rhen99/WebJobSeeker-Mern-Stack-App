import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import TopJobs from "./components/TopJobs";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Showcase />
          <TopJobs />
        </Route>
        <Route path="/register/:registerForm" component={Register} />
        <Route path="/login/:loginForm" component={Login} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
