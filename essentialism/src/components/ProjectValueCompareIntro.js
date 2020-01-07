import React from "react";
import { Link } from "react-router-dom";

// This component briefs the user on the task of relating each of her current projects with her chosen values

export default function ProjectValueCompareIntro() {
  return (
    <section className="intro">
      <p>Great, you've added some projects!</p>
      <p>
        Now I want you to think about how these projects relate to your values.
      </p>
      <p>
        Next you will be prompted to assign 1 of your top 3 values to each
        project.
      </p>
      <Link to="/">
        <input type="submit" value="Let's continue!" />
      </Link>
    </section>
  );
}
