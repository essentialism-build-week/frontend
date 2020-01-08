import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CustomInput, Form, FormGroup, Input } from "reactstrap";
import { getValues } from "../actions/valueSelectionAction";
import { connect } from "react-redux";

// This component allows the user to select her values in life.
// These values are meant to be ideas or concept the user can resonate with upon reading them, i.e. community, music, career, health, family, art, travel, etc...
// The user can swipe left to reject a value or swipe right to add it to their list.
// Once the user has selected her values, she can tap the button and be brought to the next screen where she will narrow down their values to their top 3

const ValueSelection = (props) => {
  useEffect(() => {
    props.getValues();
  }, []);

  return (
    <Form>
      <h2>Choose your values</h2>
      <FormGroup>
        <div>
          {props.values.map(item => {
            console.log(item);
            return (
              <CustomInput
                type="switch"
                name="customSwitch"
                label={item.value}
                key={item.id}
                id={item.id}
               
              />
            );
          })}

          {props.isFetching && (
            <div><p>Loading...</p></div>
          )}
          
        </div>
      </FormGroup>
      <p>Once you have picked at least 3, you can proceed</p>
      <Link to="/top3-intro">
        <input type="submit" value="I've chosen my values" />
      </Link>
    </Form>
  );
};

// <Input type="select" name="selectMulti" id="exSelectMulti" multiple>
// {values.map(value => {
//   console.log(value);
//   return <option>{value.name}</option>;
// })}
// </Input>

const mapStateToProps = state => {
  return {
    values: state.values,
    isFetching: state.isFetching,
    key: state.key
   
  };
};

export default connect(mapStateToProps, {getValues})(ValueSelection); 
