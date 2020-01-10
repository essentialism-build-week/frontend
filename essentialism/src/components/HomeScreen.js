import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
import axios from "axios";
import styled from "styled-components";

const ListTitle = styled.h2`
  text-align: center;
`;

const ListItem = styled.li`
  font-size: 1.5rem;
  list-style: none;
  margin: 10px 20px;
`;

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 80vw;
  max-width: 370px;
  font-size: 1.2rem;
`;

const SecondaryButton = styled.input`
  font-size: 1rem;
  margin: 20px;
  color: white;
  width: 170px;
  height: 50px;
  background: #4e74bf;
  border: 1px solid #8ba4d5;
  border-radius: 10px;
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.2),
    -4px -4px 3px rgba(255, 255, 255, 1), inset 1px 1px rgba(255, 255, 255, 0.2);
  outline: none;
`;

// This component represents the home screen a returning user will see after logging in.
// The app will retrieve the user's top 3 values and display them front and center.
// Below the top 3 values, the user's current projects will be displayed.
// At the bottom of the screen, the user will see a row of icons representing other pages of the app the user can visit. For example, the user can click on one icon to edit her top 3 values, another icon to add/edit projects she's involved with, and another icon to edit her settings.

const Home = props => {
  // const [values, setValues] = useState([]);

  // useEffect(() => {
  //   axios.get("https://todai-backend.herokuapp.com/api/users/values/")
  //   .then(response => {
  //     console.log(`axios.get.then: `, response.data);
  //     setValues(response.data)
  //   })
  //   .catch(error => {
  //     console.log(`You failed! Here's why: `, error)
  //   });
  // }, []);

  const values = [
    { id: "1", name: "Art" },
    { id: "2", name: "Athletics" },
    { id: "3", name: "Community" }
  ];
  console.log(values);

  const projects = [
    { id: "1", name: "Save kittens", value: "Community" },
    { id: "2", name: "Pull a Banksy", value: "Art" },
    { id: "3", name: "Win the Olympics", value: "Athletics" }
  ];
  console.log(projects);

  return (
    <ContainerDiv>
      <div className="home-values">
        <ListTitle>Your Top 3 Values</ListTitle>
        <div>
          {values.map(value => {
            console.log(value);
            return <ListItem>{value.name}</ListItem>;
          })}
        </div>
        <Link to="/edit-values">
          <SecondaryButton type="submit" value="EDIT VALUES" />
        </Link>
      </div>
      <div className="home-projects">
        <ListTitle>Current Projects</ListTitle>
        <div>
          {projects.map(project => {
            console.log(project);
            return (
              <ListItem>
                {project.name} ({project.value})
              </ListItem>
            );
          })}
        </div>
      </div>
      <Link to="/edit-projects">
        <SecondaryButton type="submit" value="EDIT PROJECTS" />
      </Link>
    </ContainerDiv>
  );
};

export default Home;
