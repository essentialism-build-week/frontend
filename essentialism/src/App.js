import React from "react";
import LandingPage from './components/LandingPage';
import Header from "./components/Header";
import OnboardingIntro from "./components/OnboardingIntro";
import Registration from "./components/Registration";
import Login from "./components/Login";
import ValueSelection from "./components/ValueSelection";
import ValueExplanation from "./components/ValueExplanation";
import ProjectsIntro from "./components/ProjectsIntro";
import Home from "./components/HomeScreen";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <main>
        <Header />
      </main>
      <Switch>
        <Route path="/onboarding-intro">
          <OnboardingIntro />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/value-selection">
          <ValueSelection />
        </Route>
        <Route path="/value-explanation">
          <ValueExplanation />
        </Route>
        <Route path="/projects-intro">
          <ProjectsIntro />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
