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

import avatar1 from "assets/avatar/1.png";
import avatar2 from "assets/avatar/2.png";
import avatar3 from "assets/avatar/3.png";
import avatar4 from "assets/avatar/4.png";
import avatar5 from "assets/avatar/5.png";
import avatar6 from "assets/avatar/6.png";
import avatar7 from "assets/avatar/7.png";
import { useState } from "react";

const listData = [
  {
    title: (
      <>
        <span>2</span> For
      </>
    ),
    subtitle: "Full body massage",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscings elit, sed do eiusmod tempor incididunt.",
    people: [
      { img: avatar1, name: "Polina Laurens", when: "Oct 18, 18:58" },
      { img: avatar2, name: "Simon Favre", when: "Oct 18, 11:34" },
      { img: avatar3, name: "Klem Santa", when: "Oct 18, 10:20" },
      { img: avatar4, name: "Laure Thomas", when: "Oct 18, 09:39" },
      { img: avatar5, name: "Clara Laurens", when: "Oct 18, 08:45" },
      { img: avatar6, name: "Polina Laurens", when: "Oct 18, 18:58" },
      { img: avatar7, name: "Klem Santa", when: "Oct 18, 09:39" },
    ],
  },
  {
    title: (
      <>
        <span>2</span> For
      </>
    ),
    subtitle: "Haircut, re-style & blow-dry",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscings elit, sed do eiusmod tempor incididunt. Dolorem ipsum quia dolor sit amet",
    people: [
      { img: avatar1, name: "Polina Laurens", when: "Oct 18, 18:58" },
      { img: avatar2, name: "Simon Favre", when: "Oct 18, 11:34" },
      { img: avatar3, name: "Klem Santa", when: "Oct 18, 10:20" },
      { img: avatar4, name: "Laure Thomas", when: "Oct 18, 09:39" },
      { img: avatar5, name: "Clara Laurens", when: "Oct 18, 08:45" },
    ],
  },
  {
    title: (
      <>
        <span>30</span>% discount
      </>
    ),
    subtitle: "Haircut, re-style & blow-dry",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscings elit, sed do eiusmod tempor incididunt. Dolorem ipsum quia dolor sit amet",
    people: [
      { img: avatar1, name: "Polina Laurens", when: "Oct 18, 18:58" },
      { img: avatar2, name: "Simon Favre", when: "Oct 18, 11:34" },
      { img: avatar3, name: "Klem Santa", when: "Oct 18, 10:20" },
      { img: avatar4, name: "Laure Thomas", when: "Oct 18, 09:39" },
    ],
  },
];

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
                    src={item1.attributes.user.attributes.profilePicture._url}
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
