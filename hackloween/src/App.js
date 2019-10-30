import React from "react";
import GetMovie from "./components/GetMovie";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <GetMovie />
      </div>
    );
  }
}

export default App;
