import { Container } from "layouts/StyledLayout";
import React, { useEffect } from "react";
import { AnimItem, AnimShapes, IntroAnimDiv } from "./StyledLandingIntro";

import animImg1 from "assets/animation/1.png";
import animImg2 from "assets/animation/2.png";
import animImg3 from "assets/animation/3.png";
import animImg4 from "assets/animation/4.png";
import animImg5 from "assets/animation/5.png";

const IntroAnimPart = () => {
  useEffect(() => {
    const animationMove = document.querySelectorAll(".animation-move");
    const handleAnimation = (e: any) => {
      let halfWidth = window.innerWidth / 2;
      let halfHeight = window.innerHeight / 2;
      let x = e.clientX - halfWidth;
      let y = e.clientY - halfHeight;
      animationMove.forEach((item: any, index) => {
        item.style.transform = `translate(${
          3 * x * ((index / halfWidth) * 6)
        }px, ${6 * y * ((index / halfHeight) * 2)}px)`;
      });
    };
    window.addEventListener("mousemove", handleAnimation);
    return () => {
      window.removeEventListener("mousemove", () => {});
    };
  }, []);
  return (
    <Container>
      <IntroAnimDiv>
        <AnimItem no={1} className="animation-move">
          <video
            // autoPlay
            playsInline
            muted
            loop
            className="top-animation-video-1 grid__item small-video"
            poster={animImg1}
          >
            <source
              src="https://technoandchill.com/wp-content/uploads/2021/07/topVideoNew3.mp4"
              type="video/mp4"
            />
          </video>
        </AnimItem>
        <AnimItem no={2} className="animation-move">
          <video
            // autoPlay
            playsInline
            muted
            loop
            className="top-animation-video-1 grid__item small-video"
            poster={animImg2}
          >
            <source
              src="https://technoandchill.com/wp-content/uploads/2021/06/video2.mp4"
              type="video/mp4"
            />
          </video>
        </AnimItem>
        <AnimItem no={3} className="animation-move">
          <video
            // autoPlay
            playsInline
            muted
            loop
            className="top-animation-video-1 grid__item small-video"
            poster={animImg3}
          >
            <source
              src="https://technoandchill.com/wp-content/uploads/2021/06/video5.mp4"
              type="video/mp4"
            />
          </video>
        </AnimItem>
        <AnimItem no={4} className="animation-move">
          <video
            // autoPlay
            playsInline
            muted
            loop
            className="top-animation-video-1 grid__item small-video"
            poster={animImg4}
          >
            <source
              src="https://technoandchill.com/wp-content/uploads/2021/06/video1.mp4"
              type="video/mp4"
            />
          </video>
        </AnimItem>
        <AnimItem no={5} className="animation-move">
          <video
            // autoPlay
            playsInline
            muted
            loop
            className="top-animation-video-1 grid__item small-video"
            poster={animImg5}
          >
            <source
              src="https://technoandchill.com/wp-content/uploads/2021/06/video3.mp4"
              type="video/mp4"
            />
          </video>
        </AnimItem>
        <AnimShapes no={1} className="animation-move" />
        <AnimShapes no={2} className="animation-move" />
        <AnimShapes no={3} className="animation-move" />
      </IntroAnimDiv>
    </Container>
  );
};

export default IntroAnimPart;
