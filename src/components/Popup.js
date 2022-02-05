import React, { useEffect } from "react";
import styled from "styled-components";

const PopupWrapper = styled.div`
  .popup-container {
    display: none;
  }
  .show {
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    align-items: center;
    justify-content: center;
    display: flex;
    h1 {
      justify-content: center;
      display: flex;
      font-size: 50px;
    }
    h2 {
      text-align: center;
      display: flex;
      margin-bottom: 3rem;
      margin-left: 1rem;
      margin-right: 1rem;
      font-size: 25px;
    }
  }
  button {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.01);
    color: yellow;
    border: 3px dashed yellow;
    border-radius: 15px;
    margin: auto;
    padding: 12px 20px;
    font-size: 26px;
    align-items: center;
    justify-content: center;
    display: flex;
    transition-duration: 200ms;
  }
  button:hover {
    transition-duration: 200ms;
    transform: scale(1.2);
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

  if (wrong.length === 11) status = "lose";
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
    finalMessage = "GAME OVER";
    finalMessageRevealWord = `you are sentenced to hanging for word:  ${selectedWord}`;
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
