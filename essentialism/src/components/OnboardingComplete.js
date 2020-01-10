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

const SubmitButton = styled.input`
  font-size: 1rem;
  margin: 20px;
  color: white;
  width: 250px;
  height: 50px;
  background: #ce98d9;
  border: 1px solid #dab1e2;
  border-radius: 10px;
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.2),
    -4px -4px 3px rgba(255, 255, 255, 1), inset 1px 1px rgba(255, 255, 255, 0.2);
  outline: none;
`;

// This component simply lets the user know she has completed the onboarding process.
// At the bottom of the page is a link that brings the user to the home screen.
// In the case of the stretch goal, the button will bring the user to another page that will prompt the user to choose a notification frequency from a dropdown menu.

export default function OnboardingComplete() {
  return (
    <ContainerDiv>
      <div>
        <p>Congratulations!</p>
        <p>
          You have taken the first steps toward enriching your life with
          intention, focus, and greater fulfillment.
        </p>
      </div>
      <Link to="/home">
        <SubmitButton type="submit" value="Sounds great!" />
      </Link>
    </ContainerDiv>
  );
}
