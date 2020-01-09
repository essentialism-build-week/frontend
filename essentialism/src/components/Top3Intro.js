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

// This component instructs the user to think about how she will narrow down her values to the 3 most important.

export default function Top3Intro() {
  return (
    <ContainerDiv>
      <div>
        <p>Great!</p>
        <p>
          On the next page you will narrow down your values to the 3 you
          consider most important.
        </p>
        <p>
          Think about your goals in life, where you are now, and what you'd most
          like to improve.
        </p>
        <p>
          Remember, you can always tackle others later after you have a handle
          on what's most important to you now.
        </p>
        <p>It's time to focus!</p>
      </div>
      <Link to="/top3-selection">
        <SubmitButton>LET'S GO!</SubmitButton>
      </Link>
    </ContainerDiv>
  );
}
