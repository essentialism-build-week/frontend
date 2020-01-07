import React from "react";
import Header from "./components/Header";
import OnboardingIntro from "./components/OnboardingIntro";
import Registration from "./components/Registration";
import Login from "./components/Login";
import ValueSelection from "./components/ValueSelection";
import Top3Intro from "./components/Top3Intro";
import SelectTop3Values from "./components/SelectTop3Values";
import ValuesExplanation from "./components/ValuesExplanation";
import ProjectsIntro from "./components/ProjectsIntro";
import OnboardingComplete from "./components/OnboardingComplete";
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
        <Route path="/top3-intro">
          <Top3Intro />
        </Route>
        <Route path="/top3-selection">
          <SelectTop3Values />
        </Route>
        <Route path="/values-explanation">
          <ValuesExplanation />
        </Route>
        <Route path="/projects-intro">
          <ProjectsIntro />
        </Route>
        <Route path="/onboarding-complete">
          <OnboardingComplete />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
