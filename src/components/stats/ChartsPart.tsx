import React from "react";
import { useTranslation } from "react-i18next";
import { PieChart } from "react-minimal-pie-chart";
import { LabelRenderProps } from "react-minimal-pie-chart/types/Label";
import { ChartDesc, ChartDescDiv, ChartDiv, ChartPartDiv } from "./StyledStats";

const ChartsPart = () => {
  const { t } = useTranslation();
  return (
    <ChartPartDiv>
      <ChartGenerator
        dt={[
          { title: t("stats.bosnian"), total: 14, value: 10, color: "#FC5F77" },
          {
            title: t("stats.foreigners"),
            total: 14,
            value: 4,
            color: "#FBA3B1",
          },
        ]}
      />
      <ChartGenerator
        dt={[
          { title: t("stats.android"), total: 12, value: 8, color: "#8CA4FF" },
          { title: t("stats.ios"), total: 12, value: 4, color: "#B1C1FF" },
        ]}
      />

      <ChartGenerator
        dt={[
          { title: "12-18", total: 12, value: 1, color: "#FF8B7F" },
          { title: "18-25", total: 12, value: 4, color: "#FCD161" },
          { title: "26-35", total: 12, value: 5, color: "#FBB700" },
          { title: "35+", total: 12, value: 2, color: "#FCA266" },
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
