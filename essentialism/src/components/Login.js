import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import Home from "./HomeScreen";
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
  width: 250px;
  height: 50px;
  background: #ce98d9;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2),
    -5px -5px 5px rgba(255, 255, 255, 1);
`;

const Login = () => {
  // Set initial state for credentials and fetch check
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const [isFetching, setIsFetching] = useState(false);

  const [error, setError] = useState("");

  // Sets credentials to it's state
  const handleChanges = event => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
    console.log("NEW credentials from Login", credentials);
  };

  // Post credentials to local storage token
  let history = useHistory();
  const login = event => {
    event.preventDefault();
    setIsFetching(true);

    axiosWithAuth()
      .post("/auth/login", credentials)
      .then(response => {
        console.log(response.data);
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("ID", response.data.username);
          history.push("/home");
        } else {
          setError(response.data.msg);
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <ContainerDiv>
      <form onSubmit={login}>
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
        <SubmitButton>Log in</SubmitButton>
        {isFetching && "Logging In..."}
      </form>
      <p>{error ? error : null}</p>
    </ContainerDiv>
  );
};

export default Login;
