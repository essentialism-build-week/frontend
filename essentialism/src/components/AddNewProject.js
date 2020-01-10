import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";



// Actions
import { postAddNewProject } from '../actions/addNewProjectAction';

// This component allows the user to add a new project by inputting a name and hitting submit

function AddNewProject() {
  return (
    <section>
      <h2>Add a New Project</h2>

    </section>
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