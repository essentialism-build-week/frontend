import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// This component initially presents the user with:
// 1) a button under the header to add a new project
// 2) an empty list of projects in the middle
// 3) a button at the bottom that links to the home screen until at least one project is added.

// Once at least one project is added, the button at the bottom changes to link to the ProjectValueCompareIntro component, and the button text changes to "I've added all of my projects!"

// After the user assigns her values to the projects, this component will render without the Add New Project button.
// Each project will then be listed with its assigned value.
// The bottom button will link to the Onboarding Complete component

function ProjectsList() {

  return (
    <section>
      <Link to="/add-new-project">
        <input type="submit" value="Add a new project" />
      </Link>
      <h2>Projects</h2>
      <div>
        <p>Project 1 - Value 2</p>
        <p>Project 2 - Value 3</p>
        <p>Project 3 - Value 2</p>
        <p>Project 4 - Value 1</p>
      </div>
      <Link to="/home">
        <input type="submit" value="I have no projects yet :(" />
      </Link>
      <Link to="/project-value-compare-intro">
        <input type="submit" value="I've added all my projects!" />
      </Link>
      <Link to="/onboarding-complete">
        <input type="submit" value="I've assigned all my values" />
      </Link>
    </section>
  );
}

const mapStateToProps = state => {
  return {
    projectList: state.projectList,
    isFetching: state.isFetching
  };
  };
  
  export default connect(mapStateToProps, {  }(ProjectsList))