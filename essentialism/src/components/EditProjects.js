import React, { Link } from "react";
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

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`

const SecondaryButton = styled.button`
  font-size: 1rem;
  margin: 20px;
  color: white;
  width: 160px;
  height: 50px;
  background: #4e74bf;
  border: 1px solid #8ba4d5;
  border-radius: 10px;
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.2),
    -4px -4px 3px rgba(255, 255, 255, 1), inset 1px 1px rgba(255, 255, 255, 0.2);
`;

// This component links from the home screen.
// It allows the user to edit their projects, so it links directly to the ProjectsList component.
// For the sake of functionality, clicking on the "Edit My Projects" will wipe the user's values and reinitiate the onboarding process at the point of ValueSelection because the projects will also need to have their values reassigned.
// Alternatively, for simplicity, the values assigned to the projects could just be wiped and the user could simply go into the EditProjects component to assign new values to their projects.

const EditProjects = () => {
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

  const projects = [
    { id: "1", name: "Save kittens", value: "community" },
    { id: "2", name: "Pull a Banksy", value: "art" },
    { id: "3", name: "Win the Olympics", value: "athletics" }
  ];
  console.log(projects);

  return (
    <ContainerDiv>
      <div className="home-values">
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
        <ButtonContainer>
          <SecondaryButton>EDIT PROJECTS</SecondaryButton>
        </ButtonContainer>
      </div>
    </ContainerDiv>
  );
};

export default EditProjects;
