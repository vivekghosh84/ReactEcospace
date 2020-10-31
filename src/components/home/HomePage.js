import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="jumbotronMain">
        <h1>Course Management</h1>
        <p>First React, React-Redux and React Router web application!</p>
        <Link to="/about" className="btn btn-primary btn-lg">
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
