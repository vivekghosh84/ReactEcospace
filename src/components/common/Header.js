import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "white" };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="navbar" id="nav">
        <NavLink className="nav-item" to="/" activeStyle={activeStyle} exact>
          Home
        </NavLink>
        {" | "}
        <NavLink className="nav-item" to="/courses" activeStyle={activeStyle}>
          Courses
        </NavLink>
        {" | "}
        <NavLink className="nav-item" to="/about" activeStyle={activeStyle}>
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;

// <nav>
//   <NavLink to="/" activeStyle={activeStyle} exact>
//     Home
//   </NavLink>
//   {" | "}
//   <NavLink to="/courses" activeStyle={activeStyle}>
//     Courses
//   </NavLink>
//   {" | "}
//   <NavLink to="/about" activeStyle={activeStyle}>
//     About
//   </NavLink>
// </nav>
