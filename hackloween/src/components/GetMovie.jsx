import React from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import "./style/LetsPlay.scss";

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
      questionNumber: 0
    };
  }
  componentDidMount() {
    this.getMovie();
    //this.getAnswers();
    this.goodAnswer();
  }
  getMovie() {
    axios
      .get("https://hackathon-wild-hackoween.herokuapp.com/movies")
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          movies: data.movies.sort(() => Math.random() - 0.5) //[Math.floor(Math.random() * Math.floor(82))]
        });
      });
  }

  /*getAnswers() {
    let movie1 = Math.floor(Math.random() * Math.floor(82));
    let movie2 = Math.floor(Math.random() * Math.floor(82));
    let movie3 = Math.floor(Math.random() * Math.floor(82));
    let movie4 = Math.floor(Math.random() * Math.floor(82));
    axios
      .get("https://hackathon-wild-hackoween.herokuapp.com/movies")
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          answers: [
            data.movies[movie1],
            data.movies[movie2],
            data.movies[movie3],
            data.movies[movie4]
          ]
        });
      });
  }*/
  goodAnswer() {
    let response = Math.floor(Math.random() * 3);
    this.setState({ goodAnswer: response });
    this.setState({ questionNumber: this.state.questionNumber + 1 });
  }

  render() {
    return (
      <div className="quizz">
        <MovieCard
          posterUrl={this.state.movies[this.state.goodAnswer].posterUrl}
        />

        <div className="answer">
          <div>
            <button className="answerCase">{this.state.movies[0].title}</button>
            <button className="answerCase">{this.state.movies[1].title}</button>
          </div>
          <div>
            <button className="answerCase">{this.state.movies[2].title}</button>
            <button className="answerCase">{this.state.movies[3].title}</button>
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
