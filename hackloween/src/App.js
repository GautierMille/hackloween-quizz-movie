import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LetsPlay from "./components/LetsPlay";

function App() {
  return (
    <div className="App">
      <h1>Helloween !</h1>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/LetsPlay" component={LetsPlay} />
      </Switch>
    </div>
  );
}

export default App;
