import React, { useEffect, useState } from "react";

import { getValues } from "../actions/valueSelectionAction";
import { connect } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";
import { Form, FormGroup, CustomInput } from "reactstrap";

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
  font-size: 1rem;
  margin: 20px;
  color: white;
  width: 250px;
  height: 50px;
  background: #ce98d9;
  border: 1px solid #dab1e2;
  border-radius: 10px;
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.2),
    -4px -4px 3px rgba(255, 255, 255, 1), inset 1px 1px rgba(255, 255, 255, 0.2);
`;

const ValueSelection = (props) => {

  useEffect(() => {
    props.getValues();
  }, []);

console.log(props.values)


  // const handleOnChange = () => {
  //   props.setAddSelectedValues();
  // };

  const tempPut = () => {
    axiosWithAuth()
      .put('/api/users/:VALUE_ID/values')
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


  // {props.values.map(item => {
  //   console.log(item);
  //   return (
  //     <CustomInput
  //       type="switch"
  //       name="customSwitch"
  //       label={item.value}
  //       key={item.id}
  //       id={item.id}
  //       onChange={tempPut}
  //     />
  //   );
  // })}


  

  return (
    <ContainerDiv>
   
      <Form>
        <ListTitle>Choose your values</ListTitle>
        <FormGroup>
        <div>


  {props.isFetching.values.map(item => {
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
          <SubmitButton>I'VE CHOSEN MY VALUES</SubmitButton>
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