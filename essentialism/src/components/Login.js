import React, { Component } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { axiosWithAuth } from '../utils/axiosWithAuth';




  
const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200,
    }
  },
}));

class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    },
    isFetching: false
  };

  handleChange = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    });
  };

  loggingIn = event => {
    event.preventDefault();
    this.setState({
      isFetching: true
    });
    axiosWithAuth()
    .post('/api/auth/login/', this.state.credentials)
    .then(response => {
        localStorage.setItem('token', response.data.payload);
        this.props.history.push('/welcome');
    })
    .catch(error => console.log(error));
  };

  render() {
    return (
    
        <div className="mainContainer">
          <div className="header">
            <h1>Sign In</h1>
          </div>

          <form
            onSubmit={this.loggingIn}
            className={useStyles.root}
            noValidate
            autoComplete="off"
          >
            <div className="inputOuterContainer">
              <div className="inputContainer">
                <TextField
                  name="username"
                  onChange={this.handleChange}
                  value={this.state.credentials.username}
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                 
                />
              </div>

              <div className="inputContainer">
                <TextField
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.credentials.password}
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                 
                />
              </div>
            </div>

            <div>
              <button>Log In</button>
              <div className="loginDiv">
              {this.state.isFetching && "Logging In..."}
              </div>
            </div>
          </form>
        </div>
  
    );
  }
}

export default Login;
