import React, { useMemo, useState } from "react";
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
import StatsContext from "context/stats";
import ProfileContext from "context/profile";
import ReviewContext from "context/review";

const App: React.FC = () => {
  const [statsContext, setStatsContext] = useState(null);
  const [profileContext, setProfileContext] = useState(null);
  const [reviewContext, setReviewContext] = useState(null);
  const statsValue = useMemo(
    () => ({ statsContext, setStatsContext }),
    [statsContext]
  );
  const profileValue = useMemo(
    () => ({ profileContext, setProfileContext }),
    [profileContext]
  );
  const reviewValue = useMemo(
    () => ({ reviewContext, setReviewContext }),
    [reviewContext]
  );

  return (
    <StatsContext.Provider value={statsValue}>
      <ProfileContext.Provider value={profileValue}>
        <ReviewContext.Provider value={reviewValue}>
          <I18nextProvider i18n={i18n}>
            <Router>
              <Header />
              <MainContainer>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/signin" component={SignInPage} />.
                <Route exact path="/stats" component={StatsPage} />
                <Route exact path="/profile" component={ProfilePage} />
                <Route exact path="/reviews" component={ReviewPage} />
              </MainContainer>
            </Router>
          </I18nextProvider>
        </ReviewContext.Provider>
      </ProfileContext.Provider>
    </StatsContext.Provider>
  );
};

export default App;

const MainContainer = styled.div`
  padding-top: 117px;
  /* height: 2000px;
  min-height: calc(100vh - 120px); */
`;
