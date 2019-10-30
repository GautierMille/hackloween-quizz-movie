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
      answer1: sampleMovie,
      answer2: sampleMovie,
      answer3: sampleMovie,
      answer4: sampleMovie,
      goodAnswer: 0
    };
  }
  componentDidMount() {
    this.getMovie();
    this.getAnswers();
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
          movies: data.movies[Math.floor(Math.random() * Math.floor(82))]
        });
      });
  }

  getAnswers() {
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
          ],
          answer1: data.movies[movie1],
          answer2: data.movies[movie2],
          answer3: data.movies[movie3],
          answer4: data.movies[movie4]
        });
      });
  }
  goodAnswer() {
    let response = Math.floor(Math.random() * 3);
    this.setState({ goodAnswer: response });
  }

  render() {
    return (
      <div>
        <MovieCard
          posterUrl={this.state.answers[this.state.goodAnswer].posterUrl}
        ></MovieCard>
        <button>{this.state.answers[0].title}`</button>
        <button>{this.state.answers[1].title}</button>
        <button>{this.state.answers[2].title}</button>
        <button>{this.state.answers[3].title}</button>
      </div>
    );
  }
}
export default GetMovie;
