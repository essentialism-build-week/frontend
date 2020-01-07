import React from "react";
import { Link } from "react-router-dom";

// This component presents the user with a project and prompts her to select which of her top 3 values is most relevant to said project.
// Once the user selects a value, the value association is stored and the screen renders the next project in her list with the option to select 1 of the top 3 values again.
// Once all projects have been assigned a value, the next page is rendered (the Review component)

export default function AssignValues() {
  return (
    <section>
      <h3>Project 1</h3>
      <Link to="/projects-list">
        <input type="submit" value="Value 1" />
      </Link>
      <Link to="/projects-list">
        <input type="submit" value="Value 2" />
      </Link>
      <Link to="/projects-list">
        <input type="submit" value="Value 3" />
      </Link>
      <Link to="/projects-list">
      <input type="submit" value="Skip this project for now" />
    </Link>
    </section>
  );
}
