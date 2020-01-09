import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CustomInput, Form, FormGroup, Input } from "reactstrap";
import { getValues, setAddSelectedValues, setRemoveSelectedValues } from "../actions/valueSelectionAction";
import { connect } from "react-redux";
import { axiosWithAuth } from '../utils/axiosWithAuth';

// This component allows the user to select her values in life.
// These values are meant to be ideas or concept the user can resonate with upon reading them, i.e. community, music, career, health, family, art, travel, etc...
// The user can swipe left to reject a value or swipe right to add it to their list.
// Once the user has selected her values, she can tap the button and be brought to the next screen where she will narrow down their values to their top 3

const ValueSelection = props => {
  useEffect(() => {
    props.getValues();
  }, []);

  console.log(props.values)

  const handleOnChange = () => {
    props.setAddSelectedValues();
  }

   const tempPut = ()  => {
    axiosWithAuth()
    .put('/values/:id')
    .then(response => {
        console.log(response)
    })
    .catch(error => 
        console.log(error)
        )
}

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
                onChange={tempPut}
              />
            );
          })}

          {props.isFetching && (
            <div>
              <p>Loading...</p>
            </div>
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

const mapStateToProps = state => {
  return {
    values: state.values,
    isFetching: state.isFetching,
    selected: state.selected
  };
};

export default connect(mapStateToProps, { getValues, setAddSelectedValues, setRemoveSelectedValues })(
  ValueSelection
);
