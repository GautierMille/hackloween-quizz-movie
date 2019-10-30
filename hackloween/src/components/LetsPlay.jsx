import React from "react";
import NavBar from "./NavBar";
import "./style/LetsPlay.scss";
import Countdown from "./Countdown";

class LetsPlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ScoreCount: 0,
      blurTab: [
        [true, true, true],
        [true, true, true],
        [true, false, true],
        [true, true, true]
      ]
    };
  }

  componentDidMount() {
    for (let k = 2000; k <= 20000; k = k + 2000) {
      setTimeout(() => {
        let i = Math.floor(Math.random() * 4);
        let j = Math.floor(Math.random() * 3);
        this.blurFunction(i, j);
      }, k);
    }
  }

  incrementScore = () => {
    this.setState({ ScoreCount: this.state.ScoreCount + 1 });
  };

  blurFunction = (i, j) => {
    let arr = this.state.blurTab;
    arr[i][j] = false;
    this.setState({ blurTab: arr });
    console.log(i, j);
  };

  render() {
    return (
      <div id="letsPlay">
        <NavBar
          displayScore={this.state.ScoreCount}
          Scoring={this.incrementScore}
        />
        <Countdown />
        <div id="quizz">
          <div id="moviePict">
            {this.state.blurTab.map(row =>
              row.map(column => {
                return (
                  <div className={column === true ? "blur" : "noBlur"}></div>
                );
              })
            )}
          </div>
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
