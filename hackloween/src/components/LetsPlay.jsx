import React from "react";
import "./style/LetsPlay.scss";

function LetsPlay() {
  return (
    <div id="letsPlay">
      <div id="navbar"></div>
      <div id="timer"></div>
      <div id="quizz">
        <div id="moviePict"></div>
        <div id="answer">
          <div>
            <button className="answerCase">Answer 1</button>
            <button className="answerCase">Answer 2</button>
          </div>
          <div>
            <button className="answerCase">Answer 3</button>
            <button className="answerCase">Answer 4</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LetsPlay;
