import { ReviewSVG } from "components/custom/CustomSVG";
// import DatePickerGroup from "components/custom/DatePickerGroup/DatePickerGroup";
import ReviewItems from "components/reviews/ReviewItems";
import { ReviewsDiv } from "components/reviews/StyledReview";
import { Container, PageTitle } from "layouts/StyledLayout";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Footer from "layouts/footer";
import { getReviewData } from "action/action";
import Spinner from "components/custom/Spinner/Spinner";

const ReviewPage: React.FC = () => {
  const [reviewdata, setReviewData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await getReviewData("all");
      setLoading(false);
      setReviewData(res);
    };

    getData();
  }, []);

  // const handleSearch = async (date: any) => {
  //   setLoading(true);
  //   const res = await getReviewData(date);
  //   setLoading(false);
  //   setReviewData(res);
  // };

  const { t } = useTranslation();
  return (
    <React.Fragment>
      <Container>
        <ReviewsDiv>
          <PageTitle>
            <ReviewSVG />
            {reviewdata.length > 0 ? reviewdata.length : "No"}{" "}
            {t("review.title")}
          </PageTitle>

          {/* <DatePickerDiv>
            <DatePickerGroup handleSearch={handleSearch} />
          </DatePickerDiv> */}
          {loading ? <Spinner /> : <ReviewItems data={reviewdata} />}
        </ReviewsDiv>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default ReviewPage;
