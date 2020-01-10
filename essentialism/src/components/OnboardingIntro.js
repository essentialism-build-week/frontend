import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 80vw;
  max-width: 370px;
  font-size: 1.2rem;
`;

const SubmitButton = styled.button`
  font-size: 1rem;
  margin: 20px;
  color: white;
  width: 150px;
  height: 50px;
  background: #ce98d9;
  border: 1px solid #dab1e2;
  border-radius: 10px;
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.2),
    -4px -4px 3px rgba(255, 255, 255, 1), inset 1px 1px rgba(255, 255, 255, 0.2);
  outline: none;
`;

// This component represents the first screen a new user sees after registering.
// This is simply to welcome the user to Tōdai and give her a brief introduction to the app and its purpose.

export default function OnboardingIntro() {
  return (
    <ContainerDiv>
      <p>Welcome!</p>
      <p>The way of Tōdai involves focusing on what matters most.</p>
      <p>
        It's not about being more productive or shedding all worldly
        possessions.
      </p>
      <p>
        It's about making sure you're living a life in line with what you
        consider to be important.
      </p>
      <p>So, the first step is identifying your values. Are you ready?</p>
      <Link to="/value-selection">
        <SubmitButton>I'M READY!</SubmitButton>
      </Link>
    </ContainerDiv>
  );
}

//         <input type="submit" value="I'm ready!" />
