import React from "react";
import { RatingPointStyle } from "./Styles/RatingPoint.styled";

export default function RatingPoint(props) {
  const styles = {
    backgroundColor: props.rating ? "#ff740a" : null,
    color: props.rating ? "#fff" : null,
    boxShadow: props.rating ? "2px 2px 5px #fc7408 " : null,
  };

  return (
    <RatingPointStyle
      onClick={props.handleRating}
      style={styles}
      name={props.name}
    >
      {props.number}
    </RatingPointStyle>
  );
}
