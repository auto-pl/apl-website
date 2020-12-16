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

  const array_to_obj = (obj: object, [key, value]: [string, number]) => {
    obj[key] = value;
    return obj;
  };
  const population_percentages = Object.entries(props.populations)
    .map(([name, pop]) => [name, (pop / total_pop) * 100])
    .reduce(array_to_obj, {});

  return (
    <div>
      <span></span>
    </div>
  );
};
