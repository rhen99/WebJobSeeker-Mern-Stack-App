import React from "react";
import { Link } from "react-router-dom";
import "../Custom.css";

function Showcase() {
  return (
    <div className="showcase">
      <div className="showcase__inner">
        <h1 className="showcase__inner__h1">Find Remote Development Jobs</h1>
        <p className="lead">Find development jobs where ever you are.</p>
        <Link to="#" className="btn btn-success btn-lg mx-1">
          Get A Job
        </Link>
        <Link to="#" className="btn btn-warning btn-lg mx-1">
          Post A Job
        </Link>
      </div>
    </div>
  );
}

export default Showcase;
