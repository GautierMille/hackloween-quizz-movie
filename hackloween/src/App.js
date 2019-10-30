import React from "react";
import GetMovie from "./components/GetMovie";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LetsPlay from "./components/LetsPlay";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/LetsPlay" component={LetsPlay} />
      </Switch>
    </div>
  );
}

export default App;
