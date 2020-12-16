import React, { memo, useReducer, Reducer } from "react";
import { BaseState } from "../../interfaces/continent";
import { HoverMenu } from "./hover_menu";
import { HexImg } from "./hex_img";

interface HexProps {
  base_state: BaseState;
  /**
   * The id of the base SVG
   */
  base_id: string;
}

interface HexState {
  base_state: BaseState;
  hovered: boolean;
}

export enum ACTION_TYPES {
  hovered = "hovered",
  clicked = "clicked",
  priority_changed = "priority_changed",
}

const reducer: Reducer<HexState, string> = (state, action): HexState => {
  switch (action) {
    case ACTION_TYPES.hovered:
      return { ...state, hovered: !state.hovered };
    case ACTION_TYPES.clicked:
      return state;
    case ACTION_TYPES.priority_changed:
      return state;
    default:
      throw new Error(
        "Invalid action. See src/Components/map/hex.ACTION_TYPES for the valid types."
      );
  }
};

/**
 * This function is for preventing the hex from rerendering until it flips ownership.
 * @param prev_props The old props
 * @param new_props The new props
 */
const check_for_hex_update = (prev_props: HexProps, new_props: HexProps) => {
  return new_props.base_state.captured_by !== prev_props.base_state.captured_by;
};

export const Hex = memo<HexProps>((props) => {
  const [state, dispatch] = useReducer(reducer, {
    hovered: true,
    base_state: props.base_state,
  });

  return (
    <div onMouseOver={() => dispatch(ACTION_TYPES.hovered)}>
      <div
        id={`Hex_continent=${props.base_state.continent_id}_id=${props.base_id}`}
      ></div>
      <HexImg id={props.base_id} />
    </div>
  );
}, check_for_hex_update);
