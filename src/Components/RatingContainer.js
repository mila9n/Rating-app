// mpm i react-icons
import { RatingStyledContainer } from "./Styles/RatingContainer.styled";

import React from "react";
import RatingPoint from "./RatingPoint";

import PointsData from "./PointsData";
import ThankYou from "./ThankYou";
import Submit from "./Submit";

export default function RatingContainer() {
  const [point, setPoint] = React.useState(PointsData);
  const [star, setStar] = React.useState(0);
  const [submit, setSubmit] = React.useState(false);

  const ratings = point.map((item, i) => {
    return (
      <RatingPoint
        name={item.name}
        handleRating={() => handleRating(i)}
        key={item.id}
        rating={item.isRating}
        number={item.value}
        bg={item.isRating}
      />
    );
  });

  const handleRating = (i) => {
    const newPoint = [...point];
    for (const p of newPoint) {
      p.isRating = false;
    }
    newPoint[i].isRating = !newPoint[i].isRating;
    setPoint(newPoint);
    setStar(i + 1);
  };

  const handleSubmit = () => {
    {
      star > 0 && setSubmit((prevSubmit) => !prevSubmit);
      const newPoint = [...point];
      for (const p of newPoint) {
        p.isRating = false;
      }
      setPoint(newPoint);
    }
  };

  const handleBack = () => {
    setSubmit((prevSubmit) => !prevSubmit);
    setStar(0);
  };

  return (
    <RatingStyledContainer>
      {!submit ? (
        <Submit ratings={ratings} handleSubmit={handleSubmit} />
      ) : (
        <ThankYou star={star} handleBack={handleBack} />
      )}
    </RatingStyledContainer>
  );
}
