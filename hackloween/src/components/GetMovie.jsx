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
      firstAnswer: sampleMovie,
      secondAnswer: sampleMovie,
      thirdAnswer: sampleMovie,
      fourthAnswer: sampleMovie
    };
  }
  componentDidMount() {
    this.getMovie();
    this.getAnswers();
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
    axios
      .get("https://hackathon-wild-hackoween.herokuapp.com/movies")
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          firstAnswer: data.movies[Math.floor(Math.random() * Math.floor(82))],
          secondAnswer: data.movies[Math.floor(Math.random() * Math.floor(82))],
          thirdAnswer: data.movies[Math.floor(Math.random() * Math.floor(82))],
          fourthAnswer: data.movies[Math.floor(Math.random() * Math.floor(82))]
        });
      });
  }

  render() {
    return (
      <div>
        <MovieCard
          posterUrl={this.state.movies.posterUrl}
          title={this.state.movies.title}
        ></MovieCard>
        <button>{this.state.firstAnswer.title}</button>
        <button>{this.state.secondAnswer.title}</button>
        <button>{this.state.thirdAnswer.title}</button>
        <button>{this.state.fourthAnswer.title}</button>
      </div>
    );
  }
}
export default GetMovie;
