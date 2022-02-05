import React from "react";
import styled from "styled-components";

const WordWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
`;

const LetterWrapper = styled.span`
  border-bottom: 3px solid yellow;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  margin: 0 3px;
  height: 60px;
  width: 30px;
`;

function Word({ selectedWord, correctLetters }) {
  return (
    <WordWrapper>
      {selectedWord.split(``).map((letter, index) => {
        return (
          <LetterWrapper key={index} className="letter">
            {correctLetters.includes(letter) ? letter : ""}
          </LetterWrapper>
        );
      })}
    </WordWrapper>
  );
}

export default Word;
