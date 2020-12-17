import React, { FC, CSSProperties } from "react";
import { Chart } from "react-google-charts";

interface PopulationProps {
  /**
   * The number of players per faction
   */
  populations: { nc: number; vs: number; tr: number };
}

interface PopulationPieChartProps extends PopulationProps {
  /**
   * Defaults to 150px
   */
  height?: number;
  /**
   * Defaults to 200px
   */
  width?: number;
}

export const PopulationPieChart: FC<PopulationPieChartProps> = (props) => {
  const total_pop = Object.values(props.populations).reduce(
    (acc, item) => acc + item
  );
  const percentages = Object.entries(props.populations).map(([name, pop]) => [
    name,
    ((pop / total_pop) * 100).toString().concat("%"),
  ]);

  const options = {
    title: "Faction populations",
  };
  return (
    <Chart
      chartType="PieChart"
      height={props.height || "150px"}
      width={props.width || "200px"}
      loader={<div>ben was here</div>}
      data={percentages}
      options={options}
    />
  );
};

export const EnemiesDetected: FC<PopulationProps> = (props) => {
  return (
    <div>
      <span>VS detected: {props.populations.vs}</span>
      <span>TR detected: {props.populations.tr}</span>
      <span>NC detected: {props.populations.nc}</span>
    </div>
  );
};

const population_report_style: CSSProperties = {
  border: "1px double cyan",
  height: "30%",
  width: "20%",
};

// Alias added to prevent confusion
type PopulationReportProps = PopulationPieChartProps;
export const PopulationReport: FC<PopulationReportProps> = (props) => {
  return (
    <div style={population_report_style}>
      <EnemiesDetected populations={props.populations} />
      <PopulationPieChart {...props} />
    </div>
  );
};
