import React from "react";
import NavBar from "./NavBar";
import "./style/LetsPlay.scss";
import Countdown from "./Countdown";
import GetMovie from "./GetMovie";

class LetsPlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ScoreCount: 0
    };
  }

  incrementScore = () => {
    this.setState({ ScoreCount: this.state.ScoreCount + 1 });
  };

  render() {
    return (
      <div id="letsPlay">
        <NavBar
          displayScore={this.state.ScoreCount}
          Scoring={this.incrementScore}
        />
        <Countdown />
        <GetMovie />
      </div>
    );
  }
}

export default LetsPlay;
