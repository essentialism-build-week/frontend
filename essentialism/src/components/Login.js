import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';


const Login = () => {
    // Set initial state for credentials and fetch check
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState("")

    // Sets credentials to it's state
    const handleChanges = event => {
        setCredentials(
            { ...credentials, [event.target.name]: event.target.value }
        )
        console.log('NEW credentials from Login', credentials);
    }

    // Post credentials to local storage token
    let history = useHistory();
    const login = event => {
        event.preventDefault();
        setIsFetching(true);
        axiosWithAuth()
            .post('/login', credentials)
            .then(response => {
                console.log(response.data);
                if (response.data.token) {
                    localStorage.setItem("token", response.data.token);
                    history.push('/main');
                } else {
                    setError(response.data.msg)
                }

            })
            .catch(error => console.log(error));
    }


    return (
        <div>
            <form onSubmit={login}>
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
                <button>Log in</button>
                {isFetching && 'Logging in...'}
            </form>
            <p>{error ? error : null}</p>
        </div>
    )
}

export default Login;