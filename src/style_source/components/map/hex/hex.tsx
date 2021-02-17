import React, { FC } from "react";
import { BaseState } from "../../../../interfaces/continent";

export interface HexProps {
  base_state: BaseState;
}

export const Hex: FC<HexProps> = ({ base_state }) => {
  return (
    <div>
      <span></span>
    </div>
  );
};
