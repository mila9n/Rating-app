import styled from "styled-components";

export const RatingPointStyle = styled.div`
  background-color: #262e38;
  border-radius: 100px;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 0.9rem;
  transition: all 300ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #7c8798;
    color: #fff;
  }

  @media (max-width: 420px) {
    width: 40px;
    height: 40px;
  }
`;
