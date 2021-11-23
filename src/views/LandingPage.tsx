import { useRouter } from "action/action";
import BenefitPartnerPart from "components/landing/benefitpartner/BenefitPartnerPart";
import BenefitUserPart from "components/landing/benefituser/BenefitUserPart";
import FaqPartnerPart from "components/landing/faqpatner/FaqPartnerPart";
import FaqUserPart from "components/landing/faquser/FaqUserPart";
import ForPartnerVideoPart from "components/landing/forpartnervideo/ForPartnerVideoPart";
import HowitworksPart from "components/landing/howitworks/HowitworksPart";
import LandingIntroPart from "components/landing/landingIntro/LandingIntroPart";
import PartnersPart from "components/landing/partners/PartnersPart";
import {
  DashBorder,
  ForPartnerDiv,
  LandingPageDiv,
} from "components/landing/StyledLandingPage";
import Footer from "layouts/footer";
import { Container } from "layouts/StyledLayout";
import React, { useEffect } from "react";
// import {  } from "react-router-dom";

const LandingPage: React.FC = () => {
  const history = useRouter();

  useEffect(() => {
    if (localStorage.getItem("isAuth") === "true") {
      localStorage.setItem("currentUrl", "/stats");
      // window.location.href = "/stats";
      history.push("/stats");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <LandingPageDiv>
      <LandingIntroPart />
      <BenefitUserPart />
      <HowitworksPart />
      <FaqUserPart />
      <ForPartnerDiv>
        <DashBorder />
        <Container>
          <ForPartnerVideoPart />
          <BenefitPartnerPart />
          <PartnersPart />
          <FaqPartnerPart />
        </Container>
        <Footer />
      </ForPartnerDiv>
    </LandingPageDiv>
  );
};

export default LandingPage;
