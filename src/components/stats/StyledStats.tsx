import styled from "styled-components";

export const StatsPageDiv = styled.div`
  margin: 100px 0 200px 0;
  @media screen and (max-width: 425px) {
    margin: 0 0 100px 0;
  }
`;

export const DealsPartDiv = styled.div`
  margin: 70px 0 45px 0;
  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const DealsRedeemedDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DRTitle = styled.div`
  font-size: 31px;
  font-weight: 900;
`;

export const DRValue = styled.div`
  font-size: 31px;
  color: #fc5f77;
  font-weight: 900;
`;

export const DHeavyTitle = styled.div`
  font-size: 20px;
  font-weight: 900;
`;

export const DHeavyValue = styled.div`
  font-size: 20px;
  font-weight: 900;
`;

export const DTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

export const DValue = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

export const ChartPartDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 88px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    & > *:not(:last-child) {
      margin-bottom: 50px;
    }
  }
`;

export const ChartDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ChartDescDiv = styled.div`
  margin-top: 23px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-auto-flow: column;
  grid-column-gap: 28px;
  grid-row-gap: 19px;
`;

type chartDescProps = {
  color: string;
};

export const ChartDesc = styled.div<chartDescProps>`
  display: flex;
  font-weight: 500;
  color: ${({ color }) => color};
  div {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
    margin-right: 9px;
  }
`;

export const StatListPartDiv = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 80px;
  }
`;

export const HrDiv = styled.div`
  height: 2px;
  width: 100%;
  background-color: #ece5d9;
  margin: 50px 0;
`;

export const StatsTotalPartDiv = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 33px;
  }
`;

export const StatsTotalDiv = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 6px;
  }
`;

export const StateCountDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TotalText = styled.div`
  font-size: 31px;
  font-weight: 900;
`;

export const SubTotalText = styled.div`
  font-weight: 500;
  font-size: 20px;
  color: #00000050;
`;

export const StatListDiv = styled.div`
  @media screen and (max-width: 768px) {
    padding-left: 50px;
  }
`;

export const ListTitle = styled.div`
  font-weight: 900;
  span {
    font-size: 31px;
  }
  font-size: 20px;
`;

export const ListSubTitle = styled.div`
  font-size: 20px;
  margin-top: -5px;
  font-weight: 700;
`;

export const ListContentDiv = styled.div`
  position: relative;
  img {
    position: absolute;
    width: 26px;
    height: 26px;
    margin-right: 26px;
    left: -52px;
    cursor: pointer;
  }
  display: flex;
  align-items: center;
  font-size: 18.75px;
  font-weight: 500;
  color: #00000050;
  margin-top: 5px;
`;

export const ListCount = styled.div`
  font-size: 30px;
  color: #fc697f;
  font-weight: 700;
`;

export const StatListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListDescDiv = styled.div`
  width: 70%;
`;

export const PeopleDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 33px;
  grid-column-gap: 10%;
  margin-top: 17px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const PeopleInfoDiv = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 66px;
    height: 66px;
    margin-right: 14px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const PeopleInfo = styled.div``;

export const PeopleName = styled.div`
  font-weight: 700;
  font-size: 20px;
`;

export const PeopleDate = styled.div`
  font-size: 15px;
  color: #00000050;
  font-weight: 500;
`;
