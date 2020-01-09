import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
import { connect } from "react-redux";

// Actions
import { getProjectList } from '../actions/projectListAction';

// This component initially presents the user with:
// 1) a button under the header to add a new project
// 2) an empty list of projects in the middle
// 3) a button at the bottom that links to the home screen until at least one project is added.

// Once at least one project is added, the button at the bottom changes to link to the ProjectValueCompareIntro component, and the button text changes to "I've added all of my projects!"

// After the user assigns her values to the projects, this component will render without the Add New Project button.
// Each project will then be listed with its assigned value.
// The bottom button will link to the Onboarding Complete component

function ProjectsList() {

  const projects = [
    { id: 1, name: "Conquer the world" }
  ]

  return (
    <section>
      {/* This button allows the user to add a new project to her list by linking to the AddNewProject component */}
      <Link to="/add-new-project">
        <input type="submit" value="Add a new project" />
      </Link>
      <h2>Projects</h2>
      <div>
      {/* This code displays the list of projects */}

      </div>

      {/* This button should only be visible if no projects are listed */}
      <Link to="/home">
        <input type="submit" value="I have no projects yet :(" />
      </Link>

      {/* This button should only be visible if at least one project is listed */}
      <Link to="/project-value-compare-intro">
        <input type="submit" value="I've added all my projects!" />
      </Link>

      {/* This button should only be visible if at least one project is present and at least one value is assigned */}
      <Link to="/onboarding-complete">
        <input type="submit" value="I've assigned all my values" />
      </Link>
    </section>
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
)(ProjectsList);
