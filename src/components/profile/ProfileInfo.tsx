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

const dayofweek = [
  "Sunday",
  "Monnday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

type InfoData = {
  data: any;
};

const ProfileInfo = ({ data }: InfoData) => {
  return (
    <ProfileInfoDiv>
      <DetailInfoGroup>
        {data?.phone !== undefined && (
          <DetailInfo>
            <img src={phoneSvg} alt="phone" />
            {data?.phone}
          </DetailInfo>
        )}
        <a
          href={"https://www.google.com/maps/place/" + data?.address}
          rel="noreferrer"
          target="_blank"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <DetailInfo>
            <img src={locationSvg} alt="location" />
            {data?.address}
          </DetailInfo>{" "}
        </a>
      </DetailInfoGroup>
      <ProfileImageDiv>
        <img src={data?.cover._url} alt="profile" />
      </ProfileImageDiv>
      <ProfileDesc>
        {localStorage.getItem("i18nextLng") === "en" ||
        localStorage.getItem("i18nextLng") === "en-US"
          ? data?.description
          : data?.descriptionBS}
      </ProfileDesc>
      <ScheduleDiv>
        <img src={clockSvg} alt="clock svg" />
        <SchduleGroup>
          {data?.openingHours.map((item: any, key: any) => (
            <Schedules key={key}>
              <DayDiv>{dayofweek[key]}</DayDiv>
              <TimeDiv>{item[0] + ":00 - " + item[1] + ":00"}</TimeDiv>
            </Schedules>
          ))}
        </SchduleGroup>
      </ScheduleDiv>
    </ProfileInfoDiv>
  );
};

export default ProfileInfo;
