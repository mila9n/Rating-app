import React from "react";
import { FaStar } from "react-icons/fa";
import { StarIcon, PointContainer } from "./Styles/RatingContainer.styled";

import Button from "./Button";

export default function Submit(props) {
  return (
    <>
      <StarIcon>
        <FaStar />
      </StarIcon>
      <h1>How did we do?</h1>
      <p>
        {" "}
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <PointContainer>{props.ratings}</PointContainer>
      <Button handleSubmit={props.handleSubmit} />
    </>
  );
}
