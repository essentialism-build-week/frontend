import React, {useState} from "react";
import styled from "styled-components";

const RegistrationForm = props => {
  const [regData, setRegData] = useState({
    email: "",
    password: ""
  });

  return (
    <form>
      <label>Username</label>
      <input placeholder="username" />
      <label>Email*</label>
      <input placeholder="email" />
      <label>Password*</label>
      <input placeholder="password" />
      <label>Phone Number</label>
      <input placeholder="phone number" />
      <p>* - required</p>
      <input type="submit" value="Submit" />
    </form>
  );
};


export default RegistrationForm;