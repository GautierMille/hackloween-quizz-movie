import React from "react";
import NavBar from "./NavBar";
import "./style/LetsPlay.scss";
import Countdown from "./Countdown";

class LetsPlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ScoreCount: 0,
      Scoring: 1
    };
  }

  incrementScore = () => {
    this.setState({ ScoreCount: this.state.ScoreCount + this.state.Scoring });
  };

  render() {
    return (
      <div id="letsPlay">
        <NavBar displayScore={this.state.ScoreCount} />
        <Countdown Scoring={this.incrementScore} />
        <div id="quizz">
          <div id="moviePict"></div>
          <div id="answer">
            <div>
              <button className="answerCase">Answer 1</button>
              <button className="answerCase">Answer 2</button>
            </div>
            <div>
              <button className="answerCase">Answer 3</button>
              <button className="answerCase">Answer 4</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LetsPlay;
