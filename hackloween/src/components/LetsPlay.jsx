import React from "react";
import NavBar from "./NavBar";
import "./style/LetsPlay.scss";
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
      ]
      count: 20

    };
    this.counterFunc = setInterval(this.time, 1000);
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

  time = () => {
    if (this.state.count <= 0) {
      clearInterval(this.counterFunc);
      return;
    }
    this.setState({ count: this.state.count - 1 });
  };


  incrementScore = () => {
    this.setState({
      ScoreCount: this.state.ScoreCount + this.state.count
    });
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

        <NavBar displayScore={this.state.ScoreCount} />
        <p
          id="Countdown"
          onClick={() => {
            this.incrementScore();
          }}
          id={`${this.state.count}` <= 5 ? "blabla" : "count"}
        >
          Remaining time
          <br /> {this.state.count}
        </p>

      </div>
    );
  }
}

export default LetsPlay;
