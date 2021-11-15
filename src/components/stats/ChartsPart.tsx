import React from "react";
import { useTranslation } from "react-i18next";
import { PieChart } from "react-minimal-pie-chart";
import { LabelRenderProps } from "react-minimal-pie-chart/types/Label";
import { ChartDesc, ChartDescDiv, ChartDiv, ChartPartDiv } from "./StyledStats";

const ChartsPart = ({ data }: any) => {
  const { t } = useTranslation();

  let chart1total = data?.chart1?.bosnian + data?.chart1?.foreigner;
  let chart2total = data?.chart2?.ios + data?.chart2?.android;
  let chart3total =
    data?.chart3?.age12_18 +
    data?.chart3?.age19_25 +
    data?.chart3?.age26_35 +
    data?.chart3?.age35_plus;

  return (
    <ChartPartDiv>
      <ChartGenerator
        dt={[
          {
            title: t("stats.bosnian"),
            total: chart1total,
            value: data?.chart1?.bosnian,
            color: "#FC5F77",
          },
          {
            title: t("stats.foreigners"),
            total: chart1total,
            value: data?.chart1?.foreigner,
            color: "#FBA3B1",
          },
        ]}
      />
      <ChartGenerator
        dt={[
          {
            title: t("stats.android"),
            total: chart2total,
            value: data?.chart2?.android,
            color: "#8CA4FF",
          },
          {
            title: t("stats.ios"),
            total: chart2total,
            value: data?.chart2?.ios,
            color: "#B1C1FF",
          },
        ]}
      />

      <ChartGenerator
        dt={[
          {
            title: "12-18",
            total: chart3total,
            value: data?.chart3?.age12_18,
            color: "#FF8B7F",
          },
          {
            title: "18-25",
            total: chart3total,
            value: data?.chart3?.age19_25,
            color: "#FCD161",
          },
          {
            title: "26-35",
            total: chart3total,
            value: data?.chart3?.age26_35,
            color: "#FBB700",
          },
          {
            title: "35+",
            total: chart3total,
            value: data?.chart3?.age35_plus,
            color: "#FCA266",
          },
        ]}
      />
    </ChartPartDiv>
  );
};

export default ChartsPart;

export const ChartGenerator = ({ dt }: any) => {
  let data = dt.map((item: any, key: any) => {
    return {
      title: item.title,
      key: key,
      value: (100 / item.total) * item.value,
      color: item.color,
      tooltip: item.title + "|" + item.value,
    };
  });
  return (
    <ChartDiv>
      <PieChart
        style={{ width: "198px", color: "white" }}
        lineWidth={65}
        totalValue={100}
        startAngle={0}
        data={data}
        labelPosition={75}
        label={(data: LabelRenderProps) =>
          parseInt(Math.round(data.dataEntry.value).toFixed()) + "%"
        }
        labelStyle={{ fontSize: "8px", fill: "white", fontWeight: 500 }}
      />
      <ChartDescDiv>
        {dt.map((item: any, key: any) => (
          <ChartDesc key={key} color={item.color}>
            <div />
            {item.title} | {item.value}
          </ChartDesc>
        ))}
      </ChartDescDiv>
    </ChartDiv>
  );
};
