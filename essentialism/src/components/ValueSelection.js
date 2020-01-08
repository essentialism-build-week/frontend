import React from "react";
import { Link } from "react-router-dom";
import { CustomInput, Form, FormGroup, Input } from "reactstrap";
import { axiosWithAuth } from "../utils/axiosWithAuth";

// This component allows the user to select her values in life.
// These values are meant to be ideas or concept the user can resonate with upon reading them, i.e. community, music, career, health, family, art, travel, etc...
// The user can swipe left to reject a value or swipe right to add it to their list.
// Once the user has selected her values, she can tap the button and be brought to the next screen where she will narrow down their values to their top 3

export default function ValueSelection() {
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
    { id: "3", name: "community" },
    { id: "4", name: "creativity" },
    { id: "5", name: "music" },
    { id: "6", name: "travel" },
    { id: "7", name: "wealth" }
  ];
  console.log(values);

  return (
    <Form>
      <h2>Choose your values</h2>
      <FormGroup>
        <div>
          {values.map(value => {
            console.log(value);
            return (
              <CustomInput
                type="switch"
                name="customSwitch"
                label={value.name}
              />
            );
          })}
        </div>
      </FormGroup>
      <p>Once you have picked at least 3, you can proceed</p>
      <Link to="/top3-intro">
        <input type="submit" value="I've chosen my values" />
      </Link>
    </Form>
  );
}

// <Input type="select" name="selectMulti" id="exSelectMulti" multiple>
// {values.map(value => {
//   console.log(value);
//   return <option>{value.name}</option>;
// })}
// </Input>
