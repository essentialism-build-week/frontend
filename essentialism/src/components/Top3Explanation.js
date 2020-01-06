import React from "react";

export default function Top3Explanation() {
    return (
      <section className="onboarding-intro">
        <p>Great!</p>
        <p>On the next page you will narrow down your values to the 3 you consider most important</p>
        <p>When deciding which 3 are the most important, think about your goals in life, where you are now, and what you'd most like to improve</p>
        <p>Remember, you can always tackle more later after you have a handle on what's most important to you now.</p>
        <p>It's time to focus!</p>
        <Link to="/">
          <input type="submit" value="I'm ready!" />
        </Link>
      </section>
    );
  }
  