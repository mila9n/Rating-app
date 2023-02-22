import styled from "styled-components";

export const ThankYouStyled = styled.div`
  text-align: center;
  justify-content: center;

  img {
    margin: auto;
  }

  div {
    margin: 25px auto 10px;
    display: table;
    padding: 8px 20px;
    background-color: #262e38;
    border-radius: 100px;
    color: #f58b3b;
    text-transform: capitalize;
    font-size: 0.9rem;
  }

  h2 {
    margin: 15px auto 10px;
    color: #fff;
    font-weight: 500;
  }

  p {
    text-align: center;
    max-width: 90%;
    margin: 0 auto 15px;
  }

  button {
    display: flex;
    width: 200px;
    margin: 10px auto;
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
  }

  @media (max-width: 425px) {
    h2 {
      font-size: 22px;
    }

    button {
      font-size: 16px;
    }
  }
`;
