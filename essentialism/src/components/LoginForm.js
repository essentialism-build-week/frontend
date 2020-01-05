import React, {useState} from "react";

const LoginForm = props => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  return (
    <form>
      <label>Email</label>
      <input placeholder="email" />
      <label>Password</label>
      <input placeholder="password" />
      <div className="proceed-button">
        <p>Submit</p>
      </div>
    </form>
  );
};

export default LoginForm;