import React from "react";
import styled from "styled-components";

const WordWrapper = styled.div`
  background-color: pink;
  padding: 2rem;
  margin: 2rem;
  height: 100px;
  width: 500px;
`;

const LetterWrapper = styled.span`
  background-color: rosybrown;

  margin: 2rem;

  border-bottom: 4px solid brown;
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
