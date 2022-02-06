import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  h1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <h1>Hangman</h1>
      <p>Find the hidden word - Enter a letter</p>
    </HeaderWrapper>
  );
}

export default Header;
