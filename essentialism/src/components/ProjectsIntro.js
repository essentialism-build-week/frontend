import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";

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

// This component follows the user's explanation of why their top 3 values are important to them.
// The goal of this component is to get the user to think about how they're spending their time now in relation to what they consider to be important.

export default function ProjectsIntro() {
  return (
    <ContainerDiv>
      <p>
        Now that you've chosen your top values and explained why they're
        important to you, it's time to look at how you're spending your time.
      </p>
      <p>
        On the next page you will list the projects and activities you're
        involved in or want to get involved in.
      </p>
      <p>
        What do you do at work? Do you volunteer outside of work? What hobbies
        are you pursuing? How do you spend your free time?
      </p>
      <Link to="/projects-list">
        <SubmitButton type="submit" value="LET'S ADD SOME PROJECTS!" />
      </Link>
    </ContainerDiv>
  );
}
