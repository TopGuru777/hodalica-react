import { ReviewSVG } from "components/custom/CustomSVG";
// import DatePickerGroup from "components/custom/DatePickerGroup/DatePickerGroup";
import ReviewItems from "components/reviews/ReviewItems";
import { ReviewsDiv } from "components/reviews/StyledReview";
import { Container, PageTitle } from "layouts/StyledLayout";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Footer from "layouts/footer";
import { getReviewData } from "action/action";
import Spinner from "components/custom/Spinner/Spinner";
import ReviewContext from "context/review";

const ReviewPage: React.FC = () => {
  const [reviewdata, setReviewData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { reviewContext, setReviewContext } = useContext<any>(ReviewContext);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await getReviewData("all");
      setReviewContext(res);
      setLoading(false);
      setReviewData(res);
    };

    if (reviewContext) setReviewData(reviewContext);
    else getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <PageTitle style={{ marginBottom: 0 }}>
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
