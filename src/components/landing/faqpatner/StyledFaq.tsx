import styled from "styled-components";

export const FaqPartnerDiv = styled.div`
  margin-bottom: 200px;
`;

export const FaqUserDiv = styled.div`
  margin-bottom: 100px;
`;

export const FaqSubtitle = styled.div`
  font-size: 41px;
  margin-top: -10px;
  font-weight: 700;
`;

export const FaqList = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 50px;
  }
  margin-top: 50px;
`;

export const FaqListItem = styled.div``;

export const ListTitle = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
  font-weight: 700;
`;

export const ListContent = styled.div`
  font-size: 25px;
  font-weight: 500;
  display: flex;
  align-items: center;
  div {
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: black;
    margin: 0 10px;
  }
`;

export const ListContentGroup = styled.div`
  margin: 10px 0;
`;
