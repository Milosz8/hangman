import React from "react";
import styled from "styled-components";

const WrongLettersWrapper = styled.div`
  width: 20%;
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  text-align: left;

  span {
    font-size: 30px;
    font-weight: bold;
  }

  p {
    margin: 0 0 5px;
    text-align: left;
  }
  @media only screen and (max-width: 450px) {
    span {
      font-size: 20px;
    }
  }
`;

function WrongLetters({ wrongLetters }) {
  return (
    <WrongLettersWrapper>
      <div>
        {wrongLetters.length > 0 && <p>You missed</p>}
        {wrongLetters
          .map((letter, index) => <span key={index}>{letter}</span>)
          .reduce(
            (prev, curr) => (prev == null ? [curr] : [prev, ", ", curr]),
            null
          )}
      </div>
    </WrongLettersWrapper>
  );
}

export default WrongLetters;
