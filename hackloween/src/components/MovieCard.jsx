import React from "react";

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <article>
        <img src={this.props.posterUrl}></img>
        <h1>{this.props.title}</h1>
      </article>
    );
  }
}

export default MovieCard;
