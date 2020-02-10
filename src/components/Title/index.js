import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div>
      <div className="title-cont">
        <h1 className="title">Star Wars Clicky Game</h1>
        <h2>
          {" "}
          Score: {props.score} | High Score: {props.highScore}{" "}
        </h2>
        <h2>{props.message}</h2>
      </div>
      {props.children}
    </div>
  );
}

export default Title;
