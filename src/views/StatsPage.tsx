import { getStats } from "action/action";
import { StatsSVG } from "components/custom/CustomSVG";
import DatePickerGroup from "components/custom/DatePickerGroup/DatePickerGroup";
import Spinner from "components/custom/Spinner/Spinner";
import ChartsPart from "components/stats/ChartsPart";
import DealsPart from "components/stats/DealsPart";
import StatListPart from "components/stats/StatListPart";
import { HrDiv, StatsPageDiv } from "components/stats/StyledStats";
import Footer from "layouts/footer";
import { Container, PageTitle } from "layouts/StyledLayout";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const StatsPage: React.FC = () => {
  const [statsData, setStatsData] = useState<any>([]);
  const [redeemedData, setRedeemedData] = useState<any>({});
  const [chartData, setChartData] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      const res: any = await getStats();
      setStatsData(res.stats);
      setRedeemedData(res.redeemed);
      setChartData(res.charts);
      setLoading(false);
    };

    getData();
  }, []);

  const handleSearch = async (date: any) => {
    // setLoading(true);
    // const res = await getReviewData(date);
    // setLoading(false);
    // setReviewData(res);
  };

  return (
    <React.Fragment>
<<<<<<< HEAD
      <StatsPageDiv>
        <PageTitle>
          <StatsSVG />
          {t("stats.title")}
        </PageTitle>
        <DatePickerGroup />
        <DealsPart />
        <ChartsPart />
        <StatListPart />
        {/* <HrDiv />
          <StatsTotalPart /> */}
      </StatsPageDiv>
=======
      <Container>
        <StatsPageDiv>
          <PageTitle>
            <StatsSVG />
            {t("stats.title")}
          </PageTitle>
          <DatePickerGroup handleSearch={handleSearch} />
          {loading ? (
            <Spinner />
          ) : (
            <React.Fragment>
              <DealsPart data={redeemedData} />
              <ChartsPart data={chartData} />
              <StatListPart data={statsData} />
              <HrDiv />
              <StatsTotalPart />
            </React.Fragment>
          )}
        </StatsPageDiv>
      </Container>
>>>>>>> 4f26fb81f423088e601f4c9f76dcc09291bb782b
      <Footer />
    </React.Fragment>
  );
};

export default StatsPage;
