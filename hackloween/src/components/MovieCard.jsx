import React from "react";

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <img src={this.props.posterUrl}></img>
        {/* <h1>{this.props.title}</h1>*/}
      </div>
    );
  }
}

export default MovieCard;
