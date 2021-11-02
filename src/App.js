import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "views/LandingPage";
import SignInPage from "views/SignInPage";
import StatsPage from "views/StatsPage";
import ProfilePage from "views/ProfilePage";
import ReviewPage from "views/ReviewPage";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/signin" component={SignInPage} />
      <Route exact path="/stats" component={StatsPage} />
      <Route exact path="/profile" component={ProfilePage} />
      <Route exact path="/review" component={ReviewPage} />
    </Router>
  );
};

export default App;
