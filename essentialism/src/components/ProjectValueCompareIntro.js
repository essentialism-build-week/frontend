import React from "react";
import { Link } from "react-router-dom";

// This component briefs the user on the task of relating each of her current projects with her chosen values

const ProjectValueCompareIntro = () => {
  return (
    <section className="intro">
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
        You will be shown one project at a time so choose the value that is most
        relevant to the project.
      </p>
      <Link to="/assign-values">
        <input type="submit" value="I'm ready!" />
      </Link>
    </section>
  );
}

const mapStateToProps = state => {
  return {
    projects: state.projects,
    topThreeList: state.topThreeList
  };
  };
  
  export default connect(mapStateToProps, {  }(ProjectValueCompareIntro)) 
