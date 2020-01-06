import React from "react";
import { Link } from "react-router-dom";

// This component represents the first screen a new user sees after registering.
// This is simply to welcome the user to Tōdai and give her a brief introduction to the app and its purpose.

export default function OnboardingIntro() {
  return (
    <section className="intro">
      <p>Welcome!</p>
      <p>The way of Tōdai involves focusing on what matters most.</p>
      <p>
        It's not about being more productive or shedding all worldly
        possessions.
      </p>
      <p>
        It's about making sure you're living a life in line with what you
        consider to be important.
      </p>
      <p>So, the first step is identifying your values - are you ready?</p>
      <Link to="/value-selection">
        <input type="submit" value="I'm ready!" />
      </Link>
    </section>
  );
}
