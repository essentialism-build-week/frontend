import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import styled from "styled-components";

const ListTitle = styled.h2`
  text-align: center;
`;

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
  width: 150px;
  height: 50px;
  background: #ce98d9;
  border: 1px solid #dab1e2;
  border-radius: 10px;
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.2),
    -4px -4px 3px rgba(255, 255, 255, 1), inset 1px 1px rgba(255, 255, 255, 0.2);
`;

// This component asks the user to narrow down her values to her top 3.
// While the user can consider many values important to her, focusing on a handful asks the user to put some thought into what is truly important to her so she can say yes to the things that matter and no to the things that don't matter as much without feeling guilty. A rich life experience with no regrets is the goal in this case.
// Once the user has selected 3 values, the

const SelectTop3Values = () => {
  return (
    <React.Fragment>
      <ContainerDiv>
        <ListTitle>Select your Top 3 Values</ListTitle>
        {/* This code will retrieve the values the user has chosen and allows the user to select 3 */}
        <ListGroup>
          {/*values.map(item => {
          console.log(item);
          return <ListGroupItem>{item.name}</ListGroupItem>;
        })*/}
          {/* Once the user has selected 3 values the submit button will enable */}
        </ListGroup>
        <Link to="/values-explanation">
          <SubmitButton>I'M DONE!</SubmitButton>
        </Link>
      </ContainerDiv>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    topThreeSelected: state.topThreeSelected
  };
};

// export default connect(mapStateToProps, {  }(SelectTop3Values))
export default SelectTop3Values;
