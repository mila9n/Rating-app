import React from "react";
import { StyledButton } from "./Styles/Button.styled";

export default function Button(props) {
  return <StyledButton onClick={props.handleSubmit}>Submit</StyledButton>;
}
