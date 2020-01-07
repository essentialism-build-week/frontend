import React from "react";
import { login } from '../actions/action';
import { connect } from "react-redux";

const Login = (props) => {

    const handleChanges = event => {
        mapStateToProps(
            { ...props.credentials, [event.target.name]: event.target.value }
        )
    
    }

  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          placeholder="User name"
          value={props.credentials}
          onChange={handleChanges}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={props.credentials}
          onChange={handleChanges}
          required
        />
        <button>Log in</button>
        {props.isFetching && "Logging In..."}
      </form>
      <p>{props.error ? props.error : null}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    credentials: state.credentials,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { login })(Login);
