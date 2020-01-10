import React from "react";
import { useHistory } from "react-router-dom";
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
  width: 130px;
  height: 50px;
  background: #ce98d9;
  border: 1px solid #dab1e2;
  border-radius: 10px;
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.2),
    -4px -4px 3px rgba(255, 255, 255, 1), inset 1px 1px rgba(255, 255, 255, 0.2);
  outline: none;
`;

const SecondaryButton = styled.button`
  font-size: 1rem;
  margin: 20px;
  color: white;
  width: 130px;
  height: 50px;
  background: #4e74bf;
  border: 1px solid #8ba4d5;
  border-radius: 10px;
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.2),
    -4px -4px 3px rgba(255, 255, 255, 1), inset 1px 1px rgba(255, 255, 255, 0.2);
  outline: none;
`;

const LandingPage = () => {
  let history = useHistory();

  function handleLogin() {
    history.push("/login");
  }

  function handleRegister() {
    history.push("/registration");
  }

  return (
    <ContainerDiv>
      <SubmitButton type="button" onClick={handleLogin}>
        LOGIN
      </SubmitButton>
      <SecondaryButton type="button" onClick={handleRegister}>
        REGISTER
      </SecondaryButton>
    </ContainerDiv>
  );
};

export default LandingPage;
