import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

// This component represents the home screen a returning user will see after logging in.
// The app will retrieve the user's top 3 values and display them front and center.
// Below the top 3 values, the user's current projects will be displayed.
// At the bottom of the screen, the user will see a row of icons representing other pages of the app the user can visit. For example, the user can click on one icon to edit her top 3 values, another icon to add/edit projects she's involved with, and another icon to edit her settings.

const Home = props => {
  // const [values, setValues] = useState([]);

  // useEffect(() => {
  //   axios.get("https://todai-backend.herokuapp.com/api/auth/")
  //   .then(response => {
  //     console.log(`axios.get.then: `, response);
  //     setValues(response)
  //   })
  //   .catch(error => {
  //     console.log(`You failed! Here's why: `, error)
  //   });
  // }, []);

  const values = [
    { id: "1", name: "art" },
    { id: "2", name: "athletics" },
    { id: "3", name: "community" }
  ];
  console.log(values);

  const projects = [
    { id: "1", name: "project 1" },
    { id: "2", name: "project 2" },
    { id: "3", name: "project 3" }
  ];

  return (
    <section className="home-screen">
      <div className="home-values">
        <h1></h1>
        <h2>Your Top 3 Values</h2>
        <ListGroup>
          {values.map(value => {
            console.log(value);
            return <ListGroupItem>{value.name}</ListGroupItem>;
          })}
        </ListGroup>
      </div>
      <h2>Your Current Projects</h2>
      <div className="home-projects">
        <h2>Current Projects</h2>
        {projects.map(project => {
          console.log(project);
          return <ListGroupItem>{project.name}</ListGroupItem>;
        })}
      </div>
    </section>
  );
};

export default Home;
