import React from "react";
import NavBar from "./NavBar";
import "./style/LetsPlay.scss";
import "./style/LetsPlayDesktop.scss";
import GetMovie from "./GetMovie";

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
      ],
      count: 20,
      launchfunction: true
    };
    this.counterFunc = setInterval(this.time, 1000);
  }

  blurCase = () => {
    setInterval(() => {
      let i = Math.floor(Math.random() * 4);
      let j = Math.floor(Math.random() * 3);
      this.blurFunction(i, j);
    }, 2000);
  };

  componentDidMount() {
    this.blurCase();
  }

  time = () => {
    if (this.state.count <= 0) {
      clearInterval(this.counterFunc);
      clearInterval(this.blurCase);
      return;
    }
    this.setState({ count: this.state.count - 1 });
  };

  timeReset = () => {
    this.setState({
      count: 20
    });
  };

  incrementScore = () => {
    this.setState({
      ScoreCount: this.state.ScoreCount + this.state.count,
      launchfunction: true,
      blurTab: [
        [true, true, true],
        [true, true, true],
        [true, false, true],
        [true, true, true]
      ]
    });
    clearInterval(this.blurCase);
    clearInterval(this.counterFunc);
    this.counterFunc = setInterval(this.time, 1000);
  };

  wrong = () => {
    this.setState({
      ScoreCount: this.state.ScoreCount - 5
    });
  };

  blurFunction = (i, j) => {
    let arr = this.state.blurTab;
    arr[i][j] = false;
    this.setState({ blurTab: arr });
  };

  render() {
    return (
      <div className="letsPlay">
        <NavBar
          displayScore={this.state.ScoreCount}
          Scoring={this.incrementScore}
        />
        <p
          id="Countdown"
          id={`${this.state.count}` <= 5 ? "hurryCount" : "count"}
        >
          Remaining time
          <br /> {this.state.count}
        </p>

        <div className="container">
          <div className="blurTab">
            {this.state.blurTab.map(row =>
              row.map(column => {
                return (
                  <div className={column === true ? "blur" : "noBlur"}></div>
                );
              })
            )}
          </div>
          <GetMovie
            className="quizz"
            wrong={this.wrong}
            incrementScore={this.incrementScore}
            timeReset={this.timeReset}
            time={this.time}
          />
          {/*<GetMovie className="quizz"></GetMovie>*/}
        </div>
      </div>
    );
  }
}

export default LetsPlay;
