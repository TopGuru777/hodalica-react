import React from "react";
import styled from "styled-components";

import spinner from "assets/svg/spinner.svg";

const SpinnerDiv = styled.div`
  width: 100%;
  padding-top: 150px;
  text-align: center;
`;

const Spinner = () => {
  return (
    <SpinnerDiv>
      <img width="100px" src={spinner} alt="spinner" />
    </SpinnerDiv>
  );
};

export default Spinner;
