import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Notification from "./components/Notification";
import Popup from "./components/Popup";
import styled from "styled-components";

const GameWrapper = styled.div`
  padding: 1rem;
  margin: 1rem;
  border: 3px dashed rgba(255, 255, 0, 0.1);

  button {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
    color: yellow;
    border: 3px dashed yellow;
    border-radius: 15px;
    margin: auto;
    margin-top: 20px;
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

function showNotificationSetter(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 3000);
}

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [selectedWord, setSelectedWord] = useState();
  const [word, setWord] = useState([]);

  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word?number=100")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setWord(data);
      })
      .catch((err) => {
        console.log("error retrieving data", err);
      });
  }, []);

  console.log(word);
  console.log(selectedWord);
  function getTheWordAgain() {
    setSelectedWord(word[Math.floor(Math.random() * word.length)]);

    setCorrectLetters([]);
    setWrongLetters([]);
  }

  useEffect(() => {
    console.log(wrongLetters);
    const handleKeyDown = (event) => {
      const { key, keyCode } = event;

      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord && selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
            //spread all letters add new letter to currentLetters new array
          } else {
            showNotificationSetter(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
          } else {
            showNotificationSetter(setShowNotification);
          }
        }
      }
    };
    window.addEventListener(`keydown`, handleKeyDown);
    //cleanup  -- - -run on only one event listener running
    return () => window.removeEventListener(`keydown`, handleKeyDown);
  }, [correctLetters, wrongLetters, playable, selectedWord]);
  //initial render

  function playAgain() {
    setPlayable(true);
    getTheWordAgain();
  }

  return (
    <GameWrapper>
      {word && (
        <div>
          {word && (
            <button id="btn" onClick={getTheWordAgain}>
              Start
            </button>
          )}
          <Header />
          {selectedWord && <Figure wrongLetters={wrongLetters} />}
          {selectedWord && <WrongLetters wrongLetters={wrongLetters} />}
          {selectedWord && (
            <Word selectedWord={selectedWord} correctLetters={correctLetters} />
          )}
        </div>
      )}
      {selectedWord && (
        <Popup
          correctLetters={correctLetters}
          wrongLetters={wrongLetters}
          selectedWord={selectedWord}
          setPlayable={setPlayable}
          playAgain={playAgain}
        />
      )}
      {selectedWord && <Notification showNotification={showNotification} />}
    </GameWrapper>
  );
}

export default App;
