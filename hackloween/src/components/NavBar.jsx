import React from "react";
import "./style/NavBar.scss";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <Link to="/">Home</Link>
      Your Score : 400 pts
    </div>
  );
}

export default NavBar;
