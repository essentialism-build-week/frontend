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

const SecondaryButton = styled.input`
  font-size: 1rem;
  margin: 20px;
  color: white;
  width: 170px;
  height: 50px;
  background: #4e74bf;
  border: 1px solid #8ba4d5;
  border-radius: 10px;
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.2),
    -4px -4px 3px rgba(255, 255, 255, 1), inset 1px 1px rgba(255, 255, 255, 0.2);
  outline: none;
`;

// This component initially presents the user with:
// 1) a button under the header to add a new project
// 2) an empty list of projects in the middle
// 3) a button at the bottom that links to the home screen until at least one project is added.

// Once at least one project is added, the button at the bottom changes to link to the ProjectValueCompareIntro component, and the button text changes to "I've added all of my projects!"

// After the user assigns her values to the projects, this component will render without the Add New Project button.
// Each project will then be listed with its assigned value.
// The bottom button will link to the Onboarding Complete component

function ProjectsList(props) {
  console.log(props);

  const projects = [
    { id: 1, name: "Conquer the world" }
  ]

  return (
    <ContainerDiv>
      {/* This button allows the user to add a new project to her list by linking to the AddNewProject component */}
      <Link to="/add-new-project">
        <SecondaryButton type="submit" value="ADD NEW PROJECT" />
      </Link>
      <h2>Projects</h2>
      <div>
        {/* This code displays the list of projects */}
        {/* <ListGroup>
          {props.projectList.map(item => {
            console.log(item);
            return <ListGroupItem>{item.name}</ListGroupItem>;
          })}
        </ListGroup> */}
      </div>

      {/* This button should only be visible if no projects are listed */}
      <Link to="/onboarding-complete">
        <SubmitButton type="submit" value="I HAVE NO PROJECTS :(" />
      </Link>

      {/* This button should only be visible if at least one project is listed */}
      <Link to="/project-value-compare-intro">
        <SubmitButton type="submit" value="I'VE ADDED MY PROJECTS!" />
      </Link>

      {/* This button should only be visible if at least one project is present and at least one value is assigned */}
      <Link to="/onboarding-complete">
        <SubmitButton type="submit" value="I'VE ASSIGNED MY VALUES" />
      </Link>
    </ContainerDiv>
  );
};


const mapStateToProps = state => ({
  projectList: state.projectList,
  error: state.error,
  isFetching: state.isFetching
});

export default connect(
  mapStateToProps,
  { getProjectList }
)(ProjectsList);
