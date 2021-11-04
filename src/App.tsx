import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import LandingPage from "views/LandingPage";
import SignInPage from "views/SignInPage";
import StatsPage from "views/StatsPage";
import ProfilePage from "views/ProfilePage";
import ReviewPage from "views/ReviewPage";
import Header from "layouts/header";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Header />
        <MainContainer>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/signin" component={SignInPage} />
          <Route exact path="/stats" component={StatsPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/review" component={ReviewPage} />
        </MainContainer>
      </Router>
    </I18nextProvider>
  );
};

export default App;

const MainContainer = styled.div`
  padding-top: 117px;
  /* min-height: calc(100vh - 120px); */
`;
