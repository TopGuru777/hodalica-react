import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  max-width: 1060px;
  margin: 0 auto;
  transition: 0.2s linear;
  @media screen and (max-width: 425px) {
    width: calc(100% - 30px);
    /* max-width: 375px; */
    padding: 0 15px;
    /* margin: 0; */
    transition: 0.2s linear;
  }
  height: 100%;
`;

export const PageTitle = styled.div`
  font-weight: 900;
  font-size: 58.8px;
  svg {
    width: 54px;
    height: 42px;
    margin-right: 16.7px;
  }
  margin-bottom: 60px;
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    font-size: 50px;
    transition: 0.2s linear;
    svg {
      width: 47px;
      height: 39px;
      margin-right: 16.7px;
    }
  }
`;

export const DatePickerDiv = styled.div`
  margin: 5px 0;
  /* overflow: auto; */
`;
