import React from "react";
import "./style/Countdown.scss";

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
    return (
      <p id={`${this.state.count}` <= 5 ? "blabla" : "count"}>
        Remaining time
        <br /> {this.state.count}
      </p>
    );
  }
}

export default CountDown;
