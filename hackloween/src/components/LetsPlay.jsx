import React from "react";
import NavBar from "./NavBar";

class LetsPlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ScoreCount: 0
    };
  }

  incrementScore = () => {
    this.setState({ ScoreCount: this.state.ScoreCount });
  };

  render() {
    return (
      <div>
        <NavBar
          displayScore={this.state.ScoreCount}
          Scoring={this.incrementScore}
        />
      </div>
    );
  }
}

export default LetsPlay;
