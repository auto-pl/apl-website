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
   * Defaults to 200px
   */
  height?: string;
  /**
   * Defaults to 250px
   */
  width?: string;
}

export const PopulationPieChart: FC<PopulationPieChartProps> = (props) => {
  const rows: Array<[string, any]> = [
    ["Faction", "Number of players"] as [string, any],
  ].concat(Object.entries(props.populations));
  const options = {
    title: "Faction population",
    slices: {
      0: { color: get_faction_colour(rows[1][0], true) },
      1: { color: get_faction_colour(rows[2][0], true) },
      2: { color: get_faction_colour(rows[3][0], true) },
    },
  };
  return (
    <Chart
      chartType="PieChart"
      height={props.height || "200px"}
      width={props.width || "250px"}
      loader={<div>ben was here</div>}
      data={rows}
      options={options}
    />
  );
};

export const EnemiesDetected: FC<PopulationProps> = (props) => {
  const p_style: CSSProperties = { margin: 0, color: "white" };

  return (
    <div>
      {Object.entries(props.populations).map(([name, pop], i) => (
        <p
          key={i}
          style={{ ...p_style, backgroundColor: get_faction_colour(name) }}
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
  left: 0,
  right: 0,
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
