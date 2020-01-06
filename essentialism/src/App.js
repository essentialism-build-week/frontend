import React from "react";
import Header from "./components/Header";
import OnboardingIntro from "./components/OnboardingIntro";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
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
          <RegistrationForm />
        </Route>
        <Route path="/login">
          <LoginForm />
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
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
