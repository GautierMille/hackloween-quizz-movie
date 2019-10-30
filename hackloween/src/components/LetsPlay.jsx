import React from "react";
import NavBar from "./NavBar";
import "./style/LetsPlay.scss";
import GetMovie from "./GetMovie";

class LetsPlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ScoreCount: 0,
      count: 20
    };
    this.counterFunc = setInterval(this.time, 1000);
  }

  time = () => {
    if (this.state.count <= 0) {
      clearInterval(this.counterFunc);
      return;
    }
    this.setState({ count: this.state.count - 1 });
  };

  timeReset = () => {
    this.setState({
      count: 20
    });
    this.counterFunc = setInterval(this.time, 1000);
  };

  incrementScore = () => {
    this.setState({
      ScoreCount: this.state.ScoreCount + this.state.count
    });
  };

  wrong = () => {
    this.setState({
      ScoreCount: this.state.ScoreCount - 5
    });
  };

  render() {
    return (
      <div id="letsPlay">
        <NavBar displayScore={this.state.ScoreCount} />
        <p
          id="Countdown"
          /*onClick={() => {
            this.incrementScore();
          }}*/
          id={`${this.state.count}` <= 5 ? "blabla" : "count"}
        >
          Remaining time
          <br /> {this.state.count}
        </p>
        <GetMovie
          wrong={this.wrong}
          incrementScore={this.incrementScore}
          timeReset={this.timeReset}
          time={this.time}
        />
      </div>
    );
  }
}

export default LetsPlay;
