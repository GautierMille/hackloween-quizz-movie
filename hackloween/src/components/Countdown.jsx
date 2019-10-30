import React from "react";

class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 20 };
    this.counterFunc = setInterval(this.time, 1000);
  }

  time = () => {
    if (this.state.count <= 0) {
      clearInterval(this.counterFunc);
      return;
    }
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return <p id="count">count : {this.state.count}</p>;
  }
}

export default CountDown;
