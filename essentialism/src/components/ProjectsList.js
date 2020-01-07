import React from "react";
import { Link } from "react-router-dom";

// This component initially presents the user with:
// 1) a button under the header to add a new project
// 2) an empty list of projects in the middle
// 3) a button at the bottom that links to the home screen until at least one project is added.

// Once at least one project is added, the button at the bottom changes to link to the ProjectValueCompareIntro component, and the button text changes to "I've added all of my projects!"

export default function ValueSelection() {
  return (
    <section>
      <Link to="/add-new-project">
        <input type="submit" value="Add a new project" />
      </Link>
      <h2>Projects</h2>
      <div>
        <p>Project 1</p>
        <p>Project 2</p>
      </div>
      <Link to="/home">
        <input type="submit" value="I've added all my projects!" />
      </Link>
    </section>
  );
}
