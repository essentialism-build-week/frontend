import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";



// Actions
import { addNewProjectAction } from '../actions/addNewProjectAction';

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
  // Set initial state for new project form
  const [project, setProject] = useState({
    name: ''
  });
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");

  // Sets project info to it's state
  const handleChanges = event => {
    setProject({ ...project, [event.target.name]: event.target.value });
    console.log("NEW project from AddNewProject", project);
  };

  const handleSubmit = event => {
    event.preventDefault();
    addNewProjectAction();
    console.log('handleSubmit ran');
  };

  return (
    <ContainerDiv>
      <h2>Add a New Project</h2>
      
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Project name'
          value={project.name}
          onChange={handleChanges}
          required
        />
      <button>Create Project</button>
      {isFetching && "Adding project..."}
      </form>
      <p>{error ? error : null}</p>
    </ContainerDiv>
  );
}


const mapStateToProps = state => ({
  newProject: state.addNewProjectReducer.newProject,
  error: state.addNewProjectReducer.error,
  isFetching: state.addNewProjectReducer.isFetching
})

export default connect (
  mapStateToProps,
  { addNewProjectAction }
)(AddNewProject);