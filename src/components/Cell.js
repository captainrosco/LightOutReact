import React from "react";
import "./Cell.css";

const Cell = props => {
  return (
    <div
      className={`cell ${props.toggle ? "on" : ""}`}
      onClick={props.onClick}
    />
  );
};

export default Cell;
