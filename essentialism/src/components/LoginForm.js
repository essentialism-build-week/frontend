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
      <input type="submit" value="Submit" />
    </form>
  );
};

export default LoginForm;