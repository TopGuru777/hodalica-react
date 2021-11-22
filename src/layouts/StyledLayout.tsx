import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  max-width: 1060px;
  margin: 0 auto;
  transition: 0.2s linear;
  @media screen and (max-width: 425px) {
    width: calc(100% - 50px);
    /* max-width: 375px; */
    padding: 0 25px;
    /* margin: 0; */
    transition: 0.2s linear;
  }
  height: 100%;
`;

export const PageTitle = styled.div`
  font-weight: 900;
  font-size: 58px;
  svg {
    width: 54px;
    height: 42px;
    margin-right: 15px;
  }
  margin-bottom: 40px;
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    font-size: 50px;
    transition: 0.2s linear;
    svg {
      width: 46px;
      height: 36px;
    }
  }
  @media screen and (max-width: 400px) {
    font-size: 33px;
    transition: 0.2s linear;
    svg {
      width: 30px;
      height: 25px;
      margin-right: 10px;
    }
  }
`;

export const DatePickerDiv = styled.div`
  margin: 5px 0;
  /* overflow: auto; */
`;
