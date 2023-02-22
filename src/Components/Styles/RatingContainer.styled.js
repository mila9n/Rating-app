import styled from "styled-components";

export const RatingStyledContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #1f2630;
  width: 35%;
  max-width: 400px;
  padding: 30px 25px;
  border-radius: 10px;

  h1 {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 500;
    margin: 8px 0;
  }

  p {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.8rem;
    line-height: 1.6;
    max-width: 300px;
  }

  @media (max-width: 1000px) {
    width: 50%;
  }

  @media (max-width: 680px) {
    width: 80%;
  }
  @media (max-width: 420px) {
    width: 90%;
  }

  h1 {
    font-size: 20px;
  }

  span {
    font-size: 18px;
    width: 35px;
    height: 35px;
  }

  p {
    font-size: 12px;
  }

  button {
    font-size: 16px;
  }
`;

export const StarIcon = styled.span`
  border-radius: 100px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff740a;
  background-color: #262e38;
  font-size: 1rem;
`;

export const PointContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;
