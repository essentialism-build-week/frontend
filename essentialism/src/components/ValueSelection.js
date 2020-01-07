import React, { View } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// This component allows the user to select her values in life.
// These values are meant to be ideas or concept the user can resonate with upon reading them, i.e. community, music, career, health, family, art, travel, etc...
// The user can swipe left to reject a value or swipe right to add it to their list.
// Once the user has selected her values, she can tap the button and be brought to the next screen where she will narrow down their values to their top 3

// the values array contains the images to test a swipe cards stack
const values = [
  { id: "1", url: "../img/art.jpg" },
  { id: "2", url: "../img/athletics.jpg" },
  { id: "3", url: "../img/creativity.jpg" }
];

const ValueSelection = () => {
  return (
    <section>
      <h2>Choose your values</h2>
      <div>
        <p>Athletics</p>
        <p>Art</p>
        <p>Career</p>
        <p>Community</p>
        <p>Creativity</p>
        <p>Education</p>
        <p>Generosity</p>
        <p>Gratitude</p>
        <p>Family</p>
        <p>Health</p>
        <p>Impact</p>
        <p>Independence</p>
        <p>Kindness</p>
        <p>Leadership</p>
        <p>Living in the Moment</p>
        <p>Music</p>
        <p>Nature</p>
        <p>Spirituality</p>
        <p>Wealth</p>
      </div>
      <p>Once you have picked at least 3, you can proceed</p>
      <Link to="/top3-intro">
        <input type="submit" value="I've chosen my values" />
      </Link>
    </section>
  );
}
 
const mapStateToProps = state => {
return {
  values: state.values
};
};

export default connect(mapStateToProps, {  }(ValueSelection))