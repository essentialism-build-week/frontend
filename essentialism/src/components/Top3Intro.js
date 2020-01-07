import React from "react";
import { Link } from "react-router-dom";

// This component instructs the user to think about how she will narrow down her values to the 3 most important.

export default function Top3Intro() {
  return (
    <section className="intro">
      <p>Great!</p>
      <p>
        On the next page you will narrow down your values to the 3 you consider
        most important.
      </p>
      <p>
        Think about your goals in life, where you are now, and what you'd most
        like to improve.
      </p>
      <p>
        Remember, you can always tackle others later after you have a handle on
        what's most important to you now.
      </p>
      <p>It's time to focus!</p>
      <Link to="/top3-selection">
        <input type="submit" value="I'm ready!" />
      </Link>
    </section>
  );
}
