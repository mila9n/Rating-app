import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  width: 100%;
  margin: 10px 0;
  padding: 7px 0;
  background-color: #ff740a;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.1rem;
  cursor: pointer;

  &:active {
    background-color: #fff;
    color: #ff740a;
  }
`;
