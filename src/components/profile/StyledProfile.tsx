import styled from "styled-components";

export const ProfileDiv = styled.div`
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

export const ProfileAvatarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 44px;
  @media screen and (max-width: 550px) {
    flex-direction: column;
    & > *:not(:last-child) {
      margin-bottom: 20px;
    }
    align-items: flex-start;
    transition: 0.2s linear;
  }
`;

export const AvatarDiv = styled.div`
  img {
    width: 92px;
    margin-right: 24px;
    border-radius: 50%;
    @media screen and (max-width: 768px) {
      width: 85px;
      transition: 0.2s linear;
    }
    @media screen and (max-width: 375px) {
      width: 80px;
      transition: 0.2s linear;
    }
  }
  display: flex;
  align-items: center;
  transition: 0.2s linear;
`;

export const AvatarDesc = styled.div``;

export const BeautyButtonDiv = styled.div`
  width: 150px;
  font-size: 18px;
  font-weight: 600;
`;

export const AvatarTitle = styled.div`
  font-weight: 900;
  font-size: 40px;
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    font-size: 35px;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 375px) {
    font-size: 30px;
    transition: 0.2s linear;
  }
`;

export const AvatarSubTitle = styled.div`
  font-weight: 500;
  font-size: 25px;
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 375px) {
    font-size: 15px;
    transition: 0.2s linear;
  }
`;

export const ProfileInfoDiv = styled.div``;

export const DetailInfoGroup = styled.div`
  display: flex;
  /* grid-template-rows: 1fr 1fr; */
  flex-direction: column;
  grid-gap: 28px;
  font-size: 18px;
  transition: 0.2s linear;
  @media screen and (max-width: 375px) {
    font-size: 15px;
    transition: 0.2s linear;
  }
`;

export const DetailInfo = styled.div`
  font-weight: 500;
  display: flex;
  align-items: center;
  img {
    margin-right: 13.9px;
  }
`;

export const ProfileImageDiv = styled.div`
  margin: 42px 0;
  img {
    max-width: 503px;
    width: 100%;
    border-radius: 25px;
  }
`;

export const ProfileDesc = styled.div`
  font-size: 18px;
  margin-bottom: 24px;
  transition: 0.2s linear;
  font-weight: 500;
  @media screen and (max-width: 375px) {
    font-size: 15px;
    transition: 0.2s linear;
  }
`;

export const ScheduleDiv = styled.div`
  display: flex;
  img {
    align-self: start;
    margin-right: 15px;
  }
`;

export const SchduleGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
`;

export const Schedules = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 18px;
  margin-bottom: 4px;
  @media screen and (max-width: 375px) {
    font-size: 15px;
    transition: 0.2s linear;
  }
`;

export const DayDiv = styled.div`
  font-weight: 600;
`;

export const TimeDiv = styled.div`
  font-weight: 500;
  color: #00000058;
`;
