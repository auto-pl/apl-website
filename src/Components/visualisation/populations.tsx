import React, { FC, CSSProperties } from "react";
import { Chart } from "react-google-charts";
import { get_faction_colour } from "../../Utils/globals/faction_globals";
import { Population } from "../../interfaces/continent";

interface PopulationProps {
  /**
   * The number of players per faction
   */
  populations: Population;
}

interface PopulationPieChartProps extends PopulationProps {
  /**
   * Defaults to 180px
   */
  height?: string;
  /**
   * Defaults to 180px
   */
  width?: string;

  style?: CSSProperties;
}

export const PopulationPieChart: FC<PopulationPieChartProps> = (props) => {
  const rows: Array<[string, string | number]> = [
    ["Faction", "Number of players"] as [string, string],
  ].concat(Object.entries(props.populations));
  const options = {
    slices: {
      0: { color: get_faction_colour(rows[1][0]) },
      1: { color: get_faction_colour(rows[2][0]) },
      2: { color: get_faction_colour(rows[3][0]) },
    },
    chartArea: {
      backgroundColor: "blue",
    },
    pieSliceText: "percentage",
    legend: "none",
  };
  return (
    <div style={props.style}>
      <Chart
        chartType="PieChart"
        height={props.height || "180px"}
        width={props.width || "180px"}
        loader={<div>ben was here</div>}
        data={rows}
        options={options}
      />
    </div>
  );
};

export const EnemiesDetected: FC<PopulationProps> = (props) => {
  const p_style: CSSProperties = { margin: 0, color: "white" };

  return (
    <div>
      {Object.entries(props.populations).map(([name, pop], i) => (
        <p
          key={i}
          style={{
            ...p_style,
            backgroundColor: get_faction_colour(name),
          }}
        >
          {name} detected: {pop}
        </p>
      ))}
    </div>
  );
};

const population_report_style: CSSProperties = {
  height: "30%",
  width: "100%",
  textAlign: "center",
  verticalAlign: "middle",
  position: "relative",
};

// Alias added to prevent confusion
type PopulationReportProps = PopulationPieChartProps;
export const PopulationReport: FC<PopulationReportProps> = (props) => {
  return (
    <div style={population_report_style}>
      <EnemiesDetected populations={props.populations} />
      <PopulationPieChart {...props} style={{ bottom: 0, left: 0 }} />
    </div>
  );
};
