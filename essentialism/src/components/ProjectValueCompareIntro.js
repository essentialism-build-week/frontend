import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
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

const SubmitButton = styled.input`
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

// This component briefs the user on the task of relating each of her current projects with her chosen values

const ProjectValueCompareIntro = () => {
  return (
    <ContainerDiv>
      <div>
        <p>Great, you've added some projects!</p>
        <p>
          Now I want you to think about how these projects you're involved in
          relate to your top 3 values.
        </p>
        <p>
          Next, you will be prompted to assign 1 of your top 3 values to each of
          your projects.
        </p>
        <p>
          You will be shown one project at a time so choose the value that is
          most relevant to the project.
        </p>
      </div>
      <Link to="/assign-values">
        <SubmitButton type="submit" value="I'M READY!" />
      </Link>
    </ContainerDiv>
  );
};

const mapStateToProps = state => {
  return {
    projects: state.projects,
    topThreeList: state.topThreeList
  };
};

// export default connect(mapStateToProps, {  }(ProjectValueCompareIntro))
export default ProjectValueCompareIntro;
