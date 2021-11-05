import { Container } from "layouts/StyledLayout";
import React from "react";
import { Dot, DotGroup, MobileDiv, MobileIntroDiv } from "./StyledLandingIntro";

import mob1 from "assets/mobiles/7.png";
import mob2 from "assets/mobiles/8.png";
import mob3 from "assets/mobiles/9.png";

const MobileIntroPart = () => {
  return (
    <Container>
      <DotGroup>
        <Dot size="lg" />
        <Dot size="md" />
        <Dot size="sm" />
      </DotGroup>
      <MobileIntroDiv>
        <MobileDiv>
          <video
            // autoPlay
            playsInline
            muted
            loop
            className="top-animation-video-1 grid__item small-video"
            poster={mob1}
          >
            <source
              src="https://technoandchill.com/wp-content/uploads/2021/07/topVideoNew3.mp4"
              type="video/mp4"
            />
          </video>
        </MobileDiv>
        <MobileDiv>
          <video
            // autoPlay
            playsInline
            muted
            loop
            className="top-animation-video-1 grid__item small-video"
            poster={mob2}
          >
            <source
              src="https://technoandchill.com/wp-content/uploads/2021/07/topVideoNew3.mp4"
              type="video/mp4"
            />
          </video>
          <Dot size="xs" color="#8FC7F4" pos={1} />
          <Dot size="xs" color="#09C8CC" pos={2} />
          <Dot size="xs" color="#FFCC54" pos={3} />
          <Dot size="xs" color="#87A0FF" pos={4} />
          <Dot size="xs" color="#FD9090" pos={5} />
          <Dot size="xs" color="#FC5F77" pos={6} />
        </MobileDiv>
        <MobileDiv>
          <video
            // autoPlay
            playsInline
            muted
            loop
            className="top-animation-video-1 grid__item small-video"
            poster={mob3}
          >
            <source
              src="https://technoandchill.com/wp-content/uploads/2021/07/topVideoNew3.mp4"
              type="video/mp4"
            />
          </video>
        </MobileDiv>
      </MobileIntroDiv>
    </Container>
  );
};

export default MobileIntroPart;
