import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Notification from "./components/Notification";
import Popup from "./components/Popup";

//pobrać z api
const words = ["bicycle", "car", "onion", "laptop"];
let selectedWord = words[Math.floor(Math.random() * words.length)];

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

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key, keyCode } = event;

      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
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
  }, [correctLetters, wrongLetters, playable]);
  //initial render

  function playAgain() {
    setPlayable(true);

    //empty arrays
    setCorrectLetters([]);
    setWrongLetters([]);
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <>
      <div>
        <Header />
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;
