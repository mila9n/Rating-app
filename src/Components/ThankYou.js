import React from "react";
import Button from "./Button";
import { ThankYouStyled } from "./Styles/ThankYou.styled";

export default function ThankYou(props) {
  return (
    <ThankYouStyled>
      <img src="../image/illustration-thank-you.svg" />
      <div>you selected {props.star} out of 5</div>
      <h2>Thank You!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
      <button onClick={props.handleBack}>Back</button>
    </ThankYouStyled>
  );
}
