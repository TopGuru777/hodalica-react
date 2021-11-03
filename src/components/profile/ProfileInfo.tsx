import React from "react";
import {
  DayDiv,
  DetailInfo,
  DetailInfoGroup,
  ProfileDesc,
  ProfileImageDiv,
  ProfileInfoDiv,
  SchduleGroup,
  ScheduleDiv,
  Schedules,
  TimeDiv,
} from "./StyledProfile";

import phoneSvg from "assets/svg/phone.svg";
import locationSvg from "assets/svg/location-pin.svg";
import clockSvg from "assets/svg/clock.svg";

type InfoData = {
  data: any;
};

const ProfileInfo = ({ data }: InfoData) => {
  return (
    <ProfileInfoDiv>
      <DetailInfoGroup>
        <DetailInfo>
          <img src={phoneSvg} alt="phone" />
          {data?.phone}
        </DetailInfo>
        <DetailInfo>
          <img src={locationSvg} alt="location" />
          {data?.location}
        </DetailInfo>
      </DetailInfoGroup>
      <ProfileImageDiv>
        <img src={data?.image} alt="profile" />
      </ProfileImageDiv>
      {data?.Bio.map((item: any, key: any) => (
        <ProfileDesc key={key}>{item}</ProfileDesc>
      ))}
      <ScheduleDiv>
        <img src={clockSvg} alt="clock svg" />
        <SchduleGroup>
          {data?.schedule.map((item: any, key: any) => (
            <Schedules key={key}>
              <DayDiv>{item.day}</DayDiv>
              <TimeDiv>{item.time}</TimeDiv>
            </Schedules>
          ))}
        </SchduleGroup>
      </ScheduleDiv>
    </ProfileInfoDiv>
  );
};

export default ProfileInfo;
