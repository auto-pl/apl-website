import React, { FC, useState, useEffect } from "react";
import { ContinentDetails } from "../../interfaces/continent";
import { HexArray } from "./hex_array";
export const plscompile = {};

// TODO: map over the continent's bases and send the states to `Hex`
// TODO: add population ratio at the top right
// !FIX: currently, all hexes are viewed as in bounds

interface ContinentProps extends ContinentDetails {}

export const Continent: FC<ContinentProps> = (props: ContinentProps) => {
  // These are used to refresh the base states
  const [tick, set_tick] = useState(0);
  useEffect(() => {
    const interval_id = setInterval(() => () => set_tick(tick + 1), 20000);

    return () => clearInterval(interval_id); // this will get rid of the interval on unmount
  });

  return (
    <div>
      <HexArray base_states={props.base_states} />
    </div>
  );
};
