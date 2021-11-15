import {
  ListContentDiv,
  ListCount,
  ListDescDiv,
  ListSubTitle,
  ListTitle,
  PeopleDate,
  PeopleDiv,
  PeopleInfo,
  PeopleInfoDiv,
  PeopleName,
  StatListDiv,
  StatListItem,
  StatListPartDiv,
} from "./StyledStats";

import plusSvg from "assets/svg/plusBtn.svg";
import minusSvg from "assets/svg/minusBtn.svg";

import { useState } from "react";

import noUserImg from "assets/avatar/no-user.png";

const StatListPart = ({ data }: any) => {
  const [collapsed, setCollapsed] = useState(-1);

  return (
    <StatListPartDiv>
      {data.map((item: any, key: any) => (
        <StatListDiv key={key}>
          <StatListItem>
            <ListDescDiv>
              <ListTitle>
                <span>
                  {localStorage.getItem("i18nextLng") === "en" ||
                  localStorage.getItem("i18nextLng") === "en-US"
                    ? item?.deal?.name
                    : item?.deal?.nameBS}
                </span>
              </ListTitle>
              <ListSubTitle>
                {localStorage.getItem("i18nextLng") === "en" ||
                localStorage.getItem("i18nextLng") === "en-US"
                  ? item?.deal?.subName
                  : item?.deal?.subNameBS}
              </ListSubTitle>
              <ListContentDiv>
                {item?.used?.length > 0 &&
                  (collapsed === key ? (
                    <img
                      src={minusSvg}
                      alt="plus btn"
                      onClick={() => setCollapsed(-1)}
                    />
                  ) : (
                    <img
                      src={plusSvg}
                      alt="minus btn"
                      onClick={() => setCollapsed(key)}
                    />
                  ))}
                {localStorage.getItem("i18nextLng") === "en" ||
                localStorage.getItem("i18nextLng") === "en-US"
                  ? item?.deal?.description
                  : item?.deal?.descriptionBS}
              </ListContentDiv>
            </ListDescDiv>
            <ListCount>{item?.used?.length}</ListCount>
          </StatListItem>
          {key === collapsed && (
            <PeopleDiv>
              {item?.used?.map((item1: any, key1: any) => (
                <PeopleInfoDiv key={key1}>
                  <img
                    src={
                      item1.attributes.user.attributes.profilePicture ===
                      undefined
                        ? noUserImg
                        : item1.attributes.user.attributes.profilePicture._url
                    }
                    alt={"people" + key1}
                  />
                  <PeopleInfo>
                    <PeopleName>
                      {item1.attributes.user.attributes.firstName +
                        " " +
                        item1.attributes.user.attributes.lastName}
                    </PeopleName>
                    <PeopleDate>
                      {new Intl.DateTimeFormat("en-US", {
                        dateStyle: "medium",
                        timeStyle: "short",
                        hour12: false,
                      }).format(item1.attributes.date)}
                    </PeopleDate>
                  </PeopleInfo>
                </PeopleInfoDiv>
              ))}
            </PeopleDiv>
          )}
        </StatListDiv>
      ))}
    </StatListPartDiv>
  );
};

export default StatListPart;
