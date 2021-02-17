import React, { FC } from "react";
import { BaseState } from "../../../../interfaces/continent";
import { Hex } from "./hex";

export interface HexArrayProps {
  base_states: Array<BaseState>;
}

export const HexArray: FC<HexArrayProps> = ({ base_states }) => {
  return (
    <div>
      {base_states.map((b) => (
        <Hex base_state={b} />
      ))}
    </div>
  );
};
