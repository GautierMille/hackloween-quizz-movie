import React from "react";
import "./style/NavBar.scss";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="NavBar">
        <div id="textNavBar">
        <Link to="/">Home</Link>
        {/* TEST INCREMENT BUTTON
        <button type="button" onClick={this.props.Scoring}>
          Test Increment
        </button>*/}
        Your Score : {this.props.displayScore} pts
      </div>
      </div>
    );
  }
}
export default NavBar;
