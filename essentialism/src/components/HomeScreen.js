import React from "react";


// This component represents the home screen a returning user will see after logging in. 
// The app will retrieve the user's top 3 values and display them front and center. 
// Below the top 3 values, the user's current projects will be displayed.
// At the bottom of the screen, the user will see a row of icons representing other pages of the app the user can visit. For example, the user can click on one icon to edit her top 3 values, another icon to add/edit projects she's involved with, and another icon to edit her settings.

const Home = props => {


  return (
    <section className="home-screen">
      <div className="home-values">
      <h1></h1>
        <h2>Your Top 3 Values</h2>
        <p>Value 1</p>
        <p>Value 2</p>
        <p>Value 3</p>
      </div>
      <div className="home-projects">
        <h2>Current Projects</h2>
        <p>Project or Involvement</p>
        <p>Project or Involvement</p>
      </div>
    </section>
  );
}


export default Home;