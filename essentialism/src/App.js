import React from 'react';
import './App.css';
import styled from 'styled-components';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const AppStyles = styled.div`


`;

function App() {
  return (
    <AppStyles>
    <Router>
    <div className="App">
      <Switch>
        <PrivateRoute path="/welcome" component={'#'} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  </Router>
    </AppStyles>
    
  );
}

export default App;
