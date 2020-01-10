import React, { useEffect, useState } from "react";
import { getValues, setAddSelectedValues } from "../actions/valueSelectionAction";

import { connect } from "react-redux";
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

const ValueSelection = (props) => {

  const getCurrentUser = localStorage.getItem('ID');

  useEffect(() => {
    props.getValues();
    props.setAddSelectedValues();
  }, []);


  const handleClick = () => {
    console.log(props)
    console.log(props.selectd)
  }

  

  return (
    <ContainerDiv>
   
      <Form>
        <ListTitle> Hello {getCurrentUser} <br/>
        please choose your values</ListTitle>
        <FormGroup>
        <div>


  {props.values.map(item => {
    
    return (
      <CustomInput
        type="switch"
        name="customSwitch"
        label={item.value}
        key={item.id}
        id={item.id}  
        onClick={handleClick}  
        
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
          <SubmitButton>I've chosen my values</SubmitButton>
        </Link>
      </Form>
      
    </ContainerDiv>

  );
};

const mapStateToProps = state => {
  return {
    values: state.values.values,
    isFetching: state.values.isFetching,
    selected: state.selected,
    clicked: state.values.clicked
  };
};



export default connect(mapStateToProps, { getValues, setAddSelectedValues })(ValueSelection);


