import styled from "styled-components";

export const ReviewsDiv = styled.div`
  margin: 100px auto 200px auto;
`;

export const ReviewItemGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReviewItemDiv = styled.div`
  margin-top: 35px;
`;

export const ReviewAvatarDiv = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 59px;
    margin-right: 14px;
  }
  span {
    font-size: 17px;
    color: #00000050;
    margin-left: 10px;
    width: 50px;
  }
`;

export const ReviewUserName = styled.div`
  font-size: 20px;
`;

export const ReviewDesc = styled.div`
  font-size: 18px;
  margin-top: 12px;
`;

export const ReviewShowDiv = styled.div``;

export const Reviews = styled.div`
  width: 90%;
  svg {
    width: 15px;
    height: 15px;
  }
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;
