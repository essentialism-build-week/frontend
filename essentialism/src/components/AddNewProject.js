import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";



// Actions
import { postAddNewProject } from '../actions/addNewProjectAction';

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 80vw;
  max-width: 370px;
  font-size: 1.2rem;
`;

// This component allows the user to add a new project by inputting a name and hitting submit

function AddNewProject() {
  return (
    <ContainerDiv>
      <h2>Add a New Project</h2>

    </ContainerDiv>
  );
}


const mapStateToProps = state => ({
  newProject: state.newProject,
  error: state.error,
  isFetching: state.isFetching
})

export default connect (
  mapStateToProps,
  { postAddNewProject }
)(AddNewProject);