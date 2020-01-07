import React from "react";
import { Link } from "react-router-dom";

// This component simply lets the user know she has completed the onboarding process.
// At the bottom of the page is a link that brings the user to the home screen.
// In the case of the stretch goal, the button will bring the user to another page that will prompt the user to choose a notification frequency from a dropdown menu.

export default function OnboardingComplete() {
  return (
    <section className="intro">
      <p>Congratulations!</p>
      <p>
        You have taken the first steps toward enriching your life with
        intention, focus, and greater fulfillment.
      </p>
      <Link to="/">
        <input type="submit" value="Sounds great!" />
      </Link>
    </section>
  );
}
