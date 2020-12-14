import React, { FC, useState, memo, useReducer } from "react";
import { BaseState } from "../../interfaces/continent";

interface HexProps {
  base_state: BaseState;
}

const check_for_hex_update = (base_state: BaseState) => true;

const Hex: FC<HexProps> = memo((props) => {
  return (
    <div>
      <span></span>
    </div>
  );
});
