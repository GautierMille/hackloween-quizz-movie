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
        <Link to="/">Home</Link>
        Your Score : {this.props.displayScore} pts
      </div>
    );
  }
}
export default NavBar;
