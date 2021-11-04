import { ReviewSVG } from "components/custom/CustomSVG";
import DatePickerGroup from "components/custom/DatePickerGroup/DatePickerGroup";
import ReviewItems from "components/reviews/ReviewItems";
import { ReviewsDiv } from "components/reviews/StyledReview";
import { Container, DatePickerDiv, PageTitle } from "layouts/StyledLayout";
import React from "react";
import { useTranslation } from "react-i18next";

import avatar1 from "assets/avatar/7.png";
import avatar2 from "assets/avatar/8.png";
import avatar3 from "assets/avatar/9.png";
import Footer from "layouts/footer";

const reviewData = [
  {
    avatar: avatar1,
    name: "Aaron Smith",
    review: 4,
    when: "3d ago",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
  },
  {
    avatar: avatar2,
    name: "Helen Owen",
    review: 5,
    when: "13d ago",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. ✨",
  },
  {
    avatar: avatar3,
    name: "Simon Favre",
    review: 5,
    when: "2m ago",
    desc: "Sed ut perspiciatis unde omnis iste natus error 🐆",
  },
];

const ReviewPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <Container>
        <ReviewsDiv>
          <PageTitle>
            <ReviewSVG />
            {reviewData.length} {t("review.title")}
          </PageTitle>
          <DatePickerDiv>
            <DatePickerGroup />
          </DatePickerDiv>
          <ReviewItems data={reviewData} />
        </ReviewsDiv>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default ReviewPage;
