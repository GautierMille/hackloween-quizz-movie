import React from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import "./style/LetsPlay.scss";
import "./style/GetMovie.scss";

let sampleMovie = [
  { id: "" },
  { title: "" },
  { director: "" },
  { year: "" },
  { posterUrl: "" }
];

class GetMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: sampleMovie,
      answers: [sampleMovie, sampleMovie, sampleMovie, sampleMovie],
      goodAnswer: 0,
      questionNumber: 0,
      jumper: false,
      jumpScares: [
        "conjuring.jpeg",
        "scare.jpeg",
        "loic.jpeg",
        "pennywise.jpeg",
        "ring.jpg ",
        "the-exorcist.jpeg"
      ],
      jumperImg: ""
    };
  }
  componentDidMount() {
    this.getMovie();
    this.goodAnswer();
  }
  getMovie() {
    axios
      .get("https://hackathon-wild-hackoween.herokuapp.com/movies")
      .then(response => response.data)
      .then(data => {
        this.setState({
          movies: data.movies.sort(() => Math.random() - 0.5) //[Math.floor(Math.random() * Math.floor(82))]
        });
      });
  }

  goodAnswer() {
    let response = Math.floor(Math.random() * 3);
    this.setState({ goodAnswer: response });
    this.setState({ questionNumber: this.state.questionNumber + 1 });
  }

  checkAnswer = event => {
    const content = event.target.innerHTML;
    if (content === this.state.movies[this.state.goodAnswer].title) {
      this.props.incrementScore();
      this.getMovie();
      this.goodAnswer();
      this.props.timeReset();
      this.playTrue();
    } else {
      this.props.wrong();
      this.playFalse();
    }
  };

  playTrue() {
    const trueAnswer = new Audio("/sounds/wow.mp3");
    trueAnswer.play();
  }

  playFalse() {
    const falseAnswer = new Audio("/sounds/sheep.mp3");
    const a = Math.floor(Math.random() * 5);
    this.setState({ jumperImg: this.state.jumpScares[a] });
    const jumperOn = !this.state.jumper;
    this.setState({ jumper: jumperOn });
    setTimeout(() => {
      const jumperOn = !this.state.jumper;
      this.setState({ jumper: jumperOn });
    }, 1000);
    falseAnswer.play();
  }

  // randomJumpScare() {
  //   const a = Math.floor(Math.random() * 5);
  //   console.log(a);
  //   return this.state.jumpScares[a];
  // }

  render() {
    return (
      <div>
        <div className={this.state.jumper ? "jumperOn" : "jumperOff"}>
          <img src={this.state.jumperImg} />
        </div>
        <div className="quizz">
          <MovieCard
            posterUrl={this.state.movies[this.state.goodAnswer].posterUrl}
          />

          <div className="answer">
            <div className="answerTab">
              <button onClick={this.checkAnswer} className="answerCase">
                {this.state.movies[0].title}
              </button>
              <button onClick={this.checkAnswer} className="answerCase">
                {this.state.movies[1].title}
              </button>
            </div>
            <div className="answerTab">
              <button onClick={this.checkAnswer} className="answerCase">
                {this.state.movies[2].title}
              </button>
              <button onClick={this.checkAnswer} className="answerCase">
                {this.state.movies[3].title}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default GetMovie;
