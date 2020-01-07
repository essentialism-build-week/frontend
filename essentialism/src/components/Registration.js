import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

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
    setCredentials(
        { ...credentials, [event.target.name]: event.target.value }
    )
    console.log('NEW credentials from Registration component', credentials);
  };

  // Post credentials to local storage token
  let history = useHistory();
  const register = event => {
      event.preventDefault();
      setIsFetching(true);
      axiosWithAuth()
          .post('/auth/register', credentials)
          .then(response => {
              console.log(response.data);
              response.data.saved === true ? history.push('/login') : alert("This account has already been created.");
          })
          .catch(error => console.log(error));
  };

  return (
    <div>
        <form name="registration-form" onSubmit={register}>
            <input
                type="text"
                name="username"
                placeholder="User name"
                value={credentials.username}
                onChange={handleChanges}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={credentials.email}
                onChange={handleChanges}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChanges}
                required
            />
            <input
                type="number"
                name="phone"
                placeholder="Phone number"
                value={credentials.phone}
                onChange={handleChanges}
                required
            />
            <button>Sign up</button>
            {isFetching && 'Signing up...'}
        </form>
    </div>
  );
};

export default Registration;