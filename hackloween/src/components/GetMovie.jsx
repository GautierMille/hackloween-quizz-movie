import React from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

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
      goodAnswer: 0
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
  }

  checkAnswer = event => {
    const content = event.target.innerHTML;
    if (content === this.state.movies[this.state.goodAnswer].title) {
      this.props.incrementScore();
      this.getMovie();
      this.goodAnswer();
      this.props.timeReset();
    } else {
      this.props.wrong();
      this.playFalse();
    }
  };

  playFalse() {
    const falseAnswer = new Audio("/sounds/wrong.mp3");
    falseAnswer.play();
  }

  render() {
    return (
      <div id="quizz">
        <MovieCard
          posterUrl={this.state.movies[this.state.goodAnswer].posterUrl}
        ></MovieCard>

        <div id="answer">
          <div>
            <button onClick={this.checkAnswer} className="answerCase">
              {this.state.movies[0].title}
            </button>
            <button onClick={this.checkAnswer} className="answerCase">
              {this.state.movies[1].title}
            </button>
          </div>
          <div>
            <button onClick={this.checkAnswer} className="answerCase">
              {this.state.movies[2].title}
            </button>
            <button onClick={this.checkAnswer} className="answerCase">
              {this.state.movies[3].title}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default GetMovie;

/*<button>{this.state.movies[0].title}</button>
        <button>{this.state.movies[1].title}</button>
        <button>{this.state.movies[2].title}</button>
        <button>{this.state.movies[3].title}</button>
      </div>*/
