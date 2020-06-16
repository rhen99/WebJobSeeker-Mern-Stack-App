import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GuestRoute, ProtectedRoute } from "./components/Route";
import { loadUser } from "./actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import About from "./components/About";
import Homepage from "./components/Homepage";
import Dashboard from "./components/Dashboard";
import JobListing from "./components/JobListing";
import Editor from "./components/Editor";
function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  useEffect(() => {}, [auth]);
  return (
    <Router>
      <Navbar />
      <Switch>
        <GuestRoute path="/" exact component={Homepage} />
        <Route path="/about-us" component={About} />
        <GuestRoute path="/register/:registerForm" component={Register} />
        <GuestRoute path="/login/:loginForm" component={Login} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <ProtectedRoute path="/jobs" component={JobListing} />
        <ProtectedRoute path="/editor" component={Editor} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
