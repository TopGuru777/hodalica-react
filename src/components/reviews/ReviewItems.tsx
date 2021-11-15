import { ReviewSVG } from "components/custom/CustomSVG";
import React from "react";
import {
  ReviewAvatarDiv,
  ReviewDesc,
  ReviewItemDiv,
  ReviewItemGroup,
  Reviews,
  ReviewShowDiv,
  ReviewUserName,
} from "./StyledReview";

type ReviewData = {
  data: any;
};

const ReviewItems = ({ data }: ReviewData) => {
  const DrawReview = (i: any) => {
    let t;
    const data = [];
    for (t = 0; t < i; t++) {
      data.push(<ReviewSVG key={t} />);
    }
    return data;
  };

  const getNumberofDays = (date: any) => {
    const calcday = datediff(date, new Date());
    if (calcday <= 0) {
      return "today";
    } else if (calcday === 1) {
      return "yesterday";
    } else if (calcday > 1) {
      if (calcday >= 30) {
        const calcmonth = monthDiff(date, new Date());
        if (calcday > 12) {
          const calcyear =
            new Date().getFullYear() - new Date(date).getFullYear();
          return calcyear + "y ago";
        }
        return calcmonth + "m ago";
      }
      return calcday + "d ago";
    }
  };

  const monthDiff = (d1: any, d2: any) => {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  };

  const datediff = (first: any, second: any) => {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
  };

  return (
    <ReviewItemGroup>
      {data.map((item: any, key: any) => (
        <ReviewItemDiv key={key}>
          <ReviewAvatarDiv>
            <img
              src={item?.attributes.user?.attributes.profilePicture._url}
              alt="avatar"
            />
            <ReviewShowDiv>
              <ReviewUserName>
                {item?.attributes.user?.attributes.firstName +
                  item?.attributes.user?.attributes.lastName}
                <span>{getNumberofDays(item?.attributes.createdAt)}</span>
              </ReviewUserName>
              <Reviews>{DrawReview(item?.attributes.rating)}</Reviews>
            </ReviewShowDiv>
          </ReviewAvatarDiv>
          <ReviewDesc>{item?.attributes.description}</ReviewDesc>
        </ReviewItemDiv>
      ))}
    </ReviewItemGroup>
  );
};

export default ReviewItems;
