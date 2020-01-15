import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import FourOhFour from "./FourOhFour";
import CoursePage from "./courses/CoursesPage";

const App = () => (
  <div className="container-fluid">
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/courses" component={CoursePage} />
      <Route component={FourOhFour} />
    </Switch>
  </div>
);

export default App;
