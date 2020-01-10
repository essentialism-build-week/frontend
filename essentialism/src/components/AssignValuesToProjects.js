import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

// Actions
import { getProjectList } from '../actions/projectListAction';



const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 80vw;
  max-width: 370px;
  font-size: 1.2rem;
`;

const SecondaryButton = styled.input`
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

const SubmitButton = styled.input`
  font-size: 1rem;
  margin: 20px;
  color: white;
  width: 200px;
  height: 50px;
  background: #ce98d9;
  border: 1px solid #dab1e2;
  border-radius: 10px;
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.2),
    -4px -4px 3px rgba(255, 255, 255, 1), inset 1px 1px rgba(255, 255, 255, 0.2);
  outline: none;
`;

// This component presents the user with a project and prompts her to select which of her top 3 values is most relevant to said project.
// Once the user selects a value, the value association is stored and the screen renders the next project in her list with the option to select 1 of the top 3 values again.
// Once all projects have been assigned a value, the next page is rendered (the Review component)

function AssignValuesToProjects(props) {
  return (
    <ContainerDiv>
      <h3>Project 1</h3>
      <Link to="/projects-list">
        <SecondaryButton type="submit" value="VALUE 1" />
      </Link>
      <Link to="/projects-list">
        <SecondaryButton type="submit" value="VALUE 2" />
      </Link>
      <Link to="/projects-list">
        <SecondaryButton type="submit" value="VALUE 3" />
      </Link>
      <Link to="/projects-list">
      <SubmitButton type="submit" value="SKIP THIS PROJECT" />
    </Link>
    </ContainerDiv>
  );
};

const mapStateToProps = state => ({
  projectList: state.projectList,
  error: state.error,
  isFetching: state.isFetching
});

export default connect (
  mapStateToProps,
  { getProjectList }
)(AssignValuesToProjects);