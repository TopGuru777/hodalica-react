import styled from "styled-components";

export const StatsPageDiv = styled.div`
  margin: 100px 0 200px 0;
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
  font-size: 31.2px;
`;

export const DRValue = styled.div`
  font-size: 31.2px;
  color: #fc5f77;
`;

export const DTitle = styled.div`
  font-size: 20px;
`;

export const DValue = styled.div`
  font-size: 20px;
`;

export const ChartPartDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 88px;
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
  color: ${({ color }) => color};
  div {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
    margin-right: 9px;
  }
`;

export const StatListPartDiv = styled.div``;

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
`;

export const SubTotalText = styled.div`
  font-size: 20px;
  color: #00000050;
`;
