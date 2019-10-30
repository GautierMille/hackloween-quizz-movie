import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LetsPlay from "./components/LetsPlay";

import Countdown from "./components/Countdown";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/LetsPlay" component={LetsPlay} />
      </Switch>
      <Countdown />

    </div>
  );
}

export default App;
