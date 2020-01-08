import React from "react";
import PrivateRoute from './components/PrivateRoute';
import LandingPage from './components/LandingPage';
import Header from "./components/Header";
import OnboardingIntro from "./components/OnboardingIntro";
import Registration from "./components/Registration";
import Login from "./components/Login";
import ValueSelection from "./components/ValueSelection";
import Top3Intro from "./components/Top3Intro";
import SelectTop3Values from "./components/SelectTop3Values";
import ValuesExplanation from "./components/ValuesExplanation";
import ProjectsIntro from "./components/ProjectsIntro";
import ProjectsList from "./components/ProjectsList";
import ProjectValueCompareIntro from "./components/ProjectValueCompareIntro";
import AssignValuesToProjects from "./components/AssignValuesToProjects";
import OnboardingComplete from "./components/OnboardingComplete";
import Home from "./components/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <Router>
      <main>
        <Header />
      </main>
      <Switch>
      <PrivateRoute path="/home" component={Home} />
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
        <Route path="/projects-list">
          <ProjectsList />
        </Route>
        <Route path="/project-value-compare-intro">
          <ProjectValueCompareIntro />
        </Route>
        <Route path="/assign-values">
          <AssignValuesToProjects />
        </Route>
        <Route path="/onboarding-complete">
          <OnboardingComplete />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
