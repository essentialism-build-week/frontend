import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 50vh;
`;

const SubmitButton = styled.button`
  font-size: 1.5rem;
  margin: 20px;
  color: white;
  width: 150px;
  height: 50px;
  background: #ce98d9;
  border: 1px solid #dab1e2;
  border-radius: 10px;
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.2),
    -4px -4px 3px rgba(255, 255, 255, 1), inset 1px 1px rgba(255, 255, 255, 0.2);
  outline: none;
`;

const Registration = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    phone: ""
  });
  const [isFetching, setIsFetching] = useState(false);

  // Sets credentials to it's state
  const handleChanges = event => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
    console.log("NEW credentials from Registration component", credentials);
  };

  // Post credentials to local storage token
  let history = useHistory();
  const register = event => {
    event.preventDefault();
    setIsFetching(true);
    axiosWithAuth()
      .post("/register", credentials)
      .then(response => {
        console.log(response.data);
        response.data.saved === true
          ? history.push("/login")
          : alert("This account has already been created.");
      })
      .catch(error => console.log(error));
  };

  return (
    <ContainerDiv>
      <form name="registration-form" onSubmit={register}>
        <InputDiv>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="What do we call you?"
            value={credentials.username}
            onChange={handleChanges}
            required
          />
        </InputDiv>
        <InputDiv>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Electronic mail handle"
            value={credentials.email}
            onChange={handleChanges}
            required
          />
        </InputDiv>
        <InputDiv>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Shhhh... don't tell anyone"
            value={credentials.password}
            onChange={handleChanges}
            required
          />
        </InputDiv>
        <InputDiv>
          <label>Phone Number</label>
          <input
            type="number"
            name="phone"
            placeholder="What are your digits?"
            value={credentials.phone}
            onChange={handleChanges}
            required
          />
        </InputDiv>
        <SubmitButton>Sign up</SubmitButton>
        {isFetching && "Signing up..."}
      </form>
    </ContainerDiv>
  );
};

export default Registration;
