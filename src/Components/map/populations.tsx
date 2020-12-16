import React, { FC } from "react";
import { Chart } from "react-google-charts";

interface PopulationPieChartProps {
  /**
   * The number of players per faction
   */
  populations: { nc: number; vs: number; tr: number };
}

const PopulationPieChart: FC<PopulationPieChartProps> = (props) => {
  const total_pop = Object.values(props.populations).reduce(
    (acc, item) => acc + item
  );
  const to_percentage = (pop: number): number => pop / total_pop;
  const population_percentages = {
    vs: (props.populations.vs / total_pop) * 100,
  };
  return (
    <div>
      <span></span>
    </div>
  );
};
