import React from "react";
import { Link } from "react-router-dom";

// This component follows the user's explanation of why their top 3 values are important to them.
// The goal of this component is to get the user to think about how they're spending their time now in relation to what they consider to be important.

export default function ProjectsIntro() {
  return (
    <section className="projects-intro-page">
      <p>
        Now that you've chosen your top values and explained why they're
        important to you, it's time to look at how you're spending your time.
      </p>
      <p>
        On the next page you will list the projects and activities you're
        involved in or want to get involved in.
      </p>
      <p>
        What do you do at work? Do you volunteer outside of work? What hobbies
        are you pursuing? How do you spend your free time?
      </p>
      <Link to="/projects-list">
        <input type="submit" value="Let's add some projects!" />
      </Link>
    </section>
  );
}
