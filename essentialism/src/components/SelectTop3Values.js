import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// This component asks the user to narrow down her values to her top 3.
// While the user can consider many values important to her, focusing on a handful asks the user to put some thought into what is truly important to her so she can say yes to the things that matter and no to the things that don't matter as much without feeling guilty. A rich life experience with no regrets is the goal in this case.
// Once the user has selected 3 values, the

const SelectTop3Values = () => {
  return (
    <React.Fragment>
      <h2>Select your Top 3 Values</h2>
      <p>Value 1</p>
      <p>Value 2</p>
      <p>Value 3</p>
      <p>Value 4</p>
      <p>Value 5</p>
      <Link to="/values-explanation">
        <input type="submit" value="I'm done!" />
      </Link>
      </React.Fragment>
  
  );
}

const mapStateToProps = state => {
  return {
    topThreeSelected: state.topThreeSelected
  };
  };
  
  export default connect(mapStateToProps, {  }(SelectTop3Values)) 