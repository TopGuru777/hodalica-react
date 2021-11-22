import styled from "styled-components";

export const ReviewsDiv = styled.div`
  max-width: 900px;
  width: 80%;
  margin: 20px auto 200px auto;
  transition: 0.2s linear;
  @media screen and (max-width: 425px) {
    width: calc(100% - 30px);
    margin: 0px auto 100px auto;
    transition: 0.2s linear;
    margin-top: -40px;
  }
`;

export const ReviewItemGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReviewItemDiv = styled.div`
  margin-top: 50px;
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
  @media screen and (max-width: 425px) {
    img {
      width: 50px;
      height: 50px;
    }
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
  @media screen and (max-width: 425px) {
    font-size: 18px;
    font-weight: 800;
  }
`;

export const ReviewDesc = styled.div`
  font-size: 17px;
  margin-top: 12px;
  font-weight: 500;
  @media screen and (max-width: 425px) {
    font-size: 15px;
  }
`;

export const ReviewShowDiv = styled.div``;

export const Reviews = styled.div`
  width: 105px;
  margin-top: 5px;
  svg {
    width: 15px;
    height: 15px;
  }
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;
