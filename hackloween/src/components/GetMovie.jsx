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
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
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

  render() {
    return (
      <div>
        <MovieCard
          posterUrl={this.state.movies[this.state.goodAnswer].posterUrl}
        ></MovieCard>
        <button>{this.state.movies[0].title}</button>
        <button>{this.state.movies[1].title}</button>
        <button>{this.state.movies[2].title}</button>
        <button>{this.state.movies[3].title}</button>
      </div>
    );
  }
}
export default GetMovie;
