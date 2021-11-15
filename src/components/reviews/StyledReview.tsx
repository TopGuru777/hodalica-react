import styled from "styled-components";

export const ReviewsDiv = styled.div`
  max-width: 900px;
  width: 80%;
  margin: 50px auto 200px auto;
  transition: 0.2s linear;
  @media screen and (max-width: 425px) {
    width: calc(100% - 30px);
    margin: 0 auto 100px auto;
    transition: 0.2s linear;
  }
`;

export const ReviewItemGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReviewItemDiv = styled.div`
  margin-top: 60px;
`;

export const ReviewAvatarDiv = styled.div`
  display: flex;
  align-items: center;
  img {
    border-radius: 50%;
    width: 59px;
    height: 59px;
    object-fit: cover;
    margin-right: 14px;
  }
  span {
    font-weight: 500;
    font-size: 17px;
    color: #00000050;
    margin-left: 10px;
  }
`;

export const ReviewUserName = styled.div`
  font-size: 20px;
  font-weight: 900;
`;

export const ReviewDesc = styled.div`
  font-size: 18px;
  margin-top: 12px;
  font-weight: 500;
`;

export const ReviewShowDiv = styled.div``;

export const Reviews = styled.div`
  width: 105px;
  svg {
    width: 15px;
    height: 15px;
  }
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;
