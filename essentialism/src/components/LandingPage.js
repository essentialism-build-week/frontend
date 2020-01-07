import React from "react";
import { useHistory } from "react-router-dom";

const LandingPage = () => {
  let history = useHistory();

  function handleLogin() {
    history.push("/login");
  }

  function handleRegister() {
    history.push("/registration");
  }

  return (
    <div>
      <button type="button" onClick={handleLogin}>
        Login
      </button>
      <button type="button" onClick={handleRegister}>
        Registration
      </button>
    </div>
  );
};

export default LandingPage;
