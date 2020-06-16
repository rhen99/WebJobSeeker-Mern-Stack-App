import React from "react";
import { Link } from "react-router-dom";
import numeral from "numeral";
import moment from "moment";

function Job({ job }) {
  const { title, company_name, salary, currency, created_at } = job;
  return (
    <div className="card mb-3">
      <div className="card-body">
        <Link to="#">
          <h5 className="card-title">{title}</h5>
        </Link>
        <p>
          <span className="text-muted">{company_name}</span> -{" "}
          <span className="text-success font-weight-bold">
            {currency} {numeral(salary).format("0a")}
          </span>{" "}
          Posted{" "}
          <span className="text-warning font-weight-bold">
            {moment(created_at).startOf("day").fromNow()}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Job;
