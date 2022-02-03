import React, { useEffect } from "react";
import styled from "styled-components";

const PopupWrapper = styled.div`
  .popup-container {
    display: none;
  }
  .show {
    display: flex;
  }
`;

function chceckWin(correct, wrong, word) {
  let status = "win";

  //check for win

  word.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      status = "";
    }
  });

  //check for lose

  if (wrong.length === 6) status = "lose";
  return status;
}

function Popup({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  playAgain,
}) {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = true;

  if (chceckWin(correctLetters, wrongLetters, selectedWord) === "win") {
    finalMessage = "Good job! You Won";
    playable = false;
  } else if (chceckWin(correctLetters, wrongLetters, selectedWord) === "lose") {
    finalMessage = "GAME OVER...";
    finalMessageRevealWord = `...you are sentenced to hanging for: ${selectedWord}`;
    playable = false;
  }
  useEffect(() => setPlayable(playable));

  return (
    <PopupWrapper>
      <div className={`popup-container ${finalMessage !== "" ? `show` : ""}`}>
        <div>
          <h1>{finalMessage}</h1>
          <h2>{finalMessageRevealWord}</h2>
          <button onClick={playAgain}>Play Again</button>
        </div>
      </div>
    </PopupWrapper>
  );
}

export default Popup;
