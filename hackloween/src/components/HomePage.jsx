import React from "react";
import { Link } from "react-router-dom";
import "./style/HomePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="blood">
        <img src="blood.png" className="bloodimg" />
      </div>
      <div className="title">
        <h1>Horror Movie</h1>
        <h1> QUIZZ</h1>
      </div>
      <button>
        <Link to="/LetsPlay">
          <p>START</p>
        </Link>
      </button>
      <div className="madePart"> - Made by : Us - </div>
    </div>
  );
}

export default HomePage;
