import React from "react";
import "./style.css";

const ImagesCard = props => (
  <div
    className="card"
    value={props.id}
    onClick={() => props.clickedImage(props.id)}
  >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default ImagesCard;
