import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CustomInput, Form, FormGroup, Input } from "reactstrap";

import {
  getValues,
  setAddSelectedValues,
  setRemoveSelectedValues
} from "../actions/valueSelectionAction";
import { connect } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";
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


  // const handleOnChange = () => {
  //   props.setAddSelectedValues();
  // };

  const tempPut = () => {
    axiosWithAuth()
      .put("/values/:id")
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  };

  // const handleButton = () => {
  //   props.values.map(item => {
  //     console.log(item.value);
  //     if (item.value == "Art") {
  //       document.getElementById("proceedInput").removeAttribute("disabled");
  //     }
  //   });
  // };

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
        <input id="proceedInput" type="submit" value="I've chosen my values" />
      </Link>
    </Form>

  // return (
  //   <ContainerDiv>
  //     <Form>
  //       <ListTitle>Choose your values</ListTitle>
  //       <FormGroup>
  //         <div>
  //           {props.values.map(item => {
  //             console.log(item);
  //             return (
  //               <CustomInput
  //                 type="switch"
  //                 name="customSwitch"
  //                 label={item.value}
  //                 key={item.id}
  //                 id={item.id}
  //               />
  //             );
  //           })}
  //         </div>
  //       </FormGroup>
  //       <p>Once you have picked at least 3, you can proceed</p>
  //       <Link to="/top3-intro">
  //         <SubmitButton>I've chosen my values</SubmitButton>
  //       </Link>
  //     </Form>
  //   </ContainerDiv>

  );
};

const mapStateToProps = state => {
  return {
    values: state.values,
    isFetching: state.isFetching,
    key: state.key
  };
};


export default connect(mapStateToProps, {
  getValues,
  setAddSelectedValues,
  setRemoveSelectedValues
})(ValueSelection);

