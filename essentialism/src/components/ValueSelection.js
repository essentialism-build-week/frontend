import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CustomInput, Form, FormGroup, Input } from "reactstrap";
import { getValues } from "../actions/valueSelectionAction";
import { connect } from "react-redux";
import styled from "styled-components";

const ListTitle = styled.h2`
  text-align: center;
`

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 80vw;
  font-size: 1.2rem;
`;

const SubmitButton = styled.button`
  font-size: 1.5rem;
  margin: 20px;
  color: white;
  width: 300px;
  height: 50px;
  background: #ce98d9;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2),
    -5px -5px 5px rgba(255, 255, 255, 1);
`;

// This component allows the user to select her values in life.
// These values are meant to be ideas or concept the user can resonate with upon reading them, i.e. community, music, career, health, family, art, travel, etc...
// The user can swipe left to reject a value or swipe right to add it to their list.
// Once the user has selected her values, she can tap the button and be brought to the next screen where she will narrow down their values to their top 3

const ValueSelection = props => {
  useEffect(() => {
    props.getValues();
  }, []);

  return (
    <ContainerDiv>
      <Form>
        <ListTitle>Choose your values</ListTitle>
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
          </div>
        </FormGroup>
        <p>Once you have picked at least 3, you can proceed</p>
        <Link to="/top3-intro">
          <SubmitButton>I've chosen my values</SubmitButton>
        </Link>
      </Form>
    </ContainerDiv>
  );
};

const mapStateToProps = state => {
  return {
    values: state.values,
    isFetching: state.isFetching,
    key: state.key
  };
};

export default connect(mapStateToProps, { getValues })(ValueSelection);
