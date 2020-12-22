import React, { CSSProperties, FC } from "react";
import { Hex } from "./hex/hex";
import { BaseState } from "../../interfaces/continent";

interface HexArrayProps {
  base_states: Array<BaseState>;
}

const div_style: CSSProperties = {
  display: "inline-block",
};

export const HexArray: FC<HexArrayProps> = (props) => {
  return (
    <table style={div_style}>
      {props.base_states.map((base, i) => (
        <tr>
          <td>
            <Hex key={i} out_of_bounds={false} base_state={base} />
          </td>
        </tr>
      ))}
    </table>
  );
};
