import React from "react";

// This component allows the user to reinforce why her top 3 values are the most important to her.
// This is important because it allows the user to tell a story in her mind and connect the values she deems important, thus strengthening her own narrative, making it easier to decide where she wants to focus her time and energy in life.

export default function ValueExplanation() {
  return (
    <form>
      <p>Explain your choices</p>
      <input placeholder="These values are important to me because..." />
      <input type="submit" value="My words are done!" />
    </form>
  );
};
