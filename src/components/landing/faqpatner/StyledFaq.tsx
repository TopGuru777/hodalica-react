import styled from "styled-components";

export const FaqPartnerDiv = styled.div`
  margin-bottom: 200px;
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    margin-bottom: 100px;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 425px) {
    margin-top: -30px;
  }
`;

export const FaqUserDiv = styled.div`
  margin-bottom: 100px;
  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
    transition: 0.2s linear;
  }
`;

export const FaqSubtitle = styled.div`
  font-size: 35px;
  font-weight: 700;
  @media screen and (max-width: 1024px) {
    font-size: 30px;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 768px) {
    font-size: 25px;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 500px) {
    font-size: 20px;
    transition: 0.2s linear;
  }
`;

export const FaqList = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 50px;
  }

  margin-top: 50px;
  @media screen and (max-width: 500px) {
    & > *:not(:last-child) {
      margin-bottom: 30px;
    }

    margin-top: 30px;
    transition: 0.2s linear;
  }
`;

export const FaqListItem = styled.div``;

export const ListTitle = styled.div`
  font-size: 32px;
  margin-bottom: 10px;
  font-weight: 700;
  @media screen and (max-width: 1024px) {
    font-size: 32px;
  }
  @media screen and (max-width: 768px) {
    font-size: 26px;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 500px) {
    font-size: 20px;
    transition: 0.2s linear;
  }
`;

export const ListContent = styled.div`
  font-size: 23px;
  font-weight: 400;
  display: flex;
  align-items: center;
  opacity: 0.4;
  div {
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: black;
    margin: 0 10px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 21px;
  }
  @media screen and (max-width: 768px) {
    font-size: 17px;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 500px) {
    font-size: 15px;
    transition: 0.2s linear;
  }
`;

export const ListContentGroup = styled.div`
  margin: 10px 0;
`;
