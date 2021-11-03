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
  return (
    <ReviewItemGroup>
      {data.map((item: any, key: any) => (
        <ReviewItemDiv key={key}>
          <ReviewAvatarDiv>
            <img src={item?.avatar} alt="avatar" />
            <ReviewShowDiv>
              <ReviewUserName>{item?.name}</ReviewUserName>
              <Reviews>{DrawReview(item?.review)}</Reviews>
            </ReviewShowDiv>
            <span>{item?.when}</span>
          </ReviewAvatarDiv>
          <ReviewDesc>{item?.desc}</ReviewDesc>
        </ReviewItemDiv>
      ))}
    </ReviewItemGroup>
  );
};

export default ReviewItems;
