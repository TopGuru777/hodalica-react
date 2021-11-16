import { getStats } from "action/action";
import { StatsSVG } from "components/custom/CustomSVG";
import DatePickerGroup from "components/custom/DatePickerGroup/DatePickerGroup";
import Spinner from "components/custom/Spinner/Spinner";
import ChartsPart from "components/stats/ChartsPart";
import DealsPart from "components/stats/DealsPart";
import StatListPart from "components/stats/StatListPart";
// import StatsTotalPart from "components/stats/StatsTotalPart";
import { StatsPageDiv } from "components/stats/StyledStats";
import Footer from "layouts/footer";
import { Container, PageTitle } from "layouts/StyledLayout";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const StatsPage: React.FC = () => {
  const [statsData, setStatsData] = useState<any>([]);
  const [redeemedData, setRedeemedData] = useState<any>({});
  const [chartData, setChartData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [tempstatsData, setTempstatsData] = useState<any>({});

  const { t } = useTranslation();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      const res: any = await getStats();
      setTempstatsData(res);
      setStatsData(res.stats);

      setRedeemedData(res.redeemed);
      setChartData(res.charts);
      setLoading(false);
    };

    getData();
  }, []);

  const handleSearch = async (date: any) => {
    let startDate;
    let endDate;
    if (date.key === "range") {
      startDate = date.date[0];
      endDate = date.date[1];
    } else {
      const fromdate = new Date(date.date);
      fromdate.setDate(fromdate.getDate() - 1);
      fromdate.setHours(0);
      fromdate.setMinutes(0);
      fromdate.setSeconds(0);
      fromdate.setDate(fromdate.getDate() + 1);
      startDate = fromdate;
      endDate = new Date();
    }

    var temporyResults = [];
    let tempdata = tempstatsData.stats;

    for (let i = 0; i < tempdata.length; i++) {
      var tmpResult: any = {};
      tmpResult.deal = tempdata[i].deal;

      var used = tempdata[i].used;

      var usedTmps = [];

      for (var j = 0; j < used.length; j++) {
        if (
          new Date(used[j]?.attributes?.date) > new Date(startDate) &&
          new Date(used[j]?.attributes?.date) < new Date(endDate)
        ) {
          usedTmps.push(used[j]);
        }
      }
      tmpResult.used = usedTmps;
      temporyResults.push(tmpResult);
    }

    var totalDealRedeemed = 0;
    var clients = 0;
    var newclients = 0;
    var existingClients = 0;

    // Pi 1
    var bosnianId = 0;
    var nonBosnianId = 0;

    //Pi 2
    var iosUser = 0;
    var androidUser = 0;

    //Pi 3
    var age12_18 = 0;
    var age19_25 = 0;
    var age26_35 = 0;
    var age35_plus = 0;

    for (let i = 0; i < temporyResults.length; i++) {
      let used = temporyResults[i].used;

      for (let j = 0; j < used.length; j++) {
        const dealUsed = used[j];
        var user = dealUsed.attributes.user;

        //We will add the date range filter after, on dealUsed.get("date")

        totalDealRedeemed += 1;
        clients += 1;

        if (
          dealUsed.attributes.firstTime !== undefined &&
          dealUsed.attributes.firstTime === false
        ) {
          existingClients += 1;
        } else {
          newclients += 1;
        }

        if (
          user.attributes.bosnianId !== undefined &&
          user.attributes.bosnianId === false
        ) {
          nonBosnianId += 1;
        } else {
          bosnianId += 1;
        }

        if (
          user.attributes.model !== undefined &&
          user.attributes.model.includes("iPhone")
        ) {
          iosUser += 1;
        } else {
          androidUser += 1;
        }

        if (
          user.attributes.ageRange !== undefined &&
          user.attributes.ageRange === "12-18"
        ) {
          age12_18 += 1;
        } else if (
          user.attributes.ageRange !== undefined &&
          user.attributes.ageRange === "26-35"
        ) {
          age26_35 += 1;
        } else if (
          user.attributes.ageRange !== undefined &&
          user.attributes.ageRange === "35+"
        ) {
          age35_plus += 1;
        } else {
          age19_25 += 1;
        }
      }
    }

    var percentNewClients = (100 * newclients) / (newclients + existingClients);
    var percentExistingClients = 100 - percentNewClients;
    const resData = {
      redeemed: {
        total: totalDealRedeemed,
        clients: clients,
        newClients:
          (isNaN(percentNewClients) ? "0" : percentNewClients) +
          "% | " +
          newclients,
        existingClients:
          (isNaN(percentExistingClients) ? "0" : percentExistingClients) +
          "% | " +
          existingClients,
      },
      charts: {
        chart1: {
          bosnian: bosnianId,
          foreigner: nonBosnianId,
        },
        chart2: {
          ios: iosUser,
          android: androidUser,
        },
        chart3: {
          age12_18,
          age19_25,
          age26_35,
          age35_plus,
        },
      },
      stats: temporyResults,
    };

    setStatsData(resData.stats);

    setRedeemedData(resData.redeemed);
    setChartData(resData.charts);
  };

  return (
    <React.Fragment>
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
              {/* <HrDiv />
              <StatsTotalPart /> */}
            </React.Fragment>
          )}
        </StatsPageDiv>
      </Container>

      <Footer />
    </React.Fragment>
  );
};

export default StatsPage;
