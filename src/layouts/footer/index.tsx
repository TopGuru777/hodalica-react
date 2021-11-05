import { Container } from "layouts/StyledLayout";
import React from "react";
import { FooterDiv, LinksPart } from "./StyledFooter";

import AboutDescPart from "./AboutDescPart";
import QuickLinkPart from "./QuickLinkPart";
import ContactPart from "./ContactPart";

const Footer: React.FC = () => {
  return (
    <Container>
      <FooterDiv>
        <AboutDescPart />
        <LinksPart>
          <QuickLinkPart />
          <ContactPart />
        </LinksPart>
      </FooterDiv>
    </Container>
  );
};

export default Footer;
