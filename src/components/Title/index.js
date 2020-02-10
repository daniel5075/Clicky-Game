import React from "react";
import "./style.css";
import { Navbar } from "reactstrap";

function Title(props) {
  return (
    // <div>
    <Navbar fluid>
      {/* <div className="title"> */}
      <h1 className="title">Star Wars Clicky Game</h1>
      <h2>
        {" "}
        Score: {props.score} | High Score: {props.highScore}{" "}
      </h2>
      <h2>{props.message}</h2>
      {/* </div> */}
      {/* {props.children} */}
    </Navbar>
  );
}

export default Title;
