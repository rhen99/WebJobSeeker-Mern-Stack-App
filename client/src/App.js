import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GuestRoute, ProtectedRoute } from "./components/layouts/Route";
import { loadUser } from "./actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import About from "./components/layouts/About";
import Homepage from "./components/layouts/Homepage";
import Dashboard from "./components/auth/Dashboard";
import JobListing from "./components/jobs/JobListing";
import JobEditor from "./components/jobs/JobEditor";
import Single from "./components/jobs/Single";
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
        <ProtectedRoute path="/editor" component={JobEditor} />
        <ProtectedRoute path="/job/:id" component={Single} />
        <ProtectedRoute path="/job/edit/:id" component={JobEditor} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
