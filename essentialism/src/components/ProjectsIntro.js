import React from "react";

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
        involved in.
      </p>
      <p>
        Think about what you spend your time on at work and outside of work, and
        what you would like to be involved in.
      </p>
      <input type="submit" value="Let's add some projects!" />
    </section>
  );
}
