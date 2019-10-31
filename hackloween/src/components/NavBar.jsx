import React from "react";
import "./style/NavBar.scss";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div className="NavBar">
      <div id="textNavBar">
        <Link to="/">Home</Link>
        {/* TEST INCREMENT BUTTON
        <button type="button" onClick={this.props.Scoring}>
          Test Increment
        </button>*/}
        Your Score : {props.displayScore} pts
      </div>
    </div>
  );
}

export default NavBar;
