import styled from "styled-components";

export const ProfileDiv = styled.div`
  max-width: 900px;
  margin: 100px auto 200px auto;
`;

export const ProfileAvatarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AvatarDiv = styled.div`
  img {
    width: 92px;
    margin-right: 24px;
  }
  display: flex;
  align-items: center;
  margin-bottom: 44px;
`;

export const AvatarDesc = styled.div``;

export const BeautyButtonDiv = styled.div`
  width: 150px;
  font-size: 18px;
`;

export const AvatarTitle = styled.div`
  font-size: 40px;
`;

export const AvatarSubTitle = styled.div`
  font-size: 25px;
`;

export const ProfileInfoDiv = styled.div``;

export const DetailInfoGroup = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 28px;
  font-size: 18px;
`;

export const DetailInfo = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 13.9px;
  }
`;

export const ProfileImageDiv = styled.div`
  margin: 42px 0;
  img {
    width: 503px;
  }
`;

export const ProfileDesc = styled.div`
  font-size: 18px;
  margin-bottom: 24px;
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
`;

export const DayDiv = styled.div``;

export const TimeDiv = styled.div``;
