import React from "react";

// This component allows the user to select her values in life.
// These values are meant to be ideas or concept the user can resonate with upon reading them, i.e. community, music, career, health, family, art, travel, etc...
// The user can swipe left to reject a value or swipe right to add it to their list.
// Once the user has selected her values, she can tap the button and be brought to the next screen where she will narrow down their values to their top 3

export default function ValueSelection() {
  return (
    <>
      <h2>Choose your values</h2>
      <div>
        <p>This is where the values will be</p>
      </div>
      <p>Once you have picked at least 3, you can proceed</p>
      <input type="submit" value="I've chosen my values" />
    </>
  );
}
